import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'

const StatsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const impactStats = [
    { value: '250+', label: 'Youth Trained', description: 'In Digital Skills and Tech Empowerment' },
    { value: '800+', label: 'Students Reached', description: 'Through Tech Outreach in 20 Schools' },
    { value: '40%', label: 'Female Participation', description: 'Breaking barriers in tech industry' },
    { value: '85%', label: 'Employment Success', description: 'Graduates find work or start businesses' }
  ]

  return (
    <section ref={ref} className="section bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Our Impact in Numbers</h2>
          <p className="text-lead text-center max-w-3xl mx-auto">
            Real results from our commitment to transforming lives through technology education
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Impact Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="heading-lg mb-12 text-primary text-center">Our Key Initiatives</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-primary">200+</span>
                <h4 className="text-lg font-semibold ml-4">Youth Adults Trained in Digital Skills</h4>
              </div>
              <p className="text-body leading-relaxed mb-4">
                Tech Empowerment for Employment and Entrepreneurship Initiative - Through our six-month training program, we have equipped 200 youth aged 12-24 with essential IT skills, including coding, web development, graphic design, and data analytics.
              </p>
              <p className="text-body leading-relaxed">
                By combining practical learning with internships, we prepare participants for careers in tech or to launch their own entrepreneurial ventures. Many of our graduates are already contributing to Ghana's growing digital economy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-primary">800+</span>
                <h4 className="text-lg font-semibold ml-4">Students Impacted Through Outreach</h4>
              </div>
              <p className="text-body leading-relaxed mb-4">
                Tech Outreach Initiative - Through our Tech Awareness Outreach initiative, we've visited 20 schools to spark interest in technology careers, inspiring students to start their digital journey early.
              </p>
              <p className="text-body leading-relaxed">
                Our outreach programs focus on bridging the digital divide by introducing students to the possibilities in technology and encouraging them to pursue STEM education.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection