// /src/app/components/AutoGallery/index.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './index.css';

interface AutoGalleryProps {
  images: string[];     // Array of image URLs/references
  rows: number;         // Number of rows in the grid
  speed?: number;       // Optional: Animation speed in pixels per second (default: 50)
  scale?: number;       // Optional: Scale factor for images (default: 1)
  gap?: number;         // Optional: Gap between images in pixels (default: 8)
}

const AutoGallery: React.FunctionComponent<AutoGalleryProps> = ({ 
  images, 
  rows,
  speed = 50,
  scale = 1,
  gap = 8
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [columnWidth, setColumnWidth] = useState(0);
  const [columns, setColumns] = useState<string[][]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Validate that images count is divisible by rows
  useEffect(() => {
    if (images.length % rows !== 0) {
      console.error('AutoGallery: Number of images must be divisible by the number of rows');
      return;
    }
    
    // Organize images into columns (each column has 'rows' number of images)
    const columnsCount = images.length / rows;
    const organizedColumns: string[][] = [];
    
    for (let col = 0; col < columnsCount; col++) {
      const columnImages: string[] = [];
      for (let row = 0; row < rows; row++) {
        columnImages.push(images[col + row * columnsCount]);
      }
      organizedColumns.push(columnImages);
    }
    
    setColumns(organizedColumns);
  }, [images, rows]);

  // Calculate dimensions on mount and window resize with a slight delay to ensure DOM is ready
  useEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;
      
      const windowWidth = window.innerWidth;
      // Image size is calculated based on container height divided by rows
      const containerHeight = containerRef.current.clientHeight;
      
      // Check if we have a valid container height
      if (containerHeight <= 0) {
        // Try again after a short delay if container height is not ready
        setTimeout(calculateDimensions, 100);
        return;
      }
      
      const imageSize = (containerHeight / rows) * scale;
      
      setColumnWidth(imageSize + gap);
      setContainerWidth(windowWidth + imageSize * 2);
      setIsInitialized(true);
    };

    // Initial calculation with a slight delay to ensure DOM is rendered
    const initialTimer = setTimeout(calculateDimensions, 50);
    
    // Also handle window resizes
    window.addEventListener('resize', calculateDimensions);
    
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('resize', calculateDimensions);
    };
  }, [rows, scale, gap]);

  // Animation effect - only start once dimensions are calculated
  useEffect(() => {
    if (!isInitialized || !columnWidth || columns.length === 0) return;
    
    const animate = () => {
      setPosition(prevPosition => {
        // Move position to the left
        let newPosition = prevPosition - 1;
        
        // If a column is completely off screen to the left, 
        // wrap it around to the right side
        if (newPosition <= -columnWidth) {
          newPosition = 0;
        }
        
        return newPosition;
      });
    };
    
    // Set up animation interval based on speed
    const frameRate = 60; // fps
    const interval = setInterval(animate, 1000 / frameRate);
    
    return () => clearInterval(interval);
  }, [columns, columnWidth, speed, isInitialized]);

  // If not ready to render or invalid input, return placeholder
  if (columns.length === 0 || images.length % rows !== 0) {
    return <div className="auto-gallery-container">Loading gallery...</div>;
  }

  return (
    <div className="auto-gallery-container" ref={containerRef}>
      <div 
        className="auto-gallery-track" 
        style={{ 
          transform: `translateX(${position}px)`,
          width: `${columns.length * columnWidth * 2}px` // Double the columns for continuous effect
        }}
      >
        {/* Render columns twice for seamless looping */}
        {[...columns, ...columns].map((column, colIndex) => (
          <div 
            className="auto-gallery-column" 
            key={colIndex} 
            style={{ width: `${columnWidth - gap}px`, marginRight: `${gap}px` }}
          >
            {column.map((image, imgIndex) => (
              <div 
                className="auto-gallery-image-container"
                key={imgIndex}
                style={{ 
                  paddingBottom: `${gap}px`,
                  height: `calc((100% - ${(rows-1) * gap}px) / ${rows})` 
                }}
              >
                <Image 
                  src={image} 
                  alt={`Gallery image ${colIndex * rows + imgIndex}`}
                  className="auto-gallery-image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={colIndex === 0 && imgIndex === 0}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoGallery;