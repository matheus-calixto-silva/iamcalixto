import type { Locale } from '@/i18n/config';
import { en } from '@/i18n/dictionaries/en';
import { es } from '@/i18n/dictionaries/es';
import { pt } from '@/i18n/dictionaries/pt';
import type { Dictionary } from '@/i18n/types';

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/** Synchronous on purpose: the three dictionaries are small and only used on the server. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
