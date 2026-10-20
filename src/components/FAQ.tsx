import SectionLabel from '@/components/SectionLabel';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  return (
    <section id='faq' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-wrap gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <div className='flex-[1_1_240px]'>
          <SectionLabel index='05'>Perguntas frequentes</SectionLabel>
        </div>

        <div className='min-w-0 flex-[999_1_640px] border-t border-hairline'>
          {faqItems.map(({ question, answer }) => (
            <details
              key={question}
              className='group border-b border-hairline py-6'
            >
              <summary className='cursor-pointer list-none text-lg font-medium text-ink marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-text md:text-xl [&::-webkit-details-marker]:hidden'>
                <span className='flex items-center justify-between gap-6'>
                  {question}
                  <span
                    aria-hidden='true'
                    className='font-mono text-accent-text duration-200 motion-safe:transition-transform group-open:rotate-45'
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className='mt-4 max-w-[720px] pr-8 text-base leading-relaxed text-body'>
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
