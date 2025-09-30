import React, { useState, useRef } from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion, useInView } from 'framer-motion'
import Modal from '../../../components/Modal'
import { partnershipOptions } from '../../partners/components/partnershipData'
import { navigateToPage } from '../../../utils/navigation'

const Businesses: React.FC = () => {
  const [selectedPartnership, setSelectedPartnership] = useState<any>(null)
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false)

  const handlePartnerWithUs = () => {
    navigateToPage('/contact')
  }

  const handleLearnMore = () => {
    document.getElementById('partnership-options')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openPartnershipModal = (partnership: any) => {
    setSelectedPartnership(partnership)
    setIsPartnershipModalOpen(true)
  }

  const closePartnershipModal = () => {
    setIsPartnershipModalOpen(false)
    setSelectedPartnership(null)
  }

  return (
    <>
      <SEO
        title="For Businesses - IT for Youth Ghana"
        description="Partner with us to access job-ready tech talent. Corporate training, recruitment pipeline, and CSR opportunities with Ghana's leading tech education NGO."
        canonical="/opportunities/businesses"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Partner with Purpose"
          subtitle="For Businesses"
          description="Transform lives while advancing your business goals through meaningful partnerships that create lasting impact in Ghana's tech ecosystem."
          primaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
         
        />

         {/* Partners Section */}
         <PartnersSection />
        
        <section id="partnership-options" className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-xl mb-6 text-primary">Partnership Opportunities</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Discover various ways your organization can support digital inclusion while achieving your goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partnershipOptions.map((partnership, index) => (
                <motion.div
                  key={partnership.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="card cursor-pointer group"
                  onClick={() => openPartnershipModal(partnership)}
                >
                  <div className="card-body">
                    <div className="flex items-center mb-4">
                      
                      <h3 className="heading-sm text-primary group-hover:text-accent transition-colors duration-300">
                        {partnership.title}
                      </h3>
                    </div>
                    
                    <p className="text-body mb-6">{partnership.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-neutral-800 mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partnership.benefits.map((benefit: string, idx: number) => (
                          <span key={idx} className="badge badge-primary text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">Click to learn more about this partnership opportunity</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            
            <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/10 shadow-lg">
            <h3 className="heading-md mb-4 text-primary">Ready to Make an Impact?</h3>
            <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
            Join us in transforming lives through technology education. Every partnership contributes to building Ghana's digital future.
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

        {/* Partnership Details Modal */}
        <Modal
          isOpen={isPartnershipModalOpen}
          onClose={closePartnershipModal}
          title={selectedPartnership?.title || ''}
          size="large"
        >
          {selectedPartnership && (
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-4">Partnership Overview</h3>
                <p className="text-body leading-relaxed">
                  {selectedPartnership.detailContent?.overview}
                </p>
              </div>

              <div>
                <h3 className="heading-md mb-4">What We Offer</h3>
                <div className="grid gap-3">
                  {selectedPartnership.detailContent?.whatWeOffer?.map((offer: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{offer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">What We Seek</h3>
                <div className="grid gap-3">
                  {selectedPartnership.detailContent?.whatWeSeek?.map((seek: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{seek}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-success/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Success Stories</h3>
                <p className="text-body font-medium">
                  {selectedPartnership.detailContent?.successStories}
                </p>
              </div>

              <div>
                <h3 className="heading-md mb-4">Partnership Process</h3>
                <p className="text-body">
                  {selectedPartnership.detailContent?.nextSteps}
                </p>
              </div>

              <div className="bg-neutral/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Requirements</h3>
                <p className="text-body">
                  {selectedPartnership.detailContent?.requirements}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closePartnershipModal()
                    window.location.href = '/contact'
                  }}
                >
                  Start Partnership Discussion
                </motion.button>
                <motion.button
                  className="btn btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closePartnershipModal()
                    window.location.href = 'mailto:partnerships@itforyouthghana.org?subject=Partnership Inquiry - ' + encodeURIComponent(selectedPartnership.title)
                  }}
                >
                  Email Partnership Team
                </motion.button>
              </div>
            </div>
          )}
        </Modal>

       
      </div>
    </>
  )
}

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

export default Businesses