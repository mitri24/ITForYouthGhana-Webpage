import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../../../../data/content/index'
import { programs } from '../../../../data/content/programs'
import Modal from '../../../../components/Modal'

const ProgramsOverview: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'past' | 'current' | 'courses' | 'future'>('current')

  const handleProgramClick = (program: any) => {
    setSelectedProgram(program)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
    setSelectedProgram(null)
  }

  // Get programs based on active tab
  const getCurrentPrograms = () => {
    switch (activeTab) {
      case 'past':
        return programs.past
      case 'current':
        return programs.current
      case 'courses':
        return programs.courses
      case 'future':
        return programs.future
      default:
        return programs.current
    }
  }

  const tabLabels = {
    current: 'Currently Running',
    past: 'Past Programs',
    courses: 'Additional Courses',
    future: 'Coming Soon'
  }

  return (
    <section id="programs" ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Our Training Programs</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Professional training programs in Ghana's most in-demand tech skills. Investment in your future career.
          </p>
        </motion.div>

        {/* Program Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-neutral-100 rounded-xl p-1">
            {(Object.keys(tabLabels) as Array<keyof typeof tabLabels>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-neutral-600 hover:text-primary hover:bg-white'
                }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {getCurrentPrograms().map((program: any, index: number) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card overflow-hidden group"
            >
              {program.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.duration}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="card-body">
                <div className="mb-4">
                  <h3 className="heading-sm text-primary mb-2">{program.title}</h3>
                  {program.subtitle && (
                    <span className="text-sm text-accent font-medium">{program.subtitle}</span>
                  )}
                  {program.schedule && (
                    <div className="text-sm text-neutral-600 mt-1">
                      <strong>Schedule:</strong> {program.schedule}
                    </div>
                  )}
                  {program.startDate && (
                    <div className="text-sm text-neutral-600">
                      <strong>Start:</strong> {program.startDate}
                    </div>
                  )}
                  {program.status && (
                    <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded-full text-xs mt-2">
                      {program.status}
                    </span>
                  )}
                </div>
                
                <p className="text-body mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill: string, idx: number) => (
                      <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {(activeTab === 'past' || activeTab === 'current') ? (
                  <motion.button
                    className="btn btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleProgramClick(program)}
                  >
                    Learn More
                  </motion.button>
                ) : (
                  <motion.button
                    className="btn btn-secondary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    {activeTab === 'future' ? 'Get Updates' : 'Enroll Now'}
                  </motion.button>
                )}
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
            <h3 className="heading-md mb-4 text-primary">Invest in Your Future</h3>
            <p className="text-lg mb-6 text-neutral-700 max-w-2xl mx-auto">
            Professional training programs designed to prepare you for in-demand careers in Ghana's growing tech industry.
            </p>
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
               Check Eligibility
            </motion.a>
          </div>
        </motion.div>

        
        {/* Program Details Modal */}
        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          title={selectedProgram?.title || ''}
          size="large"
        >
          {selectedProgram && (
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                <div>
                  <p className="text-body mb-6 leading-relaxed">
                    {selectedProgram.whatYoullLearn}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Duration:</h4>
                      <p className="text-body">{selectedProgram.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Class Size:</h4>
                      <p className="text-body">{selectedProgram.participants}</p>
                    </div>
                  </div>
                  
                  {selectedProgram.prerequisites && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-2">Prerequisites:</h4>
                      <p className="text-body">{selectedProgram.prerequisites}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-primary mb-4">Skills You'll Learn:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProgram.skills?.map((skill: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-body">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-primary mb-4">Program Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.highlights?.map((highlight: string, index: number) => (
                    <span key={index} className="badge badge-primary">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-primary mb-4">Career Outcomes:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.careerOutcomes?.map((outcome: string, index: number) => (
                    <span key={index} className="badge badge-accent">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-neutral-50 rounded-xl">
                <h4 className="font-semibold text-primary mb-3">Real Talk:</h4>
                <p className="text-body italic">
                  {selectedProgram.realTalk}
                </p>
              </div>
            
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    handleModalClose()
                    window.location.href = '/contact'
                  }}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleModalClose}
                >
                  Close
                </motion.button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}

export default ProgramsOverview