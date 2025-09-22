import React from 'react'
import { motion } from 'framer-motion'

interface Program {
  title: string
  subtitle: string
  description: string
  duration: string
  participants?: string
  image: string
  skills?: string[]
  requirements: string
  status: 'current' | 'past' | 'future'
  type: string
  nextStart?: string
  completedDate?: string
  careerOutcomes?: string[]
  highlights?: string[]
}

interface ProgramGridProps {
  programs: Program[]
  activeFilter: 'current' | 'past' | 'future'
  onProgramClick: (program: Program) => void
}

const ProgramGrid: React.FC<ProgramGridProps> = ({ 
  programs, 
  activeFilter, 
  onProgramClick 
}) => {
  return (
    <motion.div 
      key={activeFilter}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
    >
      {programs.map((program, index) => (
        <motion.div
          key={program.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          onClick={() => onProgramClick(program)}
          className="card overflow-hidden cursor-pointer group"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-hero-overlay"></div>
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                program.status === 'current' ? 'bg-success text-white' :
                program.status === 'past' ? 'bg-neutral-500 text-white' :
                'bg-accent text-white'
              }`}>
                {program.type}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="heading-sm text-white mb-1">{program.title}</h3>
              <p className="text-sm opacity-90">{program.subtitle}</p>
            </div>
          </div>
          
          <div className="card-body">
            <p className="text-body mb-4 line-clamp-3">{program.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-primary font-semibold">
                {program.status === 'past' ? program.completedDate :
                 program.status === 'future' ? 'Development' :
                 program.participants}
              </span>
              <span className="text-accent font-semibold">Details →</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProgramGrid