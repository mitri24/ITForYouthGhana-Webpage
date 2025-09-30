import React from 'react'

interface ScreenReaderTextProps {
  children: React.ReactNode
  className?: string
}

export const ScreenReaderText: React.FC<ScreenReaderTextProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <span className={`sr-only ${className}`}>
      {children}
    </span>
  )
}

interface VisuallyHiddenProps {
  children: React.ReactNode
  focusable?: boolean
  className?: string
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  focusable = false,
  className = ''
}) => {
  const baseClasses = focusable 
    ? 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:rounded'
    : 'sr-only'

  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  )
}

export default ScreenReaderText