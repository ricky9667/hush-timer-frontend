'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { ThemeDarkIcon, ThemeLightIcon } from '@/components/icons';

const subscribeToHydrationState = () => () => undefined;

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribeToHydrationState,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  if (!mounted) {
    return (
      <span className="border-border inline-flex size-10 rounded-full border" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border-border hover:bg-accent focus-visible:ring-ring inline-flex size-10 cursor-pointer items-center justify-center rounded-full border transition-[transform,background-color] duration-200 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transform-none motion-reduce:transition-none"
    >
      {isDark ? (
        <ThemeLightIcon className="size-[19px]" />
      ) : (
        <ThemeDarkIcon className="size-[19px]" />
      )}
    </button>
  );
}
