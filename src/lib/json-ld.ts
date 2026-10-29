import { profile } from '@/data/profile';
import { type Locale, localeMeta, localePath, locales } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

/** Absolute URL of the home page in a language. */
export function localeUrl(locale: Locale): string {
  const path = localePath(locale);
  return path === '/' ? profile.url : `${profile.url}${path}`;
}

/** WebSite + Person, shared by all pages. The Person text follows the page language. */
export function siteGraph(locale: Locale, dict: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${profile.url}/#website`,
        url: profile.url,
        name: profile.name,
        inLanguage: locales.map((l) => localeMeta[l].htmlLang),
      },
      {
        '@type': 'Person',
        '@id': `${profile.url}/#person`,
        name: profile.name,
        url: localeUrl(locale),
        jobTitle: dict.meta.jobTitle,
        description: dict.meta.description,
        image: `${profile.url}/hero-img.webp`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: profile.city,
          addressRegion: profile.region,
          addressCountry: profile.countryCode,
        },
        sameAs: profile.socialLinks,
        knowsAbout: [...dict.meta.topics, ...profile.technologies],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: dict.meta.alumniOf,
        },
        worksFor: { '@type': 'Organization', name: 'Green4T' },
      },
    ],
  };
}

export function profilePage(locale: Locale, dict: Dictionary) {
  const url = localeUrl(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}/#profile`,
    url,
    inLanguage: localeMeta[locale].htmlLang,
    name: `${profile.name} | ${dict.meta.jobTitle}`,
    mainEntity: { '@id': `${profile.url}/#person` },
  };
}
