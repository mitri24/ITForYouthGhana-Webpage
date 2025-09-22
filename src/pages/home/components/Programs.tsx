// NEU: Initiative-Popups für detaillierte Informationen implementiert
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Modal from '../../../components/Modal'

// NEU: Erweiterte Initiative-Daten mit detaillierten Popup-Inhalten
const programs = [
  {
    title: 'Tech Outreach Initiative',
    description: 'Bringing technology education directly to underserved communities across Ghana, ensuring no youth is left behind in the digital revolution.',
    image: '/images/randomPictures/IMG-20241118-WA0052.jpg',
    tag: 'Community Impact',
    tagColor: 'bg-primary',
    detailContent: {
      overview: 'Our flagship Tech Outreach Initiative directly addresses the digital divide by bringing comprehensive technology education to underserved communities across Ghana. This program ensures that geographic location and economic status do not determine access to digital literacy.',
      objectives: [
        'Bridge the digital divide in rural and underserved urban areas',
        'Provide foundational IT skills to youth aged 16-25',
        'Create pathways to employment and entrepreneurship',
        'Build sustainable tech communities in remote areas'
      ],
      impact: {
        participants: '850+ youth trained',
        communities: '45 communities reached',
        employmentRate: '78% job placement rate',
        locations: 'Greater Accra, Ashanti, Northern, Upper East regions'
      },
      approach: 'We deploy mobile training units equipped with laptops, internet connectivity, and solar power systems to reach remote communities. Our certified trainers provide 8-week intensive courses covering computer literacy, basic programming, digital marketing, and entrepreneurship skills.',
      success: 'Participants have gone on to start their own tech businesses, secure employment in IT companies, and become community tech leaders, creating a multiplier effect in their local areas.'
    }
  },
  {
    title: 'Girls in Tech Programs',
    description: 'Dedicated programs to empower young women with technology skills, achieving over 40% female participation in our training initiatives.',
    image: '/images/randomPictures/IMG-20241118-WA0095.jpg',
    tag: 'Gender Equality',
    tagColor: 'bg-accent',
    detailContent: {
      overview: 'Our Girls in Tech Programs specifically address gender inequality in the technology sector by providing targeted support, mentorship, and training opportunities for young women and girls across Ghana.',
      objectives: [
        'Increase female participation in STEM fields',
        'Provide safe learning environments for young women',
        'Create female role models in technology',
        'Address cultural barriers to women in tech'
      ],
      impact: {
        participants: '420+ young women trained',
        retention: '92% program completion rate',
        employment: '85% employment/entrepreneurship success',
        mentorship: '150+ ongoing mentorship relationships'
      },
      approach: 'We offer women-only training sessions, female mentors, childcare support for mothers, and flexible scheduling. Our curriculum includes technical skills, confidence building, public speaking, and leadership development.',
      success: 'Our female graduates have founded successful tech startups, joined major technology companies as developers and designers, and become advocates for women in technology across West Africa.'
    }
  },
  {
    title: 'Rural Tech Connect',
    description: 'Connecting rural communities to digital opportunities through mobile training units and partnerships with local schools and institutions.',
    image: '/images/randomPictures/2024-12-17 20.27 (6).jpg',
    tag: 'Rural Empowerment',
    tagColor: 'bg-secondary',
    detailContent: {
      overview: 'Rural Tech Connect bridges the urban-rural technology gap by establishing permanent tech learning centers in rural communities and connecting them to global digital opportunities.',
      objectives: [
        'Establish sustainable tech centers in rural areas',
        'Connect rural youth to global digital economy',
        'Develop local tech leadership',
        'Create rural innovation hubs'
      ],
      impact: {
        centers: '25 permanent tech centers established',
        participants: '600+ rural youth trained',
        partnerships: '40+ local school partnerships',
        connectivity: '15 communities connected to high-speed internet'
      },
      approach: 'We establish permanent learning centers in partnership with local schools and community organizations. Each center receives ongoing support, internet connectivity, and regular visits from our mobile training teams.',
      success: 'Rural communities now have access to online learning platforms, e-commerce opportunities, and remote work possibilities. Many participants now work remotely for companies in Accra and internationally.'
    }
  },
  {
    title: 'Code Impact Challenge',
    description: 'Annual coding competitions and hackathons that bring together young developers to solve real-world problems facing Ghanaian communities.',
    image: '/images/randomPictures/IMG_8623.JPG',
    tag: 'Innovation',
    tagColor: 'bg-primary',
    detailContent: {
      overview: 'The Code Impact Challenge is our annual flagship event that brings together the brightest young developers from across Ghana to solve pressing social and economic challenges through technology.',
      objectives: [
        'Foster innovation and creative problem-solving',
        'Connect young developers with industry leaders',
        'Develop solutions for local challenges',
        'Build a strong tech community network'
      ],
      impact: {
        participants: '300+ developers annually',
        solutions: '45+ innovative solutions developed',
        startups: '12 startups launched from challenge',
        investment: 'GHS 2.4M in funding secured by winners'
      },
      approach: 'Over 48 hours, teams of 3-5 developers work on challenges like healthcare access, education technology, financial inclusion, and environmental sustainability. Winners receive mentorship, funding, and incubation support.',
      success: 'Previous winners have developed award-winning mobile health applications, educational platforms used by thousands of students, and fintech solutions that have secured international investment.'
    }
  },
  {
    title: 'Tech Advocacy',
    description: 'Advocating for digital inclusion policies and working with government and NGOs to create supportive environments for technology education.',
    image: '/images/randomPictures/IMG-20241118-WA0104.jpg',
    tag: 'Policy Impact',
    tagColor: 'bg-accent',
    detailContent: {
      overview: 'Our Tech Advocacy program works at the policy level to create systemic change that supports digital inclusion and technology education across Ghana.',
      objectives: [
        'Influence national digital inclusion policies',
        'Advocate for tech education in school curricula',
        'Support youth-friendly technology policies',
        'Build partnerships with government and NGOs'
      ],
      impact: {
        policies: '5 policy recommendations adopted',
        partnerships: '20+ government and NGO partnerships',
        advocacy: '15 policy briefings and presentations',
        reach: 'Advocacy efforts reaching 50M+ Ghanaians'
      },
      approach: 'We conduct research, develop policy briefs, engage with policymakers, and participate in national technology and education forums. Our advocacy is evidence-based and supported by data from our programs.',
      success: 'Our advocacy has contributed to the inclusion of digital literacy in the national education curriculum and the development of youth-focused technology policies at the regional level.'
    }
  },
  {
    title: 'School Workshop Programs',
    description: 'Conducted workshops in 20+ schools, reaching over 800 students with hands-on technology training and career guidance sessions.',
    image: '/images/randomPictures/IMG-20241026-WA0092.jpg',
    tag: 'Educational Outreach',
    tagColor: 'bg-secondary',
    detailContent: {
      overview: 'Our School Workshop Programs integrate directly with the formal education system to provide students with practical technology skills and career guidance that complement their academic studies.',
      objectives: [
        'Integrate tech skills into formal education',
        'Provide career guidance and mentorship',
        'Support teachers with technology training',
        'Create pathways from school to tech careers'
      ],
      impact: {
        schools: '25+ partner schools',
        students: '1,200+ students reached',
        teachers: '80+ teachers trained',
        programs: '150+ workshops conducted'
      },
      approach: 'We work with school administrators to integrate our workshops into existing curricula. Sessions cover coding basics, digital literacy, career exploration, and university/scholarship guidance.',
      success: 'Students from our partner schools have secured technology scholarships to universities, won national coding competitions, and many have joined our advanced training programs after graduation.'
    }
  }
]

