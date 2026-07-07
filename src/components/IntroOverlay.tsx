"use client";

import { useState, useEffect } from "react";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeTimer = setTimeout(() => setPhase("fading"), 800);
    const removeTimer = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gh-canvas-subtle/90 transition-opacity duration-1000 ease-out"
      style={{ opacity: phase === "fading" ? 0 : 1 }}
    >
      <div className="flex items-center gap-4">
        <img
          src="/moose_silhouette_logo.svg"
          alt=""
          width={96}
          height={96}
          fetchPriority="high"
        />
        <span className="text-5xl font-semibold tracking-tight text-gh-fg">
          RyanHub
        </span>
      </div>
    </div>
  );
}
