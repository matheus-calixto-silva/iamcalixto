import { Award, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDED] mb-12 flex items-center gap-4'>
          <span className='w-8 h-px bg-[#E63946]/50' />
          Formação &amp; Certificações
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300'>
            <GraduationCap
              strokeWidth={1.5}
              className='w-6 h-6 text-[#E63946] mb-6'
            />
            <h3 className='text-xl font-medium text-[#EDEDED] mb-2'>
              Tecnologia em ADS
            </h3>
            <p className='text-lg text-[#888888] font-light mb-4'>
              IFPE — Instituto Federal de Pernambuco
            </p>
            <span className='text-sm text-[#888888] font-medium tracking-wider uppercase'>
              2017 – 2023
            </span>
          </div>

          <div className='bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300'>
            <Award strokeWidth={1.5} className='w-6 h-6 text-[#8B5E6B] mb-6' />
            <h3 className='text-xl font-medium text-[#EDEDED] mb-4'>
              Certificações
            </h3>
            <ul className='space-y-3 text-lg text-[#888888] font-light'>
              <li className='flex items-start gap-3'>
                <span
                  className='text-[#E63946] mt-1.5 text-xs'
                  aria-hidden='true'
                >
                  ●
                </span>
                TypeScript &amp; Full Stack (University of Helsinki)
              </li>
              <li className='flex items-start gap-3'>
                <span
                  className='text-[#E63946] mt-1.5 text-xs'
                  aria-hidden='true'
                >
                  ●
                </span>
                React e JavaScript (Origamid)
              </li>
              <li className='flex items-start gap-3'>
                <span
                  className='text-[#E63946] mt-1.5 text-xs'
                  aria-hidden='true'
                >
                  ●
                </span>
                Responsive Web Design (freeCodeCamp)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
