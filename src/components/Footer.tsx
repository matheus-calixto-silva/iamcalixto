import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id='contact'
      className='py-24 md:py-32 border-t border-white/5 bg-[#0A0A0A] relative overflow-hidden'
    >
      {/* Subtle footer glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(230,57,70,0.08),transparent_70%)] pointer-events-none' />

      <div className='max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10'>
        <h2 className='text-4xl md:text-6xl font-semibold tracking-tight text-[#EDEDED] mb-8'>
          Vamos construir algo <span className='text-[#E63946]'>juntos.</span>
        </h2>
        <p className='text-xl text-[#888888] font-light mb-12 max-w-xl mx-auto'>
          Atualmente aberto a novas oportunidades. Se você tem alguma pergunta
          ou só quer trocar uma ideia, farei o possível para responder!
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='https://wa.me/5581998143248'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white font-medium hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all duration-300 text-lg'
          >
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
            WhatsApp
          </a>

          <a
            href='mailto:matheuscalixto8@gmail.com'
            className='inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-medium hover:scale-105 transition-transform duration-300 text-lg'
          >
            Enviar E-mail
            <Mail strokeWidth={1.5} className='w-5 h-5' />
          </a>
        </div>

        <div className='mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-base text-[#888888] font-light'>
            © 2025 Matheus Calixto. Todos os direitos reservados.
          </p>
          <div className='flex items-center gap-6 text-base'>
            <a
              href='https://linkedin.com/in/matheus-calixto-silva'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#888888] hover:text-[#E63946] transition-colors duration-200'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/matheus-calixto-silva'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#888888] hover:text-[#E63946] transition-colors duration-200'
            >
              GitHub
            </a>
            <a
              href='https://wa.me/5581998143248'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#888888] hover:text-[#25D366] transition-colors duration-200'
            >
              WhatsApp
            </a>
            <a
              href='mailto:matheuscalixto8@gmail.com'
              className='text-[#888888] hover:text-[#E63946] transition-colors duration-200'
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
