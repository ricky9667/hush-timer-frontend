'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

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
      <svg className="size-[19px]" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d={
            isDark
              ? 'M8.463 15.538Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z'
              : 'M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21'
          }
        />
      </svg>
    </button>
  );
}
