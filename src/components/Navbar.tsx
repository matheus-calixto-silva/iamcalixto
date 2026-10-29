'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { type Locale, localePath } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text';

interface NavbarProps {
  locale: Locale;
  dict: Dictionary['nav'];
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const links = [
    { href: '#about', label: dict.about },
    { href: '#stack', label: dict.stack },
    { href: '#experience', label: dict.experience },
    { href: '#faq', label: dict.faq },
    { href: '#contact', label: dict.contact },
  ];

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
          href={localePath(locale)}
          aria-label={dict.homeAriaLabel}
          className={`font-mono text-lg font-semibold tracking-[-0.5px] text-ink ${focusRing}`}
        >
          M<span className='text-accent'>.</span>C
        </a>

        <nav
          aria-label={dict.ariaLabel}
          className='hidden items-center gap-1 lg:flex'
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
          <LanguageSwitcher
            current={locale}
            label={dict.language}
            className='ml-2'
            linkClassName='h-11 px-2.5'
          />
          <a
            href='#contact'
            className={`ml-3 inline-flex h-11 items-center border border-ink px-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas ${focusRing}`}
          >
            {dict.cta}
          </a>
        </nav>

        <div className='flex items-center gap-2 lg:hidden'>
          <a
            href='#contact'
            className={`inline-flex h-11 items-center border border-ink px-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink ${focusRing}`}
          >
            {dict.cta}
          </a>
          <button
            ref={menuButtonRef}
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            aria-label={isOpen ? dict.closeMenu : dict.openMenu}
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
        aria-label={dict.ariaLabel}
        hidden={!isOpen}
        className='border-t border-divider px-4 lg:hidden'
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`flex h-14 items-center border-b border-hairline text-[13px] font-medium uppercase tracking-[0.05em] text-body hover:text-ink ${focusRing}`}
          >
            {link.label}
          </a>
        ))}
        <LanguageSwitcher
          current={locale}
          label={dict.language}
          className='py-1'
          linkClassName='h-14 w-full'
        />
      </nav>
    </header>
  );
}
