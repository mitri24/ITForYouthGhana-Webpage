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
                  className="btn btn-secondary bg-white text-primary hover:bg-neutral-100 hover:text-primary text-lg font-bold py-4 px-8 border-2 border-white shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={primaryCta.action}
                >
                  {primaryCta.text}
                </motion.button>
              )}
              
              {secondaryCta && (
                <motion.button
                  className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold py-4 px-8 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={secondaryCta.action}
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