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
    'Access to resources and networking opportunities',
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

        {/* Belinda's Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="heading-md text-primary mb-4">Success Story</h3>
              <p className="text-lg font-semibold text-neutral-800 mb-6">
                From zero knowledge in technology to building web platforms
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="text-center lg:order-1">
                <div className="relative inline-block">
                  <img 
                    src="/images/people/Belinda.jpg" 
                    alt="Belinda, Code Impact Challenge Winner"
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover mx-auto shadow-xl border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-bold text-primary">Belinda</h4>
                  <p className="text-sm font-medium text-neutral-600">Code Impact Challenge Winner</p>
                  <p className="text-sm text-neutral-600">Web Developer & Tech Leader</p>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:order-2">
                <div className="relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-lg leading-relaxed text-neutral-800 italic pl-6">
                    "After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their two-month intensive programming course. Today, I am a front-end developer hoping to grow more in IT.
                    <br /><br />
                    I was the overall winner in the previous competition and now inspire more girls to also pursue tech education. Thank you IT For Youth Ghana."
                  </blockquote>
                  <div className="mt-4 pl-6">
                    <p className="font-semibold text-primary">— Belinda</p>
                    <p className="text-sm text-neutral-600">Web Developer & Tech Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation CTA after Belinda's story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
            Help create more success stories like Belinda's. Your donation empowers youth across Ghana with technology skills.
          </p>
          
          <motion.a
            href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Transform More Lives - Donate Today
          </motion.a>
        </motion.div>

        {/* CHANGED: Link zur vollständigen Impact-Seite */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
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