"use client";

import { useState, useEffect } from "react";

export default function CornerBuddy() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

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
      onClick={() => {
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 2000);
      }}
    >
      {showBubble && <div className="absolute bottom-full right-full mb-[-32px] mr-[-8px] whitespace-nowrap rounded-lg rounded-br-none bg-white px-3 py-1.5 text-sm font-medium text-gh-fg shadow-lg ring-1 ring-gh-border">
        Welcome to RyanHub!
      </div>}
      <img
        src={hovered || showBubble ? "/screen-corner-buddy-smiling.png" : "/screen-corner-buddy.png"}
        alt="RyanHub moose mascot"
        width={120}
        height={120}
        className="block"
      />
    </div>
  );
}
