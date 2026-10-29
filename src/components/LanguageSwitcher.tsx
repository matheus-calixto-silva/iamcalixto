'use client';

import {
  type Locale,
  localeCookie,
  localeMeta,
  localePath,
  locales,
} from '@/i18n/config';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text';

interface LanguageSwitcherProps {
  current: Locale;
  label: string;
  className?: string;
  linkClassName?: string;
}

function rememberLocale(locale: Locale) {
  // Plain preference cookie, read by src/proxy.ts so the visitor's choice
  // wins over the browser language the next time they open the home page.
  // biome-ignore lint/suspicious/noDocumentCookie: tiny preference cookie, no Cookie Store API in all browsers yet
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({
  current,
  label,
  className = '',
  linkClassName = '',
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className={className}>
      <ul className='flex items-center'>
        {locales.map((locale) => {
          const { htmlLang, label: code, name } = localeMeta[locale];
          const isCurrent = locale === current;

          return (
            <li key={locale} className='flex-1 lg:flex-none'>
              <a
                href={localePath(locale)}
                hrefLang={htmlLang}
                lang={htmlLang}
                aria-label={`${code} — ${name}`}
                aria-current={isCurrent ? 'true' : undefined}
                onClick={() => rememberLocale(locale)}
                className={`inline-flex items-center justify-center border-b-2 font-mono text-[13px] font-medium uppercase tracking-[0.05em] transition-colors duration-200 hover:text-ink ${
                  isCurrent
                    ? 'border-accent text-ink'
                    : 'border-transparent text-muted'
                } ${focusRing} ${linkClassName}`}
              >
                {code}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
