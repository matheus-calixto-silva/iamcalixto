import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { profile } from '@/data/profile';
import { serializeJsonLd } from '@/lib/json-ld';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  keywords: [...profile.knowledgeAreas, profile.city, profile.region],
  authors: [{ name: 'Matheus Calixto' }],
  creator: profile.name,
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    locale: profile.locale,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
  },
};

const jsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${profile.url}/#website`,
      url: profile.url,
      name: profile.name,
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Person',
      '@id': `${profile.url}/#person`,
      name: profile.name,
      url: profile.url,
      jobTitle: profile.title,
      description: profile.description,
      image: `${profile.url}/hero-img.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: profile.city,
        addressRegion: profile.region,
        addressCountry: 'BR',
      },
      sameAs: profile.socialLinks,
      knowsAbout: profile.knowledgeAreas,
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'IFPE — Instituto Federal de Pernambuco',
      },
      worksFor: { '@type': 'Organization', name: 'Green4T' },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className='min-h-full flex flex-col relative overflow-x-hidden text-lg font-light'>
        {children}
      </body>
    </html>
  );
}
