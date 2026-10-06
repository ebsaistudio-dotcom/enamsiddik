export type Language = 'bn' | 'en';

export interface Course {
  id: string;
  titleBn: string;
  titleEn: string;
  taglineBn: string;
  taglineEn: string;
  category: 'ai' | 'design' | 'academy' | 'video';
  categoryLabelBn: string;
  categoryLabelEn: string;
  formatBn: string;
  formatEn: string;
  levelBn: string;
  levelEn: string;
  descriptionBn: string;
  descriptionEn: string;
  highlightsBn: string[];
  highlightsEn: string[];
  syllabusBn: { topic: string; details: string }[];
  syllabusEn: { topic: string; details: string }[];
  prerequisitesBn: string;
  prerequisitesEn: string;
  outcomeBn: string;
  outcomeEn: string;
  badgeBn?: string;
  badgeEn?: string;
}

export interface SiteSettings {
  language: Language;
  customProfilePhotoUrl: string | null;
  customLogoUrl: string | null;
}
