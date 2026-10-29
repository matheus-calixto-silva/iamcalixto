import ExperienceItem from '@/components/ExperienceItem';
import SectionLabel from '@/components/SectionLabel';
import { experienceEntries } from '@/data/experience';
import type { Dictionary } from '@/i18n/types';

export default function Experience({
  dict,
}: {
  dict: Dictionary['experience'];
}) {
  return (
    <section id='experience' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-[72px] md:gap-14 md:px-8 md:py-32'>
        <div className='flex flex-col gap-4 md:gap-5'>
          <SectionLabel index='03'>{dict.label}</SectionLabel>
          <p className='text-heading font-semibold'>{dict.heading}</p>
        </div>

        <ol className='border-t border-hairline'>
          {experienceEntries.map((entry) => (
            <ExperienceItem
              key={entry.id}
              company={entry.company}
              current={entry.current}
              tags={[...entry.tags]}
              {...dict.items[entry.id]}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
