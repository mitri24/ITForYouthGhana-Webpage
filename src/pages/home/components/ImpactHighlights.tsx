import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const ImpactHighlights: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const highlights = [
    {
      name: 'Elisabeth Awartey',
      role: 'Database Specialist at Bank of Ghana',
      quote: 'This program completely changed my life and opened doors I never imagined.',
      image: '/images/people/elisabeth.jpg'
    },
    {
      name: 'Benedicta Konadu',
      role: 'Graphic Designer',
      quote: 'The support I received gave me courage to pursue my design dreams.',
      image: '/images/people/benedicta.png'
    },
    {
      name: 'Danielle Mensah',
      role: 'Web Developer',
      quote: 'From no coding knowledge to building websites for clients!',
      image: '/images/people/danielle.jpg'
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
          <h2 className="heading-xl mb-6 text-primary">Our Impact</h2>
          <p className="text-lead max-w-4xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
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
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">{story.name}</h4>
                  <p className="text-sm text-neutral-600">{story.role}</p>
                </div>
              </div>
              <blockquote className="text-neutral-700 italic text-sm">
                "{story.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary rounded-2xl p-8 text-white"
        >
         
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Transforming Ghana's Digital Future
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of success stories and be part of Ghana's tech transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/testimonials"
                className="btn btn-secondary bg-white text-primary hover:bg-neutral-100"
              >
                Read More Stories
              </Link>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactHighlights