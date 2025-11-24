import React from 'react'
import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'
import { programs } from '../../../data/programs'

const Programs: React.FC = () => {
  return (
    <section className="section bg-white" id="programs">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Our Programs & Initiatives</h2>
          <p className="text-lead max-w-4xl mx-auto">
            Comprehensive programs designed to empower Ghanaian youth with technology skills, 
            entrepreneurship opportunities, and pathways to economic empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs