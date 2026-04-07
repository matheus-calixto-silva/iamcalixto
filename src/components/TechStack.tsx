import type { LucideIcon } from 'lucide-react';
import { CheckCircle, Layout, Server, Terminal } from 'lucide-react';
import TechCategory from '@/components/TechCategory';

interface CategoryData {
  title: string;
  icon: LucideIcon;
  items: { name: string; primary?: boolean }[];
}

const categories: CategoryData[] = [
  {
    title: 'Frontend',
    icon: Layout,
    items: [
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'Vue 3', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'Tailwind CSS', primary: true },
      { name: 'Angular' },
      { name: 'Ionic' },
      { name: 'Zustand' },
      { name: 'Storybook' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'NestJS', primary: true },
      { name: 'HonoJS', primary: true },
      { name: 'Node.js', primary: true },
      { name: 'Laravel', primary: true },
      { name: 'PostgreSQL', primary: true },
      { name: 'Prisma ORM' },
      { name: 'APIs REST' },
      { name: 'JWT' },
    ],
  },
  {
    title: 'Qualidade',
    icon: CheckCircle,
    items: [
      { name: 'Jest', primary: true },
      { name: 'Vitest', primary: true },
      { name: 'RTL' },
      { name: 'SonarQube' },
    ],
  },
  {
    title: 'DevOps & Ferramentas',
    icon: Terminal,
    items: [
      { name: 'Docker', primary: true },
      { name: 'Git Flow', primary: true },
      { name: 'Grafana' },
      { name: 'Swagger' },
      { name: 'Husky' },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id='stack'
      className='py-24 md:py-32 bg-[#111111]/30 border-y border-white/5'
    >
      <div className='max-w-6xl mx-auto px-6 md:px-12'>
        <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDED] mb-16 flex items-center gap-4'>
          <span className='w-8 h-px bg-[#E63946]/50' />
          Tech Stack
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {categories.map((cat) => (
            <TechCategory
              key={cat.title}
              title={cat.title}
              icon={cat.icon}
              items={cat.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
