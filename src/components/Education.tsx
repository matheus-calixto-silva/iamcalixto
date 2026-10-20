import SectionLabel from '@/components/SectionLabel';

const certifications = [
  { name: 'TypeScript & Full Stack', issuer: 'University of Helsinki' },
  { name: 'React e JavaScript', issuer: 'Origamid' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
];

export default function Education() {
  return (
    <section
      id='education'
      className='scroll-mt-[72px] border-b border-divider'
    >
      <div className='mx-auto flex max-w-7xl flex-wrap gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <div className='flex-[1_1_240px]'>
          <SectionLabel index='04'>Formação e certificações</SectionLabel>
        </div>

        <div className='grid min-w-0 flex-[999_1_640px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 md:gap-8'>
          <div className='flex flex-col gap-3 border border-hairline bg-surface px-5 py-6 md:p-8'>
            <span className='font-mono text-xs text-muted'>2017 — 2023</span>
            <h3 className='text-[22px] font-semibold leading-tight tracking-[-0.02em] md:text-2xl'>
              Tecnologia em Análise e Desenvolvimento de Sistemas
            </h3>
            <span className='text-[15px] text-body'>
              IFPE — Instituto Federal de Pernambuco
            </span>
          </div>

          <ul className='border-t border-hairline'>
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className='flex flex-col gap-1 border-b border-hairline py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 md:py-5'
              >
                <span className='text-base font-medium'>{cert.name}</span>
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
