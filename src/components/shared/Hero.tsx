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
    <>
      <section className="shared-hero-section relative py-24 overflow-hidden" style={{ backgroundColor: '#0c2d5a' }}>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="shared-hero-title text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
              {title}
            </h1>
            
            {subtitle && (
              <p className="shared-hero-subtitle text-2xl md:text-3xl mb-6 text-white/90">
                {subtitle}
              </p>
            )}
            
            {description && (
              <p className="shared-hero-description text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
            
            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="shared-hero-buttons flex flex-col sm:flex-row gap-6 justify-center"
              >
                {primaryCta && (
                  <motion.button
                    className="shared-hero-btn-primary inline-block"
                    style={{
                      padding: '16px 32px',
                      fontSize: '18px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      borderRadius: '50px',
                      background: 'white',
                      color: '#0c2d5a',
                      border: '2px solid #0c2d5a',
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
                    className="shared-hero-btn-secondary inline-block"
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
                      e.currentTarget.style.color = '#0c2d5a'
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

      {/* Mobile-optimized CSS for shared hero */}
      <style>{`
        /* Desktop bleibt unverändert - alle Styles nur für mobile */
        @media (max-width: 768px) {
          .shared-hero-section {
            padding-top: 20vh !important; /* Navigation nimmt 15% ein, Hero startet bei 20% */
            padding-bottom: 2rem !important;
            min-height: 55vh !important; /* Hero section nimmt 35% des Screens */
          }
          
          .shared-hero-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }
          
          .shared-hero-subtitle {
            font-size: clamp(1rem, 4vw, 1.25rem) !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
          }
          
          .shared-hero-description {
            font-size: clamp(0.9rem, 3vw, 1.1rem) !important;
            line-height: 1.5 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .shared-hero-buttons {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }
          
          .shared-hero-btn-primary,
          .shared-hero-btn-secondary {
            width: 100% !important;
            max-width: 280px !important;
            padding: 12px 24px !important;
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  )
}

export default Hero