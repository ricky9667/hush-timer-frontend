'use client';

import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-10">
      <div className="container mx-auto px-8">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-1">
            <Image
              src="/ricky-hu-logo.png"
              alt="Ricky Hu Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-muted-foreground text-sm font-medium">
              <a
                href="https://ricky-hu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ricky Hu
              </a>
              <span> &copy; {currentYear}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
