'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <svg className="size-[19px]" viewBox="0 0 24 24" aria-hidden="true">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H13M8 10h8M8 6h4m-4 8h3" />
            <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-.008 9.125l2.556.649c.266.068.453.31.445.584C22.821 22.116 19.5 23 19.5 23s-3.321-.884-3.493-6.642a.59.59 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0" />
          </g>
        </svg>
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
