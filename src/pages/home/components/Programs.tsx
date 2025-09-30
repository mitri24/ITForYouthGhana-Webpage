import React, { useState } from 'react'
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionContent } from '../../../components/ui/Section'
import { GridCols3 } from '../../../components/ui/Grid'
import { Button } from '../../../components/ui/Button'
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
    <Section background="neutral" padding="lg" id="programs">
      <SectionHeader>
        <SectionTitle>Our Programs & Initiatives</SectionTitle>
        <SectionSubtitle>
          Comprehensive programs designed to empower Ghanaian youth with technology skills, 
          entrepreneurship opportunities, and pathways to economic empowerment.
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent>
        <GridCols3 gap="xl" stagger={0.1}>
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </GridCols3>

        
      </SectionContent>

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Section>
  )
}

export default Programs