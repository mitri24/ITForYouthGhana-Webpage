import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const impactStats = [
  { number: '200+', label: 'Youth Adults Trained', description: 'Digital skills training completed' },
  { number: '800+', label: 'Students Reached', description: 'Through workshops in 20+ schools' },
  { number: '40%', label: 'Female Enrollment', description: 'Promoting gender equality in tech' },
  { number: '6+', label: 'Years of Impact', description: 'Continuous commitment to education' }
]

const testimonials = [
  {
    name: 'Belinda',
    role: 'Frontend Developer & Mentor',
    content: 'After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their programming course. Today, I am a front-end developer hoping to grow more in IT.',
    image: '/images/Belinda.jpg'
  },
  {
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    content: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I\'ve gained have opened doors I never thought possible.',
    image: '/images/elisabeth.jpg'
  },
  {
    name: 'Benedicta',
    role: 'Graphic Designer',
    content: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
    image: '/images/benedicta.png'
  },
  {
    name: 'Emmanuel',
    role: 'Data Analyst',
    content: 'IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight.',
    image: '/images/emmanuel.jpg'
  },
  {
    name: 'Danielle',
    role: 'Web Developer',
    content: 'I came in with no skills, but now I\'ve built a website! This program changed my life.',
    image: '/images/danielle.jpg'
  }
]

const trainingImages = [
  '/images/UX1.jpeg',
  '/images/UX2.jpg',
  '/images/UX3.jpeg',
  '/images/UX4.jpg',
  '/images/Mlan.jpeg',
  '/images/adjej.webp'
]

const Impact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
  }

  return (
    <section ref={ref} className="section bg-ghibli-gradient paper-texture relative overflow-hidden">
      <div className="container">
        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title mb-8">Creating Measurable Impact</h2>
          <p className="section-subtitle mb-16">
            Six years of dedicated commitment to transforming lives through technology education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="text-center card-floating group cursor-pointer"
              >
                <motion.div 
                  className="stat-number group-hover:animate-glow"
                  animate={isInView ? { 
                    textShadow: [
                      "0 0 0px rgba(10, 255, 239, 0)",
                      "0 0 20px rgba(10, 255, 239, 0.6)",
                      "0 0 0px rgba(10, 255, 239, 0)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-deepgray group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-deepgray">Excellence in Action</h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Witness the dedication and innovation of our students during intensive training programs. 
              Real skills, real projects, real career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trainingImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="relative group overflow-hidden rounded-xl shadow-float"
              >
                <img 
                  src={image} 
                  alt={`Training session ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-semibold">Live Training</p>
                  </div>
                </div>
                
                {/* Neon border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#8fb2d6]/50 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-deepgray">Inspiring Success Stories</h3>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            Meet our graduates who are now leading the way in Ghana's tech industry, 
            creating opportunities and inspiring the next generation.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background texture */}
              <div className="absolute inset-0 texture-overlay opacity-50"></div>
              
              <div className="relative z-10">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-center gap-8"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-2xl border-4 border-white"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-[#8fb2d6] to-[#d02355] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl">✓</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <blockquote className="text-lg lg:text-xl mb-6 leading-relaxed italic font-medium text-neutral-700">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div>
                      <div className="text-xl font-bold mb-1 text-deepgray">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-lg font-semibold gradient-text">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex items-center justify-center gap-6 mt-8">
                  <motion.button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-turquoise to-primary flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ←
                  </motion.button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentTestimonial === index 
                            ? 'bg-primary scale-125' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <motion.button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact