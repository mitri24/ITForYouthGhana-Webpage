import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../components/SEO'
import { navigateToPage } from '../../utils/navigation'

const Testimonials: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleJoinThem = () => {
    navigateToPage('/contact')
  }

  const testimonials = [
    {
      name: 'Elisabeth Awartey',
      age: 25,
      role: 'Database Management Specialist',
      company: 'Bank of Ghana',
      quote: 'IT For Youth Ghana completely changed my perspective on technology. The skills I acquired opened doors I never thought possible.',
      image: '/images/people/elisabeth.jpg',
      program: 'Data Analytics Program',
      year: '2022'
    },
    {
      name: 'Benedicta Konadu',
      age: 23,
      role: 'Graphic Designer',
      company: 'Creative Agency Kumasi',
      quote: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
      image: '/images/people/benedicta.png',
      program: 'UI/UX Design Program',
      year: '2021'
    },
    {
      name: 'Danielle Mensah',
      age: 22,
      role: 'Web Developer',
      company: 'Freelancer',
      quote: 'I came with no skills, but now I have built multiple websites! This program changed my life completely.',
      image: '/images/people/danielle.jpg',
      program: 'Software Development Program',
      year: '2023'
    },
    {
      name: 'Emmanuel Mensah',
      age: 28,
      role: 'IT Instructor',
      company: 'IT for Youth Ghana',
      quote: 'From student to instructor - this organization gave me skills and now I give back by teaching others.',
      image: '/images/people/emmanuel.jpg',
      program: 'Software Development Program',
      year: '2020'
    },
    {
      name: 'Peter Duodu',
      age: 35,
      role: 'Founder & Executive Director',
      company: 'IT for Youth Ghana',
      quote: 'Seeing young people transform their lives through technology motivates me every day to expand our reach.',
      image: '/images/people/peter.jpg',
      program: 'Founder',
      year: '2019'
    }
  ]

  return (
    <>
      <SEO
        title="Success Stories & Testimonials - IT for Youth Ghana"
        description="Read inspiring stories from our graduates who transformed their careers through technology education. Real impact, real success stories."
        canonical="/testimonials"
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
                Success Stories
              </h1>
              <p className="text-lead text-white/90 mb-8">
                Real People, Real Impact
              </p>
              <p className="text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
                Meet our graduates who have transformed their lives and careers through our programs. Their success is our success.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-6"
              >
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleJoinThem}
                >
                  Join Them
                </motion.button>
                <motion.button
                  className="btn btn-ghost"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Read Stories
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <section id="testimonials" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Graduate Stories</h2>
              <p className="text-lead max-w-4xl mx-auto">
                From students to professionals, from dreams to reality. These are the stories of transformation.
              </p>
            </motion.div>

            <div className="responsive-grid responsive-grid-md-2 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{testimonial.name}</h3>
                      <p className="text-primary font-medium text-sm mb-1">{testimonial.role}</p>
                      <p className="text-neutral-700 text-xs">{testimonial.company}</p>
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {testimonial.year}
                      </span>
                    </div>
                  </div>

                  <blockquote className="text-neutral-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <span className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {testimonial.program}
                    </span>
                    <div className="text-neutral-800">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
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
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="heading-md mb-4 text-white">Ready to Write Your Success Story?</h3>
                <p className="text-lg mb-8 text-white/90 max-w-3xl mx-auto">
                  Join hundreds of graduates who have transformed their careers and are now 
                  making an impact in Ghana's growing tech industry.
                </p>
                
                <div className="responsive-grid responsive-grid-md-3 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2000+</div>
                    <div className="text-white/80">Lives Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <div className="text-white/80">Find Employment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">70%</div>
                    <div className="text-white/80">Are Women</div>
                  </div>
                </div>
                
                <motion.button
                  className="btn btn-secondary bg-white text-primary hover:bg-neutral-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleJoinThem}
                >
                  Start Your Journey Today
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Testimonials