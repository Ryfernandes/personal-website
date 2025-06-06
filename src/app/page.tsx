import './index.css';

import AutoGallery from "@/components/AutoGallery";

export default function Home() {
  let images: string[] = [];

  for (let i = 1; i <= 30; i++) {
    images.push(`/assets/gallery/${i}.jpeg`);
  }

  return (
    <div className="page-container">
      <div className="gallery-container">
        <AutoGallery 
          images={images}
          rows={3}
          speed={55}
          scale={1}
          gap={0}
        />
        <div className="overlay-text">
          <h1>Ryan Fernandes</h1>
          <p>Welcome to my terrible website</p>
        </div>
      </div>
      
      <p>((less) obviously) a recent work in progress</p>
    </div>
  );
}
