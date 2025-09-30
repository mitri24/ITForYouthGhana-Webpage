import React, { forwardRef, ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { Link } from 'react-router-dom'

// Button variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'donation'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Base button props
interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
}

// Button-specific props
interface ButtonProps extends BaseButtonProps, 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {}

// Link button props
interface LinkButtonProps extends BaseButtonProps, 
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string
  external?: boolean
}

// Router link button props
interface RouterLinkButtonProps extends BaseButtonProps {
  to: string
}

// Combined props type
type CombinedButtonProps = ButtonProps | LinkButtonProps | RouterLinkButtonProps

const getBaseClasses = (variant: ButtonVariant, size: ButtonSize, fullWidth: boolean, disabled: boolean) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'rounded-xl',
    'transition-all',
    'duration-300',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'cursor-pointer',
    'select-none',
    'border-2',
    'border-transparent',
    'text-center',
    'whitespace-nowrap',
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-1'
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-4', 'py-2', 'text-sm', 'min-h-[40px]', 'min-w-[100px]'],
    md: ['px-6', 'py-3', 'text-base', 'min-h-[48px]', 'min-w-[120px]'],
    lg: ['px-8', 'py-4', 'text-lg', 'min-h-[56px]', 'min-w-[140px]']
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-primary',
      'text-white',
      'border-primary',
      'shadow-lg',
      'hover:bg-primary-600',
      'hover:border-primary-600',
      'hover:shadow-primary',
      'focus:ring-primary',
      'active:bg-primary-700'
    ],
    secondary: [
      'bg-white',
      'text-primary',
      'border-primary',
      'shadow-md',
      'hover:bg-primary',
      'hover:text-white',
      'hover:shadow-primary',
      'focus:ring-primary',
      'active:bg-primary-600'
    ],
    outline: [
      'bg-transparent',
      'text-primary',
      'border-primary',
      'hover:bg-primary',
      'hover:text-white',
      'focus:ring-primary',
      'active:bg-primary-600'
    ],
    ghost: [
      'bg-transparent',
      'text-white',
      'border-white',
      'hover:bg-white',
      'hover:text-primary',
      'focus:ring-white',
      'active:bg-neutral-100'
    ],
    donation: [
      'bg-gradient-to-r',
      'from-green-500',
      'to-green-600',
      'text-white',
      'border-green-500',
      'shadow-lg',
      'hover:from-green-600',
      'hover:to-green-700',
      'hover:shadow-xl',
      'focus:ring-green-500',
      'active:from-green-700',
      'active:to-green-800'
    ]
  }

  const fullWidthClass = fullWidth ? ['w-full'] : []

  return [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    ...fullWidthClass
  ].join(' ')
}

const LoadingSpinner = () => (
  <svg 
    className="animate-spin -ml-1 mr-2 h-4 w-4" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

const ButtonContent = ({ leftIcon, rightIcon, loading, children }: {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
  children: ReactNode
}) => (
  <>
    {loading && <LoadingSpinner />}
    {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
    <span>{children}</span>
    {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
  </>
)

// Helper function to determine button type
const isLinkButton = (props: CombinedButtonProps): props is LinkButtonProps => 
  'href' in props

const isRouterLinkButton = (props: CombinedButtonProps): props is RouterLinkButtonProps =>
  'to' in props

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, CombinedButtonProps & MotionProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      ...restProps
    } = props

    const baseClasses = getBaseClasses(variant, size, fullWidth, disabled || loading)
    const finalClassName = `${baseClasses} ${className}`

    const content = (
      <ButtonContent 
        leftIcon={leftIcon} 
        rightIcon={rightIcon} 
        loading={loading}
      >
        {children}
      </ButtonContent>
    )

    // External link
    if (isLinkButton(props)) {
      const { href, external, ...linkProps } = restProps as any
      return (
        <motion.a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={finalClassName}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          whileHover={!disabled && !loading ? { y: -2 } : undefined}
          whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
          {...linkProps}
        >
          {content}
        </motion.a>
      )
    }

    // Router link
    if (isRouterLinkButton(props)) {
      const { to, ...linkProps } = restProps as any
      return (
        <motion.div
          whileHover={!disabled && !loading ? { y: -2 } : undefined}
          whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
        >
          <Link
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            to={to}
            className={finalClassName}
            {...linkProps}
          >
            {content}
          </Link>
        </motion.div>
      )
    }

    // Regular button
    return (
      <motion.button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={finalClassName}
        disabled={disabled || loading}
        whileHover={!disabled && !loading ? { y: -2 } : undefined}
        whileTap={!disabled && !loading ? { scale: 0.98 } : undefined}
        {...(restProps as any)}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button