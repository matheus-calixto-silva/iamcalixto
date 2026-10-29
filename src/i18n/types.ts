import type { CertificationId } from '@/data/education';
import type { ExperienceId } from '@/data/experience';
import type { TechCategoryId } from '@/data/tech-stack';

export interface ExperienceText {
  location: string;
  role: string;
  level?: string;
  period: string;
  description: string;
}

/**
 * Every language must fill every key. Adding a key here makes TypeScript
 * point at each dictionary that is still missing it.
 */
export interface Dictionary {
  meta: {
    /** "Full-Stack Developer" */
    jobTitle: string;
    /** "Full-Stack Developer in Recife", used in the page title */
    jobTitleInCity: string;
    /** Short text for social cards */
    summary: string;
    /** Longer text for search results and structured data */
    description: string;
    country: string;
    /** Extra search keywords that are not technology names */
    topics: string[];
    /** Word on the social card, above the name */
    ogLabel: string;
    ogAlt: string;
    alumniOf: string;
  };
  a11y: {
    skipToContent: string;
    opensInNewTab: string;
  };
  nav: {
    ariaLabel: string;
    homeAriaLabel: string;
    about: string;
    stack: string;
    experience: string;
    faq: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    availability: string;
    taglineBefore: string;
    taglineHighlight: string;
    taglineAfter: string;
    cta: string;
    imageAlt: string;
    caption: string;
  };
  about: {
    label: string;
    lead: string;
    leadMuted: string;
    stackIntro: string;
    nowLabel: string;
    now: string;
  };
  stack: {
    label: string;
    heading: string;
    categories: Record<TechCategoryId, string>;
    summary: (areas: number, technologies: number) => string;
  };
  experience: {
    label: string;
    heading: string;
    items: Record<ExperienceId, ExperienceText>;
  };
  education: {
    label: string;
    degree: string;
    institution: string;
    certifications: Record<CertificationId, string>;
  };
  faq: {
    label: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    heading: string;
    text: string;
    whatsapp: string;
    email: string;
  };
  footer: {
    socialAriaLabel: string;
    email: string;
  };
}
