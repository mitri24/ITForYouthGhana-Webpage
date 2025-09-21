import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../../../data/content'

const CallToAction: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const actionCards = [
    {
      image: '/images/UX1.jpeg',
      title: 'Learn',
      description: 'World-class curriculum',
      delay: 0.2
    },
    {
      image: '/images/UX2.jpg',
      title: 'Connect',
      description: 'Join our community',
      delay: 0.4
    },
    {
      image: '/images/UX3.jpeg',
      title: 'Thrive',
      description: 'Build your career',
      delay: 0.6
    }
  ]

  return (
    <section 
      ref={ref} 
      className="section relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/UX2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero overlay with cyberpunk gradient */}
      <div className="absolute inset-0 hero-background"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
              <span className="block mb-4">Ready to Transform</span>
              <span className="block text-secondary">Your Future?</span>
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-20 max-w-5xl mx-auto leading-relaxed font-normal">
              {content.cta.subtitle}
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {actionCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: card.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group"
              >
                <motion.div 
                  className="w-16 h-16 mb-4 mx-auto rounded-organic overflow-hidden"
                  whileHover={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link to="/programs" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
              <motion.button
                className="bg-primary text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.cta.buttons[1].text}
              </motion.button>
            </Link>
            
            <Link to="/contact" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
              <motion.button
                className="px-12 py-6 text-xl font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.cta.buttons[0].text}
              </motion.button>
            </Link>
            
            <Link to="/donate" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
              <motion.button
                className="px-12 py-6 text-xl font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.cta.buttons[2].text}
              </motion.button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-2">Contact Us</h4>
                <p className="text-white/80">{content.contact.email}</p>
                <p className="text-white/80">{content.contact.phone}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="text-white/80 hover:text-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-end pb-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default CallToAction