import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import { navigateToPage } from '../utils/navigation'

const Donate: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const donationImpacts = [
    {
      title: 'Empower Underserved Youth',
      description: 'Expand access to quality tech education for young people in rural and underserved areas across Ghana.',
      amount: 'GHS 500',
      impact: 'Sponsors 1 student for full program'
    },
    {
      title: 'Equip Classrooms',
      description: 'Help us provide computers, internet access, and software to underserved communities.',
      amount: 'GHS 2,000',
      impact: 'Equips 1 complete classroom setup'
    },
    {
      title: 'Fund Scholarships',
      description: 'Sponsor scholarships for students from underserved communities to access our programs.',
      amount: 'GHS 1,000',
      impact: 'Provides 2 students with scholarship support'
    },
    {
      title: 'Inspire Innovation',
      description: 'Support competitions, hackathons, and mentorship programs that foster creativity and innovation.',
      amount: 'GHS 300',
      impact: 'Funds 1 hackathon or competition'
    }
  ]

  const paymentMethods = [
    {
      title: 'Bank Transfer',
      details: [
        { label: 'Bank Name', value: 'GCB Bank Plc.' },
        { label: 'Branch', value: 'Dome' },
        { label: 'Account Name', value: 'I.T. For Youth Ghana Foundation' },
        { label: 'Account Number', value: '1321180005217' },
        { label: 'Swift Code', value: 'GHCBGHAC' },
        { label: 'Sort Code', value: '040132' }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Mobile Money',
      details: [
        { label: 'Account Name', value: 'I.T. For Youth Ghana Foundation (Peter Duodu)' },
        { label: 'Account Number', value: '0530444141' },
        { label: 'Momo ID', value: '509778' }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <>
      <SEO 
        title="Make a Difference With Your Donation"
        description="Empower Ghana's youth through technology. Every donation helps provide tech education, equipment, and opportunities for underserved communities."
        canonical="/donate"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0c2d5a' }}>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h1 className="heading-xl text-white">
                Make a Difference With Your Donation
              </h1>
              <p className="text-lead text-white/90 mb-8 max-w-3xl mx-auto">
                Empower Ghana's Youth Through Technology!
              </p>
              <p className="text-xl mb-12 text-white/80 leading-relaxed">
                Every student matters. Every donation counts. Every day, progress is made.
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
                  onClick={() => document.getElementById('donation-methods')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Donate Now
                </motion.button>
                <motion.button
                  className="btn btn-ghost"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('impact-areas')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Impact
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Impact Areas */}
        <section id="impact-areas" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6">Your Donation Makes Real Impact</h2>
              <p className="text-lead text-center max-w-4xl mx-auto text-neutral-800">
                See exactly how your contribution transforms lives and communities across Ghana
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {donationImpacts.map((impact, index) => (
                <motion.div
                  key={impact.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  
                  <h3 className="heading-sm mb-4 text-center">
                    {impact.title}
                  </h3>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed text-center group-hover:text-neutral-800 transition-colors duration-300">
                    {impact.description}
                  </p>
                  
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {impact.amount}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {impact.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section id="donation-methods" className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">How to Donate</h2>
              <p className="text-lead text-center max-w-3xl mx-auto text-neutral-800">
                Choose your preferred donation method below
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {method.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                        <span className="font-medium text-neutral-600">
                          {detail.label}:
                        </span>
                        <span className="font-semibold text-neutral-900 text-right">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Ready to Transform Lives?
              </h2>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Join us in building Ghana's tech future. Your support directly impacts young lives and creates lasting change in communities across the country.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-white/80">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-white/80">Employment Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-white/80">Female Participation</div>
                </div>
              </div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="btn btn-secondary bg-white text-primary hover:bg-neutral-100 hover:text-primary text-lg font-bold py-4 px-8 border-2 border-white shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('donation-methods')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Donate Today
                </motion.button>
                <motion.button
                  className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold py-4 px-8 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateToPage('/contact')}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Donate