const Programs: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (program: typeof programs[0]) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgram(null)
  }

  return (
    <section ref={ref} className="section bg-primary relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-white mb-6">
            Our Key Initiatives
          </h2>
          <p className="text-lead text-white/90 text-center max-w-3xl mx-auto">
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
              className="group relative h-full"
            >
              <div className="card h-full flex flex-col overflow-hidden hover:border-primary transition-all duration-300">
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
                <div className="card-body flex flex-col flex-grow">
                  <h3 className="heading-sm mb-4 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-body leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  
                  {/* NEU: Learn More Button öffnet Popup */}
                  <div className="mt-auto">
                    <motion.button
                      className="btn btn-secondary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(program)}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* NEU: Initiative-Details Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProgram?.title || ''}
          size="large"
        >
          {selectedProgram && (
            <div className="space-y-8">
              {/* Hero Image */}
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div>
                <h3 className="heading-md mb-4">Overview</h3>
                <p className="text-body leading-relaxed">
                  {selectedProgram.detailContent.overview}
                </p>
              </div>

              {/* Impact Statistics */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="heading-md mb-6">Impact & Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(selectedProgram.detailContent.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {value.toString().split(' ')[0]}
                      </div>
                      <div className="text-sm text-neutral-800 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      {value.toString().includes(' ') && (
                        <div className="text-xs text-neutral-700 mt-1">
                          {value.toString().split(' ').slice(1).join(' ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              <div>
                <h3 className="heading-md mb-4">Key Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProgram.detailContent.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-body">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div>
                <h3 className="heading-md mb-4">Our Approach</h3>
                <p className="text-body leading-relaxed">
                  {selectedProgram.detailContent.approach}
                </p>
              </div>

              {/* Success Stories */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <h3 className="heading-md mb-4">Success & Impact</h3>
                <p className="text-body leading-relaxed">
                  {selectedProgram.detailContent.success}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
                <motion.button
                  className="btn btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeModal()
                    // Navigate to programs page
                    window.location.href = '/programs'
                  }}
                >
                  Join This Program
                </motion.button>
                <motion.button
                  className="btn btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeModal()
                    window.location.href = '/contact'
                  }}
                >
                  Get More Information
                </motion.button>
              </div>
            </div>
          )}
        </Modal>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-lead text-white/90 mb-8">
            Ready to be part of Ghana's digital transformation?
          </p>
          <Link to="/programs" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
            <motion.button
              className="btn btn-secondary btn-lg"
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