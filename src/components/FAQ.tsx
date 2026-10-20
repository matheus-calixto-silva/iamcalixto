import { faqItems } from '@/data/faq';

export default function FAQ() {
  return (
    <section id='faq' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDED] mb-12 flex items-center gap-4'>
          <span className='w-8 h-px bg-[#E63946]/50' />
          Perguntas frequentes
        </h2>

        <div className='max-w-3xl divide-y divide-white/10 border-y border-white/10'>
          {faqItems.map(({ question, answer }) => (
            <details key={question} className='group py-6'>
              <summary className='cursor-pointer list-none text-lg md:text-xl font-medium text-[#EDEDED] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E63946] [&::-webkit-details-marker]:hidden'>
                <span className='flex items-center justify-between gap-6'>
                  {question}
                  <span
                    aria-hidden='true'
                    className='text-[#E63946] transition-transform group-open:rotate-45'
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className='mt-4 pr-8 text-base md:text-lg leading-relaxed text-[#888888]'>
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
