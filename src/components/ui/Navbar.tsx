import Image from 'next/image';
import Link from 'next/link';
import { PrivacyPolicyLink } from '@/components/PrivacyPolicyLink';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  return (
    <header className="border-border bg-background/85 sticky top-0 z-20 h-16 border-b backdrop-blur-[14px] max-sm:h-[58px]">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-6 max-sm:px-4">
        <Link
          href="/"
          aria-label="HUSH Timer home"
          className="focus-visible:ring-ring flex items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Image src="/logo.png" alt="" width={34} height={34} className="rounded-md" priority />
          <span className="font-rubik text-xl font-semibold max-sm:hidden">HUSH Timer</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PrivacyPolicyLink />
        </div>
      </div>
    </header>
  );
}
