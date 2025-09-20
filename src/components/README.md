# 📁 Components Structure

This directory contains all Vue.js components organized by their purpose and functionality.

## 🗂️ Folder Structure

```
components/
├── sections/           # Page-specific sections
│   ├── home/          # Homepage sections
│   ├── about/         # About page sections
│   ├── contact/       # Contact page sections
│   ├── programs/      # Programs page sections
│   ├── volunteer/     # Volunteer page sections
│   └── news/          # News page sections
├── layout/            # Layout components (header, footer, etc.)
├── ui/               # Reusable UI components
└── icons/            # Icon components
```

## 📋 Component Categories

### 🏠 Sections (`/sections/`)
Page-specific sections that make up the main content areas of each page.

#### Home Sections (`/sections/home/`)
- `HomeHeroSection.vue` - Main hero banner with call-to-action
- `HomeImpactSection.vue` - Impact statistics and achievements
- `HomeChallengeSection.vue` - Problem statement and solutions
- `HomeTestimonialSection.vue` - Student success stories
- `HomeTrainingGallerySection.vue` - Training program gallery
- `HomeCallToActionSection.vue` - Final call-to-action section
- `HomeContactSection.vue` - Contact information section

#### About Sections (`/sections/about/`)
- `AboutHeroSection.vue` - About page hero
- `AboutMissionSection.vue` - Mission and vision
- `AboutApproachSection.vue` - Our approach and methodology
- `AboutLeadershipSection.vue` - Leadership team
- `AboutMentorsSection.vue` - Mentors and advisors
- `AboutModeratorsSection.vue` - Program moderators
- `AboutCTASection.vue` - About page call-to-action

#### Contact Sections (`/sections/contact/`)
- `ContactHeroSection.vue` - Contact page hero
- `ContactFormSection.vue` - Main contact form
- `ContactTeamSection.vue` - Team contact information
- `ContactFAQSection.vue` - Frequently asked questions
- `ContactCTASection.vue` - Contact call-to-action
- `ContactPageHeader.vue` - Page header component
- `ContactPageForm.vue` - Contact form component
- `ContactPageInfo.vue` - Contact information component

#### Volunteer Sections (`/sections/volunteer/`)
- `VolunteerHeroSection.vue` - Volunteer page hero
- `VolunteerOpportunitiesSection.vue` - Available opportunities
- `VolunteerRequirementsSection.vue` - Volunteer requirements
- `VolunteerProcessSection.vue` - Application process
- `VolunteerBenefitsSection.vue` - Volunteer benefits
- `VolunteerApplicationSection.vue` - Application form
- `VolunteerCTASection.vue` - Volunteer call-to-action

#### Programs Sections (`/sections/programs/`)
- `ProgramsOverviewSection.vue` - Programs overview

#### News Sections (`/sections/news/`)
- `NewsLinkedInSection.vue` - LinkedIn news integration

### 🎨 Layout (`/layout/`)
Components that define the overall page structure and navigation.

- `AppFooter.vue` - Main application footer
- `AppNavbar.vue` - Main navigation bar
- `Footer.vue` - Alternative footer component
- `NavBar.vue` - Alternative navigation component
- `SEOHead.vue` - SEO meta tags and head content
- `SharedSocialSection.vue` - Social media section

### 🧩 UI Components (`/ui/`)
Reusable interface components that can be used across different sections.

- `DonationButton.vue` - Donation call-to-action button
- `ScrollToTop.vue` - Scroll to top functionality

### 🎯 Icons (`/icons/`)
SVG icon components for consistent iconography.

- `IconCommunity.vue`
- `IconDocumentation.vue`
- `IconEcosystem.vue`
- `IconSupport.vue`
- `IconTooling.vue`

## 📖 Usage Examples

### Importing Home Sections
```typescript
import {
  HeroSection,
  ImpactSection,
  ChallengeSection,
  TestimonialSection
} from '@/components/sections/home'
```

### Importing Layout Components
```typescript
import { SEOHead, AppNavbar, AppFooter } from '@/components/layout'
```

### Importing UI Components
```typescript
import { DonationButton, ScrollToTop } from '@/components/ui'
```

## 🔄 Index Files
Each folder contains an `index.ts` file that exports all components, making imports cleaner and more maintainable.

## 📝 Naming Conventions
- **Sections**: `[Page][Purpose]Section.vue` (e.g., `HomeHeroSection.vue`)
- **Layout**: Descriptive names (e.g., `AppNavbar.vue`, `SEOHead.vue`)
- **UI**: Descriptive names (e.g., `DonationButton.vue`)
- **Icons**: `Icon[Name].vue` (e.g., `IconCommunity.vue`)

## 🚀 Benefits of This Structure
1. **Clear Organization**: Easy to find specific components
2. **Scalability**: New sections can be easily added
3. **Maintainability**: Related components are grouped together
4. **Reusability**: UI components can be used across different pages
5. **Clean Imports**: Index files make imports more readable