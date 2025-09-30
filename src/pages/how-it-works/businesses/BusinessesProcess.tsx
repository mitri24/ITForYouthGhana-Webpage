import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const BusinessesProcess: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const handlePartnerWithUs = () => {
    window.location.href = '/contact'
  }

  const partnershipSteps = [
    {
      step: "01",
      title: "Initial Contact & Discovery Call",
      description: "We start with a comprehensive discussion to understand your organization's needs, values, and goals. This 30-minute call helps us determine mutual alignment and partnership potential with our non-profit mission.",
      details: [
        "Discuss your talent requirements and technical needs",
        "Share our non-profit mission, values, and impact metrics",
        "Explore potential collaboration and CSR opportunities",
        "Assess cultural and value alignment with our NGO ethos"
      ],
      icon: ""
    },
    {
      step: "02", 
      title: "Values Alignment Assessment",
      description: "As a non-profit organization, we conduct a thorough evaluation to ensure our core values of inclusion, empowerment, and community impact align with your organization's mission and CSR commitments.",
      details: [
        "Review your commitment to diversity and inclusion",
        "Assess support for our community development initiatives", 
        "Evaluate dedication to youth empowerment through NGO partnerships",
        "Confirm shared vision for Ghana's tech ecosystem development"
      ],
      icon: ""
    },
    {
      step: "03",
      title: "Partnership Framework Design", 
      description: "Together, we create a customized partnership framework that outlines roles, responsibilities, expectations, and success metrics for our NGO-corporate collaboration.",
      details: [
        "Define partnership scope and social impact objectives",
        "Establish clear NGO and corporate roles and responsibilities",
        "Set measurable success indicators for community impact",
        "Create timeline and milestone framework for sustainable change"
      ],
      icon: ""
    },
    {
      step: "04",
      title: "Pilot Program Implementation",
      description: "We launch a carefully designed pilot program to test our collaboration, gather feedback, and refine our approach before full-scale implementation.",
      details: [
        "Start with small-scale engagement",
        "Monitor progress and collect feedback",
        "Adjust processes based on learnings",
        "Prepare for scaled partnership"
      ],
      icon: ""
    },
    {
      step: "05",
      title: "Full Partnership Activation",
      description: "Upon successful pilot completion, we activate the full partnership with ongoing support, regular communication, and continuous improvement processes.",
      details: [
        "Scale successful pilot initiatives",
        "Implement regular review meetings",
        "Establish ongoing communication channels",
        "Create long-term impact measurement"
      ],
      icon: ""
    }
  ]

  const partnershipTypes = [
    {
      title: "Talent Pipeline Partnership",
      description: "Access to our pool of job-ready graduates with ongoing recruitment support",
      benefits: [
        "Priority access to top talent",
        "Pre-screened candidates",
        "Ongoing recruitment support",
        "Reduced hiring time and costs"
      ]
    },
    {
      title: "Corporate Training Collaboration", 
      description: "Upskill your existing team with our specialized training programs",
      benefits: [
        "Customized training curricula",
        "Expert instruction",
        "Flexible scheduling options",
        "Measurable skill improvements"
      ]
    },
    {
      title: "CSR & Community Impact",
      description: "Partner with us on community development and youth empowerment initiatives",
      benefits: [
        "Meaningful community impact",
        "Enhanced brand reputation",
        "Employee engagement opportunities",
        "Measurable social outcomes"
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Partnership Process - For Businesses | IT for Youth Ghana"
        description="Learn our comprehensive 5-step partnership process. From discovery call to full activation - partner with Ghana's leading tech education NGO."
        canonical="/how-it-works/businesses"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Partnership Process"
          subtitle="How It Works - For Businesses"
          description="Our comprehensive 5-step process ensures meaningful partnerships that create lasting social impact for your organization while empowering Ghana's youth through our non-profit technology education programs."
          primaryCta={{ text: "Start Partnership Journey", action: handlePartnerWithUs }}
        />

        {/* Partnership Process Steps */}
        <section ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6">Our Partnership Process</h2>
              <p className="text-lead max-w-4xl mx-auto">
                We follow a structured, transparent approach to building meaningful partnerships that create lasting impact for both your organization and Ghana's youth.
              </p>
            </motion.div>

            <div className="space-y-16">
              {partnershipSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary/70">
                          Step {step.step}
                        </span>
                        <h3 className="heading-md">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-body mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-body">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 text-center border border-primary/10">
                      <div className="text-6xl mb-4">{step.icon}</div>
                      <div className="text-3xl font-bold text-primary mb-2">Step {step.step}</div>
                      <div className="text-lg font-semibold">{step.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6">Partnership Opportunities</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Choose the partnership model that best aligns with your organization's goals and values.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="card"
                >
                  <div className="card-body">
                    <h3 className="heading-sm mb-4">{type.title}</h3>
                    <p className="text-body mb-6">{type.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="heading-xl text-white mb-6">Ready to Start Your Partnership Journey?</h2>
              <p className="text-lead text-white/90 mb-8">
                Join leading organizations who are making a difference in Ghana's tech ecosystem while achieving their business objectives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Partner Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-white/80">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/80">Partner Satisfaction</div>
                </div>
              </div>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePartnerWithUs}
              >
                Schedule Discovery Call
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BusinessesProcess