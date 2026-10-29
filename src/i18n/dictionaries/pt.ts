import type { Dictionary } from '@/i18n/types';

export const pt: Dictionary = {
  meta: {
    jobTitle: 'Desenvolvedor Fullstack',
    jobTitleInCity: 'Desenvolvedor Fullstack em Recife',
    summary:
      'Desenvolvedor Fullstack baseado em Recife, PE, com experiência em aplicações web e mobile, APIs e dashboards.',
    description:
      'Desenvolvedor Fullstack com experiência desde 2021 em React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js e Laravel. Atua em aplicações web e mobile, APIs e dashboards. Baseado em Recife, Pernambuco, Brasil.',
    country: 'Brasil',
    topics: ['Desenvolvimento Fullstack', 'APIs REST'],
    ogLabel: 'Portfólio',
    ogAlt: 'Matheus Calixto — Desenvolvedor Fullstack',
    alumniOf: 'IFPE — Instituto Federal de Pernambuco',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    opensInNewTab: ' (abre em nova aba)',
  },
  nav: {
    ariaLabel: 'Principal',
    homeAriaLabel: 'M.C — Matheus Calixto, página inicial',
    about: 'Sobre',
    stack: 'Stack',
    experience: 'Experiência',
    faq: 'Perguntas',
    contact: 'Contato',
    cta: 'Fale comigo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
  },
  hero: {
    availability: 'Disponível para novos projetos',
    taglineBefore: 'Desenvolvedor Fullstack · Construindo experiências ',
    taglineHighlight: 'web & mobile',
    taglineAfter: ' escaláveis.',
    cta: 'Entre em contato',
    imageAlt: 'Retrato de Matheus Calixto sob luz vermelha',
    caption: 'Fullstack · desde 2021',
  },
  about: {
    label: 'Sobre',
    lead: 'Atuo em desenvolvimento Fullstack desde 2021, criando aplicações web e mobile, APIs e dashboards',
    leadMuted:
      '— com experiência em APIs REST, sistemas de rastreamento em tempo real, frontend e backend.',
    stackIntro: 'Minha stack principal inclui',
    nowLabel: 'Agora',
    now: 'Estudando Arquitetura de Software e Design Systems.',
  },
  stack: {
    label: 'Tech Stack',
    heading: 'Ferramentas do dia a dia.',
    categories: {
      frontend: 'frontend',
      backend: 'backend',
      quality: 'qualidade',
      devops: 'devops',
    },
    summary: (areas, technologies) =>
      `${areas} áreas · ${technologies} tecnologias`,
  },
  experience: {
    label: 'Experiência',
    heading: 'Onde construí.',
    items: {
      green4t: {
        location: 'Remoto',
        role: 'Desenvolvedor Fullstack',
        level: 'Pleno',
        period: 'Fev 2025 — Presente',
        description:
          'Desenvolvimento de aplicações mobile com React e Ionic, construção de APIs escaláveis utilizando NestJS e HonoJS. Manutenção de dashboards Vue.js, implementação de APIs de geolocalização e garantia de qualidade de código via Jest, SonarQube e monitoramento com Grafana.',
      },
      pratics: {
        location: 'Remoto',
        role: 'Desenvolvedor Fullstack',
        level: 'Pleno',
        period: 'Abr 2024 — Jan 2025',
        description:
          'Engenharia de componentes robustos em Vue 3 e React. Tratamento de validações complexas de formulários utilizando Zod e Vee-Validate. Construção de serviços backend seguros com Laravel e Node.js, implementando fluxos de autenticação JWT.',
      },
      nttdata: {
        location: 'Recife',
        role: 'Desenvolvedor Frontend',
        level: 'Júnior',
        period: 'Out 2022 — Mar 2024',
        description:
          'Desenvolvimento de funcionalidades principais para o Banco Bradesco utilizando React e Next.js. Garantia de confiabilidade da aplicação através de testes abrangentes com React Testing Library e manutenção de documentação de componentes via Storybook.',
      },
      abraz: {
        location: 'Recife',
        role: 'Estagiário Fullstack',
        period: 'Jul 2021 — Ago 2022',
        description:
          'Criação de interfaces responsivas e scripts JavaScript dinâmicos. Gerenciamento de sistemas de geração de documentos utilizando arquiteturas PHP e MySQL.',
      },
    },
  },
  education: {
    label: 'Formação e certificações',
    degree: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'IFPE — Instituto Federal de Pernambuco',
    certifications: {
      typescript: 'TypeScript & Full Stack',
      react: 'React e JavaScript',
      rwd: 'Responsive Web Design',
    },
  },
  faq: {
    label: 'Perguntas frequentes',
    items: [
      {
        question: 'Quais tecnologias Matheus Calixto utiliza?',
        answer:
          'A stack inclui React, Next.js, Vue, TypeScript, NestJS, HonoJS, Node.js e Laravel. Também tem experiência com PostgreSQL, Ionic, APIs REST, Jest, Docker e Grafana.',
      },
      {
        question: 'Que tipo de aplicação ele desenvolve?',
        answer:
          'Matheus trabalha em aplicações web e mobile, APIs, dashboards e sistemas de rastreamento em tempo real, participando do frontend e do backend.',
      },
      {
        question: 'Qual é a experiência profissional de Matheus?',
        answer:
          'Matheus atua na área de desenvolvimento desde 2021. Seu histórico inclui desenvolvimento Fullstack e Frontend em aplicações web, APIs, interfaces mobile e dashboards.',
      },
      {
        question: 'Onde Matheus Calixto está localizado?',
        answer:
          'Matheus está baseado em Recife, Pernambuco, Brasil, e já atuou em equipes remotas.',
      },
      {
        question: 'Como entrar em contato com Matheus?',
        answer:
          'Use os links de WhatsApp e e-mail na seção de contato. O LinkedIn também está disponível no portfólio.',
      },
    ],
  },
  contact: {
    label: 'Contato',
    heading: 'Vamos construir algo juntos.',
    text: 'Atualmente aberto a novas oportunidades. Se você tem alguma pergunta ou só quer trocar uma ideia, farei o possível para responder!',
    whatsapp: 'WhatsApp',
    email: 'Enviar e-mail',
  },
  footer: {
    socialAriaLabel: 'Redes',
    email: 'E-mail',
  },
};
