// Shared page types
export interface PageProps {
  title?: string
  description?: string
  canonical?: string
}

export interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  primaryCta?: {
    text: string
    action: () => void
  }
  secondaryCta?: {
    text: string
    action: () => void
  }
}

export interface FeatureCardProps {
  icon: string | JSX.Element
  title: string
  description: string
  link?: string
}

export interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon?: string | JSX.Element
}

export interface TestimonialProps {
  name: string
  role: string
  company?: string
  image: string
  quote: string
  program?: string
  year?: string
}

export interface StatisticProps {
  value: string
  label: string
  description?: string
}