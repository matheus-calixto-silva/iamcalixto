import SectionLabel from '@/components/SectionLabel';
import { mainStack } from '@/data/tech-stack';
import { type Locale, localeMeta } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

interface AboutProps {
  locale: Locale;
  dict: Dictionary['about'];
}

export default function About({ locale, dict }: AboutProps) {
  // "A, B and C" with the right conjunction for each language.
  const stackParts = new Intl.ListFormat(localeMeta[locale].htmlLang, {
    style: 'long',
    type: 'conjunction',
  }).formatToParts(mainStack);

  return (
    <section id='about' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-wrap gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <div className='flex-[1_1_240px]'>
          <SectionLabel index='01'>{dict.label}</SectionLabel>
        </div>

        <div className='flex min-w-0 flex-[999_1_640px] flex-col gap-10'>
          <p className='text-lead font-medium'>
            {dict.lead} <span className='text-muted'>{dict.leadMuted}</span>
          </p>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 border-t border-hairline pt-8'>
            <p className='text-base leading-relaxed text-body'>
              {dict.stackIntro}{' '}
              {stackParts.map((part) =>
                part.type === 'element' ? (
                  <span key={part.value} className='text-ink'>
                    {part.value}
                  </span>
                ) : (
                  part.value
                ),
              )}
              .
            </p>
            <div className='flex flex-col gap-2'>
              <span className='font-mono text-xs uppercase tracking-[1px] text-muted'>
                {dict.nowLabel}
              </span>
              <p className='text-base leading-relaxed text-ink'>{dict.now}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
