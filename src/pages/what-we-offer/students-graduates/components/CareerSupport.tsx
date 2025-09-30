import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CareerSupport: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const supportServices = [
    {
      title: 'Resume Building',
      description: 'Professional resume writing and portfolio development to showcase your skills.',
    
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and coaching to help you confidence in job interviews.',
    
    },
    {
      title: 'Job Placement',
      description: 'Direct connections with partner companies actively hiring our graduates.',
 
    },
    {
      title: 'Mentorship',
      description: 'Ongoing support from industry professionals even after graduation.',
     
    },
    {
      title: 'Freelancing Guidance',
      description: 'Learn how to start and grow your freelance business in tech.',
    
    },
    {
      title: 'Continuous Learning',
      description: 'Access to advanced courses and workshops to keep your skills current.',

    }
  ]

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Career Support Services</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Our commitment to your success doesn't end at graduation. We provide comprehensive 
            career support to ensure you land your dream job.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="text-center group"
            >
             
              <h3 className="heading-sm text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-body text-neutral-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary rounded-2xl p-8 text-white text-center"
        >
          <h3 className="heading-md mb-4 text-white">85% Employment Rate</h3>
          <p className="text-lg mb-6 text-white/90 max-w-3xl mx-auto">
            Our graduates find employment within 6 months of program completion. 
            Join our network of successful alumni working at top tech companies across Ghana.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">200+</div>
              <div className="text-white/80 text-sm">Graduates Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">50+</div>
              <div className="text-white/80 text-sm">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">3-6</div>
              <div className="text-white/80 text-sm">Months to Employment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CareerSupport