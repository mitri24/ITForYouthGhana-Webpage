import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MissionSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="mission" ref={ref} className="section bg-white">
      <div className="container">
      

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 mb-16 border border-primary/10 shadow-lg"
        >
          <h3 className="heading-lg mb-6 text-center">Our Mission</h3>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed text-neutral-700 font-medium">
            To bridge the digital divide by empowering underserved youth with high-quality IT education and career development training. We foster innovation, digital entrepreneurship, and equitable opportunities, focusing on women, physically challenged individuals, and financially disadvantaged students.
          </p>
        </motion.div>
         {/* Section Divider */}
         <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-primary rounded-full shadow-lg"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>


      

        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 mb-16 border border-primary/10 shadow-lg"
        >
          <h3 className="heading-lg mb-6 text-center">Our Vision</h3>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed text-neutral-700 font-medium">
          To create a future where all youth, regardless of their background, have access to transformative technology education and opportunities, empowering them to drive innovation, build sustainable careers, and contribute meaningfully to the digital economy. </p>
        </motion.div>

 {/* Section Divider */}
 <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-primary rounded-full shadow-lg"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="heading-lg mb-6">Why We Exist</h3>
            <h4 className="text-xl font-semibold text-primary mb-4">Bridging the Opportunity Gap in Technology</h4>
            <p className="text-body mb-6 leading-relaxed">
              Access to technology education is a privilege not afforded to many young people in Ghana. Financial constraints, lack of infrastructure, and limited awareness create barriers for talented individuals with a passion for IT.
            </p>
            <p className="text-body mb-6 leading-relaxed">
              At IT For Youth Ghana, we're leveling the playing field by offering innovative programs that transform challenges into opportunities. Every training session, outreach program, and partnership brings us closer to a Ghana where every youth can thrive in the digital age.
            </p>
            <p className="text-body leading-relaxed font-semibold" style={{ color: 'var(--color-primary)' }}>
              Women & Young ladies are a core part of our programs
            </p>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="/images/randomPictures/IMG-20241118-WA0078.jpg" 
              alt="Students learning technology" 
              className="rounded-xl object-cover h-48"
            />
            <img 
              src="/images/randomPictures/2024-12-17 20.57 (5).jpg" 
              alt="Female students in tech" 
              className="rounded-xl object-cover h-48 mt-8"
            />
            <img 
              src="/images/randomPictures/IMG_8802.JPG" 
              alt="Graduation ceremony" 
              className="rounded-xl object-cover h-48 -mt-8"
            />
            <img 
              src="/images/randomPictures/IMG-20241118-WA0056.jpg" 
              alt="Community impact" 
              className="rounded-xl object-cover h-48"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection