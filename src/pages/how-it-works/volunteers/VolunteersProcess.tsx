import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { navigateToPage } from '../../../utils/navigation'

const VolunteersProcess: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleStartApplication = () => {
    navigateToPage('/volunteer')
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
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-hero-overlay"></div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h1 className="heading-xl text-white mb-6">
                Your Volunteer Journey
              </h1>
              <p className="text-lead text-white/90 mb-8">
                How It Works - For Volunteers
              </p>
              <p className="text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
                A clear, step-by-step path from application to active volunteering. We guide you every step of the way to make meaningful impact.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartApplication}
                >
                  Start Application
                </motion.button>
                <motion.button
                  className="btn btn-ghost"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('volunteer-process')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Process
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section id="volunteer-process" ref={ref} className="section bg-white">
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
                      <div className="bg-white border border-primary/10 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:items-center sm:justify-between mb-3`}>
                          <h3 className="heading-sm text-primary">{step.title}</h3>
                          <span className="text-sm text-primary font-medium mt-1 sm:mt-0 bg-primary/10 px-2 py-1 rounded-full">{step.duration}</span>
                        </div>
                        <p className="text-body text-neutral-700 mb-4 leading-relaxed">{step.description}</p>
                        
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
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
                <h3 className="heading-md mb-4">Ready to Make a Difference?</h3>
                <p className="text-lead mb-6 max-w-2xl mx-auto text-neutral-800">
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