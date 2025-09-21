// CHANGED: Kompakte Kern-Benefits (3-4 Punkte) für Home-Seite
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content'

// CHANGED: Fokus auf 3 Kern-Benefits statt 4 detaillierte Challenges
const kernBenefits = [
  {
    title: 'Free Tech Education',
    description: 'No-cost programming, web development, and digital skills training for all participants.',
    icon: 'EDU'
  },
  {
    title: '70% Female Participation',
    description: 'Leading Ghana in gender-inclusive tech education with specialized support for women.',
    icon: 'GEN'
  },
  {
    title: 'Job-Ready Skills',
    description: 'Hands-on training with real projects, leading to employment and entrepreneurship opportunities.',
    icon: 'JOB'
  }
]

const Vision: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        {/* CHANGED: Kompakter Header für Kern-Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <h2 className="heading-lg mb-6">Why Choose IT for Youth Ghana</h2>
          <div className="text-container">
            <p className="text-lead text-center">
              Ghana's leading NGO for inclusive tech education with proven results in bridging the digital gender gap.
            </p>
          </div>
        </motion.div>

        {/* CHANGED: 3 Kern-Benefits mit Icons statt Bildern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: 'var(--space-3xl)' }}>
          {kernBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="card text-center group"
            >
              {/* CHANGED: Icon statt Bild für cleanes Design */}
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <span className="text-white font-bold text-lg">{benefit.icon}</span>
              </div>
              
              <h3 className="heading-sm mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-body">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CHANGED: Kompakte Mission als Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl text-center"
          style={{ padding: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}
        >
          <h3 className="heading-md mb-4">Our Mission</h3>
          <div className="text-container">
            <p className="text-lead">
              {content.about.mission}
            </p>
          </div>
        </motion.div>

        {/* CHANGED: Kompakte Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
                <p className="text-sm font-medium text-neutral-600">
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