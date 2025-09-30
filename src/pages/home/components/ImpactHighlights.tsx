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

         {/* Partnership CTA */}
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/10 shadow-lg">
            <h3 className="heading-md mb-4 text-primary"> Transforming Ghana's Digital Future</h3>
            <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
            Join thousands of success stories and be part of Ghana's tech transformation.</p>
            <motion.a
              href="/contact"
              className="inline-block"
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(1, 82, 190, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(1, 82, 190, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #014aa8 0%, #013d8c 100%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(1, 82, 190, 0.3)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)'
              }}
            >
              Read More Stories
            </motion.a>
          </div>
        </motion.div>

       
      </div>
    </section>
  )
}

export default ImpactHighlights