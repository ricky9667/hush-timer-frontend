'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const images = [
  '/preview/1.png',
  '/preview/2.png',
  '/preview/3.png',
  '/preview/4.png',
  '/preview/5.png',
  '/preview/6.png',
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
        track.scrollTo({ left: 0, behavior: 'auto' });
        return;
      }

      track.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mt-16 w-full overflow-hidden rounded-lg xl:w-3/5">
      <div
        ref={trackRef}
        className="mx-0 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="w-[80vw] flex-shrink-0 snap-center px-4 sm:w-[70vw] md:w-[60vw] lg:w-1/3 lg:flex-none lg:px-0"
          >
            <Image
              src={src}
              alt={`Preview image ${index + 1}`}
              width={PREVIEW_IMAGE_WIDTH}
              height={PREVIEW_IMAGE_HEIGHT}
              sizes="(min-width: 1024px) 33.333vw, (min-width: 768px) 60vw, (min-width: 640px) 70vw, 80vw"
              className="aspect-[700/1244] h-auto w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
