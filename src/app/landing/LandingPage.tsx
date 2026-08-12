import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel } from './Carousel';
import { CommunitySupport } from './CommunitySupport';
import { Footer } from '@/components/ui/Footer';

export function LandingPage() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col">
      <main className="flex flex-1 flex-col items-center text-center">
        <section className="flex min-h-[min(640px,calc(100svh-4rem))] w-full items-center justify-center px-6 py-[72px] max-sm:min-h-0 max-sm:px-4 max-sm:py-16">
          <div className="flex w-full max-w-[850px] flex-col items-center">
            <Image
              src="/logo.png"
              alt="HUSH Timer app icon"
              width={168}
              height={168}
              className="mb-7 size-[clamp(112px,14vw,168px)] rounded-[22%]"
              priority
            />
            <h1 className="font-rubik text-[clamp(43px,7.6vw,92px)] leading-[0.98] font-bold tracking-[-0.04em] whitespace-nowrap max-[380px]:text-[35px]">
              HUSH Timer
            </h1>
            <p className="text-muted-foreground mt-7 max-w-2xl text-[clamp(19px,2.4vw,30px)] leading-tight font-semibold text-balance max-[380px]:text-lg max-sm:max-w-[22ch]">
              Modern and feature-rich 1v1 cubing timer
            </p>
            <div className="mt-16 grid w-full max-w-md grid-cols-1 gap-4 max-sm:mt-[52px] sm:grid-cols-2 sm:gap-8">
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
              <a
                href="https://apps.apple.com/us/app/hush-timer/id6759232805"
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
                    src="/app-store.png"
                    alt="Apple App Store"
                    width={24}
                    height={24}
                    className="mr-2"
                    unoptimized
                  />
                  Download iOS
                </Button>
              </a>
            </div>
          </div>
        </section>
        <Carousel />
        <CommunitySupport />
      </main>
      <Footer />
    </div>
  );
}
