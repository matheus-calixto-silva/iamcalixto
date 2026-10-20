import SectionLabel from '@/components/SectionLabel';

export default function About() {
  return (
    <section id='about' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-wrap gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <div className='flex-[1_1_240px]'>
          <SectionLabel index='01'>Sobre</SectionLabel>
        </div>

        <div className='flex min-w-0 flex-[999_1_640px] flex-col gap-10'>
          <p className='text-lead font-medium'>
            Atuo em desenvolvimento Fullstack desde 2021, criando aplicações web
            e mobile, APIs e dashboards{' '}
            <span className='text-muted'>
              — com experiência em APIs REST, sistemas de rastreamento em tempo
              real, frontend e backend.
            </span>
          </p>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 border-t border-hairline pt-8'>
            <p className='text-base leading-relaxed text-body'>
              Minha stack principal inclui{' '}
              <span className='text-ink'>React</span>,{' '}
              <span className='text-ink'>Vue</span>,{' '}
              <span className='text-ink'>TypeScript</span>,{' '}
              <span className='text-ink'>NestJS</span>,{' '}
              <span className='text-ink'>HonoJS</span> e{' '}
              <span className='text-ink'>Laravel</span>.
            </p>
            <div className='flex flex-col gap-2'>
              <span className='font-mono text-xs uppercase tracking-[1px] text-muted'>
                Agora
              </span>
              <p className='text-base leading-relaxed text-ink'>
                Estudando Arquitetura de Software e Design Systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
