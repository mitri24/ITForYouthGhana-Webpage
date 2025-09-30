import React, { useState } from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'
import Modal from '../../../components/Modal'
import { volunteerRoles, volunteerBenefits } from '../../volunteer/data/volunteerRoles'

const Volunteers: React.FC = () => {
  const [selectedVolunteerRole, setSelectedVolunteerRole] = useState<any>(null)
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false)

  const handleVolunteer = () => {
    window.location.href = '/contact'
  }

  const handleLearnMore = () => {
    document.getElementById('volunteer-opportunities')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openRoleModal = (role: any) => {
    setSelectedVolunteerRole(role)
    setIsRoleModalOpen(true)
  }

  const closeRoleModal = () => {
    setIsRoleModalOpen(false)
    setSelectedVolunteerRole(null)
  }

  return (
    <>
      <SEO
        title="For Volunteers - IT for Youth Ghana"
        description="Make a difference in your community. Volunteer with IT for Youth Ghana and help transform young lives through technology education."
        canonical="/what-we-offer/volunteers"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Make a Difference"
          subtitle="For Volunteers"
          description="Join our community of passionate volunteers helping to transform young lives through technology education and mentorship."
          primaryCta={{ text: "Start Volunteering", action: handleVolunteer }}
          secondaryCta={{ text: "See Opportunities", action: handleLearnMore }}
        />
        
        <section id="volunteer-opportunities" className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-xl mb-6 text-primary">Volunteer Opportunities</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Find the perfect way to contribute your skills and time to our mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {volunteerRoles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="card cursor-pointer group"
                  onClick={() => openRoleModal(role)}
                >
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="heading-sm text-primary group-hover:text-accent transition-colors duration-300">{role.title}</h3>
                      <span className="badge badge-accent">{role.commitment}</span>
                    </div>
                    <p className="text-body mb-4">{role.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-800 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.slice(0, 3).map((skill: string, idx: number) => (
                          <span key={idx} className="badge badge-primary text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">{role.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button 
                className="btn btn-primary"
                onClick={handleVolunteer}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Volunteer Role Details Modal */}
        <Modal
          isOpen={isRoleModalOpen}
          onClose={closeRoleModal}
          title={selectedVolunteerRole?.title || ''}
          size="large"
        >
          {selectedVolunteerRole && (
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-4">Role Overview</h3>
                <p className="text-body leading-relaxed">
                  {selectedVolunteerRole.detailContent?.overview}
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Time Commitment</h3>
                <p className="text-body font-medium text-primary">
                  {selectedVolunteerRole.detailContent?.timeCommitment}
                </p>
              </div>

              <div>
                <h3 className="heading-md mb-4">Key Responsibilities</h3>
                <div className="grid gap-3">
                  {selectedVolunteerRole.detailContent?.responsibilities?.map((responsibility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-6">
                <h3 className="heading-md mb-4">Requirements</h3>
                <div className="grid gap-3">
                  {selectedVolunteerRole.detailContent?.requirements?.map((requirement: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="heading-md mb-4">What You'll Gain</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedVolunteerRole.detailContent?.benefits?.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <h3 className="heading-md mb-4">Your Impact</h3>
                <p className="text-body font-medium">
                  {selectedVolunteerRole.impact}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeRoleModal()
                    window.location.href = '/contact'
                  }}
                >
                  Apply for This Role
                </motion.button>
                <motion.button
                  className="btn btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeRoleModal()
                    window.location.href = 'mailto:info@itforyouthghana.org?subject=Volunteer Inquiry - ' + encodeURIComponent(selectedVolunteerRole.title)
                  }}
                >
                  Ask Questions
                </motion.button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  )
}

export default Volunteers