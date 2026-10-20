import type { Metadata } from 'next';
import About from '@/components/About';
import Contact from '@/components/Contact';
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

      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
