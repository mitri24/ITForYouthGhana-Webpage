import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import Hero from '../components/shared/Hero'

const TechEmpowerment: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleEnrollNow = () => {
    window.location.href = '/contact'
  }

  const handlePartnerWithUs = () => {
    window.location.href = '/partners'
  }

  const programHighlights = [
    {
      title: 'Technical Mastery',
      description: 'Comprehensive training in coding, programming, data analytics, graphic design, and web development.'
    },
    {
      title: 'Career Readiness', 
      description: 'Project-based learning helps participants build professional portfolios and develop in-demand digital skills.'
    },
    {
      title: 'Entrepreneurship Development',
      description: 'Participants are equipped with skills in digital marketing, business development, and social media management, fostering self-reliance and innovation.'
    }
  ]

  const impactStats = [
    { value: '250+', label: 'Youths Trained', description: 'Over 250 youth have benefited from this initiative' },
    { value: '70', label: 'Girls Trained', description: 'Breaking barriers in the tech industry' },
    { value: '180', label: 'Boys Trained', description: 'Empowering young men in technology' },
    { value: '40%+', label: 'Female Participation', description: 'High female participation rate' }
  ]

  const targetParticipants = [
    'Women and girls aiming to break barriers in the tech industry',
    'Financially disadvantaged individuals with limited access to formal education',
    'Persons with physical disabilities seeking inclusive learning opportunities',
    'Youth aged 18-24 looking for career advancement in technology'
  ]

  return (
    <>
      <SEO
        title="Tech Empowerment Initiative - Equipping Ghanaian Youth for the Future"
        description="Our flagship 6-month program combining training and internships to empower youth aged 18-24 with transformative IT skills and entrepreneurial knowledge."
        canonical="/tech-empowerment"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Tech Empowerment Initiative"
          subtitle="Equipping Ghanaian Youth for the Future"
          description="Our flagship program dedicated to bridging the digital divide by equipping young individuals with transformative IT skills and entrepreneurial knowledge."
          primaryCta={{ text: "Enroll Now", action: handleEnrollNow }}
          secondaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
        />

        {/* Program Overview */}
        <section className="section bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="heading-lg mb-8 text-primary">About the Initiative</h2>
              <p className="text-lead leading-relaxed mb-6">
                The Tech Empowerment Initiative is IT For Youth Ghana's flagship program dedicated to bridging 
                the digital divide by equipping young individuals with transformative IT skills and entrepreneurial knowledge.
              </p>
              <p className="text-body leading-relaxed">
                This comprehensive initiative aims to empower youth, especially those from underserved communities, 
                by providing them with practical, high-quality training in a variety of in-demand IT fields. Through 
                a combination of hands-on learning, internships, and real-world projects, the program ensures that 
                participants not only acquire technical knowledge but also develop the confidence and professional 
                skills needed to enter the workforce or launch their own tech ventures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Structure */}
        <section ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Program Structure</h2>
              <p className="text-lead max-w-4xl mx-auto mb-8">
                The Tech Empowerment Initiative runs for a total of six months, strategically designed 
                to maximize learning outcomes and industry preparedness.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-primary/5 rounded-2xl p-8"
              >
                <h3 className="heading-md text-primary mb-6">Four Months of Intensive Training</h3>
                <p className="text-body leading-relaxed">
                  In-person and online sessions focused on hands-on learning, ensuring accessibility 
                  for remote participants. Comprehensive curriculum covering coding, programming, 
                  data analytics, graphic design, and web development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-accent/5 rounded-2xl p-8"
              >
                <h3 className="heading-md text-accent mb-6">Two-Month Internship</h3>
                <p className="text-body leading-relaxed">
                  Partnerships with reputable firms provide participants with invaluable real-world 
                  experience and industry exposure. Practical application of learned skills in 
                  professional environments.
                </p>
              </motion.div>
            </div>

            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="heading-lg text-primary text-center mb-12">Program Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {programHighlights.map((highlight, index) => (
                  <div key={highlight.title} className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
                    <h4 className="text-xl font-semibold text-primary mb-4">{highlight.title}</h4>
                    <p className="text-body leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact & Outcomes */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6 text-primary">Impact & Outcomes</h2>
              <p className="text-lead max-w-3xl mx-auto">
                Equipping Ghanaian Youth for the Future
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Target Participants */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="heading-md text-primary text-center mb-8">Who Can Participate</h3>
              <p className="text-body text-center mb-8">
                The initiative serves youth aged 18-24, prioritizing:
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {targetParticipants.map((participant, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body leading-relaxed">{participant}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters & Support */}
        <section className="section bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="heading-xl mb-8 text-white">Why It Matters</h2>
              <p className="text-lead mb-12 text-white/90 leading-relaxed">
                This initiative plays a crucial role in addressing the digital skills gap in Ghana and 
                empowering youth to contribute to the economy. By offering high-quality, accessible training, 
                we are preparing the next generation of tech professionals who will drive innovation and 
                growth across the country. Moreover, it provides an opportunity for young people to escape 
                the cycle of poverty by equipping them with skills that are both relevant and in high demand globally.
              </p>

              <h3 className="heading-md mb-8 text-white">How You Can Support</h3>
              <p className="text-lg mb-8 text-white/90">
                As a donor or partner, your investment in the Tech Empowerment for Employment and 
                Entrepreneurship Initiative can help expand our reach and impact.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">Training Resources</h4>
                  <p className="text-white/90">
                    The provision of high-quality training materials and resources
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">Internship Programs</h4>
                  <p className="text-white/90">
                    Expanding our ability to offer internships and mentorship programs
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-4 text-white">Access & Inclusion</h4>
                  <p className="text-white/90">
                    Ensuring marginalized groups can access life-changing opportunities
                  </p>
                </div>
              </div>

              <p className="text-xl mb-8 text-white font-medium">
                Graduates of this program emerge with portfolios showcasing completed projects, 
                practical experience, and the confidence to pursue employment or launch entrepreneurial ventures.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="btn btn-secondary bg-white text-primary hover:bg-neutral-100 text-lg font-bold py-4 px-8 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnrollNow}
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-bold py-4 px-8 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePartnerWithUs}
                >
                  Partner with Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TechEmpowerment