import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const StudentsProcess: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleStartApplication = () => {
    window.location.href = '/contact'
  }

  const steps = [
    {
      step: 1,
      title: 'Application',
      description: 'Complete our online application form with your background and motivation',
      duration: '5-10 minutes'
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
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Your Journey to Success"
          subtitle="How It Works - For Students & Graduates"
          description="A clear, step-by-step path from application to career placement. We guide you every step of the way."
          primaryCta={{ text: "Start Application", action: handleStartApplication }}
        />
        
        <section ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Your Path to Tech Career</h2>
              <p className="text-lead max-w-4xl mx-auto">
                From application to employment - here's exactly what to expect on your journey with us.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card">
                      <div className="card-body">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="heading-sm text-primary">{step.title}</h3>
                            <span className="text-sm text-accent">{step.duration}</span>
                          </div>
                        </div>
                        <p className="text-body">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/30 mx-auto mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
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