import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title:
    'Matheus Calixto | Desenvolvedor Fullstack — React, Node.js, TypeScript',
  description:
    'Matheus Calixto — Desenvolvedor Fullstack com +5 anos de experiência em React, Next.js, Vue, NestJS, TypeScript e Node.js. Especialista em aplicações web e mobile escaláveis. Recife, PE.',
  keywords:
    'desenvolvedor fullstack, react, next.js, vue, nestjs, typescript, node.js, recife, pernambuco, frontend, backend, desenvolvedor web, portfolio',
  authors: [{ name: 'Matheus Calixto' }],
  robots: 'index, follow',
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://iamcalixto.dev.br/',
    title: 'Matheus Calixto | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack com +5 anos de experiência em React, Next.js, Vue, NestJS e TypeScript. Construindo experiências web & mobile escaláveis.',
    images: [{ url: 'https://iamcalixto.dev.br/og-image.jpg' }],
    locale: 'pt_BR',
    siteName: 'Matheus Calixto',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matheus Calixto',
  url: 'https://iamcalixto.dev.br',
  jobTitle: 'Desenvolvedor Fullstack',
  description:
    'Desenvolvedor Fullstack com mais de 5 anos de experiência em React, Next.js, Vue, NestJS, TypeScript e Node.js.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Recife',
    addressRegion: 'PE',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://linkedin.com/in/matheus-calixto-silva',
    'https://github.com/matheus-calixto-silva',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'NestJS',
    'HonoJS',
    'Node.js',
    'Laravel',
    'PostgreSQL',
    'Docker',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'IFPE — Instituto Federal de Pernambuco',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Green4T',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className={`${inter.variable} h-full`}>
      <head>
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel='canonical' href='https://iamcalixto.dev.br/' />
      </head>
      <body className='min-h-full flex flex-col relative overflow-x-hidden text-lg font-light'>
        {children}
      </body>
    </html>
  );
}
