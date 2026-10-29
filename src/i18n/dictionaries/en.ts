import type { Dictionary } from '@/i18n/types';

export const en: Dictionary = {
  meta: {
    jobTitle: 'Full-Stack Developer',
    jobTitleInCity: 'Full-Stack Developer in Recife',
    summary:
      'Full-Stack Developer based in Recife, PE, Brazil, with experience in web and mobile applications, APIs and dashboards.',
    description:
      'Full-Stack Developer with experience since 2021 in React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js and Laravel. Works on web and mobile applications, APIs and dashboards. Based in Recife, Pernambuco, Brazil.',
    country: 'Brazil',
    topics: ['Full-Stack Development', 'REST APIs'],
    ogLabel: 'Portfolio',
    ogAlt: 'Matheus Calixto — Full-Stack Developer',
    alumniOf: 'IFPE — Federal Institute of Pernambuco',
  },
  a11y: {
    skipToContent: 'Skip to content',
    opensInNewTab: ' (opens in a new tab)',
  },
  nav: {
    ariaLabel: 'Main',
    homeAriaLabel: 'M.C — Matheus Calixto, home page',
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    faq: 'FAQ',
    contact: 'Contact',
    cta: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    availability: 'Available for new projects',
    taglineBefore: 'Full-Stack Developer · Building scalable ',
    taglineHighlight: 'web & mobile',
    taglineAfter: ' experiences.',
    cta: 'Get in touch',
    imageAlt: 'Portrait of Matheus Calixto under red light',
    caption: 'Full-stack · since 2021',
  },
  about: {
    label: 'About',
    lead: "I've worked in full-stack development since 2021, building web and mobile applications, APIs and dashboards",
    leadMuted:
      '— with experience in REST APIs, real-time tracking systems, front end and back end.',
    stackIntro: 'My main stack includes',
    nowLabel: 'Now',
    now: 'Studying Software Architecture and Design Systems.',
  },
  stack: {
    label: 'Tech Stack',
    heading: 'Everyday tools.',
    categories: {
      frontend: 'frontend',
      backend: 'backend',
      quality: 'quality',
      devops: 'devops',
    },
    summary: (areas, technologies) =>
      `${areas} areas · ${technologies} technologies`,
  },
  experience: {
    label: 'Experience',
    heading: "Where I've built.",
    items: {
      green4t: {
        location: 'Remote',
        role: 'Full-Stack Developer',
        level: 'Mid-level',
        period: 'Feb 2025 — Present',
        description:
          'Developing mobile applications with React and Ionic and building scalable APIs with NestJS and HonoJS. Maintaining Vue.js dashboards, implementing geolocation APIs, and ensuring code quality with Jest and SonarQube, with monitoring in Grafana.',
      },
      pratics: {
        location: 'Remote',
        role: 'Full-Stack Developer',
        level: 'Mid-level',
        period: 'Apr 2024 — Jan 2025',
        description:
          'Engineering robust components in Vue 3 and React. Handling complex form validation with Zod and Vee-Validate. Building secure backend services with Laravel and Node.js, implementing JWT authentication flows.',
      },
      nttdata: {
        location: 'Recife',
        role: 'Front-End Developer',
        level: 'Junior',
        period: 'Oct 2022 — Mar 2024',
        description:
          'Developing core features for Banco Bradesco using React and Next.js. Ensuring application reliability through comprehensive testing with React Testing Library and maintaining component documentation in Storybook.',
      },
      abraz: {
        location: 'Recife',
        role: 'Full-Stack Intern',
        period: 'Jul 2021 — Aug 2022',
        description:
          'Building responsive interfaces and dynamic JavaScript scripts. Managing document generation systems built on PHP and MySQL architectures.',
      },
    },
  },
  education: {
    label: 'Education and certifications',
    degree: 'Technology Degree in Systems Analysis and Development',
    institution: 'IFPE — Federal Institute of Pernambuco',
    certifications: {
      typescript: 'TypeScript & Full Stack',
      react: 'React and JavaScript',
      rwd: 'Responsive Web Design',
    },
  },
  faq: {
    label: 'Frequently asked questions',
    items: [
      {
        question: 'Which technologies does Matheus Calixto use?',
        answer:
          'The stack includes React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js and Laravel. He also has experience with PostgreSQL, Ionic, REST APIs, Jest, Docker and Grafana.',
      },
      {
        question: 'What kind of applications does he build?',
        answer:
          'Matheus works on web and mobile applications, APIs, dashboards and real-time tracking systems, on both the front end and the back end.',
      },
      {
        question: "What is Matheus's professional experience?",
        answer:
          'Matheus has worked in software development since 2021. His background includes Full-Stack and Front-End development of web applications, APIs, mobile interfaces and dashboards.',
      },
      {
        question: 'Where is Matheus Calixto based?',
        answer:
          'Matheus is based in Recife, Pernambuco, Brazil, and has worked with remote teams.',
      },
      {
        question: 'How can I contact Matheus?',
        answer:
          'Use the WhatsApp and email links in the contact section. LinkedIn is also available on the portfolio.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    heading: "Let's build something together.",
    text: "Currently open to new opportunities. If you have a question or just want to chat, I'll do my best to reply!",
    whatsapp: 'WhatsApp',
    email: 'Send email',
  },
  footer: {
    socialAriaLabel: 'Social links',
    email: 'Email',
  },
};
