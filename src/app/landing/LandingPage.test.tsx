import { describe, expect, mock, test } from 'bun:test';
import { createElement } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server.node';

type MockImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
  unoptimized?: boolean;
};

mock.module('next/image', () => ({
  default: ({ priority, unoptimized, ...props }: MockImageProps) => {
    void priority;
    void unoptimized;
    return createElement('img', props);
  },
}));

const { default: PrivacyPolicyPage } = await import('../privacy-policy/page');
const { LandingPage } = await import('./LandingPage');

const globalsCss = await Bun.file(new URL('../globals.css', import.meta.url)).text();

describe('LandingPage entrance animation', () => {
  test('renders vector download and community icons without the legacy raster assets', () => {
    const html = renderToStaticMarkup(<LandingPage />);

    expect(html).toContain('Download Android');
    expect(html).toContain('Download iOS');
    expect(html).toContain('Join our Discord');
    expect(html).toContain('Buy Me a Coffee');
    expect(html).toContain('viewBox="0 0 466 511.98"');
    expect(html).toContain('viewBox="0 0 800 800"');
    expect(html).not.toContain('/google-play.png');
    expect(html).not.toContain('/app-store.png');
    expect(html.match(/aria-hidden="true"/g)?.length).toBeGreaterThanOrEqual(4);
  });

  test('keeps download icons at their requested size inside flex buttons', () => {
    const html = renderToStaticMarkup(<LandingPage />);
    const googlePlayIcon = html.match(/<svg[^>]*viewBox="0 0 466 511\.98"[^>]*>/)?.[0];
    const appStoreIcon = html.match(/<svg[^>]*viewBox="0 0 800 800"[^>]*>/)?.[0];

    expect(googlePlayIcon).toContain('size-6');
    expect(googlePlayIcon).toContain('shrink-0');
    expect(appStoreIcon).toContain('size-6');
    expect(appStoreIcon).toContain('shrink-0');
  });

  test('renders the five ordered reveal groups with the approved delays', () => {
    const html = renderToStaticMarkup(<LandingPage />);
    const reveals = Array.from(
      html.matchAll(/data-landing-reveal="([^"]+)"[^>]*class="([^"]*)"[^>]*style="([^"]*)"/g)
    ).map((match) => ({ name: match[1], className: match[2], style: match[3] }));

    expect(reveals).toEqual([
      {
        name: 'logo',
        className: expect.stringContaining('landing-reveal'),
        style: '--landing-reveal-delay:40ms',
      },
      {
        name: 'title',
        className: expect.stringContaining('landing-reveal'),
        style: '--landing-reveal-delay:90ms',
      },
      {
        name: 'subtitle',
        className: expect.stringContaining('landing-reveal'),
        style: '--landing-reveal-delay:160ms',
      },
      {
        name: 'downloads',
        className: expect.stringContaining('landing-reveal'),
        style: '--landing-reveal-delay:230ms',
      },
      {
        name: 'lower-content',
        className: expect.stringContaining('landing-reveal'),
        style: '--landing-reveal-delay:300ms',
      },
    ]);
  });

  test('keeps the footer outside every reveal group', () => {
    const html = renderToStaticMarkup(<LandingPage />);
    const mainClosingIndex = html.indexOf('</main>');
    const footerIndex = html.indexOf('<footer');
    const revealIndexes = Array.from(
      html.matchAll(/data-landing-reveal=/g),
      (match) => match.index
    );

    expect(mainClosingIndex).toBeGreaterThan(0);
    expect(revealIndexes.every((index) => index !== undefined && index < mainClosingIndex)).toBe(
      true
    );
    expect(footerIndex).toBeGreaterThan(mainClosingIndex);
  });

  test('keeps the lower-content reveal centered as a column', () => {
    const html = renderToStaticMarkup(<LandingPage />);
    const lowerContent = html.match(/data-landing-reveal="lower-content"[^>]*class="([^"]*)"/);

    expect(lowerContent?.[1]).toContain('flex');
    expect(lowerContent?.[1]).toContain('flex-col');
    expect(lowerContent?.[1]).toContain('items-center');
  });

  test('keeps reveal content hidden during its delay and disables the animation for reduced motion', () => {
    expect(globalsCss).toMatch(
      /@keyframes landing-slide-up-fade\s*\{\s*from\s*\{\s*opacity:\s*0;\s*transform:\s*translateY\(16px\);/
    );
    expect(globalsCss).toMatch(
      /\.landing-reveal\s*\{\s*opacity:\s*0;\s*transform:\s*translateY\(16px\);\s*animation:\s*landing-slide-up-fade 560ms cubic-bezier\(0\.2, 0, 0, 1\) var\(--landing-reveal-delay\)\s*forwards;/
    );
    expect(globalsCss).toMatch(
      /@media \(prefers-reduced-motion: reduce\)\s*\{\s*\.landing-reveal\s*\{\s*opacity:\s*1;\s*transform:\s*none;\s*animation:\s*none;/
    );
  });

  test('does not add entrance animation hooks to the privacy policy', () => {
    const html = renderToStaticMarkup(<PrivacyPolicyPage />);

    expect(html).not.toContain('data-landing-reveal');
    expect(html).not.toContain('landing-reveal');
  });
});
