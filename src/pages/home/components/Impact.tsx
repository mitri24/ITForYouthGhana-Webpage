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

// CHANGED: Before/After für Teaser
const beforeAfterData = {
  before: [
    'Limited or no tech skills',
    'Uncertain career prospects',
    'Limited access to resources'
  ],
  after: [
    'Job-ready programming skills',
    'Clear career pathways',
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

        {/* CHANGED: Before & After Comparison (Teaser) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto" style={{ marginBottom: 'var(--space-3xl)' }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="card bg-neutral-100" style={{ padding: 'var(--space-lg)' }}>
              <h3 className="heading-sm text-neutral-600 mb-6">Before Our Programs</h3>
              <ul className="space-y-4">
                {beforeAfterData.before.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <span className="w-3 h-3 bg-neutral-400 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-body">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="card bg-gradient-to-br from-primary/10 to-accent/10" style={{ padding: 'var(--space-lg)' }}>
              <h3 className="heading-sm mb-6">After Our Programs</h3>
              <ul className="space-y-4">
                {beforeAfterData.after.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-primary font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
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