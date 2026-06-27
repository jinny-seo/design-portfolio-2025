"use client";

import { useEffect, useRef, useState } from "react";

const SPARKLE_COLORS = ["#b9f5ea", "#a9c6f5", "#c9a9f2", "#f6b1e0", "#ffffff"];

export default function SparkleCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

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
        orb.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const now = performance.now();
      if (now - lastSpawn > 18) {
        lastSpawn = now;
        spawnSparkle(e.clientX, e.clientY);
        spawnSparkle(e.clientX, e.clientY);
        spawnSparkle(e.clientX, e.clientY);
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovered(!!el.closest("a, button, [role='button'], [tabindex]"));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("sparkle-cursor-active");
    };
  }, []);

  if (!active) return null;
  return (
    <div ref={orbRef} className="cursor-orb" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={hovered ? "/hover-cursor-hand.svg" : "/star-cursor.svg"}
        alt=""
        style={{
          width: hovered ? 24 : 32,
          height: hovered ? 24 : 32,
          objectFit: "contain",
          // offset hover cursor so fingertip (x=6) aligns with star tip (x=0)
          marginLeft: hovered ? "-4px" : "0",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
