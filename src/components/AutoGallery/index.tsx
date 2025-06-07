// /src/app/components/AutoGallery/index.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './index.css';

interface AutoGalleryProps {
  images: string[];      // Array of image URLs/references
  captions: string[];    // Captions in order for each image
  rows: number;          // Default number of rows for large screens
  inspect?: boolean;   // Determines whether to show image description tooltip
  smallBreakpoint?: {    // First breakpoint (switch to 2 rows)
    ratio: number;      // Width to height ratio
    rows: number;        // Number of rows (typically 2)
  };
  xSmallBreakpoint?: {   // Second breakpoint (switch to 1 row)
    ratio: number;      // Width to height ratio
    rows: number;        // Number of rows (typically 1)
  };
  speed?: number;        // Animation speed in pixels per second
  scale?: number;        // Scale factor for images
  gap?: number;          // Gap between images in pixels
}

const AutoGallery: React.FunctionComponent<AutoGalleryProps> = ({ 
  images, 
  captions,
  rows,
  inspect,
  smallBreakpoint = { ratio: 3, rows: 2 },
  xSmallBreakpoint = { ratio: 7, rows: 1 },
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
  const [effectiveRows, setEffectiveRows] = useState(rows);
  const [hoveredImage, setHoveredImage] = useState<{col: number, row: number} | null>(null);

  // Determine effective row count based on screen height and breakpoints
  const updateEffectiveRows = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    
    if (screenWidth / screenHeight >= xSmallBreakpoint.ratio) {
      return xSmallBreakpoint.rows;
    } else if (screenWidth / screenHeight >= smallBreakpoint.ratio) {
      return smallBreakpoint.rows;
    } else {
      return rows;
    }
  };

  // Organize images into columns based on the current row count
  useEffect(() => {
    // First update effective rows based on current screen size
    const newEffectiveRows = updateEffectiveRows();
    setEffectiveRows(newEffectiveRows);
    
    // Then organize images based on that row count
    if (images.length % newEffectiveRows !== 0) {
      console.error(`AutoGallery: Number of images (${images.length}) must be divisible by the effective row count (${newEffectiveRows})`);
      return;
    }
    
    // Organize images into columns (each column has 'effectiveRows' number of images)
    const columnsCount = images.length / newEffectiveRows;
    const organizedColumns: string[][] = [];
    
    for (let col = 0; col < columnsCount; col++) {
      const columnImages: string[] = [];
      for (let row = 0; row < newEffectiveRows; row++) {
        columnImages.push(images[col + row * columnsCount]);
      }
      organizedColumns.push(columnImages);
    }
    
    setColumns(organizedColumns);
  }, [images, rows, effectiveRows, smallBreakpoint, xSmallBreakpoint]);

  // Calculate dimensions on mount and window resize
  useEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;
      
      // First check if we need to update the row count based on screen height
      const newEffectiveRows = updateEffectiveRows();
      if (newEffectiveRows !== effectiveRows) {
        setEffectiveRows(newEffectiveRows);
        return; // This will trigger the previous useEffect to reorganize columns
      }
      
      const windowWidth = window.innerWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      // Check if we have a valid container height
      if (containerHeight <= 0) {
        setTimeout(calculateDimensions, 100);
        return;
      }
      
      const imageSize = (containerHeight / effectiveRows) * scale;
      
      setColumnWidth(imageSize + gap);
      setContainerWidth(windowWidth + imageSize * 2);
      setIsInitialized(true);
    };

    // Initial calculation with a delay to ensure DOM is rendered
    const initialTimer = setTimeout(calculateDimensions, 50);
    
    // Also handle window resizes
    window.addEventListener('resize', calculateDimensions);
    
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('resize', calculateDimensions);
    };
  }, [effectiveRows, scale, gap, smallBreakpoint, xSmallBreakpoint]);

  // Animation effect - only start once dimensions are calculated
  useEffect(() => {
    if (!isInitialized || !columnWidth || columns.length === 0) return;
    
    // Only animate when not in inspect mode
    if (inspect) return;
    
    const animate = () => {
      setPosition(prevPosition => {
        // Move position to the left
        let newPosition = prevPosition - (speed / 60);
        
        // Reset position when first set of columns is completely off screen
        const resetPoint = -(columnWidth * columns.length);
        if (newPosition <= resetPoint) {
          newPosition = 0;
        }
        
        return newPosition;
      });
    };
    
    const frameRate = 60;
    const interval = setInterval(animate, 1000 / frameRate);
    
    return () => clearInterval(interval);
  }, [columns, columnWidth, speed, isInitialized, inspect]);

  // If not ready to render or invalid input, return placeholder
  if (columns.length === 0 || images.length % effectiveRows !== 0) {
    return <div className="auto-gallery-container">Loading gallery...</div>;
  }

  return (
    <div className="auto-gallery-container" ref={containerRef}>
      <div 
        className="auto-gallery-track" 
        style={{ 
          transform: `translateX(${position}px)`,
          width: `${columns.length * columnWidth * 2}px`
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
                className={`auto-gallery-image-container ${inspect && 'inspect'}`}
                key={imgIndex}
                style={{ 
                  paddingBottom: `${gap}px`,
                  height: `calc((100% - ${(effectiveRows-1) * gap}px) / ${effectiveRows})` 
                }}
                onMouseEnter={() => inspect && setHoveredImage({col: colIndex, row: imgIndex})}
                onMouseLeave={() => inspect && setHoveredImage(null)}
              >
                <Image 
                  src={image} 
                  alt={`Gallery image ${colIndex * effectiveRows + imgIndex}`}
                  className="auto-gallery-image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={colIndex === 0 && imgIndex === 0}
                  draggable="false"
                />
                {inspect && hoveredImage && 
                  hoveredImage.col === colIndex && 
                  hoveredImage.row === imgIndex && (
                  <div className={`image-tooltip ${colIndex * columnWidth + position < 0 ? 'off-left' : ''} ${colIndex * columnWidth + position > window.innerWidth ? 'off-right' : ''}`}>
                    {captions[(colIndex * effectiveRows + imgIndex) % (columns.length * effectiveRows)] || "No caption available"}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoGallery;