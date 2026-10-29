export const degreeYears = '2017 — 2023';

/** Names are translated in the dictionaries under `education.certifications[id]`. */
export const certificationEntries = [
  { id: 'typescript', issuer: 'University of Helsinki' },
  { id: 'react', issuer: 'Origamid' },
  { id: 'rwd', issuer: 'freeCodeCamp' },
] as const;

export type CertificationId = (typeof certificationEntries)[number]['id'];
