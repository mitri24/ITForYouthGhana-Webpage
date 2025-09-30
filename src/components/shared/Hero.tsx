import React from 'react'
import { motion } from 'framer-motion'
import { HeroSectionProps } from '../../types/pages'

const Hero: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta
}) => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-2xl md:text-3xl mb-6 text-white/90">
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className="text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {primaryCta && (
                <motion.button
                  className="inline-block"
                  style={{
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    background: 'white',
                    color: '#0152be',
                    border: '2px solid #0152be',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryCta.action}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)'
                    e.currentTarget.style.background = '#f8fafc'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'
                    e.currentTarget.style.background = 'white'
                  }}
                >
                  {primaryCta.text}
                </motion.button>
              )}
              
              {secondaryCta && (
                <motion.button
                  className="inline-block"
                  style={{
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCta.action}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.15)'
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = '#0152be'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  {secondaryCta.text}
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero