import ExperienceItem from '@/components/ExperienceItem';
import SectionLabel from '@/components/SectionLabel';

const experiences = [
  {
    company: 'Green4T',
    location: 'Remoto',
    role: 'Desenvolvedor Fullstack',
    level: 'Pleno',
    period: 'Fev 2025 — Presente',
    current: true,
    description:
      'Desenvolvimento de aplicações mobile com React e Ionic, construção de APIs escaláveis utilizando NestJS e HonoJS. Manutenção de dashboards Vue.js, implementação de APIs de geolocalização e garantia de qualidade de código via Jest, SonarQube e monitoramento com Grafana.',
    tags: ['React', 'Ionic', 'NestJS', 'HonoJS', 'Vue.js'],
  },
  {
    company: 'Pratics',
    location: 'Remoto',
    role: 'Desenvolvedor Fullstack',
    level: 'Pleno',
    period: 'Abr 2024 — Jan 2025',
    description:
      'Engenharia de componentes robustos em Vue 3 e React. Tratamento de validações complexas de formulários utilizando Zod e Vee-Validate. Construção de serviços backend seguros com Laravel e Node.js, implementando fluxos de autenticação JWT.',
    tags: ['Vue 3', 'React', 'Zod', 'Laravel', 'JWT'],
  },
  {
    company: 'NTT DATA',
    location: 'Recife',
    role: 'Desenvolvedor Frontend',
    level: 'Júnior',
    period: 'Out 2022 — Mar 2024',
    description:
      'Desenvolvimento de funcionalidades principais para o Banco Bradesco utilizando React e Next.js. Garantia de confiabilidade da aplicação através de testes abrangentes com React Testing Library e manutenção de documentação de componentes via Storybook.',
    tags: ['React', 'Next.js', 'RTL', 'Storybook'],
  },
  {
    company: 'Grupo Abraz',
    location: 'Recife',
    role: 'Estagiário Fullstack',
    period: 'Jul 2021 — Ago 2022',
    description:
      'Criação de interfaces responsivas e scripts JavaScript dinâmicos. Gerenciamento de sistemas de geração de documentos utilizando arquiteturas PHP e MySQL.',
    tags: ['JavaScript', 'PHP', 'MySQL'],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='scroll-mt-[72px] border-b border-divider'
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-[72px] md:gap-14 md:px-8 md:py-32'>
        <div className='flex flex-col gap-4 md:gap-5'>
          <SectionLabel index='03'>Experiência</SectionLabel>
          <p className='text-heading font-semibold'>Onde construí.</p>
        </div>

        <ol className='border-t border-hairline'>
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}
