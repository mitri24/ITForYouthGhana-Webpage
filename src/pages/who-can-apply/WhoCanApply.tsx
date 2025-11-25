import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../components/SEO'
import { navigateToPage } from '../../utils/navigation'

const WhoCanApply: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleApplyNow = () => {
    navigateToPage('/contact')
  }

  const eligibilityCategories = [
    {
      title: 'Students & Recent Graduates',
      requirements: [
        'Age 18-35 years old',
        'Basic literacy in English',
        'Passion for learning technology',
        'Commitment to complete the program'
      ],
      description: 'Perfect for those looking to start or transition into a tech career'
    },
    {
      title: 'Career Changers',
      requirements: [
        'Any educational background',
        'Motivation to learn new skills',
        'Available for full program duration',
        'Basic computer literacy helpful but not required'
      ],
      description: 'Ideal for professionals seeking to pivot into the tech industry'
    },
    {
      title: 'Entrepreneurs',
      requirements: [
        'Business idea or existing small business',
        'Interest in digital solutions',
        'Commitment to community impact',
        'Willingness to share knowledge with others'
      ],
      description: 'Great for those wanting to digitize their business or create tech solutions'
    },
    {
      title: 'Community Leaders',
      requirements: [
        'Active in local community',
        'Interest in teaching others',
        'Commitment to spreading digital literacy',
        'Leadership experience preferred'
      ],
      description: 'Perfect for multiplying our impact through community outreach'
    }
  ]

  return (
    <>
      <SEO
        title="Who Can Apply - IT for Youth Ghana"
        description="Find out if you're eligible for our professional tech training programs. Open to students, career changers, entrepreneurs, and community leaders."
        canonical="/who-can-apply"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0c2d5a' }}>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h1 className="heading-xl text-white mb-6">
                Who Can Apply
              </h1>
              <p className="text-lead text-white/90 mb-8">
                Opportunities for Everyone
              </p>
              <p className="text-xl mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
                Our programs are designed to be inclusive and accessible. Find out if you qualify for our professional tech training and support programs.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApplyNow}
                >
                  Apply Now
                </motion.button>
                <motion.button
                  className="btn btn-ghost"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('eligibility')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Requirements
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Eligibility Categories */}
        <section id="eligibility" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6" style={{ color: '#0c2d5a' }}>Eligibility Categories</h2>
              <p className="text-lead text-center max-w-4xl mx-auto text-neutral-800">
                We welcome applications from diverse backgrounds. Here are our main eligibility categories:
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {eligibilityCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group"
                  style={{ borderColor: 'rgba(12, 45, 90, 0.1)' }}
                >
                 
                  
                  <h3 className="heading-sm mb-4 group-hover:text-opacity-80 transition-colors duration-300" style={{ color: '#0c2d5a' }}>
                    {category.title}
                  </h3>
                  
                  <p className="text-body mb-6 text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  <div 
                    className="rounded-xl p-4 transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(12, 45, 90, 0.1)' }}
                  >
                    <h4 className="font-semibold mb-3" style={{ color: '#0c2d5a' }}>Requirements:</h4>
                    <ul className="space-y-2">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                          <span className="text-body text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-2xl p-12 text-center max-w-6xl mx-auto"
              style={{ backgroundColor: 'rgba(12, 45, 90, 0.05)' }}
            >
              <h3 className="heading-md mb-8" style={{ color: '#0c2d5a' }}>Special Considerations</h3>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  
                  <h4 className="text-left space-y-3 heading-sm mb-4" style={{ color: '#0c2d5a' }}>Priority Given To:</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Women and girls (40%+ target)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Rural and underserved communities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">First-generation tech learners</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Demonstrated financial need</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  
                  <h4 className=" text-left space-y-3 heading-sm mb-4" style={{ color: '#0c2d5a' }}>What We Provide:</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Professional tech training</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">All necessary equipment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Career support and mentorship</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0c2d5a' }}></div>
                      <span className="text-body">Network access and opportunities</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleApplyNow}
                >
                  Start Your Application
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateToPage('/opportunities')}
                >
                  View Programs
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      
    </>
  )
}

export default WhoCanApply