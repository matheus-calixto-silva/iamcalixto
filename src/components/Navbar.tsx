import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300'>
      <div className='max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between'>
        <a
          href='/'
          className='text-xl font-semibold tracking-tight text-[#EDEDED] flex items-center gap-1 group'
        >
          M
          <span className='text-[#E63946] transition-transform duration-300 group-hover:scale-125'>
            .
          </span>
          C
        </a>

        <div className='hidden md:flex items-center gap-8 text-base text-[#888888]'>
          <a
            href='#about'
            className='hover:text-[#EDEDED] transition-colors duration-200'
          >
            Sobre
          </a>
          <a
            href='#stack'
            className='hover:text-[#EDEDED] transition-colors duration-200'
          >
            Stack
          </a>
          <a
            href='#experience'
            className='hover:text-[#EDEDED] transition-colors duration-200'
          >
            Experiência
          </a>
          <a
            href='#contact'
            className='hover:text-[#EDEDED] transition-colors duration-200'
          >
            Contato
          </a>
        </div>

        <a
          href='#contact'
          className='hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 text-base text-[#EDEDED] hover:border-[#E63946]/50 hover:bg-[#E63946]/5 hover:shadow-[0_0_15px_rgba(230,57,70,0.15)] transition-all duration-300'
        >
          Fale comigo
        </a>

        <button type='button' className='md:hidden text-[#EDEDED]'>
          <Menu strokeWidth={1.5} className='w-6 h-6' />
        </button>
      </div>
    </nav>
  );
}
