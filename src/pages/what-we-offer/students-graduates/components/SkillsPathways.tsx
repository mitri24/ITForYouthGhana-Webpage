import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SkillsPathways: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pathways = [
    {
      title: 'Frontend Development',
      description: 'Build beautiful, interactive user interfaces',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design'],
      outcome: 'Frontend Developer, UI Developer',
      icon: '🎨'
    },
    {
      title: 'Backend Development', 
      description: 'Create robust server-side applications',
      skills: ['Python/Node.js', 'Databases', 'APIs', 'Cloud Deployment'],
      outcome: 'Backend Developer, Full-Stack Developer',
      icon: '⚙️'
    },
    {
      title: 'Data Analysis',
      description: 'Transform data into actionable insights',
      skills: ['Excel', 'Python', 'SQL', 'Data Visualization'],
      outcome: 'Data Analyst, Business Intelligence Analyst',
      icon: '📊'
    },
    {
      title: 'Digital Design',
      description: 'Design engaging digital experiences',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Thinking'],
      outcome: 'UI/UX Designer, Product Designer',
      icon: '🎯'
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
          <h2 className="heading-xl mb-6 text-primary">Career Pathways</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Choose your path and build the specific skills needed to succeed in your chosen tech career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{pathway.icon}</div>
                <div className="flex-1">
                  <h3 className="heading-sm text-primary mb-2">{pathway.title}</h3>
                  <p className="text-body text-neutral-600">{pathway.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-800 mb-3">Core Skills:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {pathway.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-neutral-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Career Outcome:</h4>
                <p className="text-sm text-neutral-700">{pathway.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="heading-md mb-6 text-primary">Not Sure Which Path to Choose?</h3>
          <p className="text-body mb-6 max-w-2xl mx-auto">
            Our career counselors will help you identify the best path based on your interests, 
            skills, and career goals.
          </p>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Get Career Guidance
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsPathways