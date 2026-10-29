import { notFound } from 'next/navigation';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import { hasLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { profilePage, serializeJsonLd } from '@/lib/json-ld';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <script
        type='application/ld+json'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(profilePage(lang, dict)),
        }}
      />

      <Navbar locale={lang} dict={dict.nav} />

      <main id='main' tabIndex={-1} className='outline-none'>
        <Hero dict={dict} />
        <About locale={lang} dict={dict.about} />
        <TechStack dict={dict.stack} />
        <Experience dict={dict.experience} />
        <Education dict={dict.education} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} opensInNewTab={dict.a11y.opensInNewTab} />
      </main>

      <Footer dict={dict.footer} opensInNewTab={dict.a11y.opensInNewTab} />
    </>
  );
}
