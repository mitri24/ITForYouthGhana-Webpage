import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const Programs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProgram, setActiveProgram] = useState(0)

  const programs = content.programs.main.map(program => ({
    ...program,
    nextStart: '10/02/2025'
  })).concat([
  ])

  return (
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Choose Your Program</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From basics to advanced skills - our programs are designed to accompany you on your tech journey.
            </p>
          </motion.div>

          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setActiveProgram(index)}
                className="bg-white rounded-2xl overflow-hidden shadow-float border border-secondary/20 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                    <p className="text-sm opacity-90">{program.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-neutral-600 mb-4 line-clamp-3">{program.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{program.participants}</span>
                    <span className="text-accent font-semibold">Details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program View */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={programs[activeProgram].image}
                  alt={programs[activeProgram].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-float"
                />
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-primary mb-4">
                  {programs[activeProgram].title}
                </h3>
                <p className="text-xl text-accent mb-6">
                  {programs[activeProgram].subtitle}
                </p>
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  {programs[activeProgram].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Duration:</h4>
                    <p className="text-neutral-600">{programs[activeProgram].duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Participants:</h4>
                    <p className="text-neutral-600">{programs[activeProgram].participants}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Next Start:</h4>
                    <p className="text-neutral-600">{programs[activeProgram].nextStart}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                    <p className="text-neutral-600">{programs[activeProgram].requirements}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">What You'll Learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {programs[activeProgram].skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-neutral-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {programs[activeProgram].careerOutcomes && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-primary mb-4">Career Outcomes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {programs[activeProgram].careerOutcomes.map((outcome, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <motion.button
                  className="bg-gradient-to-r from-primary to-blue text-white px-8 py-4 rounded-xl font-semibold shadow-blue-glow hover:shadow-accent-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Navigation */}
      <section className="py-12 bg-neutral-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProgram(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProgram === index
                    ? 'bg-primary text-white shadow-blue-glow'
                    : 'bg-white text-primary hover:bg-secondary/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {program.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">How to Apply</h2>
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
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Coming Soon</h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
                  className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-primary mr-4">{program.title}</h3>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {program.subtitle}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-6 leading-relaxed">{program.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Initial Cohort:</h4>
                          <p className="text-neutral-600">{program.participants}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Development Status:</h4>
                          <p className="text-neutral-600">{program.status}</p>
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
                        className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300"
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
  )
}

export default Programs