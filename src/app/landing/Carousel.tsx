'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel as ShadcnCarousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener('change', onStoreChange);

  return () => mediaQuery.removeEventListener('change', onStoreChange);
}

function getReducedMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function Carousel() {
  const [api, setApi] = useState<CarouselApi>();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false
  );
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  );

  useEffect(() => {
    if (!api) return;

    if (prefersReducedMotion) {
      autoplay.current.stop();
      return;
    }

    autoplay.current.play();
  }, [api, prefersReducedMotion]);

  return (
    <div className="mt-16 w-full px-4 xl:w-3/5">
      <ShadcnCarousel
        opts={{ align: 'start', loop: true }}
        plugins={[autoplay.current]}
        setApi={setApi}
        onMouseEnter={prefersReducedMotion ? undefined : autoplay.current.stop}
        onMouseLeave={prefersReducedMotion ? undefined : autoplay.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={src}
              className="basis-[min(82vw,36.58dvh)] md:basis-[min(50%,36.58dvh)] lg:basis-[min(33.333%,36.58dvh)]"
            >
              <Image
                src={src}
                alt={`Preview image ${index + 1}`}
                width={PREVIEW_IMAGE_WIDTH}
                height={PREVIEW_IMAGE_HEIGHT}
                sizes="(min-width: 1280px) min(20vw, 36.6dvh), (min-width: 1024px) min(33.333vw, 36.6dvh), (min-width: 768px) min(50vw, 36.6dvh), min(82vw, 36.6dvh)"
                className="aspect-[700/1244] h-auto w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-background/80 left-4 size-11 backdrop-blur-sm" />
        <CarouselNext className="bg-background/80 right-4 size-11 backdrop-blur-sm" />
      </ShadcnCarousel>
    </div>
  );
}
