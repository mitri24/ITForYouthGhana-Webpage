import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../../../data/content'
import LazyImage from '../../../components/LazyImage'
import { imageCategories } from '../../../utils/randomImages'

const heroSlides = [
  {
    image: '/images/randomPictures/GRADUATION HIGHLIGHTS-Cover.jpg',
    title: content.hero.title,
    subtitle: content.hero.subtitle
  },
  {
    image: '/images/randomPictures/IMG-20241118-WA0095.jpg',
    title: 'Empowering Young Women in Tech',
    subtitle: 'Over 40% female enrollment - creating pathways for women in technology careers'
  },
  {
    image: '/images/randomPictures/IMG-20241118-WA0078.jpg',
    title: 'From Training to Employment',
    subtitle: 'Free and low-cost programs with hands-on learning and real-world project experience'
  },
  {
    image: '/images/randomPictures/2024-12-17 20.27 (5).jpg',
    title: '200+ Lives Transformed',
    subtitle: 'Training youth in coding, web development, data analytics, and digital entrepreneurship'
  },
  {
    image: '/images/randomPictures/IMG-20241026-WA0092.jpg',
    title: 'Building Tech Leaders',
    subtitle: 'Developing the next generation of technology professionals across Ghana'
  },
  {
    image: '/images/randomPictures/IMG_8586.JPG',
    title: 'Success Stories',
    subtitle: 'Meet our graduates who are now leading in Ghana\'s tech industry'
  },
  {
    image: '/images/randomPictures/2024-12-17 21.02.jpg',
    title: 'Community Impact',
    subtitle: 'Transforming communities through accessible technology education'
  },
  {
    image: '/images/randomPictures/IMG-20241118-WA0104.jpg',
    title: 'Hands-On Learning',
    subtitle: 'Practical skills development through real-world projects and mentorship'
  },
  {
    image: '/images/randomPictures/IMG_2732.PNG',
    title: 'Modern Facilities',
    subtitle: 'State-of-the-art equipment and learning environments for optimal education'
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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <LazyImage
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
            priority={currentSlide === 0}
          />
        </motion.div>
        <div className="absolute inset-0 bg-hero-overlay" />
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white leading-tight font-display">
              <span className="block">{heroSlides[currentSlide].title}</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed font-normal max-w-4xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CHANGED: UX-optimierte CTAs - Volunteer priorisiert (Fitts' Law) */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
              <Link to="/volunteer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)} className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto bg-white text-primary hover:bg-neutral-100 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ 
                    minHeight: 'var(--touch-comfort)',
                    padding: 'var(--space-lg) var(--space-2xl)',
                    fontSize: 'var(--text-lg)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join as Volunteer
                </motion.button>
              </Link>
              
              <Link to="/programs" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)} className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300"
                  style={{ 
                    minHeight: 'var(--touch-comfort)',
                    padding: 'var(--space-lg) var(--space-2xl)',
                    fontSize: 'var(--text-lg)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Programs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-lg hover:bg-primary/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        ←
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-lg hover:bg-primary/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        →
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-secondary rounded-full opacity-60 shadow-secondary-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '-2s' }}>
        <div className="w-6 h-6 bg-accent rounded-full opacity-40 shadow-accent-glow"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '-4s' }}>
        <div className="w-3 h-3 bg-secondary rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '-1s' }}>
        <div className="w-2 h-2 bg-secondary rounded-full opacity-70"></div>
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