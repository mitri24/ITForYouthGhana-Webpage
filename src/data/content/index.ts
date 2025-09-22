// Re-export all content modules as a single content object for backward compatibility
export { seo, type SEOData } from './seo';
export { hero, type HeroData, type HeroStat } from './hero';
export { mission, about, type MissionData, type AboutData, type Challenge, type ChallengeStat, type Value, type Team, type Transparency } from './mission';
export { programs, type ProgramsData, type MainProgram, type Course, type FutureProgram } from './programs';
export { impact, type ImpactData, type ImpactStory } from './impact';
export { volunteer, type VolunteerData, type VolunteerRole } from './volunteer';
export { contact, type ContactData, type Leadership } from './contact';
export { cta, type CTAData, type CTAButton } from './cta';
export { faq, type FAQItem } from './faq';

// Import all modules
import { seo } from './seo';
import { hero } from './hero';
import { mission, about } from './mission';
import { programs } from './programs';
import { impact } from './impact';
import { volunteer } from './volunteer';
import { contact } from './contact';
import { cta } from './cta';
import { faq } from './faq';

// Main content object that maintains the original structure
export const content = {
  seo,
  hero,
  mission,
  programs,
  impact,
  about,
  volunteer,
  contact,
  cta,
  faq
};