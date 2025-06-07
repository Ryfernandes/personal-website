'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import './index.css';
import AutoGallery from "@/components/AutoGallery";
import imageCaptions from "@/utils/captions";

export default function Gallery() {
  let images: string[] = [];

  const [inspect, setInspect] = useState(false);

  const router = useRouter();

  for (let i = 1; i <= 30; i++) {
    images.push(`/assets/gallery/${i}.jpeg`);
  }

  const handleInspectClick = () => {
    if (inspect) {
      setInspect(false);
    } else {
      setInspect(true);
    }
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
          inspect={inspect}
          smallBreakpoint={{ ratio: 3, rows: 2 }}
          xSmallBreakpoint={{ ratio: 7, rows: 1 }}
          speed={inspect ? 0 : 55}
          scale={1}
          gap={0}
        />
        <div className="overlay-text" onClick={handleOverlayClick}>
          <h1>Ryan Fernandes</h1>
          <div className="overlay-subtitle">
            <p className="underlined">Click here and be amazed</p>
            <p>→</p>
          </div>
        </div>
        <div className="details-button" onClick={handleInspectClick}>
          {inspect ? (
            <svg 
              width="2.4rem" 
              height="2.4rem" 
              viewBox="0 0 16 16" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "white" }}
            >
              <polygon points="5,2 13,8 5,14" />
            </svg>
          ) : (
            "?"
          )}
        </div>
      </div>
    </div>
  );
}
