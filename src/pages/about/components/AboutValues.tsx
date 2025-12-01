import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'

const AboutValues: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.about.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center bg-neutral-50 rounded-2xl p-8 border border-secondary/20 overflow-hidden"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
                <img src={
                  index === 0 ? '/images/randomPictures/teacherteaching.jpg' :
                  index === 1 ? '/images/randomPictures/groupofgirlsentrance.jpeg' :
                  '/images/randomPictures/graduationspeaking.jpg'
                } alt={value.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-neutral-800 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues