import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'
import ProgramModal from './ProgramModal'
import { programs, Program } from '../../../data/programs'

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProgram(null)
  }

  return (
    <section className="section bg-gray-50" id="programs">
      <div className="container">
        <header className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-lg mb-6"
          >
            Our Programs & Initiatives
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lead text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive programs designed to empower Ghanaian youth with technology skills, 
            entrepreneurship opportunities, and pathways to economic empowerment.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Programs