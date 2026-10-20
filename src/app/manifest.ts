import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | ${profile.title}`,
    short_name: 'iamcalixto',
    description: profile.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#da291c',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
