import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const QuickOverview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Transforming Lives Through Technology</h2>
          <p className="text-lead max-w-4xl mx-auto">
            We are Ghana's leading NGO dedicated to bridging the digital divide through 
            inclusive technology education, with a special focus on empowering women and 
            underserved communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="heading-lg mb-6 text-primary">Why We Exist</h3>
            <p className="text-body mb-6 leading-relaxed">
              Ghana's tech industry is growing rapidly, but many young people lack 
              access to quality technology education. We bridge this gap with professional 
              training programs that prepare students for real careers.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-sm text-neutral-600">Female Participation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-neutral-600">Employment Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-neutral-600">Students Trained</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img 
              src="/images/randomPictures/IMG-20241118-WA0078.jpg" 
              alt="Students learning technology" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-4">
              <p className="text-sm font-semibold text-primary">2000+ Students Trained</p>
              <p className="text-xs text-neutral-600">Across all programs since 2019</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default QuickOverview