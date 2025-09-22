import React from 'react'
import { motion } from 'framer-motion'

const ProgramsHero: React.FC = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="hero-title">Our Programs</h1>
          <p className="hero-subtitle">
            Comprehensive technology education for every background and skill level
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsHero