import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Milestone {
  year: string
  title: string
  description: string
  quarter: string
}

const AboutTimeline: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const milestones: Milestone[] = [
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
    <section ref={ref} className="section bg-white">
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
  )
}

export default AboutTimeline