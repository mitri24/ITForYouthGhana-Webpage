import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../../../components/Modal'
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
    <Modal isOpen={isOpen} onClose={onClose} title={program.title}>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
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
            
            <a
              href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #014aa8 0%, #013d8c 100%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #0152be 0%, #014aa8 100%)'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Support This Program
            </a>
            
            <button
              onClick={onClose}
              className="flex-1"
              style={{
                padding: '14px 28px',
                borderRadius: '50px',
                background: 'white',
                color: '#0152be',
                fontWeight: '600',
                fontSize: '15px',
                border: '2px solid #0152be',
                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)'
                e.currentTarget.style.background = '#f8fafc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.2)'
                e.currentTarget.style.background = 'white'
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProgramModal