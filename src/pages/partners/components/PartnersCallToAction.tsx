import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PartnersCallToAction: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-6">Ready to Partner With Us?</h2>
          <p className="text-lead mb-8">
            Whether you're a corporation, educational institution, government agency, or NGO, 
            we have partnership opportunities that can create meaningful impact while achieving your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Start a Conversation
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/impact'}
            >
              View Our Impact
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersCallToAction