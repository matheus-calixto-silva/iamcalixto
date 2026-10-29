import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import { profile } from '@/data/profile';
import type { Dictionary } from '@/i18n/types';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

interface ContactProps {
  dict: Dictionary['contact'];
  opensInNewTab: string;
}

export default function Contact({ dict, opensInNewTab }: ContactProps) {
  return (
    <section id='contact' className='bg-accent'>
      <div className='mx-auto flex max-w-7xl flex-col gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <SectionLabel index='06' inverse>
          {dict.label}
        </SectionLabel>
        <p className='max-w-[1000px] text-contact font-semibold text-ink'>
          {dict.heading}
        </p>

        <div className='flex flex-wrap items-end justify-between gap-8'>
          <p className='max-w-[440px] text-[17px] leading-normal text-ink md:text-lg'>
            {dict.text}
          </p>

          <div className='flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3'>
            <a
              href={profile.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex h-14 items-center justify-between gap-3 bg-canvas px-7 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-black ${focusRing}`}
            >
              {dict.whatsapp}
              <span className='sr-only'>{opensInNewTab}</span>
              <ArrowRight strokeWidth={1.5} className='size-4' />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex h-14 items-center justify-center border border-ink px-7 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-ink hover:text-accent ${focusRing}`}
            >
              {dict.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
