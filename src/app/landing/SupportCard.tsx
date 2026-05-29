import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';

type SupportCardProps = {
  icon: ReactNode;
  iconBackgroundClassName: string;
  title: string;
  description: ReactNode;
  href: string;
  buttonText: string;
  buttonClassName: string;
};

export function SupportCard({
  icon,
  iconBackgroundClassName,
  title,
  description,
  href,
  buttonText,
  buttonClassName,
}: SupportCardProps) {
  return (
    <div className="border-border bg-card flex flex-col items-center rounded-lg border p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md">
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${iconBackgroundClassName}`}
      >
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-semibold">{title}</h4>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <Button variant="outline" className={buttonClassName} asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </div>
  );
}
