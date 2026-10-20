import SectionLabel from '@/components/SectionLabel';
import TechCategory from '@/components/TechCategory';

const categories = [
  {
    slug: 'frontend',
    items: [
      'React',
      'Next.js',
      'Vue 3',
      'TypeScript',
      'Tailwind CSS',
      'Angular',
      'Ionic',
      'Zustand',
      'Storybook',
    ],
  },
  {
    slug: 'backend',
    items: [
      'NestJS',
      'HonoJS',
      'Node.js',
      'Laravel',
      'PostgreSQL',
      'Prisma ORM',
      'APIs REST',
      'JWT',
    ],
  },
  {
    slug: 'qualidade',
    items: ['Jest', 'Vitest', 'React Testing Library', 'SonarQube'],
  },
  {
    slug: 'devops',
    items: ['Docker', 'Git Flow', 'Grafana', 'Swagger', 'Husky'],
  },
];

const techCount = categories.reduce((sum, cat) => sum + cat.items.length, 0);

export default function TechStack() {
  return (
    <section id='stack' className='border-b border-divider'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-4 py-[72px] md:gap-14 md:px-8 md:py-32'>
        <div className='flex flex-wrap items-end justify-between gap-6'>
          <div className='flex flex-col gap-4 md:gap-5'>
            <SectionLabel index='02'>Tech Stack</SectionLabel>
            <p className='text-heading font-semibold'>
              Ferramentas do dia a dia.
            </p>
          </div>
          <span className='font-mono text-[13px] text-muted'>
            {categories.length} áreas · {techCount} tecnologias
          </span>
        </div>

        <div className='grid grid-cols-2 border-t border-l border-hairline md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]'>
          {categories.map((cat) => (
            <TechCategory key={cat.slug} slug={cat.slug} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
