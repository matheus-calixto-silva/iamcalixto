import ExperienceItem from '@/components/ExperienceItem';

const experiences = [
  {
    role: 'Desenvolvedor Fullstack',
    level: 'Pleno',
    company: 'Green4T (Remoto)',
    companyColor: '#E63946',
    dotColor: '#E63946',
    period: 'Fev 2025 – Presente',
    description:
      'Desenvolvimento de aplicações mobile com React e Ionic, construção de APIs escaláveis utilizando NestJS e HonoJS. Manutenção de dashboards Vue.js, implementação de APIs de geolocalização e garantia de qualidade de código via Jest, SonarQube e monitoramento com Grafana.',
  },
  {
    role: 'Desenvolvedor Fullstack',
    level: 'Pleno',
    company: 'Pratics (Remoto)',
    companyColor: '#8B5E6B',
    dotColor: '#8B5E6B',
    period: 'Abr 2024 – Jan 2025',
    description:
      'Engenharia de componentes robustos em Vue 3 e React. Tratamento de validações complexas de formulários utilizando Zod e Vee-Validate. Construção de serviços backend seguros com Laravel e Node.js, implementando fluxos de autenticação JWT.',
  },
  {
    role: 'Desenvolvedor Frontend',
    level: 'Júnior',
    company: 'NTT DATA (Recife)',
    companyColor: '#888888',
    dotColor: 'rgba(255,255,255,0.2)',
    period: 'Out 2022 – Mar 2024',
    description:
      'Desenvolvimento de funcionalidades principais para o Banco Bradesco utilizando React e Next.js. Garantia de confiabilidade da aplicação através de testes abrangentes com React Testing Library e manutenção de documentação de componentes via Storybook.',
  },
  {
    role: 'Estagiário Fullstack',
    company: 'Grupo Abraz (Recife)',
    companyColor: '#888888',
    dotColor: 'rgba(255,255,255,0.1)',
    period: 'Jul 2021 – Ago 2022',
    description:
      'Criação de interfaces responsivas e scripts JavaScript dinâmicos. Gerenciamento de sistemas de geração de documentos utilizando arquiteturas PHP e MySQL.',
  },
];

export default function Experience() {
  return (
    <section id='experience' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDED] mb-16 flex items-center gap-4'>
          <span className='w-8 h-px bg-[#E63946]/50' />
          Experiência
        </h2>

        <div className='relative border-l border-white/10 ml-3 md:ml-4 space-y-16'>
          {experiences.map((exp) => (
            <ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
