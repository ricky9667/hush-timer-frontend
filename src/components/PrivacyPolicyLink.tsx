'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PrivacyPolicyIcon } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function PrivacyPolicyLink() {
  const pathname = usePathname();

  return (
    <Tooltip
      onOpenChange={(open, eventDetails) => {
        if (open && eventDetails.reason !== 'trigger-hover') {
          eventDetails.cancel();
        }
      }}
    >
      <TooltipTrigger
        render={
          <Link
            href="/privacy-policy"
            aria-label="Privacy Policy"
            aria-current={pathname === '/privacy-policy' ? 'page' : undefined}
            className="border-border hover:bg-accent focus-visible:ring-ring inline-flex size-10 items-center justify-center rounded-full border transition-[transform,background-color] duration-200 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transform-none motion-reduce:transition-none"
          />
        }
      >
        <PrivacyPolicyIcon className="size-[19px]" />
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Privacy Policy</p>
      </TooltipContent>
    </Tooltip>
  );
}
