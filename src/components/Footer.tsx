import { profile } from '@/data/profile';

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', external: true },
  { href: profile.github, label: 'GitHub', external: true },
  { href: profile.whatsapp, label: 'WhatsApp', external: true },
  { href: `mailto:${profile.email}`, label: 'E-mail', external: false },
];

export default function Footer() {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl flex-col-reverse gap-4 px-4 py-8 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:gap-6 md:px-8 md:py-12'>
        <p>
          © {new Date().getFullYear()} {profile.name} — {profile.city},{' '}
          {profile.region}
        </p>
        <nav
          aria-label='Redes'
          className='grid grid-cols-2 border-t border-hairline md:flex md:gap-1 md:border-t-0'
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className='border-b border-hairline py-3.5 text-body transition-colors duration-200 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text md:border-b-0 md:p-3'
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
