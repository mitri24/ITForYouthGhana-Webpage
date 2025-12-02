import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'
import { getImagePath } from '../../../utils/randomImages'

const AboutMission: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Mission & Vision</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue rounded-xl flex items-center justify-center mr-4">
                <img src={getImagePath("/images/logo/logo.jpg")} alt="Mission" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Mission</h3>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4">
                <img src={getImagePath("/images/logo/logo.jpg")} alt="Vision" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {content.about.vision}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission