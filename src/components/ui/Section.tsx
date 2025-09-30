import React, { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'neutral' | 'primary' | 'secondary' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  animate?: boolean
  id?: string
  as?: keyof JSX.IntrinsicElements
}

const getBackgroundClasses = (background: string) => {
  const backgrounds = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    gradient: 'bg-gradient-to-br from-primary to-secondary text-white'
  }
  return backgrounds[background] || backgrounds.white
}

const getPaddingClasses = (padding: string) => {
  const paddings = {
    none: '',
    sm: 'py-12',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40'
  }
  return paddings[padding] || paddings.md
}

const getMaxWidthClasses = (maxWidth: string) => {
  const maxWidths = {
    none: '',
    sm: 'max-w-2xl mx-auto',
    md: 'max-w-4xl mx-auto',
    lg: 'max-w-6xl mx-auto',
    xl: 'max-w-7xl mx-auto',
    full: 'max-w-full'
  }
  return maxWidths[maxWidth] || maxWidths.lg
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'md',
  maxWidth = 'lg',
  animate = true,
  id,
  as: Component = 'section'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const backgroundClasses = getBackgroundClasses(background)
  const paddingClasses = getPaddingClasses(padding)
  const maxWidthClasses = getMaxWidthClasses(maxWidth)

  const sectionClasses = `${backgroundClasses} ${paddingClasses} ${className}`
  const containerClasses = `container ${maxWidthClasses}`

  const content = (
    <div className={containerClasses}>
      {children}
    </div>
  )

  if (!animate) {
    return (
      <Component id={id} className={sectionClasses}>
        {content}
      </Component>
    )
  }

  return (
    <Component 
      ref={ref} 
      id={id} 
      className={sectionClasses}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={containerClasses}
      >
        {children}
      </motion.div>
    </Component>
  )
}

// Section sub-components
export const SectionHeader: React.FC<{
  children: ReactNode
  className?: string
  center?: boolean
}> = ({
  children,
  className = '',
  center = true
}) => (
  <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
    {children}
  </div>
)

export const SectionTitle: React.FC<{
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3
}> = ({
  children,
  className = '',
  level = 2
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const sizeClasses = {
    1: 'heading-xl',
    2: 'heading-lg',
    3: 'heading-md'
  }

  return (
    <Tag className={`${sizeClasses[level]} mb-6 ${className}`}>
      {children}
    </Tag>
  )
}

export const SectionSubtitle: React.FC<{
  children: ReactNode
  className?: string
}> = ({
  children,
  className = ''
}) => (
  <p className={`text-lead max-w-3xl mx-auto ${className}`}>
    {children}
  </p>
)

export const SectionContent: React.FC<{
  children: ReactNode
  className?: string
}> = ({
  children,
  className = ''
}) => (
  <div className={`mt-16 ${className}`}>
    {children}
  </div>
)

export default Section