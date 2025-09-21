// NEU: Programme-Seite mit rechten Filter-Buttons und Kurs-Popups überarbeitet
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import Modal from '../components/Modal'
import SEO from '../components/SEO'

const Programs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState<'current' | 'past' | 'future'>('current')
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  // Kategorisierte Programme
  const currentPrograms = content.programs.main.map(program => ({
    ...program,
    nextStart: '10/02/2025',
    status: 'current' as const,
    type: 'Currently Active'
  }))

  const pastPrograms = [
    {
      title: 'Digital Literacy Bootcamp 2023',
      subtitle: 'Foundation Skills',
      description: 'Basic computer skills and digital literacy for rural communities.',
      duration: '6 weeks',
      participants: '120 graduates',
      image: '/images/randomPictures/IMG-20241118-WA0078.jpg',
      skills: ['Computer Basics', 'Internet Navigation', 'Digital Safety', 'Email & Communication'],
      requirements: 'No prior experience required',
      status: 'past' as const,
      type: 'Completed Program',
      completedDate: 'December 2023'
    },
    {
      title: 'Web Development Intensive 2022',
      subtitle: 'Full Stack Development',
      description: 'Comprehensive web development training with real-world projects.',
      duration: '12 weeks',
      participants: '45 graduates',
      image: '/images/randomPictures/IMG_2732.PNG',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design'],
      requirements: 'Basic computer skills',
      status: 'past' as const,
      type: 'Completed Program',
      completedDate: 'August 2022'
    }
  ]

  const futurePrograms = content.programs.future?.map(program => ({
    ...program,
    status: 'future' as const,
    type: 'Coming Soon'
  })) || []

  const filteredPrograms = {
    current: currentPrograms,
    past: pastPrograms,
    future: futurePrograms
  }[activeFilter]

  return (
    <>
      <SEO 
        title="Tech Programs - Programming Courses Ghana"
        description="Explore our comprehensive technology programs in Ghana. Web development, data science, mobile app development courses with 70% female participation."
        canonical="/programs"
        ogType="website"
      />
      <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="hero-title">Our Programs</h1>
            <p className="hero-subtitle">
              Comprehensive technology education for every background and skill level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Choose Your Program</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              From basics to advanced skills - our programs are designed to accompany you on your tech journey.
            </p>
          </motion.div>

          {/* NEU: Rechte fixierte Filter-Buttons */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
            {[
              { key: 'current' as const, label: 'Current', icon: 'CUR', count: currentPrograms.length },
              { key: 'past' as const, label: 'Past', icon: 'PAS', count: pastPrograms.length },
              { key: 'future' as const, label: 'Future', icon: 'FUT', count: futurePrograms.length }
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-button ${
                  activeFilter === filter.key ? 'active' : ''
                }`}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                title={`${filter.label} Programs (${filter.count})`}
              >
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">{filter.icon}</div>
                  <div className="text-xs">{filter.count}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Program Cards Grid */}
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => {
                  setSelectedProgram(program)
                  setShowModal(true)
                }}
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
        </div>
      </section>

      {/* NEU: Program Details Modal mit Modal-Komponente */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedProgram?.title || ''}
        size="large"
      >
        {selectedProgram && (
          <div className="space-y-6">
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
                    {selectedProgram.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Duration:</h4>
                      <p className="text-body">{selectedProgram.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {selectedProgram.status === 'past' ? 'Completed:' :
                         selectedProgram.status === 'future' ? 'Planned:' :
                         'Participants:'}
                      </h4>
                      <p className="text-body">
                        {selectedProgram.status === 'past' ? selectedProgram.completedDate :
                         selectedProgram.status === 'future' ? selectedProgram.status :
                         selectedProgram.participants}
                      </p>
                    </div>
                    {selectedProgram.nextStart && (
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Next Start:</h4>
                        <p className="text-body">{selectedProgram.nextStart}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                      <p className="text-body">{selectedProgram.requirements}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-primary mb-4">Skills & Technologies:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProgram.skills?.map((skill: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-body">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProgram.careerOutcomes && (
                <div className="mt-6">
                  <h4 className="font-semibold text-primary mb-4">Career Outcomes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.careerOutcomes.map((outcome: string, index: number) => (
                      <span key={index} className="badge badge-accent">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProgram.highlights && (
                <div className="mt-6">
                  <h4 className="font-semibold text-primary mb-4">Program Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.highlights.map((highlight: string, index: number) => (
                      <span key={index} className="badge badge-primary">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
              {selectedProgram.status === 'current' && (
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowModal(false)
                    window.location.href = '/contact'
                  }}
                >
                  Apply Now
                </motion.button>
              )}
              {selectedProgram.status === 'future' && (
                <>
                  <motion.button
                    className="btn btn-primary flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowModal(false)
                      // NEU: Bei Future-Kursen zur Anmeldeseite navigieren
                      window.location.href = '/contact'
                    }}
                  >
                    Pre-Register
                  </motion.button>
                  <motion.button
                    className="btn btn-secondary flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Updates
                  </motion.button>
                </>
              )}
              {selectedProgram.status === 'past' && (
                <motion.button
                  className="btn btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Alumni
                </motion.button>
              )}
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </div>
          </div>
        )}
      </Modal>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">How to Apply</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Program', description: 'Select the program that best fits your goals' },
              { step: '2', title: 'Apply Online', description: 'Fill out our simple online application form' },
              { step: '3', title: 'Interview', description: 'Brief conversation about your motivation and goals' },
              { step: '4', title: 'Get Started', description: 'Welcome to IT for Youth Ghana!' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Programs */}
      {content.programs.future && content.programs.future.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6">Coming Soon</h2>
              <p className="text-lead text-center max-w-3xl mx-auto">
                Innovative programs currently in development to expand our impact and reach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {content.programs.future.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card card-body border-l-4 border-accent"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <h3 className="heading-md mr-4">{program.title}</h3>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {program.subtitle}
                        </span>
                      </div>
                      <p className="text-body mb-6">{program.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Initial Cohort:</h4>
                          <p className="text-body">{program.participants}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Development Status:</h4>
                          <p className="text-body">{program.status}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Real-World Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.map((highlight, highlightIndex) => (
                            <span key={highlightIndex} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
                      />
                      <motion.button
                        className="btn btn-accent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Updates
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      </div>
    </>
  )
}

export default Programs