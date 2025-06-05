import './index.css';

import AutoGallery from "@/components/AutoGallery";

export default function Home() {
  const images = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    .map(val => "/assets/RyanFernandes.jpeg")

  return (
    <div className="page-container">
      <div className="gallery-container">
        <AutoGallery 
          images={images}
          rows={3}
          speed={40}
          scale={1.2}
          gap={0}
        />
        <div className="overlay-text">
          <h1>Ryan Fernandes</h1>
          <p>Welcome to my terrible website</p>
        </div>
      </div>
      
      <p>(obviously) a recent work in progress</p>
    </div>
  );
}
