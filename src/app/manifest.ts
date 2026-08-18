import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Matheus Calixto | Desenvolvedor Fullstack',
    short_name: 'iamcalixto',
    description:
      'Desenvolvedor Fullstack com +5 anos de experiência em React, Next.js, Vue, NestJS e TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#e63946',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
