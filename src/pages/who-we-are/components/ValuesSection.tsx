import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ValuesSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      title: 'Inclusion',
      description: 'We believe technology education should be accessible to everyone, regardless of background, gender, or location.',
     
      variant: 'primary',
      pattern: 'dots'
    },
    {
      title: 'Empowerment',
      description: 'Our programs are designed to give participants the skills, confidence, and opportunities to transform their lives.',
 
      variant: 'white',
      pattern: 'lines'
    },
    {
      title: 'Innovation',
      description: 'We continuously adapt our curriculum and methods to meet evolving industry needs and community challenges.',

      variant: 'primary',
      pattern: 'circles'
    },
    {
      title: 'Community',
      description: 'Strong communities are built through collaboration, mutual support, and shared commitment to growth.',
  
      variant: 'white',
      pattern: 'waves'
    }
  ]

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Our Values</h2>
          <p className="text-lead text-center max-w-3xl mx-auto">
            The principles that guide everything we do and shape our approach to education and community development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const getVariantClasses = (variant: string) => {
              if (variant === 'primary') {
                return {
                  bg: 'bg-gradient-to-br from-blue-600 to-blue-700',
                  border: 'border-blue-300',
                  hover: 'hover:from-blue-700 hover:to-blue-800',
                  text: 'text-white',
                 
                  
                  accent: 'bg-white',
                  patternColor: '#ffffff'
                }
              } else {
                return {
                  bg: 'bg-white',
                  border: 'border-blue-200',
                  hover: 'hover:bg-blue-50',
                  text: 'text-neutral-700',
                
                  iconColor: 'text-white',
                  accent: 'bg-blue-600',
                  patternColor: '#0152be'
                }
              }
            }

            const getPatternSVG = (pattern: string, color: string) => {
              const opacity = '0.1'
              switch (pattern) {
                case 'dots':
                  return `<pattern id="dots-${index}" patternUnits="userSpaceOnUse" width="20" height="20"><circle cx="10" cy="10" r="2" fill="${color}" opacity="${opacity}"/></pattern>`
                case 'lines':
                  return `<pattern id="lines-${index}" patternUnits="userSpaceOnUse" width="20" height="20"><path d="M0,20 L20,0" stroke="${color}" stroke-width="1" opacity="${opacity}"/></pattern>`
                case 'circles':
                  return `<pattern id="circles-${index}" patternUnits="userSpaceOnUse" width="25" height="25"><circle cx="12.5" cy="12.5" r="8" fill="none" stroke="${color}" stroke-width="1" opacity="${opacity}"/></pattern>`
                case 'waves':
                  return `<pattern id="waves-${index}" patternUnits="userSpaceOnUse" width="30" height="15"><path d="M0,7.5 Q7.5,0 15,7.5 T30,7.5" fill="none" stroke="${color}" stroke-width="1" opacity="${opacity}"/></pattern>`
                default:
                  return ''
              }
            }

            const getIconSVG = (iconName: string) => {
              switch (iconName) {
                case 'users':
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                case 'trending-up':
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                case 'lightbulb':
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                case 'heart':
                  return (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                default:
                  return null
              }
            }

            const classes = getVariantClasses(value.variant)
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 } 
                }}
                className={`relative overflow-hidden rounded-2xl p-8 text-center group cursor-pointer border-2 ${classes.border} ${classes.bg} ${classes.hover} `}
                style={{
                  transform: isEven ? 'rotate(-1deg)' : 'rotate(1deg)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.02) translateY(-15px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = isEven ? 'rotate(-1deg) scale(1) translateY(0px)' : 'rotate(1deg) scale(1) translateY(0px)'
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <svg className="w-full h-full">
                    <defs dangerouslySetInnerHTML={{ __html: getPatternSVG(value.pattern, classes.patternColor) }} />
                    <rect width="100%" height="100%" fill={`url(#${value.pattern}-${index})`} />
                  </svg>
                </div>

                {/* Floating decorative element */}
                <motion.div
                  className={`absolute top-4 right-4 w-3 h-3 ${classes.accent} rounded-full opacity-60`}
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  
                  
                  {/* Title */}
                  <motion.h3 
                    className={`text-xl font-bold mb-4 ${classes.text} transition-colors duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${classes.text} opacity-90 transition-colors duration-300`}>
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`mt-6 mx-auto h-1 ${classes.accent} rounded-full`}
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: '40%' } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection