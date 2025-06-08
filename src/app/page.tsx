'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import './index.css';
import AutoGallery from "@/components/AutoGallery";
import imageCaptions from "@/utils/captions";

export default function Gallery() {
  let images: string[] = [];

  const router = useRouter();

  for (let i = 1; i <= 30; i++) {
    images.push(`/assets/gallery/${i}.jpeg`);
  }

  const handleOverlayClick = () => {
    router.push('/home');
  };

  return (
    <div className="page-container">
      <div className="gallery-container">
        <AutoGallery 
          images={images}
          captions={imageCaptions}
          rows={3}
          inspect={true}
          smallBreakpoint={{ ratio: 3, rows: 2 }}
          xSmallBreakpoint={{ ratio: 7, rows: 1 }}
          speed={55}
          scale={1}
          gap={2}
        />
        <div className="overlay-text" onClick={handleOverlayClick}>
          <h1>Ryan Fernandes</h1>
          <span className="typewriter">
            <p>Who is this guy? →</p>
          </span>
        </div>
      </div>
    </div>
  );
}
