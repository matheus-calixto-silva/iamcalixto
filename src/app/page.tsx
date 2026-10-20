import type { Metadata } from 'next';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import { profile } from '@/data/profile';
import { serializeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: {
    absolute: `${profile.name} | ${profile.title} em Recife`,
  },
};

const profilePageJsonLd: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${profile.url}/#profile`,
  url: profile.url,
  name: `${profile.name} | ${profile.title}`,
  mainEntity: { '@id': `${profile.url}/#person` },
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(profilePageJsonLd),
        }}
      />

      {/* Global Background Glow */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(230,57,70,0.04),transparent_60%)]' />
      </div>

      <Navbar />

      <main className='relative z-10'>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
