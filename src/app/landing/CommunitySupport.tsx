import { SupportCard } from '@/app/landing/SupportCard';
import { BuyMeACoffeeIcon, DiscordIcon } from '@/components/icons';

export function CommunitySupport() {
  return (
    <section className="mt-16 w-full max-w-4xl px-4">
      <h3 className="font-rubik mb-8 text-center text-3xl font-bold md:text-4xl">
        Community & Support
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Discord Section */}
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
          buttonClassName="w-full transform cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[#5865F2] hover:text-white"
          icon={<DiscordIcon className="h-10 w-10 text-white" />}
        />

        {/* Buy Me a Coffee Section */}
        <SupportCard
          iconBackgroundClassName="bg-[#FFDD00]"
          title="Support us"
          description={
            <>
              If you want me to continue making these projects nice and not die, support me on Buy
              Me A Coffee! 😋
            </>
          }
          href="https://www.buymeacoffee.com/ricky9667"
          buttonText="Buy Me a Coffee"
          buttonClassName="w-full transform cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[#FFDD00] hover:text-black"
          icon={<BuyMeACoffeeIcon className="h-10 w-10 text-black" />}
        />
      </div>
    </section>
  );
}
