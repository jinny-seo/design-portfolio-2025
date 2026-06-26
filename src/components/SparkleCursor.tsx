"use client";

import { useEffect, useRef, useState } from "react";

// Soft y2k holographic palette (matches the animated background)
const SPARKLE_COLORS = ["#b9f5ea", "#a9c6f5", "#c9a9f2", "#f6b1e0", "#ffffff"];

/**
 * Desktop-only custom cursor: a gradient orb that follows the pointer,
 * leaving a trail of little sparkles. Disabled on touch + reduced-motion.
 */
export default function SparkleCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    setActive(true);
    document.documentElement.classList.add("sparkle-cursor-active");

    let lastSpawn = 0;

    const spawnSparkle = (x: number, y: number) => {
      const s = document.createElement("div");
      s.className = "sparkle";
      const size = 6 + Math.random() * 10;
      s.style.left = `${x + (Math.random() - 0.5) * 14}px`;
      s.style.top = `${y + (Math.random() - 0.5) * 14}px`;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.color = SPARKLE_COLORS[(Math.random() * SPARKLE_COLORS.length) | 0];
      s.style.setProperty("--dx", `${(Math.random() - 0.5) * 36}px`);
      s.style.setProperty("--dy", `${18 + Math.random() * 30}px`);
      document.body.appendChild(s);
      window.setTimeout(() => s.remove(), 850);
    };

    const onMove = (e: MouseEvent) => {
      const orb = orbRef.current;
      if (orb) {
        orb.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const now = performance.now();
      if (now - lastSpawn > 18) {
        lastSpawn = now;
        spawnSparkle(e.clientX, e.clientY);
        spawnSparkle(e.clientX, e.clientY);
        spawnSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("sparkle-cursor-active");
    };
  }, []);

  if (!active) return null;
  return <div ref={orbRef} className="cursor-orb" aria-hidden="true" />;
}
