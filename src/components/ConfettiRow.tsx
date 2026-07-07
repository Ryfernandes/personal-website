"use client";

import confetti from "canvas-confetti";
import { FileIcon } from "@primer/octicons-react";

export default function ConfettiRow({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  function fire() {
    const defaults = {
      origin: { y: 1 },
      colors: ["#0d1b2a", "#1b2838", "#ffffff", "#e0e0e0"],
    };
    confetti({ ...defaults, particleCount: 80, spread: 100, startVelocity: 55 });
    confetti({ ...defaults, particleCount: 60, spread: 120, startVelocity: 45, decay: 0.92 });
    confetti({ ...defaults, particleCount: 40, spread: 80, startVelocity: 65 });
  }

  return (
    <div className="group flex items-center border-t border-gh-border-muted px-4 py-[10px] hover:bg-gh-canvas-subtle">
      <div className="flex w-[180px] shrink-0 items-center gap-2 pr-2">
        <FileIcon size={16} className="shrink-0 text-gh-file-icon" />
        <button
          type="button"
          onClick={fire}
          className="truncate text-sm font-medium text-gh-fg hover:text-gh-fg-accent hover:underline cursor-pointer bg-transparent border-none p-0"
        >
          confetti.exe
        </button>
      </div>
      <div className="min-w-0 flex-1 overflow-hidden pr-4">
        <button
          type="button"
          onClick={fire}
          className="block truncate text-sm text-gh-fg-muted hover:text-gh-fg-accent hover:underline cursor-pointer bg-transparent border-none p-0"
        >
          {message}
        </button>
      </div>
      <div className="shrink-0 whitespace-nowrap text-right text-sm text-gh-fg-muted">
        {date}
      </div>
    </div>
  );
}
