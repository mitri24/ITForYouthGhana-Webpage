import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SuccessStories: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stories = [
    {
      name: 'Elisabeth Awartey',
      program: 'Data Analytics Program',
      currentRole: 'Database Specialist at Bank of Ghana',
      story: 'The program completely changed my perspective on technology. Now I help manage critical data systems.',
      image: '/images/people/elisabeth.jpg'
    },
    {
      name: 'Benedicta Konadu', 
      program: 'UI/UX Design Program',
      currentRole: 'Graphic Designer at Creative Agency',
      story: 'The design skills and mentorship gave me the confidence to pursue my creative dreams professionally.',
      image: '/images/people/benedicta.png'
    },
    {
      name: 'Danielle Mensah',
      program: 'Software Development Program', 
      currentRole: 'Freelance Web Developer',
      story: 'From zero coding knowledge to building websites for clients. This program changed my life.',
      image: '/images/people/danielle.jpg'
    }
  ]

  return (
    <section ref={ref} className="section bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Graduate Success Stories</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Hear from our graduates who have transformed their careers and are now 
            making an impact in Ghana's tech industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-primary">{story.name}</h3>
                  <p className="text-sm text-accent">{story.program}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-800 mb-2">Current Role:</h4>
                <p className="text-sm text-primary font-medium">{story.currentRole}</p>
              </div>
              
              <blockquote className="text-neutral-700 italic leading-relaxed">
                "{story.story}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="heading-md mb-6 text-primary">Ready to Write Your Success Story?</h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join hundreds of graduates who have transformed their careers through our programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Apply Now
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/testimonials'}
            >
              Read More Stories
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStories