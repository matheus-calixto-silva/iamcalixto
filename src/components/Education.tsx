import SectionLabel from '@/components/SectionLabel';
import { certificationEntries, degreeYears } from '@/data/education';
import type { Dictionary } from '@/i18n/types';

export default function Education({ dict }: { dict: Dictionary['education'] }) {
  return (
    <section id='education' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-wrap gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <div className='flex-[1_1_240px]'>
          <SectionLabel index='04'>{dict.label}</SectionLabel>
        </div>

        <div className='grid min-w-0 flex-[999_1_640px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 md:gap-8'>
          <div className='flex flex-col gap-3 border border-hairline bg-surface px-5 py-6 md:p-8'>
            <span className='font-mono text-xs text-muted'>{degreeYears}</span>
            <h3 className='text-[22px] font-semibold leading-tight tracking-[-0.02em] md:text-2xl'>
              {dict.degree}
            </h3>
            <span className='text-[15px] text-body'>{dict.institution}</span>
          </div>

          <ul className='border-t border-hairline'>
            {certificationEntries.map((cert) => (
              <li
                key={cert.id}
                className='flex flex-col gap-1 border-b border-hairline py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 md:py-5'
              >
                <span className='text-base font-medium'>
                  {dict.certifications[cert.id]}
                </span>
                <span className='font-mono text-xs text-muted sm:text-right'>
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
