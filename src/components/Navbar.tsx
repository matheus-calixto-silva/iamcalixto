'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experiência' },
  { href: '#faq', label: 'Perguntas' },
  { href: '#contact', label: 'Contato' },
];

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className='sticky top-0 z-50 border-b border-divider bg-canvas'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-8'>
        <a
          href='/'
          aria-label='M.C — Matheus Calixto, página inicial'
          className={`font-mono text-lg font-semibold tracking-[-0.5px] text-ink ${focusRing}`}
        >
          M<span className='text-accent'>.</span>C
        </a>

        <nav
          aria-label='Principal'
          className='hidden items-center gap-1 md:flex'
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-3 text-[13px] font-medium uppercase tracking-[0.05em] text-body transition-colors duration-200 hover:text-ink ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href='#contact'
            className={`ml-3 inline-flex h-11 items-center border border-ink px-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas ${focusRing}`}
          >
            Fale comigo
          </a>
        </nav>

        <div className='flex items-center gap-2 md:hidden'>
          <a
            href='#contact'
            className={`inline-flex h-11 items-center border border-ink px-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink ${focusRing}`}
          >
            Fale comigo
          </a>
          <button
            ref={menuButtonRef}
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            className={`inline-flex size-11 items-center justify-center border border-hairline text-ink ${focusRing}`}
          >
            {isOpen ? (
              <X strokeWidth={1.5} className='size-[18px]' />
            ) : (
              <Menu strokeWidth={1.5} className='size-[18px]' />
            )}
          </button>
        </div>
      </div>

      <nav
        id='mobile-menu'
        aria-label='Principal'
        hidden={!isOpen}
        className='border-t border-divider px-4 md:hidden'
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`flex h-14 items-center border-b border-hairline text-[13px] font-medium uppercase tracking-[0.05em] text-body last:border-b-0 hover:text-ink ${focusRing}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
