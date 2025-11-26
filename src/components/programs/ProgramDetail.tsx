import React from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { programs } from '../../data/programs'
import SEO from '../SEO'
import Hero from '../shared/Hero'
import { navigateToPage } from '../../utils/navigation'

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>()
  const navigate = useNavigate()
  
  const program = programs.find(p => p.id === programId)
  
  if (!program) {
    navigate('/404')
    return null
  }

  const handleGetInvolved = () => {
    navigateToPage('/contact')
  }

  const handleDonate = () => {
    navigateToPage('/donate')
  }

  return (
    <>
      <SEO
        title={`${program.title} - IT for Youth Ghana`}
        description={program.description}
        canonical={`/programs/${program.id}`}
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        <Hero
          title={program.title}
          subtitle={program.tag}
          description={program.description}
          primaryCta={{ text: "Get Involved", action: handleGetInvolved }}
          secondaryCta={{ text: "Donate Now", action: handleDonate }}
        />

        {/* Program Image */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0c2d5a' }}>
                  Program Overview
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {program.detailContent.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0c2d5a' }}>
                  Our Objectives
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {program.detailContent.objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: '#0c2d5a' }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <p className="ml-4 text-lg text-gray-700 leading-relaxed">
                        {objective}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0c2d5a' }}>
                  Our Approach
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {program.detailContent.approach}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0c2d5a' }}>
                  Success Stories
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {program.detailContent.success}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16" style={{ backgroundColor: '#0c2d5a' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Make a Difference?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Join us in empowering Ghana's youth through technology education. 
                  Whether you want to volunteer, partner with us, or support our mission financially.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    onClick={handleGetInvolved}
                    className="inline-block px-8 py-4 text-lg font-bold rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: 'white',
                      color: '#0c2d5a',
                      border: '2px solid white'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Involved
                  </motion.button>
                  <motion.button
                    onClick={handleDonate}
                    className="inline-block px-8 py-4 text-lg font-bold rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '2px solid white'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Donate Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProgramDetail