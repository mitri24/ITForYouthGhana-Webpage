import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'
import { getImagePath } from '../../../utils/randomImages'

const GovernmentCollaboration: React.FC = () => {
  const partnershipData = {
    title: 'Government Collaboration',
    description: 'Work with government agencies to scale digital inclusion initiatives and influence policy development.',
    image: getImagePath('/images/randomPictures/peterTalking.jpg'),
    benefits: ['Policy influence', 'Scale impact', 'Resource access', 'Legitimacy'],
    overview: 'Our Government Collaboration program works with local, regional, and national government agencies to scale digital inclusion initiatives and create supportive policy environments for technology education.',
    whatWeOffer: [
      'Technical expertise in digital inclusion and youth development',
      'Program implementation and management capabilities',
      'Evidence-based policy recommendations',
      'Community engagement and mobilization',
      'Monitoring and evaluation frameworks',
      'International best practices and connections'
    ],
    whatWeSeek: [
      'Policy support and regulatory backing',
      'Funding and resource allocation',
      'Access to public facilities and institutions',
      'Integration into national development plans',
      'Support for scaling successful programs'
    ],
    successStories: 'We have collaborated with the Ministry of Education on curriculum development, with regional governments on youth employment programs, and provided input on national digital inclusion policies.',
    nextSteps: 'Policy consultation → Pilot program design → Implementation agreement → Program rollout → Policy integration',
    requirements: 'Government agency or ministry status, alignment with national development goals, dedicated liaison officer, commitment to evidence-based programming'
  }

  return (
    <>
      <SEO
        title="Government Collaboration - IT for Youth Ghana"
        description="Work with government agencies to scale digital inclusion initiatives and influence policy development."
        canonical="/partnerships/government-collaboration"
      />
      
      <div className="min-h-screen">
        <Hero
          title={partnershipData.title}
          subtitle="Scaling Digital Inclusion Together"
          description={partnershipData.description}
          primaryCta={{ text: "Start Partnership", action: () => window.location.href = '/contact' }}
          secondaryCta={{ text: "Request Policy Brief", action: () => window.location.href = '/contact' }}
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
                <h3 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Ready to Collaborate?</h3>
                <p className="text-lead mb-8 text-neutral-700">
                  Work with us to scale digital inclusion initiatives and create lasting policy impact for Ghana's youth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Collaboration Discussion
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

export default GovernmentCollaboration