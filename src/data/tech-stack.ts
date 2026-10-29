/** Technology names are the same in every language; only the area labels change. */
export const techCategories = [
  {
    id: 'frontend',
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
    id: 'backend',
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
    id: 'quality',
    items: ['Jest', 'Vitest', 'React Testing Library', 'SonarQube'],
  },
  {
    id: 'devops',
    items: ['Docker', 'Git Flow', 'Grafana', 'Swagger', 'Husky'],
  },
] as const;

export type TechCategoryId = (typeof techCategories)[number]['id'];

/** Highlighted in the About section. */
export const mainStack = [
  'React',
  'Vue',
  'TypeScript',
  'NestJS',
  'HonoJS',
  'Laravel',
] as const;
