import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import { profile } from '@/data/profile';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

export default function Contact() {
  return (
    <section id='contact' className='bg-accent'>
      <div className='mx-auto flex max-w-7xl flex-col gap-7 px-4 py-[72px] md:gap-12 md:px-8 md:py-32'>
        <SectionLabel index='06' inverse>
          Contato
        </SectionLabel>
        <p className='max-w-[1000px] text-contact font-semibold text-ink'>
          Vamos construir algo juntos.
        </p>

        <div className='flex flex-wrap items-end justify-between gap-8'>
          <p className='max-w-[440px] text-[17px] leading-normal text-ink md:text-lg'>
            Atualmente aberto a novas oportunidades. Se você tem alguma pergunta
            ou só quer trocar uma ideia, farei o possível para responder!
          </p>

          <div className='flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3'>
            <a
              href={profile.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex h-14 items-center justify-between gap-3 bg-canvas px-7 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-black ${focusRing}`}
            >
              WhatsApp
              <span className='sr-only'> (abre em nova aba)</span>
              <ArrowRight strokeWidth={1.5} className='size-4' />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex h-14 items-center justify-center border border-ink px-7 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-ink hover:text-accent ${focusRing}`}
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
