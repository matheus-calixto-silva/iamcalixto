/**
 * Language-independent facts about each job. The texts (role, period,
 * description...) live in the dictionaries under `experience.items[id]`.
 */
export const experienceEntries = [
  {
    id: 'green4t',
    company: 'Green4T',
    current: true,
    tags: ['React', 'Ionic', 'NestJS', 'HonoJS', 'Vue.js'],
  },
  {
    id: 'pratics',
    company: 'Pratics',
    current: false,
    tags: ['Vue 3', 'React', 'Zod', 'Laravel', 'JWT'],
  },
  {
    id: 'nttdata',
    company: 'NTT DATA',
    current: false,
    tags: ['React', 'Next.js', 'RTL', 'Storybook'],
  },
  {
    id: 'abraz',
    company: 'Grupo Abraz',
    current: false,
    tags: ['JavaScript', 'PHP', 'MySQL'],
  },
] as const;

export type ExperienceId = (typeof experienceEntries)[number]['id'];
