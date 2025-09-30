import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const challengeData = [
  {
    label: 'Offline Population',
    value: '30.1%',
    description: '10.5M people without internet access'
  },
  {
    label: 'Rural Digital Gap',
    value: '77.3%',
    description: 'Rural residents without internet'
  },
  {
    label: 'Limited Access',
    value: '25%',
    description: 'Rural areas lack mobile coverage'
  },
  {
    label: 'Skills Gap',
    value: '70%',
    description: 'Youth lack digital skills'
  }
]

const Challenge: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="section bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-white mb-6">The Challenge</h2>
          <div className="text-container">
            <p className="text-lead text-white/90">
              Ghana's digital divide creates barriers to opportunity
            </p>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {challengeData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
              className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-blue-500/20 transition-all duration-300 border border-blue-300/20"
            >
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-3 group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-white/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/30">
            <h3 className="heading-md text-white text-center mb-8">Ghana's Digital Divide Impact</h3>
            
            {/* Visual representation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - The Problem */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">Without Digital Access:</h4>
                <div className="space-y-3">
                  {[
                    'Limited job opportunities',
                    'Reduced access to education',
                    'Isolation from digital economy',
                    'Decreased social mobility'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + (index * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - The Solution */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-200 mb-4">With IT For Youth Ghana:</h4>
                <div className="space-y-3">
                  {[
                    'Technology skills training',
                    'Career pathway development',
                    'Digital literacy programs',
                    'Community empowerment'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + (index * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-200 rounded-full flex-shrink-0"></div>
                      <span className="text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white/90 mb-6">
            Be part of the solution. Help us bridge Ghana's digital divide.
          </p>
          
          {/* Donation CTA */}
          <motion.a
            href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
            Support Our Mission - Donate Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenge