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
      title: 'For Mentors',
      description: 'Share your expertise and guide the next generation of tech professionals',
      features: ['Industry Guidance', 'Career Coaching', 'Network Building'],
      link: '/what-we-offer/mentors',
    },
    {
      title: 'For Volunteers',
      description: 'Make an impact in your community through teaching and outreach',
      features: ['Teaching Support', 'Community Outreach', 'Event Management'],
      link: '/what-we-offer/volunteers',
    }
  ]

  return (
    <section ref={ref} className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">What We Offer</h2>
          <p className="text-lead max-w-4xl mx-auto">
            Comprehensive programs and opportunities designed to create positive impact 
            for students, businesses, mentors, and the broader community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card group"
            >
              <div className="card-body">
                <div className="mb-6">
                  <h3 className="heading-sm text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-body text-neutral-600">{offering.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={offering.link}
                  className="btn btn-secondary w-full group-hover:btn-primary transition-all duration-300"
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
          className="text-center mt-16"
        >
          <Link 
            to="/who-can-apply"
            className="btn btn-primary text-lg px-8 py-4"
          >
            See If You Qualify
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeOffer