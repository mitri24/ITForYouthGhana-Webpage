import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import SEO from '../components/SEO'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: 'Peter Duodu',
      role: 'Executive Director & Project Lead',
      image: '/images/people/peter.jpg',
      description: 'Administrative department leader fully committed to coordination tasks. Contact: peter@itforyouthghana.org, +233 596 244 834',
      email: 'peter@itforyouthghana.org',
      phone: '+233 596 244 834'
    },
    {
      name: 'Emmanuel Adjei',
      role: 'Founder & Program Director',
      image: '/images/people/emmanuel.jpg',
      description: 'Visionary leader with 8+ years in tech education and youth development, driving our mission to achieve 70% female participation.'
    },
    {
      name: 'Belinda Asante',
      role: 'Frontend Development Lead',
      image: '/images/people/Belinda.jpg',
      description: 'Experienced developer and mentor, passionate about empowering young women in tech through hands-on training.'
    },
    {
      name: 'Elisabeth Awartey',
      role: 'Database Management Specialist',
      image: '/images/people/elisabeth.jpg',
      description: 'Expert in data systems and analytics, driving evidence-based program improvements and student tracking.'
    }
  ]

  // CHANGED: Timeline ab 2023 - Realistischer Gründungszeitpunkt
  const milestones = [
    { 
      year: '2023', 
      title: 'IT for Youth Ghana Founded', 
      description: 'Emmanuel Adjei establishes the NGO with a vision to bridge Ghana\'s digital divide and achieve 70% female participation in tech education',
      quarter: 'Q1'
    },
    { 
      year: '2023', 
      title: 'First Community Outreach', 
      description: 'Initial workshops reach 30 young people in Accra, focusing on digital literacy and basic programming',
      quarter: 'Q2'
    },
    { 
      year: '2023', 
      title: 'Girls in Tech Initiative Launch', 
      description: 'Specialized programs for young women launch with immediate success - achieving 65% female enrollment',
      quarter: 'Q3'
    },
    { 
      year: '2024', 
      title: 'Rural Tech Connect Program', 
      description: 'Expansion to rural communities with mobile training units and partnerships with local schools',
      quarter: 'Q1'
    },
    { 
      year: '2024', 
      title: 'Partnership Growth', 
      description: 'Established partnerships with 25+ schools and local organizations, reaching 200+ students',
      quarter: 'Q2-Q3'
    },
    { 
      year: '2024', 
      title: 'Digital Innovation Hub', 
      description: 'Opened our first permanent training facility and achieved 70% female participation milestone',
      quarter: 'Q4'
    },
    { 
      year: '2025', 
      title: 'Scaling Impact', 
      description: 'Plans for expanding to 3 additional regions and reaching 500+ students annually',
      quarter: 'Planned'
    }
  ]

  return (
    <>
      <SEO
        title="Our Story - About IT for Youth Ghana"
        description="Learn about IT for Youth Ghana's journey since 2023, our mission to achieve 70% female participation in tech education, and meet our leadership team driving digital inclusion across Ghana."
        canonical="/about"
        ogType="organization"
      />
      
      <div className="min-h-screen bg-white" style={{ paddingTop: 'var(--space-3xl)' }}>
        {/* CHANGED: UX-optimierter Hero für "Our Story" */}
        <section className="section-hero bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="heading-xl text-white mb-6">Our Story</h1>
            <div className="text-container">
              <p className="text-lead text-white/90">
                Since 2023, we've been on a mission to bridge Ghana's digital divide and achieve 70% female participation in technology education. Here's how we're transforming lives through accessible, inclusive tech training.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue rounded-xl flex items-center justify-center mr-4">
                  <img src="/images/logo/logo.png" alt="Mission" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Mission</h3>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.about.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-secondary/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4">
                  <img src="/images/logo/logo.png" alt="Vision" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Vision</h3>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact & Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Unique Approach</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              IT for Youth Ghana has successfully achieved 70% female participation in technology programs, 
              addressing Ghana's critical gender gap in STEM education and digital skills development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Gender Inclusion Excellence</h3>
              <p className="text-neutral-600">
                Our specialized support systems address unique challenges women face in technology education, 
                including flexible scheduling, childcare coordination, and confidence-building workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Community-Centered Training</h3>
              <p className="text-neutral-600">
                We deliver training in multiple local languages with culturally relevant content, 
                ensuring no one is excluded due to language barriers or cultural differences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Integrated Business Training</h3>
              <p className="text-neutral-600">
                Students learn technical skills alongside business development, pricing services, 
                client management, and marketing - creating immediate employment or entrepreneurship opportunities.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Addressing Ghana's Digital Gender Gap</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent">The Challenge</h4>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Only 7% of women in Ghana have used a computer (vs 21% of men)</li>
                  <li>• Just 15% of women use internet for ICT purposes (vs 35% of men)</li>
                  <li>• Women hold only 17.6% of technology sector jobs</li>
                  <li>• Girls represent just 39% of STEM students at secondary level</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary">Our Solution</h4>
                <ul className="text-neutral-600 space-y-2">
                  <li>• 70% female participation in our technology programs</li>
                  <li>• Multilingual instruction removing language barriers</li>
                  <li>• Flexible scheduling accommodating family responsibilities</li>
                  <li>• Comprehensive support systems and mentorship networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANGED: Timeline ab 2023 mit UX-optimiertem Layout */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="heading-lg mb-6">Our Journey Since 2023</h2>
            <div className="text-container">
              <p className="text-lead text-center">
                From our founding to becoming a leading voice in Ghana's tech education landscape
              </p>
            </div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${milestone.quarter}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card" style={{ padding: 'var(--space-lg)' }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <span className="badge badge-primary text-xs">{milestone.quarter}</span>
                      </div>
                      <h3 className="heading-sm mb-3">{milestone.title}</h3>
                      <p className="text-body">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white shadow-primary"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.about.team.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-secondary/20 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-secondary/20 group-hover:border-primary/40 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.about.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-neutral-50 rounded-2xl p-8 border border-secondary/20 overflow-hidden"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img src={
                    index === 0 ? '/images/randomPictures/IMG-20241118-WA0060.jpg' :
                    index === 1 ? '/images/randomPictures/2024-12-17 20.57 (6).jpg' :
                    '/images/randomPictures/IMG_8623.JPG'
                  } alt={value.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default About