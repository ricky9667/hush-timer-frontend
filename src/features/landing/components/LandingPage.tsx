import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel } from './Carousel';

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="HUSH Timer Logo" width={40} height={40} className="rounded" />
          <h1 className="font-rubik text-2xl">HUSH Timer</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <h2 className="font-rubik max-w-2xl text-7xl leading-tight font-bold">HUSH Timer</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Modern and feature-rich 1v1 cubing timer
        </p>
        <div className="mt-8 flex items-center space-x-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.rickyhu.hushtimer.androidApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="transform transition-all duration-300 hover:scale-105 hover:brightness-90"
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
          <Button size="lg" variant="outline" disabled>
            <Image
              src="/app-store.png"
              alt="Apple App Store"
              width={24}
              height={24}
              className="mr-2"
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
