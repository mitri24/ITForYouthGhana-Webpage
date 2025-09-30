import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TeamSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const coreTeam = [
    {
      name: 'Peter Duodu',
      role: 'Founder & Business Development Lead',
      image: '/images/people/peter.jpg',
      description: 'Founder and business strategist driving our mission forward. Holds a Master\'s in Accounting and Financial Research with extensive experience in youth training programs and digital inclusion.',
      email: 'peter@itforyouthghana.org',
      linkedin: 'https://www.linkedin.com/in/peter-duodu/',
      expertise: 'Business Strategy, Program Development, Marketing'
    },
    {
      name: 'Miréio Trinley',
      role: 'IT & Technology Lead',
      image: '/images/people/white lady-Cover.jpg',
      description: 'Leading our technology initiatives and IT infrastructure. Responsible for technical program development, system architecture, and innovative learning solutions.',
      email: 'mireiotrinley@itforyouthghana.org',
      linkedin: 'https://www.linkedin.com/in/mireio-trinley',
      expertise: 'Technology, System Architecture, IT Development'
    },
    {
      name: 'John Ametepe',
      role: 'Lead Developer',
      image: '/images/people/emmanuel.jpg',
      description: 'Our lead developer responsible for building innovative learning platforms and technical solutions that support our educational programs.',
      email: 'johnametepe@itforyouthghana.org',
      linkedin: '#',
      expertise: 'Software Development, Platform Engineering, Technical Training'
    }
  ]

  const boardMembers = [
    {
      name: 'Dr. Sarah Kofi',
      role: 'Board Chairperson',
      background: '20+ years in Educational Leadership',
      expertise: 'Strategic Planning, Educational Policy'
    },
    {
      name: 'Michael Asante',
      role: 'Board Member - Finance',
      background: 'Senior Financial Analyst',
      expertise: 'Financial Oversight, Risk Management'
    },
    {
      name: 'Grace Mensah',
      role: 'Board Member - Community Relations',
      background: 'Community Development Specialist',
      expertise: 'Stakeholder Engagement, Community Outreach'
    }
  ]

  return (
    <section ref={ref} className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Meet Our Leadership Team</h2>
          <p className="text-lead text-center max-w-4xl mx-auto mb-6">
            Our success is driven by a passionate team of dedicated professionals, experienced board members, and committed volunteers working together to transform lives through technology.
          </p>
          <p className="text-body text-center max-w-5xl mx-auto">
            Led by visionary leaders, innovative technologists, and experienced educators, our team combines deep local knowledge with international expertise to deliver impactful programs that create lasting change in Ghana's tech ecosystem.
          </p>
        </motion.div>

        {/* Core Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="heading-lg text-center mb-12 text-primary">Core Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h4>
                
                <p className="text-accent font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-sm text-neutral-600 mb-4 font-medium">
                  {member.expertise}
                </p>
                
                <p className="text-body text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Contact Links */}
                <div className="flex justify-center gap-4">
                  {member.linkedin !== '#' && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Board of Directors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="heading-lg text-center mb-12 text-primary">Board of Directors</h3>
          <p className="text-lead text-center mb-8 max-w-3xl mx-auto">
            Our experienced board provides strategic guidance and governance oversight to ensure organizational excellence and mission alignment.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 text-center"
              >
                <h4 className="text-lg font-bold text-primary mb-2">
                  {member.name}
                </h4>
                <p className="text-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 mb-2">
                  {member.background}
                </p>
                <p className="text-xs text-neutral-500 font-medium">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Team Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Board of Directors</h4>
              <p className="text-body leading-relaxed">
                Made up of individuals from diverse educational backgrounds, with vast years of experience guiding our strategic direction and ensuring organizational accountability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Technical Team</h4>
              <p className="text-body leading-relaxed">
                Team of Software and Computer Engineers, each bringing relevant skills in curriculum development, program management, and community engagement to deliver quality training.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">International Mentorship Team</h4>
              <p className="text-body leading-relaxed">
                These are experienced professionals across Europe and Africa who empower our beneficiaries and guide them with their experience in various technology fields.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Community Volunteers</h4>
              <p className="text-body leading-relaxed">
                Dedicated volunteers who support our outreach programs, mentor students, and help with event coordination across our various initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="heading-md mb-4 text-white">Join Our Mission</h3>
            <p className="text-lg mb-6 text-white/90">
              Ready to make an impact? Connect with our team and discover how you can contribute to transforming lives through technology education in Ghana.
            </p>
            <motion.button
              className="btn btn-secondary bg-white text-primary hover:bg-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection