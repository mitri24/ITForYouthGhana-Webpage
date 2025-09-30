import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const VolunteersProcess: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleStartApplication = () => {
    window.location.href = '/volunteer'
  }

  const steps = [
    {
      step: 1,
      title: 'Application & Interest Assessment',
      description: 'Complete our volunteer application form with your skills, interests, and availability',
      duration: '10-15 minutes',
      hasButton: true
    },
    {
      step: 2,
      title: 'Getting to Know You Call',
      description: 'Personal conversation to understand your motivations and ensure mutual alignment',
      duration: '30-45 minutes'
    },
    {
      step: 3,
      title: 'Skills Assessment & Role Matching',
      description: 'We identify your strengths and match you with the perfect volunteer opportunity',
      duration: '1 week'
    },
    {
      step: 4,
      title: 'Comprehensive Orientation',
      description: 'Learn about our programs, meet the team, and understand our methodologies',
      duration: '2 hours'
    },
    {
      step: 5,
      title: 'Mentorship & Ongoing Support',
      description: 'Begin your volunteer journey with dedicated mentorship and continuous support',
      duration: 'Ongoing'
    }
  ]

  return (
    <>
      <SEO
        title="How It Works - For Volunteers | IT for Youth Ghana"
        description="Step-by-step guide to becoming a volunteer. From application to mentorship - here's your journey to making impact."
        canonical="/how-it-works/volunteers"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Your Volunteer Journey"
          subtitle="How It Works - For Volunteers"
          description="A clear, step-by-step path from application to active volunteering. We guide you every step of the way to make meaningful impact."
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
                <h3 className="heading-md mb-4 text-primary">Ready to Make a Difference?</h3>
                <p className="text-body mb-6 max-w-2xl mx-auto">
                  Join our community of passionate volunteers. Start your application today and begin making meaningful impact in Ghana's tech ecosystem.
                </p>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartApplication}
                >
                  Begin Volunteer Application
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VolunteersProcess