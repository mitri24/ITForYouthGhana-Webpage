import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LazyImage from '../../../components/LazyImage'

const heroSlides = [
  {
    image: '/images/randomPictures/graduation.JPG',
    title: 'Empowering Ghana\'s Youth Through Technology',
    subtitle: 'Professional programming courses and career development'
  },
  {
    image: '/images/randomPictures/group_girls.jpg',
    title: 'Empowering Young Women in Tech',
    subtitle: 'Over 40% female enrollment - creating pathways for women in technology careers'
  },
  {
    image: '/images/randomPictures/studentscodingback.jpg',
    title: 'From Training to Employment',
    subtitle: 'Professional programs with hands-on learning and real-world project experience'
  },
  {
    image: '/images/randomPictures/graduations.JPG',
    title: '200+ Lives Transformed',
    subtitle: 'Training youth in coding, web development, data analytics, and digital entrepreneurship'
  },
  {
    image: '/images/randomPictures/petertalkingtostudentscoloful.jpg',
    title: 'Building Tech Leaders',
    subtitle: 'Developing the next generation of technology professionals across Ghana'
  },
  {
    image: '/images/randomPictures/studentpresenting.JPG',
    title: 'Success Stories',
    subtitle: 'Meet our graduates who are now leading in Ghana\'s tech industry'
  },
  {
    image: '/images/randomPictures/frontalgraduation.JPG',
    title: 'Community Impact',
    subtitle: 'Transforming communities through accessible technology education'
  },
  {
    image: '/images/randomPictures/groupworkstudents.jpg',
    title: 'Hands-On Learning',
    subtitle: 'Practical skills development through real-world projects and hands-on training'
  },
  {
    image: '/images/randomPictures/UX4.jpg',
    title: 'Modern Facilities',
    subtitle: 'State-of-the-art equipment and learning environments for optimal education'
  }
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showSocialDropdown, setShowSocialDropdown] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? heroSlides.length - 1 : prev - 1)
  }

  return (
    <>
      <section 
        className="hero mobile-hero-design"
        style={{
          position: 'relative',
          height: '90vh',
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
      {/* Hero Background with proper centering */}
      <div 
        className="hero-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <LazyImage
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="hero-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority={currentSlide === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle overlay for better logo visibility */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(99, 102, 241, 0.1) 100%)',
            zIndex: 2
          }}
        />
      </div>

      {/* Centered Logo - Desktop higher, Mobile lower */}
      <div 
        className="logo-container"
        style={{
          position: 'absolute',
          top: '50%', /* Desktop: höher positioniert */
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/images/logo/logo.png"
            alt="IT for Youth Ghana - Empowering Youth Through Technology"
            className="logo"
            style={{
              width: 'clamp(220px, 25vw, 380px)',
              height: 'auto',
              borderRadius: '50%',
              objectFit: 'contain',
              background: 'transparent', // NO BACKGROUND!
              filter: 'drop-shadow(0 12px 40px rgba(0, 0, 0, 0.5))'
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="nav-button nav-button-left"
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="nav-button nav-button-right"
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          color: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div 
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10
        }}
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'
              }
            }}
          />
        ))}
      </div>

      {/* Desktop Contact Buttons - Hidden on Mobile */}
      <div 
        className="contact-buttons desktop-only"
        style={{
          position: 'relative',
          marginTop: '-40px',
          display: 'none', /* Hidden by default, shown only on desktop */
          justifyContent: 'center',
          gap: '15px',
          zIndex: 30,
          paddingBottom: '20px'
        }}
      >
        {/* Mail Button */}
        <a
          href="mailto:info@itforyouthghana.org"
          className="btn btn-primary"
          title="Send Email"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ 
            width: '22px', 
            height: '22px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            padding: '4px'
          }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Email</span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+233596244834"
          className="btn btn-secondary"
          title="Call Us"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ 
            width: '22px', 
            height: '22px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'rgba(1, 82, 190, 0.1)',
            borderRadius: '50%',
            padding: '4px'
          }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span>Phone</span>
        </a>

        {/* Social Media Dropdown */}
        <div className="social-dropdown" style={{ position: 'relative' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowSocialDropdown(!showSocialDropdown)}
            title="Social Media"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ 
              width: '22px', 
              height: '22px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              padding: '4px'
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </span>
            <span>Social</span>
          </button>

          {/* Social Dropdown Content */}
          <AnimatePresence>
            {showSocialDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="dropdown-content"
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  minWidth: '180px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  zIndex: 40,
                  marginBottom: '10px',
                  overflow: 'hidden'
                }}
              >
                <a
                  href="https://www.facebook.com/itforyouthghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '14px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/itforyouthghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '14px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/it-for-youth-ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '14px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Contact Buttons - Inside Hero Section */}
      <div 
        className="mobile-contact-buttons"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '15px',
          zIndex: 20
        }}
      >
        {/* Mail Button */}
        <a
          href="mailto:info@itforyouthghana.org"
          className="btn btn-primary"
          title="Send Email"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            minWidth: '56px',
            minHeight: '56px'
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+233596244834"
          className="btn btn-secondary"
          title="Call Us"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            minWidth: '56px',
            minHeight: '56px'
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Social Media Button */}
        <button
          className="btn btn-primary"
          onClick={() => setShowSocialDropdown(!showSocialDropdown)}
          title="Social Media"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            position: 'relative',
            minWidth: '56px',
            minHeight: '56px'
          }}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>

          {/* Mobile Social Dropdown */}
          <AnimatePresence>
            {showSocialDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  minWidth: '140px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  zIndex: 40,
                  marginBottom: '10px',
                  overflow: 'hidden'
                }}
              >
                <a
                  href="https://www.facebook.com/itforyouthghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '12px'
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/itforyouthghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '12px'
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/it-for-youth-ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '12px'
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      </section>

      {/* Desktop Contact Buttons - Outside Hero Section */}
      <div 
        className="contact-buttons desktop-only"
        style={{
          position: 'relative',
          marginTop: '-40px',
          display: 'none', /* Hidden by default, shown only on desktop */
          justifyContent: 'center',
          gap: '15px',
          zIndex: 30,
          paddingBottom: '20px'
        }}
      >
        {/* Mail Button */}
        <a
          href="mailto:info@itforyouthghana.org"
          className="btn btn-primary"
          title="Send Email"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ 
            width: '22px', 
            height: '22px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            padding: '4px'
          }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Email</span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+233596244834"
          className="btn btn-secondary"
          title="Call Us"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ 
            width: '22px', 
            height: '22px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'rgba(1, 82, 190, 0.1)',
            borderRadius: '50%',
            padding: '4px'
          }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span>Phone</span>
        </a>

        {/* Social Media Dropdown */}
        <div className="social-dropdown" style={{ position: 'relative' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowSocialDropdown(!showSocialDropdown)}
            title="Social Media"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ 
              width: '22px', 
              height: '22px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              padding: '4px'
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </span>
            <span>Social</span>
          </button>

          {/* Social Dropdown Content */}
          <div
            className="dropdown-content"
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'white',
              minWidth: '180px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderRadius: '8px',
              zIndex: 40,
              marginBottom: '10px',
              overflow: 'hidden',
              display: showSocialDropdown ? 'block' : 'none'
            }}
          >
            <a
              href="https://www.facebook.com/itforyouthghana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/itforyouthghana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/it-for-youth-ghana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <style>{`
        /* Desktop: Hero mit Bogen (clipPath) */
        @media (min-width: 769px) {
          .mobile-hero-design {
            clip-path: ellipse(100% 100% at 50% 0%);
          }
          
          /* Desktop: Zeige normale Buttons mit Text - außerhalb der section */
          .contact-buttons.desktop-only {
            flex-direction: row !important;
            gap: 15px !important;
            position: relative !important;
            margin-top: -40px !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            display: flex !important;
          }
          
          /* Desktop: Verstecke mobile contact buttons */
          .mobile-contact-buttons {
            display: none !important;
          }
          
          .contact-buttons .btn {
            min-width: 120px !important;
            width: auto !important;
            height: auto !important;
            padding: 12px 24px !important;
            border-radius: 50px !important;
            min-height: 48px !important;
          }
          
          .contact-buttons .btn span:last-child {
            display: inline !important;
          }
          
          .contact-buttons .btn span:first-child {
            width: 22px !important;
            height: 22px !important;
            background: rgba(255, 255, 255, 0.15) !important;
            padding: 4px !important;
          }
          
          .contact-buttons .btn span:first-child svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
        
        /* Mobile: Hero ohne Bogen */
        @media (max-width: 768px) {
          .mobile-hero-design {
            clip-path: none;
            border-radius: 0;
            min-height: 60vh !important; /* Mindestens 60% des Bildschirms */
            height: 60vh !important;
          }
          
          .hero-background {
            height: 100% !important;
            min-height: 60vh !important;
          }
          
          .hero-background img {
            height: 100% !important;
            min-height: 60vh !important;
            object-fit: cover !important;
            object-position: center !important;
          }
          
          .contact-buttons.desktop-only {
            display: none !important; /* Verstecken auf Mobile, da sie außerhalb der section sind */
          }
          
          /* Mobile: Buttons sichtbar am unteren Rand der Hero Section */
          .mobile-contact-buttons {
            display: flex !important;
            position: absolute !important;
            bottom: 10px !important; /* Sicher innerhalb der Hero Section */
            left: 50% !important;
            transform: translateX(-50%) !important;
            gap: 15px !important;
            z-index: 30 !important; /* Höher als Hero content */
          }
          
          /* Nur Icons auf Mobile - Text verstecken */
          .contact-buttons .btn {
            min-width: 48px !important;
            width: 48px !important;
            height: 48px !important;
            padding: 12px !important;
            border-radius: 50% !important;
            justify-content: center !important;
          }
          
          .contact-buttons .btn span:last-child {
            display: none !important; /* Versteckt Text-Labels */
          }
          
          .contact-buttons .btn span:first-child {
            width: 24px !important;
            height: 24px !important;
            background: transparent !important;
            padding: 0 !important;
          }
          
          .contact-buttons .btn span:first-child svg {
            width: 18px !important;
            height: 18px !important;
          }
          
          .logo {
            width: clamp(140px, 18vw, 200px) !important;
          }
          
          .logo-container {
            top: 55% !important; /* Logo tiefer, um Navbar-Überlappung zu vermeiden */
          }
          
          .nav-button-left {
            left: 10px !important;
            top: 55% !important; /* Buttons auf gleicher Höhe wie Logo */
          }
          
          .nav-button-right {
            right: 10px !important;
            top: 55% !important; /* Buttons auf gleicher Höhe wie Logo */
          }
          
          .contact-btn {
            padding: 10px 16px !important;
            font-size: 13px !important;
          }
          
          /* Slide indicators positioning für mobile */
          .mobile-hero-design div[style*="bottom: 80px"] {
            bottom: 20px !important; /* Indikatoren näher am unteren Rand */
          }
        }
        
        /* Hero Image Styles - Optimiert für Ghana Internet */
        .hero-image-container {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
        }
        
        .hero-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        
        /* Additional container styles for LazyImage component */
        .hero-image-container .relative {
          width: 100% !important;
          height: 100% !important;
        }
        
        .hero-image-container img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
        }
      `}</style>
    </>
  )
}

export default Hero