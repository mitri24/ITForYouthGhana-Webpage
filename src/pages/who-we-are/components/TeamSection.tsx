import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TeamSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: 'Peter Duodu',
      role: 'Executive Director and Program Lead',
      image: '/images/people/peter.jpg',
      description: 'Holds a Master\'s in Accounting and Financial Research and has extensive experience in youth training programs and digital inclusion. Fully committed to coordination tasks with flexible scheduling to accommodate consortium needs.',
      qualifications: 'Master\'s in Accounting and Financial Research',
      languages: ['English']
    },
    {
      name: 'Emmanuel Mensah',
      role: 'IT Instructor & Former Graduate',
      image: '/images/people/emmanuel.jpg',
      description: 'From student to instructor - this organization gave him skills and now he gives back by teaching others. Software Development Program graduate from 2020.'
    },
    {
      name: 'Miréio Trinley',
      role: 'UX Design Lead & International Expert',
      image: '/images/people/white lady-Cover.jpg',
      description: 'Leading the Advanced UI/UX Design Intensive program in partnership with priME Academy AG from Germany, bringing international perspective to local programs.'
    }
  ]

  return (
    <section ref={ref} className="section bg-neutral-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6 text-primary">Organizational Leadership and Team</h2>
          <p className="text-lead text-center max-w-4xl mx-auto mb-6">
            Behind every impactful program is a dedicated team of professionals, volunteers, and mentors.
          </p>
          <p className="text-body text-center max-w-5xl mx-auto">
            Led by experienced educators, technologists, and community leaders, our team shares a passion for empowering youth and a vision for a more inclusive digital future. Our team is committed to ongoing learning, adapting our approach based on participant feedback, and collaborating with local stakeholders to maximize impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-2">
                {member.name}
              </h3>
              
              <p className="text-accent font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-body text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Team Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Board of Directors</h4>
              <p className="text-body leading-relaxed">
                Made up of individuals from diverse educational backgrounds, with vast years of experience guiding our strategic direction and ensuring organizational accountability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Technical Team</h4>
              <p className="text-body leading-relaxed">
                Team of Software and Computer Engineers, each bringing relevant skills in curriculum development, program management, and community engagement to deliver quality training.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">International Mentorship Team</h4>
              <p className="text-body leading-relaxed">
                These are experienced professionals across Europe and Africa who empower our beneficiaries and guide them with their experience in various technology fields.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-primary mb-4">Community Volunteers</h4>
              <p className="text-body leading-relaxed">
                Dedicated volunteers who support our outreach programs, mentor students, and help with event coordination across our various initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="heading-md mb-4 text-white">Learn More About Our Leadership Team</h3>
            <p className="text-lg mb-6 text-white/90">
              Get to know the passionate individuals driving our mission to transform lives through technology education.
            </p>
            <motion.button
              className="btn btn-secondary bg-white text-primary hover:bg-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection