import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DonationSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const fundingGoals = [
    {
      amount: '$50',
      impact: 'Provides coding materials for 1 student for a month',
      supporters: 143
    },
    {
      amount: '$150',
      impact: 'Sponsors complete training for 1 girl in tech',
      supporters: 89
    },
    {
      amount: '$500',
      impact: 'Funds a full coding bootcamp for 5 students',
      supporters: 34
    },
    {
      amount: '$1,000',
      impact: 'Establishes a tech lab in an underserved community',
      supporters: 12
    }
  ]

  return (
    <section ref={ref} className="section bg-gradient-to-br from-green-50 to-green-100">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6 text-primary">Join Our Mission</h2>
          <div className="text-container">
            <p className="text-lead text-center mb-8">
              Every donation directly impacts a young person's future in technology. 
              Help us reach our goal of training 1,000 girls in coding and digital skills.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between text-sm text-neutral-600 mb-2">
              <span>Progress</span>
              <span>67% funded</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '67%' } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
              ></motion.div>
            </div>
            <div className="flex justify-between text-lg font-semibold text-primary mt-2">
              <span>$45,230 raised</span>
              <span>$67,500 goal</span>
            </div>
          </div>
        </motion.div>

        {/* Donation Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {fundingGoals.map((goal, index) => (
            <motion.div
              key={goal.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-3">
                  {goal.amount}
                </div>
                <p className="text-sm text-neutral-700 mb-4 min-h-[3rem]">
                  {goal.impact}
                </p>
                <div className="text-xs text-neutral-500 mb-4">
                  {goal.supporters} supporters
                </div>
                <motion.a
                  href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate {goal.amount}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              padding: '20px 40px',
              fontSize: '18px',
              fontWeight: '700',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.div>
            Make a Custom Donation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          
          <p className="text-sm text-neutral-600 mt-4 max-w-md mx-auto">
            Secure donation through GlobalGiving. Your contribution is tax-deductible and goes directly to program costs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DonationSection