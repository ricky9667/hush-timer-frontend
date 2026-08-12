import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server.node';
import {
  AppStoreIcon,
  BuyMeACoffeeIcon,
  DiscordIcon,
  GooglePlayIcon,
  InstagramIcon,
  PrivacyPolicyIcon,
  ThemeDarkIcon,
  ThemeLightIcon,
} from './index';

describe('icons', () => {
  test('forwards SVG props and hides decorative icons from assistive technology', () => {
    const html = renderToStaticMarkup(<DiscordIcon className="custom-icon" data-testid="icon" />);

    expect(html).toContain('class="custom-icon"');
    expect(html).toContain('data-testid="icon"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('focusable="false"');
    expect(html).toContain('fill="currentColor"');
  });

  test('renders every public icon export', () => {
    const html = renderToStaticMarkup(
      <>
        <BuyMeACoffeeIcon />
        <GooglePlayIcon />
        <InstagramIcon />
        <PrivacyPolicyIcon />
        <ThemeDarkIcon />
        <ThemeLightIcon />
      </>
    );

    expect(html.match(/<svg/g)).toHaveLength(6);
    expect(html).toContain('viewBox="0 0 466 511.98"');
    expect(html).toContain('#EA4335');
    expect(html).toContain('#4285F4');
  });

  test('uses a unique gradient ID for each App Store icon instance', () => {
    const html = renderToStaticMarkup(
      <>
        <AppStoreIcon />
        <AppStoreIcon />
      </>
    );
    const ids = Array.from(html.matchAll(/<linearGradient id="([^"]+)"/g), (match) => match[1]);

    expect(ids).toHaveLength(2);
    expect(new Set(ids).size).toBe(2);
    for (const id of ids) {
      expect(html).toContain(`fill="url(#${id})"`);
    }
  });
});
