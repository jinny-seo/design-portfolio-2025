"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type CarouselImage = {
  src: StaticImageData;
  alt: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  /** Auto-advance interval in ms */
  interval?: number;
  className?: string;
}

/**
 * Auto-playing image carousel that crossfades between images.
 * - Auto-advances on its own, pauses while hovered.
 * - On hover, reveals "<" / ">" controls sitting over black gradients
 *   on the left/right ends (not a full-bleed overlay).
 */
export const ImageCarousel = ({ images, interval = 3500, className = "" }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const go = (dir: number) =>
    setCurrent((c) => (c + dir + images.length) % images.length);

  // Auto-advance, paused on hover
  useEffect(() => {
    if (isHovered || images.length < 2) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [isHovered, images.length, interval]);

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Crossfading images. The first sits in normal flow to define the box
          height; the rest overlay it absolutely (all share the same dimensions). */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          priority={i === 0}
          className={`${
            i === 0 ? "relative" : "absolute top-0 left-0"
          } w-full h-auto transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev control: circular button + Doto "<" */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(-1)}
        className={`absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 cursor-pointer transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-Doto text-2xl md:text-3xl leading-none text-white">&lt;</span>
      </button>

      {/* Next control: circular button + Doto ">" */}
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(1)}
        className={`absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 cursor-pointer transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-Doto text-2xl md:text-3xl leading-none text-white">&gt;</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
