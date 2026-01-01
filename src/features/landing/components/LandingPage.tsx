import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel } from "./Carousel";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="HUSH Timer Logo" width={40} height={40} />
          <h1 className="text-2xl font-rubik">HUSH Timer</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-5xl font-bold font-rubik leading-tight max-w-2xl">
          The Ultimate Timer for Focus and Productivity
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          HUSH Timer is a minimalist timer app designed to help you stay focused
          and get more done. No distractions, just pure productivity.
        </p>
        <div className="flex items-center space-x-4 mt-8">
          <Button size="lg">Get Started for Free</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <Carousel />
      </main>
    </div>
  );
}
