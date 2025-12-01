import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../data/content/index'
import { getImagePath } from '../../../utils/randomImages'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
  email?: string
  phone?: string
}

const AboutTeam: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers: TeamMember[] = [
    {
      name: 'Peter Duodu',
      role: 'Executive Director & Project Lead',
      image: getImagePath('/images/people/peter.jpg'),
      description: 'Administrative department leader fully committed to coordination tasks. Contact: peter@itforyouthghana.org, +233 596 244 834',
      email: 'peter@itforyouthghana.org',
      phone: '+233 596 244 834'
    },
    {
      name: 'Emmanuel Adjei',
      role: 'Founder & Program Director',
      image: getImagePath('/images/people/emmanuel.jpg'),
      description: 'Visionary leader with 8+ years in tech education and youth development, driving our mission to achieve 70% female participation.'
    },
    {
      name: 'Belinda Asante',
      role: 'Frontend Development Lead',
      image: getImagePath('/images/people/Belinda.jpg'),
      description: 'Experienced developer and mentor, passionate about empowering young women in tech through hands-on training.'
    },
    {
      name: 'Elisabeth Awartey',
      role: 'Database Management Specialist',
      image: getImagePath('/images/people/elisabeth.jpg'),
      description: 'Expert in data systems and analytics, driving evidence-based program improvements and student tracking.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Team</h2>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
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
              <p className="text-neutral-800 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam