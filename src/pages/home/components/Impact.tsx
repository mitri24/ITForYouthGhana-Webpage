import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const WhatWeOffer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const offerings = [
    {
      title: 'For Students & Graduates',
      description: 'Professional 6-month tech training programs with job placement support',
      features: ['Software Development', 'Data Analytics', 'UI/UX Design'],
      link: '/opportunities/students-graduates',
      
    },
    {
      title: 'For Businesses',
      description: 'Access to job-ready tech talent and corporate partnership opportunities',
      features: ['Talent Pipeline', 'Corporate Training', 'CSR Partnerships'],
      link: '/opportunities/businesses',
     
    },
    {
      title: 'For Volunteers',
      description: 'Make an impact in your community through teaching and outreach',
      features: ['Teaching Support', 'Community Outreach', 'Event Management'],
      link: '/opportunities/volunteers',

    }
  ]

  return (
    <section ref={ref} className="section bg-gradient-to-br from-neutral-50 to-neutral-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">OUR PROGRAMS</span>
          </div>
          <h2 className="heading-xl mb-6 text-primary">Our working ways</h2>
          <p className="text-lead max-w-3xl mx-auto text-neutral-600">
            Comprehensive programs and opportunities designed to create positive impact 
            for students, businesses, volunteers, and the broader community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 group h-full"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                 
                  <h3 className="heading-sm text-primary group-hover:text-accent transition-colors duration-300">
                    {offering.title}
                  </h3>
                </div>
                
                <p className="text-body text-neutral-600 mb-6">{offering.description}</p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="font-semibold text-neutral-800 mb-4 text-sm uppercase tracking-wider">Key Features:</h4>
                  <div className="space-y-3">
                    {offering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={offering.link}
                  className="w-full mt-auto"
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    textAlign: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.4)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #014aa8 0%, #013d8c 100%)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)'
                    e.currentTarget.style.background = 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)'
                  }}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default WhatWeOffer