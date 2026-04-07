import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center pt-24 pb-12'>
      {/* SVG Filter for neon duotone image effect */}
      <svg
        className='hidden'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
      >
        <defs>
          <filter id='neon-duotone'>
            <feColorMatrix
              type='matrix'
              values='0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0'
              result='gray'
            />
            <feComponentTransfer in='gray' result='contrast'>
              <feFuncR type='linear' slope={1.8} intercept={-0.3} />
              <feFuncG type='linear' slope={1.8} intercept={-0.3} />
              <feFuncB type='linear' slope={1.8} intercept={-0.3} />
            </feComponentTransfer>
            <feColorMatrix
              type='matrix'
              in='contrast'
              values='0.86 0 0 0 0.04  0.18 0 0 0 0.04  0.23 0 0 0 0.04  0 0 0 1 0'
              result='duotone'
            />
          </filter>
        </defs>
      </svg>

      <div className='max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
        {/* Left: Text Content */}
        <div className='lg:col-span-7 flex flex-col justify-center'>
          <h1 className='text-6xl md:text-8xl font-semibold tracking-tight leading-none text-[#EDEDED] mb-2'>
            Matheus
            <br />
            Calixto<span className='text-[#E63946]'>.</span>
          </h1>

          <p className='text-xl md:text-2xl text-[#888888] font-light mt-8 max-w-xl leading-relaxed'>
            Desenvolvedor Fullstack · Construindo experiências web &amp; mobile
            escaláveis.
          </p>

          <div className='flex items-center gap-2 mt-6 text-base text-[#888888] font-light'>
            <MapPin strokeWidth={1.5} className='w-4 h-4 text-[#8B5E6B]' />
            <span>Recife, PE — Brasil</span>
          </div>

          <div className='mt-12 flex flex-wrap items-center gap-6'>
            <a
              href='#contact'
              className='inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#E63946]/40 text-[#EDEDED] bg-transparent hover:border-[#E63946] hover:bg-[#E63946]/10 hover:shadow-[0_0_20px_rgba(230,57,70,0.2)] transition-all duration-300 text-lg group'
            >
              Entre em contato
              <ArrowRight
                strokeWidth={1.5}
                className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
              />
            </a>

            <div className='flex items-center gap-4'>
              <a
                href='https://linkedin.com/in/matheus-calixto-silva'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full text-[#888888] hover:text-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300'
              >
                <Linkedin strokeWidth={1.5} className='w-6 h-6' />
              </a>
              <a
                href='https://github.com/matheus-calixto-silva'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full text-[#888888] hover:text-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300'
              >
                <Github strokeWidth={1.5} className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Halftone Portrait */}
        <div className='lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 aspect-4/5 rounded-2xl overflow-hidden group'>
          <div className='absolute inset-0 bg-[#0A0A0A]' />
          <Image
            src='/hero-img.webp'
            alt='Matheus Calixto'
            fill
            priority
            className='object-cover transition-transform duration-1000 group-hover:scale-105'
            style={{ filter: 'url(#neon-duotone)' }}
          />
          <div className='absolute inset-0 halftone-overlay opacity-20 mix-blend-overlay pointer-events-none' />
          <div className='absolute inset-0 shadow-[inset_0_0_80px_30px_#0A0A0A] pointer-events-none' />
          <div className='absolute inset-0 bg-[#E63946]/0 group-hover:bg-[#E63946]/10 mix-blend-screen transition-colors duration-500 pointer-events-none' />
        </div>
      </div>
    </section>
  );
}
