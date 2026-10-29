import SectionLabel from '@/components/SectionLabel';
import TechCategory from '@/components/TechCategory';
import { techCategories } from '@/data/tech-stack';
import type { Dictionary } from '@/i18n/types';

const techCount = techCategories.reduce(
  (sum, cat) => sum + cat.items.length,
  0,
);

export default function TechStack({ dict }: { dict: Dictionary['stack'] }) {
  return (
    <section id='stack' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-[72px] md:gap-14 md:px-8 md:py-32'>
        <div className='flex flex-wrap items-end justify-between gap-6'>
          <div className='flex flex-col gap-4 md:gap-5'>
            <SectionLabel index='02'>{dict.label}</SectionLabel>
            <p className='text-heading font-semibold'>{dict.heading}</p>
          </div>
          <span className='font-mono text-[13px] text-muted'>
            {dict.summary(techCategories.length, techCount)}
          </span>
        </div>

        <div className='grid grid-cols-2 border-t border-l border-hairline md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]'>
          {techCategories.map((cat) => (
            <TechCategory
              key={cat.id}
              label={dict.categories[cat.id]}
              items={cat.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
