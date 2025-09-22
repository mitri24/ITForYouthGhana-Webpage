import React from 'react'
import { motion } from 'framer-motion'

interface VolunteerHeroProps {
  onApplyClick: () => void
  onViewRolesClick: () => void
}

const VolunteerHero: React.FC<VolunteerHeroProps> = ({ onApplyClick, onViewRolesClick }) => {
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
          <h1 className="hero-title">Join Our Volunteer Team</h1>
          <div className="text-container">
            <p className="hero-subtitle mb-8">
              Transform lives through technology. Use your skills to bridge Ghana's digital divide and empower the next generation of tech leaders.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <motion.button
              onClick={onApplyClick}
              className="bg-white text-primary hover:bg-neutral-100 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.button>
            <motion.button
              onClick={onViewRolesClick}
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-2xl font-bold px-8 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Roles
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VolunteerHero