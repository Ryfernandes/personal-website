"use client";

import { useState, useEffect } from "react";

export default function CornerBuddy() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed right-4 z-40 cursor-pointer transition-transform duration-700 ease-out"
      style={{
        bottom: "-20px",
        transform: visible ? "translateX(0)" : "translateX(calc(100% + 16px))",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? "/screen-corner-buddy-smiling.png" : "/screen-corner-buddy.png"}
        alt="RyanHub moose mascot"
        width={120}
        height={120}
        className="block"
      />
    </div>
  );
}
