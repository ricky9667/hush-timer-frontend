"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  "/preview/1.png",
  "/preview/2.png",
  "/preview/3.png",
  "/preview/4.png",
  "/preview/5.png",
  "/preview/6.png",
];

// Image dimensions for portrait preview images
const PREVIEW_IMAGE_WIDTH = 700;
const PREVIEW_IMAGE_HEIGHT = 1244;

export function Carousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const extendedImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const intervalId = window.setInterval(() => {
      const firstSlide = track.firstElementChild as HTMLElement | null;
      const slideWidth = firstSlide?.getBoundingClientRect().width ?? track.clientWidth;
      const nextScrollLeft = track.scrollLeft + slideWidth;

      const halfScrollWidth = track.scrollWidth / 2;
      if (nextScrollLeft >= halfScrollWidth - 2) {
        track.scrollTo({ left: 0, behavior: "auto" });
        return;
      }

      track.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full xl:w-3/5 mt-16 overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 mx-0 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-1/3 lg:flex-none lg:px-0 snap-center px-4"
          >
            <Image
              src={src}
              alt={`Preview image ${index + 1}`}
              width={PREVIEW_IMAGE_WIDTH}
              height={PREVIEW_IMAGE_HEIGHT}
              sizes="(min-width: 1024px) 33.333vw, (min-width: 768px) 60vw, (min-width: 640px) 70vw, 80vw"
              className="rounded-lg object-cover w-full h-auto aspect-[700/1244]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
