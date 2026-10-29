import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { profile } from '@/data/profile';
import { hasLocale, localeMeta, localePath, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { serializeJsonLd, siteGraph } from '@/lib/json-ld';
import '../globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type LangParams = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LangParams): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  const path = localePath(lang);
  const homeTitle = `${profile.name} | ${meta.jobTitleInCity}`;
  const cardTitle = `${profile.name} | ${meta.jobTitle}`;

  return {
    metadataBase: new URL(profile.url),
    title: { default: homeTitle, template: `%s | ${profile.name}` },
    description: meta.description,
    keywords: [
      ...meta.topics,
      ...profile.technologies,
      profile.city,
      profile.region,
    ],
    authors: [{ name: profile.name }],
    creator: profile.name,
    robots: { index: true, follow: true },
    manifest: '/manifest.webmanifest',
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [localeMeta[l].htmlLang, localePath(l)]),
        ),
        'x-default': localePath('pt'),
      },
    },
    openGraph: {
      type: 'website',
      url: path,
      title: cardTitle,
      description: meta.summary,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => localeMeta[l].ogLocale),
      siteName: profile.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: cardTitle,
      description: meta.summary,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode } & LangParams>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html
      lang={localeMeta[lang].htmlLang}
      className={`${geist.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(siteGraph(lang, dict)),
          }}
        />
      </head>
      <body className='min-h-full flex flex-col bg-canvas text-ink font-sans'>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.1em] focus:text-ink focus:outline-2 focus:outline-offset-2 focus:outline-ink'
        >
          {dict.a11y.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
