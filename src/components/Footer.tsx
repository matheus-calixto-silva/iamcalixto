import { profile } from '@/data/profile';
import type { Dictionary } from '@/i18n/types';

interface FooterProps {
  dict: Dictionary['footer'];
  opensInNewTab: string;
}

export default function Footer({ dict, opensInNewTab }: FooterProps) {
  const socials = [
    { href: profile.linkedin, label: 'LinkedIn', external: true },
    { href: profile.github, label: 'GitHub', external: true },
    { href: profile.whatsapp, label: 'WhatsApp', external: true },
    { href: `mailto:${profile.email}`, label: dict.email, external: false },
  ];

  return (
    <footer>
      <div className='mx-auto flex max-w-7xl flex-col-reverse gap-4 px-4 py-8 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:gap-6 md:px-8 md:py-12'>
        <p>
          © {new Date().getFullYear()} {profile.name} — {profile.city},{' '}
          {profile.region}
        </p>
        <nav
          aria-label={dict.socialAriaLabel}
          className='grid grid-cols-2 border-t border-hairline md:flex md:gap-1 md:border-t-0'
        >
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              {...(social.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className='border-b border-hairline py-3.5 text-body transition-colors duration-200 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text md:border-b-0 md:p-3'
            >
              {social.label}
              {social.external && (
                <span className='sr-only'>{opensInNewTab}</span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
