import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'

const CorporateSponsorship: React.FC = () => {
  const partnershipData = {
    title: 'Corporate Sponsorship',
    description: 'Join us as a corporate sponsor to support our programs and gain visibility while making a social impact.',
    image: '/images/randomPictures/graduationspeaking.JPG',
    benefits: ['Brand visibility', 'CSR impact', 'Tax benefits', 'Employee engagement'],
    overview: 'Our Corporate Sponsorship program offers businesses meaningful opportunities to support digital inclusion while achieving corporate social responsibility goals and gaining valuable brand exposure.',
    whatWeOffer: [
      'Brand visibility across all our programs and events',
      'Named program opportunities (e.g., "Company X Tech Center")',
      'Employee volunteer and mentorship opportunities',
      'Impact reporting and measurement',
      'Tax-deductible donation receipts',
      'Recognition in annual reports and website',
      'Invitation to exclusive partner events'
    ],
    whatWeSeek: [
      'Financial support for programs and operations',
      'In-kind donations (equipment, software, facilities)',
      'Employee volunteers and mentors',
      'Technical expertise and guidance',
      'Long-term partnership commitment'
    ],
    successStories: 'Our corporate partners have helped us reach 2,000+ youth, establish 15 tech centers, and provide over GHS 500,000 in scholarships and equipment. Partners report high employee satisfaction and measurable CSR impact.',
    nextSteps: 'Partnership discussion → Proposal development → Agreement signing → Program implementation → Impact measurement',
    requirements: 'Registered business entity, alignment with our mission and values, minimum 1-year commitment, willingness to be publicly associated with our work'
  }

  return (
    <>
      <SEO
        title="Corporate Sponsorship - IT for Youth Ghana"
        description="Join us as a corporate sponsor to support our programs and gain visibility while making a social impact."
        canonical="/partnerships/corporate-sponsorship"
      />
      
      <div className="min-h-screen">
        <Hero
          title={partnershipData.title}
          subtitle="Drive Impact Through Partnership"
          description={partnershipData.description}
          primaryCta={{ text: "Start Partnership", action: () => window.location.href = '/contact' }}
          secondaryCta={{ text: "Download Sponsorship Package", action: () => window.location.href = '/contact' }}
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
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Ready to Make an Impact?</h3>
                <p className="text-lead mb-8 text-neutral-700">
                  Partner with us to create meaningful change while achieving your corporate social responsibility goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Sponsorship Discussion
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

export default CorporateSponsorship