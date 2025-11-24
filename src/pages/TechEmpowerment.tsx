import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import Hero from '../components/shared/Hero'

const TechEmpowerment: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleEnrollNow = () => {
    window.location.href = '/contact'
  }

  const handlePartnerWithUs = () => {
    window.location.href = '/partners'
  }

  const programHighlights = [
    {
      title: 'Technical Mastery',
      description: 'Comprehensive training in coding, programming, data analytics, graphic design, and web development.',
      icon: '💻'
    },
    {
      title: 'Career Readiness', 
      description: 'Project-based learning helps participants build professional portfolios and develop in-demand digital skills.',
      icon: '🚀'
    },
    {
      title: 'Entrepreneurship Development',
      description: 'Participants are equipped with skills in digital marketing, business development, and social media management, fostering self-reliance and innovation.',
      icon: '💡'
    }
  ]

  const impactStats = [
    { value: '850+', label: 'Youth Trained', description: 'Participants across all programs' },
    { value: '78%', label: 'Job Placement', description: 'Employment success rate' },
    { value: '45', label: 'Communities', description: 'Reached nationwide' },
    { value: '40%+', label: 'Female Participation', description: 'Gender inclusive programs' }
  ]

  const targetParticipants = [
    'Women and girls aiming to break barriers in the tech industry',
    'Financially disadvantaged individuals with limited access to formal education',
    'Persons with physical disabilities seeking inclusive learning opportunities',
    'Youth aged 18-24 looking for career advancement in technology'
  ]

  const approachSteps = [
    {
      title: 'Mobile Training Units',
      description: 'We deploy equipped units with laptops, internet connectivity, and solar power systems to reach remote communities.',
      icon: '🚐'
    },
    {
      title: 'Certified Trainers',
      description: '8-week intensive courses covering computer literacy, basic programming, digital marketing, and entrepreneurship skills.',
      icon: '👨‍🏫'
    },
    {
      title: 'Real-World Projects',
      description: 'Hands-on learning through practical projects that build professional portfolios and technical expertise.',
      icon: '🛠️'
    },
    {
      title: 'Community Impact',
      description: 'Participants become tech leaders in their communities, creating a multiplier effect across regions.',
      icon: '🌍'
    }
  ]

  return (
    <>
      <SEO
        title="Tech Empowerment Initiative - Equipping Ghanaian Youth for the Future"
        description="Our flagship 6-month program combining training and internships to empower youth aged 18-24 with transformative IT skills and entrepreneurial knowledge."
        canonical="/tech-empowerment"
      />
      
      <div className="min-h-screen bg-white">
        <Hero
          title="Tech Outreach Initiative"
          subtitle="Bringing technology education directly to underserved communities"
          description="Our flagship Tech Outreach Initiative directly addresses the digital divide by bringing comprehensive technology education to underserved communities across Ghana."
          primaryCta={{ text: "Enroll Now", action: handleEnrollNow }}
          secondaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
        />

        {/* Program Overview */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6 text-primary">Program Overview</h2>
              <div className="text-container">
                <p className="text-lead mb-6">
                  Bringing technology education directly to underserved communities across Ghana, 
                  ensuring no youth is left behind in the digital revolution.
                </p>
              </div>
            </motion.div>

            {/* Key Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  'Bridge the digital divide in rural areas',
                  'Provide foundational IT skills',
                  'Create pathways to employment',
                  'Build sustainable tech communities'
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="text-center group"
                  >
                    <div className="w-3 h-3 mx-auto mb-4 bg-primary rounded-full"></div>
                    <p className="text-body text-gray-600">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section ref={ref} className="section bg-primary text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Approach</h2>
              <div className="text-container">
                <p className="text-xl text-white mb-8">
                  We deploy mobile training units equipped with laptops, internet connectivity, and solar power systems to reach remote communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            >
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-white">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">What You'll Achieve</h2>
              <div className="text-container">
                <p className="text-xl mb-8">
                  Comprehensive programs designed to empower Ghanaian youth with technology skills, 
                  entrepreneurship opportunities, and pathways to economic empowerment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + (index * 0.1)
                    }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="text-center group bg-blue-50 rounded-2xl p-8"
                  >
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    
                    <p className="text-body text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact & Outcomes */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6 text-primary">Program Impact</h2>
              <div className="text-container">
                <p className="text-lead mb-8">
                  Participants have gone on to start their own tech businesses, secure employment in IT companies, 
                  and become community tech leaders, creating a multiplier effect in their local areas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Section Divider */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              <div className="px-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>

            {/* Target Participants */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h3 className="heading-md text-primary text-center mb-8">Who Can Participate</h3>
              <p className="text-body text-center mb-8">
                The initiative serves youth aged 16-25, prioritizing:
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {targetParticipants.map((participant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body leading-relaxed">{participant}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ready to Get Started */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="heading-lg mb-8 text-white">Ready to Get Started?</h2>
              <p className="text-lead mb-12 text-white/90 leading-relaxed">
                Join young Ghanaians who are building their tech careers and creating impact in their communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.button
                  className="inline-flex items-center gap-3"
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    background: 'white',
                    color: '#0152be',
                    border: '2px solid #0152be',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnrollNow}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)'
                    e.currentTarget.style.background = '#f8fafc'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
                    e.currentTarget.style.background = 'white'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Information
                </motion.button>

                <motion.button
                  className="inline-flex items-center gap-3"
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/programs'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.15)'
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = '#0152be'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </svg>
                  Explore Programs
                </motion.button>
              </div>

              <div className="text-center">
                <h3 className="heading-sm text-white/90 mb-4">Other Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = '/programs'}
                  >
                    <h4 className="font-semibold text-white mb-2">Girls in Tech Programs</h4>
                    <p className="text-sm text-white/80">Dedicated programs to empower young women with technology skills...</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = '/programs'}
                  >
                    <h4 className="font-semibold text-white mb-2">Rural Tech Connect</h4>
                    <p className="text-sm text-white/80">Connecting rural communities to digital opportunities through...</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = '/programs'}
                  >
                    <div className="text-center">
                      <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                      </svg>
                      <span className="font-semibold">View All Programs →</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TechEmpowerment