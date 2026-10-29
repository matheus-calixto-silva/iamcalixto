export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

/** Served at `/` (no prefix) so the URL that is already indexed keeps working. */
export const defaultLocale: Locale = 'pt';

/** Set only when the visitor picks a language, so it wins over the browser's. */
export const localeCookie = 'NEXT_LOCALE';

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; label: string; name: string }
> = {
  pt: { htmlLang: 'pt-BR', ogLocale: 'pt_BR', label: 'PT', name: 'Português' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'EN', name: 'English' },
  es: { htmlLang: 'es', ogLocale: 'es_LA', label: 'ES', name: 'Español' },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Public path of the home page in a given language. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}
