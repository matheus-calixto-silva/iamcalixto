const linkedin = 'https://linkedin.com/in/matheus-calixto-silva';
const github = 'https://github.com/matheus-calixto-silva';

/**
 * Facts that do not depend on the language. Texts (job title, description,
 * country name...) live in `src/i18n/dictionaries`.
 */
export const profile = {
  name: 'Matheus Calixto',
  url: 'https://iamcalixto.dev.br',
  city: 'Recife',
  region: 'PE',
  countryCode: 'BR',
  linkedin,
  github,
  socialLinks: [linkedin, github],
  email: 'matheuscalixto8@gmail.com',
  whatsapp: 'https://wa.me/5581998143248',
  lastModified: '2026-10-29',
  technologies: [
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'NestJS',
    'HonoJS',
    'Node.js',
    'Laravel',
    'PostgreSQL',
    'Ionic',
  ],
} as const;
