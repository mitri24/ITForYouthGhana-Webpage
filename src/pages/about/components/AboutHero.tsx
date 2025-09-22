import React from 'react'
import { motion } from 'framer-motion'

const AboutHero: React.FC = () => {
  return (
    <section className="section-hero bg-primary overflow-hidden relative">
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="heading-xl text-white mb-6">Our Story</h1>
          <div className="text-container">
            <p className="text-lead text-white/90">
              Since 2023, we've been on a mission to bridge Ghana's digital divide and achieve 70% female participation in technology education. Here's how we're transforming lives through accessible, inclusive tech training.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero