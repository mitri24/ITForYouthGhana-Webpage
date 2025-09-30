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
      link: '/what-we-offer/students-graduates',
      
    },
    {
      title: 'For Businesses',
      description: 'Access to job-ready tech talent and corporate partnership opportunities',
      features: ['Talent Pipeline', 'Corporate Training', 'CSR Partnerships'],
      link: '/what-we-offer/businesses',
     
    },
    {
      title: 'For Volunteers',
      description: 'Make an impact in your community through teaching and outreach',
      features: ['Teaching Support', 'Community Outreach', 'Event Management'],
      link: '/what-we-offer/volunteers',

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
                  className="btn btn-secondary w-full group-hover:btn-primary transition-all duration-300 font-medium mt-auto"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
            <Link 
              to="/who-can-apply"
              className="btn btn-primary text-lg px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative"
            >
              See If You Qualify
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeOffer