import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import Hero from '../components/shared/Hero'

const Careers: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleApply = (position: string) => {
    window.location.href = `mailto:info@itforyouthghana.org?subject=Application for ${position}&body=I am interested in applying for the ${position} position at IT for Youth Ghana.`
  }

  const handleLearnMore = () => {
    document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' })
  }

  const jobListings = [
    {
      title: 'CODING & PROGRAMMING MODERATORS',
      type: 'Nationwide',
      description: 'Coding and Programming Moderators at IT For Youth Ghana help facilitate and teach programming in our various tech camps and programs.',
      responsibilities: [
        'Facilitate coding sessions and workshops',
        'Provide technical guidance to students',
        'Assist in curriculum development',
        'Mentor students in programming concepts',
        'Support various tech camps and programs'
      ],
      requirements: [
        'Strong programming skills in multiple languages',
        'Experience in teaching or mentoring',
        'Excellent communication skills',
        'Passion for youth development',
        'Ability to work across different locations'
      ]
    },
    {
      title: 'FUNDRAISERS',
      type: 'Full-time',
      description: 'Fundraisers at IT For Youth Ghana play a crucial role in securing financial support for our initiatives. They organize events, engage with donors, and promote our mission to empower youth through technology.',
      responsibilities: [
        'Develop and implement fundraising strategies',
        'Organize fundraising events and campaigns',
        'Build and maintain donor relationships',
        'Write grant proposals and funding applications',
        'Promote organizational mission and programs',
        'Track and report on fundraising progress'
      ],
      requirements: [
        'Experience in fundraising or development',
        'Excellent written and verbal communication',
        'Strong organizational and planning skills',
        'Ability to build relationships with diverse stakeholders',
        'Knowledge of grant writing preferred',
        'Passion for educational and youth causes'
      ]
    },
    {
      title: 'SECRETARY/RECEPTIONIST',
      type: 'Full-time',
      description: 'Secretary/Receptionists at IT For Youth Ghana manage communication and administrative tasks, ensuring smooth operations and providing essential support to our team and visitors.',
      responsibilities: [
        'Manage front desk and reception duties',
        'Handle phone calls and email communications',
        'Schedule appointments and meetings',
        'Maintain filing systems and records',
        'Support administrative tasks across departments',
        'Greet and assist visitors and students'
      ],
      requirements: [
        'Excellent communication and interpersonal skills',
        'Proficiency in Microsoft Office Suite',
        'Strong organizational and multitasking abilities',
        'Professional demeanor and appearance',
        'Experience in administrative roles preferred',
        'Fluency in English and local languages'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Join Our Team - Career Opportunities at IT for Youth Ghana"
        description="Join IT for Youth Ghana's mission to transform lives through technology education. Current openings for moderators, fundraisers, and administrative positions."
        canonical="/careers"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Join Our Team"
          subtitle="IT FOR YOUTH GHANA"
          description="Be part of our transformative mission to empower Ghana's youth through technology education. Together, we strive to create impactful programs and opportunities that foster growth, innovation, and community engagement."
          primaryCta={{ text: "View Openings", action: handleLearnMore }}
          secondaryCta={{ text: "Contact Us", action: () => window.location.href = '/contact' }}
        />

        {/* Mission Statement */}
        <section className="section bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="heading-lg mb-6 text-primary">Best Technology Careers for the Future</h2>
              <p className="text-lead leading-relaxed mb-8">
                In conclusion, IT For Youth Ghana is dedicated to empowering the next generation through 
                technology education and skills development. Together, we strive to create impactful 
                programs and opportunities that foster growth, innovation, and community engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Job Listings */}
        <section id="current-openings" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Current Job Listings</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Join our dedicated team of professionals making a real difference in Ghana's technology education landscape
              </p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="heading-sm text-primary mb-2">{job.title}</h3>
                      <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    <motion.button
                      className="btn btn-primary mt-4 md:mt-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleApply(job.title)}
                    >
                      Apply Now
                    </motion.button>
                  </div>

                  <p className="text-body leading-relaxed mb-8">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">Key Responsibilities:</h4>
                      <div className="space-y-3">
                        {job.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-body text-sm">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-accent mb-4">Requirements:</h4>
                      <div className="space-y-3">
                        {job.requirements.map((requirement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-body text-sm">{requirement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="heading-xl mb-8 text-white">Ready to Make a Difference?</h2>
              <p className="text-lead mb-8 text-white/90">
                Join our passionate team and help us transform lives through technology education. 
                Whether you're a developer, educator, fundraiser, or administrator, there's a place for you in our mission.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Meaningful Work</h3>
                  <p className="text-white/90">
                    Direct contribution to transforming lives and communities
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Growth Opportunities</h3>
                  <p className="text-white/90">
                    Develop new skills and expand your professional network
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Inclusive Community</h3>
                  <p className="text-white/90">
                    Become part of a passionate community of changemakers
                  </p>
                </div>
              </div>

              <motion.button
                className="btn btn-secondary bg-white text-primary hover:bg-neutral-100 text-lg font-bold py-4 px-8 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Contact HR Team
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Careers