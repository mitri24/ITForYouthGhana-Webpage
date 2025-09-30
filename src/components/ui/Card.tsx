import React, { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

export interface CardProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'minimal' | 'primary'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}

const getCardClasses = (variant: string, size: string, hover: boolean, clickable: boolean) => {
  const baseClasses = [
    'bg-white',
    'rounded-2xl',
    'transition-all',
    'duration-300',
    'ease-out',
    'flex',
    'flex-col'
  ]

  const variantClasses = {
    default: [
      'border',
      'border-neutral-200',
      'shadow-soft',
      hover ? 'hover:shadow-strong' : '',
      hover ? 'hover:border-primary' : '',
      hover ? 'hover:-translate-y-1' : ''
    ],
    elevated: [
      'shadow-lg',
      'border',
      'border-neutral-100',
      hover ? 'hover:shadow-primary' : '',
      hover ? 'hover:-translate-y-2' : ''
    ],
    minimal: [
      'border',
      'border-neutral-100',
      hover ? 'hover:border-neutral-300' : '',
      hover ? 'hover:shadow-soft' : ''
    ],
    primary: [
      'border-2',
      'border-primary',
      'shadow-primary',
      hover ? 'hover:shadow-primary-lg' : '',
      hover ? 'hover:-translate-y-1' : ''
    ]
  }

  const sizeClasses = {
    sm: ['p-4', 'min-h-[200px]'],
    md: ['p-6', 'min-h-[280px]'],
    lg: ['p-8', 'min-h-[320px]']
  }

  const clickableClasses = clickable ? ['cursor-pointer'] : []

  return [
    ...baseClasses,
    ...variantClasses[variant] || variantClasses.default,
    ...sizeClasses[size] || sizeClasses.md,
    ...clickableClasses
  ].filter(Boolean).join(' ')
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  hover = true,
  clickable = false,
  onClick,
  ...motionProps
}) => {
  const cardClasses = getCardClasses(variant, size, hover, clickable)
  const finalClassName = `${cardClasses} ${className}`

  const cardProps = {
    className: finalClassName,
    onClick: clickable ? onClick : undefined,
    whileHover: hover ? { y: -4 } : undefined,
    whileTap: clickable ? { scale: 0.98 } : undefined,
    ...motionProps
  }

  return (
    <motion.div {...cardProps}>
      {children}
    </motion.div>
  )
}

// Card sub-components
export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <div className={`pb-4 border-b border-neutral-200 mb-4 ${className}`}>
    {children}
  </div>
)

export const CardBody: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <div className={`flex-1 flex flex-col ${className}`}>
    {children}
  </div>
)

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <div className={`flex-1 ${className}`}>
    {children}
  </div>
)

export const CardFooter: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <div className={`pt-4 mt-auto ${className}`}>
    {children}
  </div>
)

export const CardTitle: React.FC<{ 
  children: ReactNode 
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}> = ({
  children,
  className = '',
  level = 3
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const sizeClasses = {
    1: 'text-3xl font-bold',
    2: 'text-2xl font-bold',
    3: 'text-xl font-semibold',
    4: 'text-lg font-semibold',
    5: 'text-base font-medium',
    6: 'text-sm font-medium'
  }

  return (
    <Tag className={`text-primary mb-2 ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  )
}

export const CardDescription: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <p className={`text-neutral-600 leading-relaxed ${className}`}>
    {children}
  </p>
)

export default Card