import React, { useState } from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'
import Modal from '../../../components/Modal'
import { partnershipOptions } from '../../partners/components/partnershipData'

const Businesses: React.FC = () => {
  const [selectedPartnership, setSelectedPartnership] = useState<any>(null)
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false)

  const handlePartnerWithUs = () => {
    window.location.href = '/contact'
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
        canonical="/what-we-offer/businesses"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Partner with Purpose"
          subtitle="For Businesses"
          description="Transform lives while advancing your business goals through meaningful partnerships that create lasting impact in Ghana's tech ecosystem."
          primaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
          secondaryCta={{ text: "Explore Options", action: handleLearnMore }}
        />
        
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
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-primary font-bold text-lg">{partnership.icon}</span>
                      </div>
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
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="heading-md mb-4 text-primary">Ready to Make an Impact?</h3>
                <p className="text-body mb-6 max-w-2xl mx-auto">
                  Join us in transforming lives through technology education. Every partnership contributes to building Ghana's digital future.
                </p>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePartnerWithUs}
                >
                  Start Partnership Discussion
                </motion.button>
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

export default Businesses