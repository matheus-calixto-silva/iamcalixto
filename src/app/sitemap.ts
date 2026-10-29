import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { defaultLocale, localeMeta, locales } from '@/i18n/config';
import { localeUrl } from '@/lib/json-ld';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(
      locales.map((locale) => [localeMeta[locale].htmlLang, localeUrl(locale)]),
    ),
    'x-default': localeUrl(defaultLocale),
  };

  return locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(profile.lastModified),
    changeFrequency: 'monthly',
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
