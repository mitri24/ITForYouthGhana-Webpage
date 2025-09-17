import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../../../data/content'

const heroSlides = [
  {
    image: '/images/UX1.jpeg',
    title: content.hero.title,
    subtitle: content.hero.subtitle
  },
  {
    image: '/images/UX2.jpg',
    title: 'Empowering Young Women in Tech',
    subtitle: 'Over 40% female enrollment - creating pathways for women in technology careers'
  },
  {
    image: '/images/UX3.jpeg',
    title: 'From Training to Employment',
    subtitle: 'Free and low-cost programs with hands-on learning and real-world project experience'
  },
  {
    image: '/images/UX4.jpg',
    title: '200+ Lives Transformed',
    subtitle: 'Training youth in coding, web development, data analytics, and digital entrepreneurship'
  },
  {
    image: '/images/emmanuel.jpg',
    title: 'Building Tech Leaders',
    subtitle: 'Developing the next generation of technology professionals across Ghana'
  },
  {
    image: '/images/Belinda.jpg',
    title: 'Success Stories',
    subtitle: 'Meet our graduates who are now leading in Ghana\'s tech industry'
  },
  {
    image: '/images/2024-11-14 10.55 (2).jpeg',
    title: 'Community Impact',
    subtitle: 'Transforming communities through accessible technology education'
  }
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? heroSlides.length - 1 : prev - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section 
      className="relative h-screen overflow-hidden pt-16"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${heroSlides[currentSlide].image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-primary/50" />
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container text-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white leading-tight">
              <span className="block">{heroSlides[currentSlide].title}</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed font-normal max-w-4xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/programs" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
                <motion.button
                  className="bg-white text-primary px-12 py-5 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.cta.buttons[1].text}
                </motion.button>
              </Link>
              
              <Link to="/contact" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
                <motion.button
                  className="border-2 border-white text-white px-12 py-5 text-lg rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.cta.buttons[0].text}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-lg hover:bg-black/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        ←
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-lg hover:bg-black/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        →
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full opacity-60 shadow-blue-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '-2s' }}>
        <div className="w-6 h-6 bg-accent rounded-full opacity-40 shadow-accent-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '-4s' }}>
        <div className="w-3 h-3 bg-secondary rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '-1s' }}>
        <div className="w-2 h-2 bg-blue rounded-full opacity-70"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero