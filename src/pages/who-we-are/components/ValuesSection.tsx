import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ValuesSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: 'INC',
      title: 'Inclusion',
      description: 'We believe technology education should be accessible to everyone, regardless of background, gender, or location.'
    },
    {
      icon: 'EMP',
      title: 'Empowerment',
      description: 'Our programs are designed to give participants the skills, confidence, and opportunities to transform their lives.'
    },
    {
      icon: 'INN',
      title: 'Innovation',
      description: 'We continuously adapt our curriculum and methods to meet evolving industry needs and community challenges.'
    },
    {
      icon: 'COM',
      title: 'Community',
      description: 'Strong communities are built through collaboration, mutual support, and shared commitment to growth.'
    }
  ]

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Our Values</h2>
          <p className="text-lead text-center max-w-3xl mx-auto">
            The principles that guide everything we do and shape our approach to education and community development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card text-center group cursor-pointer"
            >
              <div className="card-content">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors duration-300">
                  <span className="text-primary group-hover:text-white font-bold text-sm transition-colors duration-300">
                    {value.icon}
                  </span>
                </div>
                
                <h3 className="card-title heading-sm group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-body group-hover:text-neutral-600 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection