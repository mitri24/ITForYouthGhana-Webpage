import React, { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
  placeholder?: string
  lazy?: boolean
  quality?: number
  sizes?: string
  blur?: boolean
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  lazy = true,
  quality = 75,
  blur = true,
  className = '',
  sizes,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(lazy ? placeholder : src)
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!lazy || !imageRef) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src)
          observerRef.current?.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    observerRef.current.observe(imageRef)

    return () => observerRef.current?.disconnect()
  }, [imageRef, src, lazy])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    if (fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
  }

  const imageClasses = [
    'transition-all duration-500 ease-out',
    isLoaded ? 'opacity-100' : 'opacity-0',
    blur && !isLoaded ? 'blur-sm' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className="relative overflow-hidden">
      <img
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        className={imageClasses}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
        {...props}
      />
      
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-neutral-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
      )}
      
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
          <div className="text-center text-neutral-500">
            <svg 
              className="w-8 h-8 mx-auto mb-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage