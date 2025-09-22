import React from 'react'
import { motion } from 'framer-motion'

interface VolunteerCallToActionProps {
  isInView: boolean
}

const VolunteerCallToAction: React.FC<VolunteerCallToActionProps> = ({
  isInView
}) => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our team of passionate volunteers and help build Ghana's next generation of tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              onClick={() => document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <motion.a
              href="mailto:info@itforyouthghana.org"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VolunteerCallToAction