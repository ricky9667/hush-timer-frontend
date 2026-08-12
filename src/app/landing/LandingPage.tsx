import Image from 'next/image';
import type { CSSProperties } from 'react';
import { SupportCard } from '@/app/landing/SupportCard';
import { Button } from '@/components/ui/button';
import { Carousel } from './Carousel';
import { Footer } from '@/components/ui/Footer';
import {
  AppStoreIcon,
  BuyMeACoffeeIcon,
  DiscordIcon,
  GooglePlayIcon,
  InstagramIcon,
} from '@/components/icons';

type LandingRevealDelay = `${number}ms`;

const revealDelay = (delay: LandingRevealDelay) =>
  ({ '--landing-reveal-delay': delay }) as CSSProperties;

export function LandingPage() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col">
      <main className="flex flex-1 flex-col items-center text-center">
        <HeroSection />
        <div
          data-landing-reveal="lower-content"
          className="landing-reveal flex w-full flex-col items-center gap-24 pt-24 sm:gap-32 sm:pt-32"
          style={revealDelay('300ms')}
        >
          <Carousel />
          <CommunitySupportSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-[min(640px,calc(100svh-4rem))] w-full items-center justify-center px-6 py-[72px] max-sm:min-h-0 max-sm:px-4 max-sm:py-16">
      <div className="flex w-full max-w-[850px] flex-col items-center">
        <div data-landing-reveal="logo" className="landing-reveal" style={revealDelay('40ms')}>
          <Image
            src="/logo.png"
            alt="HUSH Timer app icon"
            width={168}
            height={168}
            className="mb-7 size-[clamp(112px,14vw,168px)] rounded-[22%]"
            priority
          />
        </div>
        <h1
          data-landing-reveal="title"
          className="landing-reveal font-rubik text-[clamp(43px,7.6vw,92px)] leading-[0.98] font-bold whitespace-nowrap max-[380px]:text-[35px]"
          style={revealDelay('90ms')}
        >
          HUSH Timer
        </h1>
        <p
          data-landing-reveal="subtitle"
          className="landing-reveal text-muted-foreground mt-7 max-w-full text-[clamp(19px,2.4vw,30px)] leading-tight font-semibold max-[380px]:text-lg"
          style={revealDelay('160ms')}
        >
          Modern and feature-rich 1v1 cubing timer
        </p>
        <div
          data-landing-reveal="downloads"
          className="landing-reveal mt-16 grid w-full max-w-md grid-cols-1 gap-4 max-sm:mt-[52px] sm:grid-cols-2 sm:gap-8"
          style={revealDelay('230ms')}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.rickyhu.hushtimer.androidApp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full transform cursor-pointer transition-all duration-100 hover:scale-105 hover:brightness-90"
            >
              <GooglePlayIcon className="mr-2 size-6 shrink-0" />
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
              className="w-full transform cursor-pointer transition-all duration-100 hover:scale-105 hover:brightness-90"
            >
              <AppStoreIcon className="mr-2 size-6 shrink-0" />
              Download iOS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function CommunitySupportSection() {
  return (
    <section className="w-full max-w-6xl px-4">
      <h3 className="font-rubik mb-8 text-center text-3xl font-bold md:text-4xl">
        Community & Support
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <SupportCard
          iconBackgroundClassName="bg-[#5865F2]"
          title="Join our Discord"
          description={
            <>
              Any ideas or issues with our project? Join our Discord server to interact with us
              directly. 🗣️
            </>
          }
          href="https://discord.gg/GjfMKprt7q"
          buttonText="Join our Discord"
          buttonClassName="w-full transform cursor-pointer transition-all duration-100 hover:scale-105 hover:bg-[#5865F2] hover:text-white"
          icon={<DiscordIcon className="h-10 w-10 text-white" />}
        />

        <SupportCard
          iconBackgroundClassName="bg-transparent"
          title="Follow us on Instagram"
          description={
            <>
              Wanna get new updates and explore other projects? Follow our Instagram to get new
              updates in your pocket. 📲
            </>
          }
          href="https://instagram.com/hush_cubing_apps"
          buttonText="Follow our Instagram"
          buttonClassName="w-full transform cursor-pointer transition-all duration-100 hover:scale-105 hover:bg-[#E1306C] hover:text-white"
          icon={<InstagramIcon className="h-10 w-10" />}
        />

        <SupportCard
          iconBackgroundClassName="bg-[#FFDD00]"
          title="Support us"
          description={<>You like my sigma projects? Support me to make me live longer! 😋</>}
          href="https://www.buymeacoffee.com/ricky9667"
          buttonText="Buy Me a Coffee"
          buttonClassName="w-full transform cursor-pointer transition-all duration-100 hover:scale-105 hover:bg-[#FFDD00] hover:text-black"
          icon={<BuyMeACoffeeIcon className="h-10 w-10 text-black" />}
        />
      </div>
    </section>
  );
}
