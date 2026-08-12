'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PrivacyPolicyIcon } from '@/components/icons';

export function PrivacyPolicyLink() {
  const pathname = usePathname();

  return (
    <span className="group relative">
      <Link
        href="/privacy-policy"
        aria-label="Privacy Policy"
        aria-current={pathname === '/privacy-policy' ? 'page' : undefined}
        className="border-border hover:bg-accent focus-visible:ring-ring inline-flex size-10 items-center justify-center rounded-full border transition-[transform,background-color] duration-200 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transform-none motion-reduce:transition-none"
      >
        <PrivacyPolicyIcon className="size-[19px]" />
      </Link>
      <span
        role="tooltip"
        className="bg-foreground text-background pointer-events-none absolute top-full right-0 mt-2 w-max translate-y-1 rounded-md px-2.5 py-1.5 text-xs font-medium opacity-0 shadow-sm transition-[opacity,transform] duration-150 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
      >
        Privacy Policy
      </span>
    </span>
  );
}
