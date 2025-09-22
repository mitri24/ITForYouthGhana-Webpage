import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

interface VolunteerProcessProps {
  steps: ProcessStep[]
}

const VolunteerProcess: React.FC<VolunteerProcessProps> = ({ steps }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <>
      {/* Application Process */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">How to Become a Volunteer</h2>
            <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
              A simple 4-step process to become part of our team
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-float border border-secondary/20 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-neutral-800 mb-3 text-sm leading-relaxed">{step.description}</p>
                    <span className="inline-block bg-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Volunteers */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Voices of Our Volunteers</h2>
            <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
              Hear what our current volunteers say about their experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mensah',
                role: 'Tech Mentor',
                quote: 'Working as a Tech Mentor at IT for Youth has enriched my life. The joy of seeing young people write their first programs is priceless.',
                duration: '2 years'
              },
              {
                name: 'Kwame Asante',
                role: 'Workshop Trainer',
                quote: 'The opportunity to share my knowledge about Data Science while learning from the fresh perspectives of participants is fantastic.',
                duration: '1.5 years'
              },
              {
                name: 'Ama Osei',
                role: 'Community Outreach',
                quote: 'Through my work in Community Outreach, I was able to reach new communities while developing my own communication skills.',
                duration: '1 year'
              }
            ].map((volunteer, index) => (
              <motion.div
                key={volunteer.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-neutral-50 rounded-2xl p-6 border border-secondary/20"
              >
                <div className="text-4xl mb-4">💙</div>
                <blockquote className="text-neutral-700 mb-4 italic leading-relaxed">
                  "{volunteer.quote}"
                </blockquote>
                <div className="border-t border-secondary/20 pt-4">
                  <p className="font-bold text-primary">{volunteer.name}</p>
                  <p className="text-accent text-sm">{volunteer.role}</p>
                  <p className="text-neutral-700 text-xs">Volunteering for {volunteer.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default VolunteerProcess