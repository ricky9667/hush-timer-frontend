"use client";

import Image from "next/image";

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
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 overflow-hidden">
      <div
        className="flex space-x-4 overflow-x-auto pb-4"
        style={{ 
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0, 0, 0, 0.3) transparent"
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-[28rem]">
            <Image
              src={src}
              alt={`Preview image ${index + 1}`}
              width={PREVIEW_IMAGE_WIDTH}
              height={PREVIEW_IMAGE_HEIGHT}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
