import React from 'react'
import { motion } from 'framer-motion'

const PartnersHero: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0c2d5a' }}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="hero-title">Partner With Us</h1>
          <p className="hero-subtitle">
            Join us in creating lasting impact through technology education and digital inclusion across Ghana.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersHero