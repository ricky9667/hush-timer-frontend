import { SupportCard } from '@/app/landing/SupportCard';
import { BuyMeACoffeeIcon, DiscordIcon, InstagramIcon } from '@/components/icons';

export function CommunitySupport() {
  return (
    <section className="mt-16 w-full max-w-6xl px-4">
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
