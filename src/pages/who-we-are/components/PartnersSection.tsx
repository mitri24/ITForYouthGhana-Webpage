import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PartnersSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    {
      name: 'Partner Organization 1',
      image: '/images/partnerorga/Download.png',
      type: 'Strategic Partner'
    },
    {
      name: 'Partner Organization 2', 
      image: '/images/partnerorga/Download (1).png',
      type: 'Technology Partner'
    },
    {
      name: 'Partner Organization 3',
      image: '/images/partnerorga/Download (2).png',
      type: 'Educational Partner'
    },
    {
      name: 'Partner Organization 4',
      image: '/images/partnerorga/Download (3).png',
      type: 'Community Partner'
    },
    {
      name: 'Partner Organization 5',
      image: '/images/partnerorga/Download (4).png',
      type: 'Strategic Partner'
    },
    {
      name: 'Partner Organization 6',
      image: '/images/partnerorga/Download (5).png',
      type: 'Technology Partner'
    },
    {
      name: 'Partner Organization 7',
      image: '/images/partnerorga/Download (6).png',
      type: 'Educational Partner'
    },
    {
      name: 'Partner Organization 8',
      image: '/images/partnerorga/Download.jpeg',
      type: 'Community Partner'
    },
    {
      name: 'Partner Organization 9',
      image: '/images/partnerorga/Download (1).jpeg',
      type: 'Strategic Partner'
    }
  ]

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Our Partners</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Working together with organizations that share our vision of empowering youth through technology education and creating sustainable impact across Ghana.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 } 
              }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-neutral-50 group-hover:bg-primary/5 transition-colors duration-300">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-primary font-semibold mb-1 opacity-70">
                    {partner.type}
                  </p>
                  <h4 className="text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/10 shadow-lg">
            <h3 className="heading-md mb-4 text-primary">Become a Partner</h3>
            <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
              Join our network of partners and help us expand our impact. Together, we can create more opportunities for Ghana's youth to thrive in the digital economy.
            </p>
            <motion.a
              href="/contact"
              className="inline-block"
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(1, 82, 190, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(1, 82, 190, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #014aa8 0%, #013d8c 100%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(1, 82, 190, 0.3)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)'
              }}
            >
              Partner With Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection