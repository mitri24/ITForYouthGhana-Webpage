import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'

const InternationalDevelopment: React.FC = () => {
  const partnershipData = {
    title: 'International Development',
    description: 'Partner with international organizations to bring global expertise and funding to local programs.',
    image: '/images/randomPictures/maingraduationpic.PNG',
    benefits: ['Global expertise', 'International funding', 'Knowledge transfer', 'Best practices'],
    overview: 'Our International Development partnerships connect us with global organizations, bringing international expertise, funding, and best practices to enhance our local programs and expand our impact.',
    whatWeOffer: [
      'Local knowledge and community connections',
      'Cultural competency and language skills',
      'Program implementation and management',
      'Monitoring and evaluation capabilities',
      'Government and stakeholder relationships',
      'Proven track record in digital inclusion'
    ],
    whatWeSeek: [
      'International funding and grants',
      'Technical expertise and best practices',
      'Global network connections',
      'Capacity building and training opportunities',
      'Exchange programs and partnerships',
      'Research and evaluation support'
    ],
    successStories: 'Our international partnerships have brought over $200,000 in funding, enabled 50+ youth to participate in international programs, and helped us adopt best practices from leading digital inclusion organizations worldwide.',
    nextSteps: 'Initial consultation → Partnership proposal → Due diligence → Program design → Implementation → Knowledge sharing',
    requirements: 'International organization status, track record in development work, commitment to local capacity building, alignment with sustainable development goals'
  }

  return (
    <>
      <SEO
        title="International Development Partnerships - IT for Youth Ghana"
        description="Partner with international organizations to bring global expertise and funding to local programs."
        canonical="/partnerships/international-development"
      />
      
      <div className="min-h-screen">
        <Hero
          title={partnershipData.title}
          subtitle="Global Impact, Local Solutions"
          description={partnershipData.description}
          primaryCta={{ text: "Start Partnership", action: () => window.location.href = '/contact' }}
          secondaryCta={{ text: "Download Partnership Proposal", action: () => window.location.href = '/contact' }}
        />

        {/* Partnership Overview */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Partnership Overview</h2>
                <p className="text-lead mb-8 text-neutral-700 leading-relaxed">
                  {partnershipData.overview}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="heading-md mb-4" style={{ color: '#0c2d5a' }}>Key Benefits</h3>
                    <div className="flex flex-wrap gap-3">
                      {partnershipData.benefits.map((benefit, index) => (
                        <span 
                          key={index}
                          className="text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                          style={{ backgroundColor: 'rgba(12, 45, 90, 0.8)' }}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src={partnershipData.image} 
                  alt={partnershipData.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: 'rgba(12, 45, 90, 0.1)' }}></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer & What We Seek */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* What We Offer */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>What We Offer</h3>
                <div className="space-y-4">
                  {partnershipData.whatWeOffer.map((offer, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <p className="text-body text-neutral-700">{offer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What We Seek */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>What We Seek</h3>
                <div className="space-y-4">
                  {partnershipData.whatWeSeek.map((seek, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <p className="text-body text-neutral-700">{seek}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="heading-xl mb-8" style={{ color: '#0c2d5a' }}>Success Stories</h2>
              <div 
                className="rounded-xl p-8"
                style={{ backgroundColor: 'rgba(12, 45, 90, 0.05)' }}
              >
                <p className="text-lead text-neutral-700 leading-relaxed italic">
                  "{partnershipData.successStories}"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Process & Requirements */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Partnership Process */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Partnership Process</h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  {partnershipData.nextSteps}
                </p>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Requirements</h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  {partnershipData.requirements}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div 
                className="rounded-2xl p-12"
                style={{ 
                  backgroundColor: 'rgba(12, 45, 90, 0.05)',
                  border: '1px solid rgba(12, 45, 90, 0.1)'
                }}
              >
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Ready to Make Global Impact?</h3>
                <p className="text-lead mb-8 text-neutral-700">
                  Partner with us to bridge global expertise with local solutions for sustainable development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Partnership Discussion
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Partnership Team
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default InternationalDevelopment