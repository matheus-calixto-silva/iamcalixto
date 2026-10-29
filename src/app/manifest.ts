import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { defaultLocale, localeMeta } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

// One manifest for the whole site, in the default language.
export default function manifest(): MetadataRoute.Manifest {
  const { meta } = getDictionary(defaultLocale);

  return {
    name: `${profile.name} | ${meta.jobTitle}`,
    short_name: 'iamcalixto',
    description: meta.description,
    lang: localeMeta[defaultLocale].htmlLang,
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#da291c',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
