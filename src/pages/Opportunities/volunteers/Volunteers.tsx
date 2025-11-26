import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import { motion } from 'framer-motion'
import { volunteerRoles } from '../../volunteer/data/volunteerRoles'
import { navigateToPage } from '../../../utils/navigation'

const Volunteers: React.FC = () => {

  const handleVolunteer = () => {
    navigateToPage('/contact')
  }

  const handleLearnMore = () => {
    document.getElementById('volunteer-opportunities')?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <>
      <SEO
        title="For Volunteers - IT for Youth Ghana"
        description="Make a difference in your community. Volunteer with IT for Youth Ghana and help transform young lives through technology education."
        canonical="/opportunities/volunteers"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
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
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Volunteer Opportunities</h2>
              <p className="text-lead max-w-3xl mx-auto text-neutral-700">
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
                  className="card group"
                >
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="heading-sm group-hover:text-opacity-80 transition-colors duration-300" style={{ color: '#0c2d5a' }}>{role.title}</h3>
                      <span 
                        className="text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                        style={{ backgroundColor: 'rgba(12, 45, 90, 0.8)' }}
                      >
                        {role.commitment}
                      </span>
                    </div>
                    <p className="text-body mb-4">{role.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-800 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.slice(0, 3).map((skill: string, idx: number) => (
                          <span 
                            key={idx} 
                            className="text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                            style={{ backgroundColor: 'rgba(12, 45, 90, 0.8)' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      className="rounded-lg p-3"
                      style={{ backgroundColor: 'rgba(12, 45, 90, 0.1)' }}
                    >
                      <p className="text-sm font-semibold" style={{ color: '#0c2d5a' }}>{role.impact}</p>
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

      </div>
    </>
  )
}

export default Volunteers