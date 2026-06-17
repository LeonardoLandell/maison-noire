"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / height) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{
          height: `${progress}%`,
        }}
      />
    </div>
  );
}
