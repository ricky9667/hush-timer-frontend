import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel } from './Carousel';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="HUSH Timer Logo" width={40} height={40} className="rounded" />
          <h1 className="font-rubik hidden text-2xl sm:block">HUSH Timer</h1>
        </div>
        <div className="flex items-center">
          <Link href="/privacy-policy">
            <Button variant="link" className="cursor-pointer hover:underline">
              Privacy Policy
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <h2 className="font-rubik max-w-2xl text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
          HUSH Timer
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg md:text-xl lg:text-2xl">
          Modern and feature-rich 1v1 cubing timer
        </p>
        <div className="mt-8 grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.rickyhu.hushtimer.androidApp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full transform cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-90"
            >
              <Image
                src="/google-play.png"
                alt="Google Play Store"
                width={24}
                height={24}
                className="mr-2"
                unoptimized
              />
              Download Android
            </Button>
          </a>
          <Button size="lg" variant="outline" disabled className="w-full">
            <Image
              src="/app-store.png"
              alt="Apple App Store"
              width={24}
              height={24}
              className="mr-2 cursor-not-allowed"
              unoptimized
            />
            iOS in production
          </Button>
        </div>
        <Carousel />
      </main>
    </div>
  );
}
