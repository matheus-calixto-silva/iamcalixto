import { ArrowRight, MapPin } from 'lucide-react';
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
                <span className='sr-only'>LinkedIn</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
              <a
                href='https://github.com/matheus-calixto-silva'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-full text-[#888888] hover:text-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300'
              >
                <span className='sr-only'>GitHub</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
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
