import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface GridProps {
  children: ReactNode
  className?: string
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
  stagger?: number
}

const getGridClasses = (cols: GridProps['cols'], gap: string) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }

  const baseClasses = ['grid', gapClasses[gap] || gapClasses.lg]
  
  if (cols) {
    const { default: defaultCols, sm, md, lg, xl } = cols
    const colClasses = []
    
    if (defaultCols) colClasses.push(`grid-cols-${defaultCols}`)
    if (sm) colClasses.push(`sm:grid-cols-${sm}`)
    if (md) colClasses.push(`md:grid-cols-${md}`)
    if (lg) colClasses.push(`lg:grid-cols-${lg}`)
    if (xl) colClasses.push(`xl:grid-cols-${xl}`)
    
    return [...baseClasses, ...colClasses]
  }

  return [...baseClasses, 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3']
}

export const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols,
  gap = 'lg',
  animate = true,
  stagger = 0.1
}) => {
  const gridClasses = getGridClasses(cols, gap)
  const finalClassName = `${gridClasses.join(' ')} ${className}`

  if (!animate) {
    return (
      <div className={finalClassName}>
        {children}
      </div>
    )
  }

  const childrenArray = React.Children.toArray(children)

  return (
    <div className={finalClassName}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: index * stagger,
            ease: 'easeOut'
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Responsive grid presets
export const GridCols1: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid {...props} cols={{ default: 1 }} />
)

export const GridCols2: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid {...props} cols={{ default: 1, md: 2 }} />
)

export const GridCols3: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid {...props} cols={{ default: 1, md: 2, lg: 3 }} />
)

export const GridCols4: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid {...props} cols={{ default: 1, sm: 2, lg: 4 }} />
)

export const GridResponsive: React.FC<Omit<GridProps, 'cols'>> = (props) => (
  <Grid {...props} cols={{ default: 1, sm: 2, md: 2, lg: 3, xl: 4 }} />
)

export default Grid