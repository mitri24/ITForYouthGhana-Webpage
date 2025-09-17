import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const programs = [
  {
    title: 'Tech Outreach Initiative',
    description: 'Bringing technology education directly to underserved communities across Ghana, ensuring no youth is left behind in the digital revolution.',
    image: '/images/UX1.jpeg',
    tag: 'Community Impact',
    tagColor: 'bg-primary'
  },
  {
    title: 'Girls in Tech Programs',
    description: 'Dedicated programs to empower young women with technology skills, achieving over 40% female participation in our training initiatives.',
    image: '/images/UX2.jpg',
    tag: 'Gender Equality',
    tagColor: 'bg-accent'
  },
  {
    title: 'Rural Tech Connect',
    description: 'Connecting rural communities to digital opportunities through mobile training units and partnerships with local schools and institutions.',
    image: '/images/UX3.jpeg',
    tag: 'Rural Empowerment',
    tagColor: 'bg-secondary'
  },
  {
    title: 'Code Impact Challenge',
    description: 'Annual coding competitions and hackathons that bring together young developers to solve real-world problems facing Ghanaian communities.',
    image: '/images/UX4.jpg',
    tag: 'Innovation',
    tagColor: 'bg-primary'
  },
  {
    title: 'Tech Advocacy',
    description: 'Advocating for digital inclusion policies and working with government and NGOs to create supportive environments for technology education.',
    image: '/images/adjej.webp',
    tag: 'Policy Impact',
    tagColor: 'bg-accent'
  },
  {
    title: 'School Workshop Programs',
    description: 'Conducted workshops in 20+ schools, reaching over 800 students with hands-on technology training and career guidance sessions.',
    image: '/images/Mlan.jpeg',
    tag: 'Educational Outreach',
    tagColor: 'bg-secondary'
  }
]

const Programs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="section bg-deepgray relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#8fb2d6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-[#d02355]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-neon-magenta/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center font-display text-white">
            Our Key Initiatives
          </h2>
          <p className="text-xl md:text-2xl text-center mb-16 max-w-4xl mx-auto text-neutral-300 leading-relaxed font-normal">
            Comprehensive programs and initiatives designed to bridge the digital divide and empower Ghana's youth with technology skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${program.tagColor}`}>
                    {program.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-neutral-800 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-neutral-300 mb-8">
            Ready to be part of Ghana's digital transformation?
          </p>
          <Link to="/programs" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
            <motion.button
              className="bg-white text-primary px-10 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs