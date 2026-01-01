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

export function Carousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += 1;
        if (scrollAmount >= scroller.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scroller.scrollTo({
          left: scrollAmount,
          behavior: "auto",
        });
        requestAnimationFrame(scroll);
      };
      requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex space-x-4 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-60">
            <Image
              src={src}
              alt={`Preview image ${index + 1}`}
              width={320}
              height={240}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
