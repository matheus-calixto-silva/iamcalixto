export default function About() {
  return (
    <section id='about' className='py-24 md:py-32 relative'>
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDED] mb-12 flex items-center gap-4'>
          <span className='w-8 h-px bg-[#E63946]/50' />
          Sobre
        </h2>

        <div className='max-w-3xl'>
          <p className='text-xl md:text-2xl text-[#888888] font-light leading-relaxed'>
            Atuo em desenvolvimento Fullstack desde 2021, criando aplicações{' '}
            <span className='text-[#EDEDED]'>web e mobile</span>, APIs e
            dashboards. Minha stack principal inclui{' '}
            <span className='text-[#EDEDED]'>React</span>,{' '}
            <span className='text-[#EDEDED]'>Vue</span>,{' '}
            <span className='text-[#EDEDED]'>TypeScript</span>,{' '}
            <span className='text-[#EDEDED]'>NestJS</span>,{' '}
            <span className='text-[#EDEDED]'>HonoJS</span> e{' '}
            <span className='text-[#EDEDED]'>Laravel</span>.
          </p>
          <p className='text-xl md:text-2xl text-[#888888] font-light leading-relaxed mt-6'>
            Tenho experiência com APIs REST, sistemas de rastreamento em tempo
            real e desenvolvimento de frontend e backend. Também estudo{' '}
            <span className='text-[#8B5E6B]'>Arquitetura de Software</span> e{' '}
            <span className='text-[#8B5E6B]'>Design Systems</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
