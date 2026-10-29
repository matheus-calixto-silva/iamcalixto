import { type NextRequest, NextResponse } from 'next/server';
import {
  defaultLocale,
  hasLocale,
  type Locale,
  localeCookie,
} from '@/i18n/config';

/**
 * URLs: Portuguese lives at `/` (the address that is already indexed), English
 * at `/en` and Spanish at `/es`. The files under `src/app/[lang]` serve all three.
 *
 * - `/`         -> shows Portuguese, or redirects to `/en` or `/es` when the
 *                  visitor chose that language or their browser prefers it
 * - `/pt`       -> redirects to `/` so there is a single Portuguese address
 * - `/en`, `/es` -> served as they are
 */

// Link previews and search crawlers always get the default language at `/`.
const CRAWLER =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|whatsapp|telegram|slack|discord/i;

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferences = header
    .split(',')
    .map((entry) => {
      const [tag = '', ...params] = entry.trim().split(';');
      const quality = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='));
      return {
        language: tag.trim().toLowerCase().split('-')[0] ?? '',
        quality: quality ? Number.parseFloat(quality.slice(2)) : 1,
      };
    })
    .filter(
      ({ language, quality }) => language && language !== '*' && quality > 0,
    )
    .sort((a, b) => b.quality - a.quality);

  for (const { language } of preferences) {
    if (hasLocale(language)) return language;
  }

  // The browser asked for languages we do not have (French, German...):
  // English is the best guess for them. No header at all keeps the default.
  return preferences.length > 0 ? 'en' : defaultLocale;
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && hasLocale(saved)) return saved;

  if (CRAWLER.test(request.headers.get('user-agent') ?? '')) {
    return defaultLocale;
  }

  return localeFromAcceptLanguage(request.headers.get('accept-language'));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split('/')[1] ?? '';

  if (hasLocale(firstSegment)) {
    const isDefaultLocaleHome =
      firstSegment === defaultLocale &&
      (pathname === `/${defaultLocale}` || pathname === `/${defaultLocale}/`);

    if (!isDefaultLocaleHome) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url, 308);
  }

  if (pathname === '/') {
    const locale = preferredLocale(request);

    if (locale !== defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      const response = NextResponse.redirect(url);
      response.headers.set('Vary', 'Accept-Language, Cookie, User-Agent');
      return response;
    }
  }

  // Everything without a prefix is the default language.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals and anything with a file extension
  // (sitemap.xml, robots.txt, favicon.ico, images...).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
