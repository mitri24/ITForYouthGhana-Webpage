// CHANGED: Impact-Snapshot für Home-Seite (Before & After Teaser)
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

// CHANGED: Kompakte Impact-Stats für Teaser
const quickStats = [
  { number: '200+', label: 'Lives Transformed' },
  { number: '70%', label: 'Female Participation' },
  { number: '25+', label: 'Partner Schools' }
]

// UPDATED: Erweiterte Before/After Vergleich
const beforeAfterData = {
  before: [
    'Limited or no tech skills',
    'Little confidence in own abilities',
    'Uncertainty about career paths',
    'Limited access to resources',
    'Missing networks in the tech industry'
  ],
  after: [
    'Solid tech skills in chosen field',
    'Self-confidence and problem-solving abilities',
    'Clear career goals and development plans',
    'Access to mentors and resources',
    'Strong professional networks'
  ]
}

const Impact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="section bg-neutral-50">
      <div className="container">
        {/* CHANGED: Impact-Snapshot Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <h2 className="heading-lg mb-6">Our Impact</h2>
          <div className="text-container">
            <p className="text-lead text-center">
              See how we're transforming lives through technology education across Ghana
            </p>
          </div>
        </motion.div>

        {/* UPDATED: Moderne Before & After Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto" style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-lg mb-4">Transformation Journey</h3>
            <p className="text-lead text-neutral-800 max-w-3xl mx-auto">
              See how our programs transform participants from uncertainty to tech confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Before - Redesigned with better centering */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-neutral-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-700 mb-2">Before the Program</h4>
                </div>
                <ul className="space-y-3">
                  {beforeAfterData.before.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + (index * 0.05) }}
                    >
                      <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-800 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* After - Redesigned with better centering */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-l-4 border-primary">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">After the Program</h4>
                </div>
                <ul className="space-y-3">
                  {beforeAfterData.after.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + (index * 0.05) }}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-primary font-medium leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Arrow between sections */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CHANGED: Quick Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-lg font-medium text-neutral-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CHANGED: Link zur vollständigen Impact-Seite */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/impact" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
            <motion.button
              className="btn btn-primary btn-lg"
              style={{ minHeight: 'var(--touch-comfort)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See Full Impact Story
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact