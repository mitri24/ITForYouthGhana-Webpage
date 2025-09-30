import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CareerSupport: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const highlights = [
    {
      name: 'Resume Building',
   
      quote: 'Professional resume writing and portfolio development to showcase your skills.',
     
    },
    {
      name: 'Interview Preparation',
     
      quote: 'Mock interviews and coaching to help you confidence in job interviews.',
      
    },
    {
      name: 'Job Placement',
     
      quote: 'Direct connections with partner companies actively hiring our graduates.',
  
    }
    ,
    {
      name: 'Mentorship',
     
      quote: 'Ongoing support from industry professionals even after graduation.',
  
    }
    ,
    {
      name: 'Freelancing Guidance',
     
      quote: 'Learn how to start and grow your freelance business in tech.',
  
    }
    ,
    {
      name: 'Continuous Learning',
     
      quote: 'Access to advanced courses and workshops to keep your skills current.',
  
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
          <p className="text-lead max-w-4xl mx-auto">
          Our commitment to your success doesn't end at graduation. We provide comprehensive career support to ensure you land your dream job.  </p>
        </motion.div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                
                <div>
                  <h4 className="font-semibold text-primary">{story.name}</h4>
               
                </div>
              </div>
              <blockquote className="text-neutral-700 italic text-sm">
                "{story.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default CareerSupport