import React, { useRef, useState, useEffect, ReactNode } from 'react'

interface LazyLoadWrapperProps {
  children: ReactNode
  placeholder?: ReactNode
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  placeholder,
  rootMargin = '50px',
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [rootMargin, threshold, triggerOnce])

  const shouldShowContent = triggerOnce ? hasTriggered || isVisible : isVisible

  return (
    <div ref={elementRef} className={className}>
      {shouldShowContent ? children : placeholder}
    </div>
  )
}

export default LazyLoadWrapper