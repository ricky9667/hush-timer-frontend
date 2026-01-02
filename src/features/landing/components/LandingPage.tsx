import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel } from "./Carousel";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="HUSH Timer Logo" width={40} height={40} className="rounded" />
          <h1 className="text-2xl font-rubik">HUSH Timer</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-7xl font-bold font-rubik leading-tight max-w-2xl">
          HUSH Timer
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Modern and feature-rich 1v1 cubing timer
        </p>
        <div className="flex items-center space-x-8 mt-8">
          <a href="https://play.google.com/store/apps/details?id=com.rickyhu.hushtimer.androidApp" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="transform transition-all duration-300 hover:scale-105 hover:brightness-90">
              <Image src="/google-play.png" alt="Google Play Store" width={24} height={24} className="mr-2" unoptimized />
              Download Android
            </Button>
          </a>
          <Button size="lg" variant="outline" disabled>
            <Image src="/app-store.png" alt="Apple App Store" width={24} height={24} className="mr-2" unoptimized />
            iOS in production
          </Button>
        </div>
        <Carousel />
      </main>
    </div>
  );
}
