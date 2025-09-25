import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MissionSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="mission" ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Who We Are</h2>
          <p className="text-lead text-center max-w-4xl mx-auto">
            Empowering Africa's Youth Through Digital Innovation
          </p>
          <p className="text-body text-center max-w-5xl mx-auto mt-4">
            At IT For Youth Ghana, we are a forward-thinking non-profit organization dedicated to equipping Ghanaian youth with the digital skills they need to thrive in today's technology-driven economy. Founded with the vision to bridge the digital divide and reducing unemployment, we are committed to ensuring that no talented young person is left behind due to financial or geographical barriers.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary/5 rounded-2xl p-8 mb-16"
        >
          <h3 className="heading-lg mb-6 text-primary text-center">Our Mission</h3>
          <p className="text-body text-center max-w-4xl mx-auto leading-relaxed">
            To bridge the digital divide by empowering underserved youth with high-quality IT education and career development training. We foster innovation, digital entrepreneurship, and equitable opportunities, focusing on women, physically challenged individuals, and financially disadvantaged students.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-accent/5 rounded-2xl p-8 mb-16"
        >
          <h3 className="heading-lg mb-6 text-accent text-center">Our Vision</h3>
          <p className="text-body text-center max-w-4xl mx-auto leading-relaxed">
            To create a future where all youth, regardless of their background, have access to transformative technology education and opportunities, empowering them to drive innovation, build sustainable careers, and contribute meaningfully to the digital economy.
          </p>
        </motion.div>

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
            <p className="text-body leading-relaxed font-semibold text-accent">
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