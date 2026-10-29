import type { Dictionary } from '@/i18n/types';

export const es: Dictionary = {
  meta: {
    jobTitle: 'Desarrollador Full Stack',
    jobTitleInCity: 'Desarrollador Full Stack en Recife',
    summary:
      'Desarrollador Full Stack con base en Recife, PE, Brasil, con experiencia en aplicaciones web y móviles, APIs y dashboards.',
    description:
      'Desarrollador Full Stack con experiencia desde 2021 en React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js y Laravel. Trabaja en aplicaciones web y móviles, APIs y dashboards. Con base en Recife, Pernambuco, Brasil.',
    country: 'Brasil',
    topics: ['Desarrollo Full Stack', 'APIs REST'],
    ogLabel: 'Portafolio',
    ogAlt: 'Matheus Calixto — Desarrollador Full Stack',
    alumniOf: 'IFPE — Instituto Federal de Pernambuco',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    opensInNewTab: ' (se abre en una pestaña nueva)',
  },
  nav: {
    ariaLabel: 'Principal',
    homeAriaLabel: 'M.C — Matheus Calixto, página de inicio',
    about: 'Sobre mí',
    stack: 'Stack',
    experience: 'Experiencia',
    faq: 'Preguntas',
    contact: 'Contacto',
    cta: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },
  hero: {
    availability: 'Disponible para nuevos proyectos',
    taglineBefore: 'Desarrollador Full Stack · Creando experiencias ',
    taglineHighlight: 'web y móviles',
    taglineAfter: ' escalables.',
    cta: 'Ponte en contacto',
    imageAlt: 'Retrato de Matheus Calixto bajo luz roja',
    caption: 'Full Stack · desde 2021',
  },
  about: {
    label: 'Sobre mí',
    lead: 'Trabajo en desarrollo Full Stack desde 2021, creando aplicaciones web y móviles, APIs y dashboards',
    leadMuted:
      '— con experiencia en APIs REST, sistemas de rastreo en tiempo real, frontend y backend.',
    stackIntro: 'Mi stack principal incluye',
    nowLabel: 'Ahora',
    now: 'Estudiando Arquitectura de Software y Design Systems.',
  },
  stack: {
    label: 'Tech Stack',
    heading: 'Herramientas del día a día.',
    categories: {
      frontend: 'frontend',
      backend: 'backend',
      quality: 'calidad',
      devops: 'devops',
    },
    summary: (areas, technologies) =>
      `${areas} áreas · ${technologies} tecnologías`,
  },
  experience: {
    label: 'Experiencia',
    heading: 'Donde he construido.',
    items: {
      green4t: {
        location: 'Remoto',
        role: 'Desarrollador Full Stack',
        level: 'Semi senior',
        period: 'Feb 2025 — Presente',
        description:
          'Desarrollo de aplicaciones móviles con React e Ionic y construcción de APIs escalables con NestJS y HonoJS. Mantenimiento de dashboards en Vue.js, implementación de APIs de geolocalización y aseguramiento de la calidad del código con Jest y SonarQube, con monitoreo en Grafana.',
      },
      pratics: {
        location: 'Remoto',
        role: 'Desarrollador Full Stack',
        level: 'Semi senior',
        period: 'Abr 2024 — Ene 2025',
        description:
          'Ingeniería de componentes robustos en Vue 3 y React. Manejo de validaciones complejas de formularios con Zod y Vee-Validate. Construcción de servicios backend seguros con Laravel y Node.js, implementando flujos de autenticación JWT.',
      },
      nttdata: {
        location: 'Recife',
        role: 'Desarrollador Frontend',
        level: 'Junior',
        period: 'Oct 2022 — Mar 2024',
        description:
          'Desarrollo de funcionalidades principales para Banco Bradesco con React y Next.js. Garantía de la confiabilidad de la aplicación mediante pruebas exhaustivas con React Testing Library y mantenimiento de la documentación de componentes en Storybook.',
      },
      abraz: {
        location: 'Recife',
        role: 'Practicante Full Stack',
        period: 'Jul 2021 — Ago 2022',
        description:
          'Creación de interfaces responsivas y scripts JavaScript dinámicos. Gestión de sistemas de generación de documentos con arquitecturas PHP y MySQL.',
      },
    },
  },
  education: {
    label: 'Formación y certificaciones',
    degree: 'Tecnólogo en Análisis y Desarrollo de Sistemas',
    institution: 'IFPE — Instituto Federal de Pernambuco',
    certifications: {
      typescript: 'TypeScript & Full Stack',
      react: 'React y JavaScript',
      rwd: 'Responsive Web Design',
    },
  },
  faq: {
    label: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué tecnologías utiliza Matheus Calixto?',
        answer:
          'Su stack incluye React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js y Laravel. También tiene experiencia con PostgreSQL, Ionic, APIs REST, Jest, Docker y Grafana.',
      },
      {
        question: '¿Qué tipo de aplicaciones desarrolla?',
        answer:
          'Matheus trabaja en aplicaciones web y móviles, APIs, dashboards y sistemas de rastreo en tiempo real, tanto en el frontend como en el backend.',
      },
      {
        question: '¿Cuál es la experiencia profesional de Matheus?',
        answer:
          'Matheus trabaja en desarrollo de software desde 2021. Su trayectoria incluye desarrollo Full Stack y Frontend en aplicaciones web, APIs, interfaces móviles y dashboards.',
      },
      {
        question: '¿Dónde se encuentra Matheus Calixto?',
        answer:
          'Matheus tiene su base en Recife, Pernambuco, Brasil, y ha trabajado en equipos remotos.',
      },
      {
        question: '¿Cómo contactar a Matheus?',
        answer:
          'Usa los enlaces de WhatsApp y correo electrónico de la sección de contacto. LinkedIn también está disponible en el portafolio.',
      },
    ],
  },
  contact: {
    label: 'Contacto',
    heading: 'Construyamos algo juntos.',
    text: 'Actualmente abierto a nuevas oportunidades. Si tienes alguna pregunta o solo quieres conversar, ¡haré lo posible por responder!',
    whatsapp: 'WhatsApp',
    email: 'Enviar correo',
  },
  footer: {
    socialAriaLabel: 'Redes sociales',
    email: 'Correo',
  },
};
