// CHANGED: Kompakte Kern-Benefits (3-4 Punkte) für Home-Seite
// CHANGED: Kompakte Kern-Benefits (3-4 Punkte) für Home-Seite
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'

// CHANGED: Fokus auf 3 Kern-Benefits mit Random Pictures
const kernBenefits = [
  {
    title: 'Quality Tech Education',
    description: 'Professional programming, web development, and digital skills training with scholarship opportunities.',
  },
  {
    title: '70% Female Participation',
    description: 'Leading Ghana in gender-inclusive tech education with specialized support for women.',
  },
  {
    title: 'Job-Ready Skills',
    description: 'Hands-on training with real projects, leading to employment and entrepreneurship opportunities.',
  }
]

const Vision: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
       

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl text-center mb-20"
          style={{ padding: 'var(--space-2xl)' }}
        >
          <h3 className="heading-md mb-4">Our Mission</h3>
          <div className="text-container">
            <p className="text-lead">
              {content.about.mission}
            </p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kernBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + (index * 0.1)
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="text-center group"
              >
                <h4 className="heading-sm text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h4>
                
                <p className="text-body text-gray-600 mb-6">
                  {benefit.description}
                </p>
                
                <button 
                  className="text-primary font-medium hover:text-primary-600 transition-colors duration-200 inline-flex items-center"
                  onClick={() => {
                    // Navigate to relevant section based on benefit type
                    if (benefit.title === 'Quality Tech Education') {
                      window.location.href = '/programs';
                    } else if (benefit.title === '70% Female Participation') {
                      window.location.href = '/impact';
                    } else if (benefit.title === 'Job-Ready Skills') {
                      window.location.href = '/programs';
                    }
                  }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.hero.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-sm font-medium text-neutral-800">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision