import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: 'Peter Duodu',
      role: 'Executive Director & Project Lead',
      image: '/images/peter.jpg',
      description: 'Administrative department leader fully committed to coordination tasks. Contact: peter@itforyouthghana.org, +233 596 244 834',
      email: 'peter@itforyouthghana.org',
      phone: '+233 596 244 834'
    },
    {
      name: 'Emmanuel Adjei',
      role: 'Founder & Program Director',
      image: '/images/emmanuel.jpg',
      description: 'Visionary leader with 8+ years in tech education and youth development, driving our mission to achieve 70% female participation.'
    },
    {
      name: 'Belinda Asante',
      role: 'Frontend Development Lead',
      image: '/images/Belinda.jpg',
      description: 'Experienced developer and mentor, passionate about empowering young women in tech through hands-on training.'
    },
    {
      name: 'Elisabeth Awartey',
      role: 'Database Management Specialist',
      image: '/images/elisabeth.jpg',
      description: 'Expert in data systems and analytics, driving evidence-based program improvements and student tracking.'
    }
  ]

  const milestones = [
    { year: '2018', title: 'IT for Youth Ghana Founded', description: 'Started with a vision to bridge the digital divide in Ghana' },
    { year: '2019', title: 'First Training Program', description: '50 young people completed their first coding bootcamp' },
    { year: '2020', title: 'Rural Outreach Expansion', description: 'Extended programs to underserved rural communities' },
    { year: '2021', title: 'Girls in Tech Initiative', description: 'Launched dedicated programs for young women in technology' },
    { year: '2022', title: '500+ Students Reached', description: 'Milestone achievement in student enrollment and graduation' },
    { year: '2023', title: 'Partnership Growth', description: 'Established partnerships with 20+ schools and organizations' },
    { year: '2024', title: 'Digital Innovation Hub', description: 'Opened our first permanent training facility in Accra' }
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About IT for Youth Ghana</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Since 2018, we've been transforming lives through technology education and creating opportunities for Ghana's youth.
            </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1b65b2] to-[#195aa5] rounded-xl flex items-center justify-center mr-4">
                  <img src="/images/logo.png" alt="Mission" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-[#1b65b2]">Mission</h3>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.about.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d02355] to-[#1b65b2] rounded-xl flex items-center justify-center mr-4">
                  <img src="/images/logo.png" alt="Vision" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-3xl font-bold text-[#1b65b2]">Vision</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Unique Approach</h2>
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
              <h3 className="text-xl font-bold mb-4 text-[#1b65b2]">Gender Inclusion Excellence</h3>
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
              <h3 className="text-xl font-bold mb-4 text-[#1b65b2]">Community-Centered Training</h3>
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
              <h3 className="text-xl font-bold mb-4 text-[#1b65b2]">Integrated Business Training</h3>
              <p className="text-neutral-600">
                Students learn technical skills alongside business development, pricing services, 
                client management, and marketing - creating immediate employment or entrepreneurship opportunities.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#1b65b2]">Addressing Ghana's Digital Gender Gap</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#d02355]">The Challenge</h4>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Only 7% of women in Ghana have used a computer (vs 21% of men)</li>
                  <li>• Just 15% of women use internet for ICT purposes (vs 35% of men)</li>
                  <li>• Women hold only 17.6% of technology sector jobs</li>
                  <li>• Girls represent just 39% of STEM students at secondary level</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#8fb2d6]">Our Solution</h4>
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

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Story</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From humble beginnings to Ghana's leading technology education initiative
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-[#1b65b2] to-[#d02355]"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-[#8fb2d6]/20">
                      <div className="text-3xl font-bold text-[#1b65b2] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-neutral-800 mb-3">{milestone.title}</h3>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-[#1b65b2] to-[#d02355] rounded-full border-4 border-white shadow-lg"></div>
                  
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Team</h2>
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#8fb2d6]/20 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#8fb2d6]/20 group-hover:border-[#1b65b2]/40 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#1b65b2] to-[#d02355] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1b65b2] mb-2">{member.name}</h3>
                <p className="text-[#d02355] font-semibold mb-3">{member.role}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.about.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-neutral-50 rounded-2xl p-8 border border-[#8fb2d6]/20 overflow-hidden"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img src={index === 1 ? '/images/UX3.jpeg' : `/images/UX${index + 2}.jpg`} alt={value.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-[#1b65b2] mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About