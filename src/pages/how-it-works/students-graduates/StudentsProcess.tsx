import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { navigateToPage } from '../../../utils/navigation'

const StudentsProcess: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleStartApplication = () => {
    navigateToPage('/contact')
  }

  const steps = [
    {
      step: 1,
      title: 'Application',
      description: 'Complete our online application form with your background and motivation',
      duration: '5-10 minutes',
      hasButton: true
    },
    {
      step: 2,
      title: 'Interview',
      description: 'Brief conversation about your goals, motivation, and program fit',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Program Selection',
      description: 'Choose your program based on interests and career goals with our guidance',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Training',
      description: 'Intensive hands-on training with experienced instructors and real projects',
      duration: '6 months'
    },
    {
      step: 5,
      title: 'Career Support',
      description: 'Job placement assistance, resume building, and interview preparation',
      duration: 'Ongoing'
    }
  ]

  return (
    <>
      <SEO
        title="How It Works - For Students & Graduates"
        description="Step-by-step guide to joining our programs. From application to career placement - here's your journey to a tech career."
        canonical="/how-it-works/students-graduates"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        <Hero
          title="Your Path to Tech Career"
          subtitle="How It Works - For Students & Graduates"
          description="A clear, step-by-step path from application to career placement. We guide you every step of the way."
        />
        
        <section ref={ref} className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Linie in der Mitte */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
                
                {steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Timeline Punkt in der Mitte */}
                    <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                      {step.step}
                    </div>
                    
                    {/* Inhaltskarte - abwechselnd links und rechts */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white border border-neutral-100 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:items-center sm:justify-between mb-3`}>
                          <h3 className="heading-sm text-primary">{step.title}</h3>
                          <span className="text-sm text-accent font-medium mt-1 sm:mt-0">{step.duration}</span>
                        </div>
                        <p className="text-body text-neutral-600 mb-4">{step.description}</p>
                        
                        {/* CTA-Button nur im ersten Schritt */}
                        {step.hasButton && (
                          <motion.button
                            className={`btn btn-primary ${index % 2 === 0 ? 'ml-auto' : ''}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleStartApplication}
                          >
                            Start Application
                          </motion.button>
                        )}
                      </div>
                    </div>
                    
                    {/* Leerer Bereich für die andere Seite */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="heading-md mb-4 text-primary">Ready to Get Started?</h3>
                <p className="text-body mb-6 max-w-2xl mx-auto">
                  Applications are rolling admission. Start your application today and begin your journey to a tech career.
                </p>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartApplication}
                >
                  Begin Application
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default StudentsProcess