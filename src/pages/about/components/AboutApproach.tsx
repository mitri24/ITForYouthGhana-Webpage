import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutApproach: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Unique Approach</h2>
          <p className="text-xl text-neutral-800 max-w-4xl mx-auto">
            IT for Youth Ghana has successfully achieved 70% female participation in technology programs, 
            addressing Ghana's critical gender gap in STEM education and digital skills development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Gender Inclusion Excellence</h3>
            <p className="text-neutral-800">
              Our specialized support systems address unique challenges women face in technology education, 
              including flexible scheduling, childcare coordination, and confidence-building workshops.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Community-Centered Training</h3>
            <p className="text-neutral-800">
              We deliver training in multiple local languages with culturally relevant content, 
              ensuring no one is excluded due to language barriers or cultural differences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Integrated Business Training</h3>
            <p className="text-neutral-800">
              Students learn technical skills alongside business development, pricing services, 
              client management, and marketing - creating immediate employment or entrepreneurship opportunities.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary">Addressing Ghana's Digital Gender Gap</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">The Challenge</h4>
              <ul className="text-neutral-800 space-y-2">
                <li>• Only 7% of women in Ghana have used a computer (vs 21% of men)</li>
                <li>• Just 15% of women use internet for ICT purposes (vs 35% of men)</li>
                <li>• Women hold only 17.6% of technology sector jobs</li>
                <li>• Girls represent just 39% of STEM students at secondary level</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Our Solution</h4>
              <ul className="text-neutral-800 space-y-2">
                <li>• 70% female participation in our technology programs</li>
                <li>• Multilingual instruction removing language barriers</li>
                <li>• Flexible scheduling accommodating family responsibilities</li>
                <li>• Comprehensive support systems and mentorship networks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutApproach