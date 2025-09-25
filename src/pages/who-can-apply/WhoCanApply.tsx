import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../components/SEO'
import Hero from '../../components/shared/Hero'

const WhoCanApply: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleApplyNow = () => {
    window.location.href = '/contact'
  }

  const handleCheckEligibility = () => {
    document.getElementById('eligibility')?.scrollIntoView({ behavior: 'smooth' })
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
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Who Can Apply"
          subtitle="Opportunities for Everyone"
          description="Our programs are designed to be inclusive and accessible. Find out if you qualify for our professional tech training and support programs."
          primaryCta={{ text: "Apply Now", action: handleApplyNow }}
          secondaryCta={{ text: "Check Eligibility", action: handleCheckEligibility }}
        />
        
        <section id="eligibility" ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Eligibility Categories</h2>
              <p className="text-lead max-w-4xl mx-auto">
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
                  className="card"
                >
                  <div className="card-body">
                    <h3 className="heading-sm text-primary mb-4">{category.title}</h3>
                    
                    <p className="text-body mb-6 text-neutral-600">{category.description}</p>
                    
                    <h4 className="font-semibold text-neutral-800 mb-4">Requirements:</h4>
                    <ul className="space-y-2">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-body">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
            >
              <h3 className="heading-md mb-6 text-primary">Special Considerations</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Priority Given To:</h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Women and girls (70% target)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Rural and underserved communities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">First-generation tech learners</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Demonstrated financial need</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">What We Provide:</h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Professional tech training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">All necessary equipment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Career support and mentorship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent">✓</span>
                      <span className="text-body">Network access and opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyNow}
              >
                Start Your Application
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WhoCanApply