import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/profile';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text';

const outlineLink = `inline-flex h-[52px] items-center gap-2 border border-hairline px-[22px] font-mono text-[13px] text-ink transition-colors duration-200 hover:border-ink ${focusRing}`;

export default function Hero() {
  return (
    <section id='top' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-end gap-8 px-4 pt-12 md:gap-16 md:px-8 md:pt-24'>
        <div className='flex min-w-0 flex-[999_1_560px] flex-col gap-8 md:pb-24'>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-body md:text-[13px]'>
            <span
              aria-hidden='true'
              className='inline-block size-2 bg-accent'
            />
            <span>Disponível para novos projetos</span>
            <span aria-hidden='true' className='text-faint'>
              /
            </span>
            <span>
              {profile.city}, {profile.region} — {profile.country}
            </span>
          </div>

          <h1 className='text-display font-semibold'>
            Matheus
            <br />
            Calixto<span className='text-accent'>.</span>
          </h1>

          <p className='max-w-[560px] text-[17px] leading-normal text-body md:text-xl'>
            Desenvolvedor Fullstack · Construindo experiências{' '}
            <span className='text-ink'>web &amp; mobile</span> escaláveis.
          </p>

          <div className='flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3'>
            <a
              href='#contact'
              className={`inline-flex h-[52px] items-center justify-between gap-3 bg-accent px-7 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-accent-hover ${focusRing}`}
            >
              Entre em contato
              <ArrowRight strokeWidth={1.5} className='size-4' />
            </a>
            <div className='grid grid-cols-2 gap-2 sm:flex sm:gap-3'>
              <a
                href={profile.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className={`${outlineLink} justify-center`}
              >
                LinkedIn
                <span className='sr-only'> (abre em nova aba)</span>
                <ArrowUpRight strokeWidth={1.5} className='size-3.5' />
              </a>
              <a
                href={profile.github}
                target='_blank'
                rel='noopener noreferrer'
                className={`${outlineLink} justify-center`}
              >
                GitHub
                <span className='sr-only'> (abre em nova aba)</span>
                <ArrowUpRight strokeWidth={1.5} className='size-3.5' />
              </a>
            </div>
          </div>
        </div>

        <figure className='m-0 flex min-w-0 max-w-[440px] flex-[1_1_340px] flex-col self-stretch max-md:max-w-none'>
          <div className='relative min-h-[420px] flex-1 overflow-hidden border border-b-0 border-hairline bg-surface md:min-h-[480px]'>
            <Image
              src='/hero-img.webp'
              alt='Retrato de Matheus Calixto sob luz vermelha'
              fill
              priority
              sizes='(min-width: 768px) 440px, 100vw'
              className='object-cover object-[55%_30%]'
            />
            <span
              aria-hidden='true'
              className='absolute bottom-0 left-0 h-1 w-12 bg-accent md:w-16'
            />
          </div>
          <figcaption className='flex justify-between border-t border-hairline py-3 font-mono text-xs text-muted'>
            <span>
              MC — {profile.city}, {profile.region}
            </span>
            <span>Fullstack · desde 2021</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
