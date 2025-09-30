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
      
    },
    {
      title: 'Backend Development', 
      description: 'Create robust server-side applications',
      skills: ['Python/Node.js', 'Databases', 'APIs', 'Cloud Deployment'],
      outcome: 'Backend Developer, Full-Stack Developer',
      
    },
    {
      title: 'Data Analysis',
      description: 'Transform data into actionable insights',
      skills: ['Excel', 'Python', 'SQL', 'Data Visualization'],
      outcome: 'Data Analyst, Business Intelligence Analyst',
     
    },
    {
      title: 'Digital Design',
      description: 'Design engaging digital experiences',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Thinking'],
      outcome: 'UI/UX Designer, Product Designer',
    
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

          {/* Partnership CTA */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/10 shadow-lg">
            <h3 className="heading-md mb-4 text-primary">Not Sure Which Path to Choose?</h3>
            <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
            Our career counselors will help you identify the best path based on your interests, 
            skills, and career goals. </p>
            <motion.a
              href="/contact"
              className="inline-block"
              style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(1, 82, 190, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(1, 82, 190, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #014aa8 0%, #013d8c 100%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(1, 82, 190, 0.3)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)'
              }}
            >
              Get Career Guidance
            </motion.a>
          </div>
        </motion.div>

      


      

      </div>
    </section>
  )
}

export default SkillsPathways