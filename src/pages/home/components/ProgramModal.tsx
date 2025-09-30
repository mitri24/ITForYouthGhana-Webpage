import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../../../components/Modal'
import { Button } from '../../../components/ui/Button'
import { Program } from '../../../data/programs'

interface ProgramModalProps {
  program: Program | null
  isOpen: boolean
  onClose: () => void
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ 
  program, 
  isOpen, 
  onClose 
}) => {
  if (!program) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${program.tagColor}`}>
                {program.tag}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
            <p className="text-lg text-white/90">{program.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Overview */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Overview</h3>
            <p className="text-neutral-700 leading-relaxed">
              {program.detailContent.overview}
            </p>
          </section>

          {/* Objectives */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Key Objectives</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {program.detailContent.objectives.map((objective, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-700">{objective}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Impact Metrics */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Impact & Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(program.detailContent.impact).map(([key, value], index) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary/5 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {value.split(' ')[0]}
                  </div>
                  <div className="text-sm text-neutral-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                  {value.includes(' ') && (
                    <div className="text-xs text-neutral-500 mt-1">
                      {value.split(' ').slice(1).join(' ')}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Our Approach</h3>
            <p className="text-neutral-700 leading-relaxed">
              {program.detailContent.approach}
            </p>
          </section>

          {/* Success Stories */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Success Stories</h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
              <p className="text-neutral-700 leading-relaxed italic">
                "{program.detailContent.success}"
              </p>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
            <Button
              variant="primary"
              href="/contact"
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.92-1.455l-1.413 1.413A1 1 0 015.5 21H3a1 1 0 01-1-1v-2.5a1 1 0 01.293-.707l1.413-1.413A8.955 8.955 0 012 12C2 7.582 5.582 4 10 4s8 3.582 8 8z" />
                </svg>
              }
            >
              Get Involved
            </Button>
            
            <Button
              variant="donation"
              href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
              external
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            >
              Support This Program
            </Button>
            
            <Button
              variant="outline"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProgramModal