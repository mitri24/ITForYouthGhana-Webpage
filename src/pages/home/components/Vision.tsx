import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content'

const challenges = [
  {
    title: 'Tech Education Gap',
    description: 'Bridging the digital divide by providing comprehensive IT education to underserved youth across Ghana.',
    image: '/images/tafel.png'
  },
  {
    title: 'Career Development',
    description: 'Empowering young people with practical skills and mentorship for sustainable careers in technology.',
    image: '/images/UX1.jpeg'
  },
  {
    title: 'Innovation & Entrepreneurship',
    description: 'Fostering digital entrepreneurship and innovation to create economic opportunities in tech.',
    image: '/images/UX3.jpeg'
  },
  {
    title: 'Gender Equality',
    description: 'Promoting equal access to technology education with 40% female participation in our programs.',
    image: '/images/UX2.jpg'
  }
]

const Vision: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="section bg-neutral-50 paper-texture relative overflow-hidden">
      {/* Ghibli-style decorative clouds */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-[#8fb2d6]/30 rounded-2xl blur-xl opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#1b65b2]/20 rounded-2xl blur-2xl opacity-50"></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-28 bg-[#195aa5]/15 rounded-2xl blur-xl opacity-40"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#1b65b2]/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#d02355]/30 rounded-full animate-bounce" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#8fb2d6]/50 rounded-full animate-bounce" style={{ animationDelay: '-4s' }}></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{content.mission.title}</h2>
          <p className="section-subtitle">
            {content.mission.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20 text-center group cursor-pointer"
            >
              <motion.div 
                className="w-20 h-20 mb-6 mx-auto rounded-2xl overflow-hidden"
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={challenge.image} 
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-[#1b65b2] group-hover:text-[#d02355] transition-colors duration-300">
                {challenge.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {challenge.description}
              </p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b65b2]/0 to-[#d02355]/0 group-hover:from-[#1b65b2]/10 group-hover:to-[#d02355]/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8fb2d6] to-[#1b65b2] rounded-2xl overflow-hidden mr-4 flex items-center justify-center">
                  <img src="/images/logo.png" alt="Mission" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-[#1b65b2]">Our Mission</h3>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {content.about.mission}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20"
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#195aa5] to-[#d02355] rounded-2xl overflow-hidden mr-4 flex items-center justify-center">
                  <img src="/images/logo.png" alt="Vision" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-[#1b65b2]">Our Vision</h3>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {content.about.vision}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.hero.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1b65b2] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-lg font-semibold text-neutral-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision