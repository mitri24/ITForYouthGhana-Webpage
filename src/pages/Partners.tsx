// NEU: Partner-Seite mit Popup-System komplett überarbeitet
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Modal from '../components/Modal'

// NEU: Erweiterte Partner-Optionen mit detaillierten Popup-Inhalten
const partnershipOptions = [
  {
    title: 'Educational Partnerships',
    description: 'Partner with schools, universities, and educational institutions to integrate technology education into curricula.',
    icon: 'ED',
    benefits: ['Curriculum integration', 'Teacher training', 'Student mentorship', 'Resource sharing'],
    detailContent: {
      overview: 'Our Educational Partnerships program works with schools, universities, and other educational institutions to integrate comprehensive technology education into existing curricula and create new pathways for students.',
      whatWeOffer: [
        'Curriculum development and integration support',
        'Teacher training and certification programs',
        'Student mentorship and internship opportunities',
        'Technology infrastructure and equipment',
        'Ongoing support and program evaluation'
      ],
      whatWeSeek: [
        'Access to students and classroom facilities',
        'Commitment to long-term partnership',
        'Integration into official curriculum',
        'Teacher participation in training programs',
        'Support for student recruitment and retention'
      ],
      successStories: 'We have successfully partnered with 25+ schools across Ghana, training over 80 teachers and reaching 1,200+ students. Our partner schools have seen a 300% increase in students pursuing STEM subjects.',
      nextSteps: 'Initial consultation → Needs assessment → Curriculum design → Pilot program → Full implementation → Ongoing evaluation',
      requirements: 'Formal educational institution status, commitment to at least 2-year partnership, dedicated classroom space, minimum 20 students per cohort'
    }
  },
  {
    title: 'Corporate Sponsorship',
    description: 'Join us as a corporate sponsor to support our programs and gain visibility while making a social impact.',
    icon: 'CO',
    benefits: ['Brand visibility', 'CSR impact', 'Tax benefits', 'Employee engagement'],
    detailContent: {
      overview: 'Our Corporate Sponsorship program offers businesses meaningful opportunities to support digital inclusion while achieving corporate social responsibility goals and gaining valuable brand exposure.',
      whatWeOffer: [
        'Brand visibility across all our programs and events',
        'Named program opportunities (e.g., "Company X Tech Center")',
        'Employee volunteer and mentorship opportunities',
        'Impact reporting and measurement',
        'Tax-deductible donation receipts',
        'Recognition in annual reports and website',
        'Invitation to exclusive partner events'
      ],
      whatWeSeek: [
        'Financial support for programs and operations',
        'In-kind donations (equipment, software, facilities)',
        'Employee volunteers and mentors',
        'Technical expertise and guidance',
        'Long-term partnership commitment'
      ],
      successStories: 'Our corporate partners have helped us reach 2,000+ youth, establish 15 tech centers, and provide over GHS 500,000 in scholarships and equipment. Partners report high employee satisfaction and measurable CSR impact.',
      nextSteps: 'Partnership discussion → Proposal development → Agreement signing → Program implementation → Impact measurement',
      requirements: 'Registered business entity, alignment with our mission and values, minimum 1-year commitment, willingness to be publicly associated with our work'
    }
  },
  {
    title: 'Government Collaboration',
    description: 'Work with government agencies to scale digital inclusion initiatives and influence policy development.',
    icon: 'GO',
    benefits: ['Policy influence', 'Scale impact', 'Resource access', 'Legitimacy'],
    detailContent: {
      overview: 'Our Government Collaboration program works with local, regional, and national government agencies to scale digital inclusion initiatives and create supportive policy environments for technology education.',
      whatWeOffer: [
        'Technical expertise in digital inclusion and youth development',
        'Program implementation and management capabilities',
        'Evidence-based policy recommendations',
        'Community engagement and mobilization',
        'Monitoring and evaluation frameworks',
        'International best practices and connections'
      ],
      whatWeSeek: [
        'Policy support and regulatory backing',
        'Funding and resource allocation',
        'Access to public facilities and institutions',
        'Integration into national development plans',
        'Support for scaling successful programs'
      ],
      successStories: 'We have collaborated with the Ministry of Education on curriculum development, with regional governments on youth employment programs, and provided input on national digital inclusion policies.',
      nextSteps: 'Policy consultation → Pilot program design → Implementation agreement → Program rollout → Policy integration',
      requirements: 'Government agency or ministry status, alignment with national development goals, dedicated liaison officer, commitment to evidence-based programming'
    }
  },
  {
    title: 'NGO & Foundation Partnerships',
    description: 'Collaborate with other NGOs and foundations to maximize impact and share resources.',
    icon: 'NG',
    benefits: ['Shared resources', 'Expanded reach', 'Knowledge exchange', 'Joint funding'],
    detailContent: {
      overview: 'Our NGO & Foundation Partnerships foster collaboration with like-minded organizations to maximize impact, share resources, and create comprehensive solutions for digital inclusion challenges.',
      whatWeOffer: [
        'Technology education expertise and curriculum',
        'Proven program models and implementation guides',
        'Shared resources and cost efficiencies',
        'Joint program development and implementation',
        'Knowledge sharing and capacity building',
        'Collaborative advocacy and policy work'
      ],
      whatWeSeek: [
        'Complementary expertise and programs',
        'Shared funding and resource mobilization',
        'Access to different target populations',
        'Joint advocacy and policy influence',
        'Knowledge exchange and learning opportunities'
      ],
      successStories: 'We have partnered with 15+ NGOs and foundations, creating joint programs that have reached 3,000+ additional beneficiaries and secured over GHS 800,000 in collaborative funding.',
      nextSteps: 'Partnership exploration → Joint program design → Resource sharing agreement → Collaborative implementation → Impact evaluation',
      requirements: 'Registered NGO or foundation status, complementary mission and values, proven track record, commitment to collaborative approach'
    }
  },
  {
    title: 'International Development',
    description: 'Partner with international organizations to bring global expertise and funding to local programs.',
    icon: 'IN',
    benefits: ['Global expertise', 'International funding', 'Knowledge transfer', 'Best practices'],
    detailContent: {
      overview: 'Our International Development partnerships connect us with global organizations, bringing international expertise, funding, and best practices to enhance our local programs and expand our impact.',
      whatWeOffer: [
        'Local knowledge and community connections',
        'Cultural competency and language skills',
        'Program implementation and management',
        'Monitoring and evaluation capabilities',
        'Government and stakeholder relationships',
        'Proven track record in digital inclusion'
      ],
      whatWeSeek: [
        'International funding and grants',
        'Technical expertise and best practices',
        'Global network connections',
        'Capacity building and training opportunities',
        'Exchange programs and partnerships',
        'Research and evaluation support'
      ],
      successStories: 'Our international partnerships have brought over $200,000 in funding, enabled 50+ youth to participate in international programs, and helped us adopt best practices from leading digital inclusion organizations worldwide.',
      nextSteps: 'Initial consultation → Partnership proposal → Due diligence → Program design → Implementation → Knowledge sharing',
      requirements: 'International organization status, track record in development work, commitment to local capacity building, alignment with sustainable development goals'
    }
  },
  {
    title: 'Technology Partners',
    description: 'Collaborate with technology companies to provide cutting-edge tools, training, and career pathways.',
    icon: 'TE',
    benefits: ['Latest technology', 'Expert training', 'Career pathways', 'Innovation'],
    detailContent: {
      overview: 'Our Technology Partnerships connect us with leading technology companies to provide our participants with access to cutting-edge tools, expert training, and direct pathways to technology careers.',
      whatWeOffer: [
        'Access to motivated and trained tech talent',
        'Product testing and feedback opportunities',
        'Local market insights and connections',
        'Brand visibility in emerging markets',
        'Corporate social responsibility opportunities',
        'Employee volunteer and mentorship programs'
      ],
      whatWeSeek: [
        'Software licenses and technology access',
        'Technical training and certification programs',
        'Industry expert mentors and speakers',
        'Internship and employment opportunities',
        'Equipment and infrastructure support',
        'Innovation challenges and competitions'
      ],
      successStories: 'Our technology partners have provided software worth over $100,000, created 200+ internship opportunities, and enabled 85% of our graduates to secure technology employment or start their own tech businesses.',
      nextSteps: 'Technology assessment → Partnership proposal → Pilot program → Training integration → Career pathway development',
      requirements: 'Technology company status, commitment to youth development, willingness to provide technical training, interest in African tech talent'
    }
  }
]

const Partners: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedPartnership, setSelectedPartnership] = useState<typeof partnershipOptions[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (partnership: typeof partnershipOptions[0]) => {
    setSelectedPartnership(partnership)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPartnership(null)
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* NEU: Hero Section mit starker Primärfarbe */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="hero-title">Partner With Us</h1>
            <p className="hero-subtitle">
              Join us in creating lasting impact through technology education and digital inclusion across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEU: Partnership Options Overview */}
      <section ref={ref} className="section bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Partnership Opportunities</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              Discover how your organization can partner with us to expand digital inclusion and create meaningful impact in Ghana's tech ecosystem.
            </p>
          </motion.div>

          {/* NEU: Partnership Cards mit Popup-Triggern */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipOptions.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card cursor-pointer group"
                onClick={() => openModal(partnership)}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-800 transition-colors duration-300">
                    {partnership.icon}
                  </div>
                </div>

                <div className="card-body text-center">
                  <h3 className="heading-sm mb-4 group-hover:text-primary-800 transition-colors duration-300">
                    {partnership.title}
                  </h3>
                  <p className="text-body mb-6 leading-relaxed">
                    {partnership.description}
                  </p>

                  {/* Benefits Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {partnership.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="badge badge-primary text-xs">
                        {benefit}
                      </span>
                    ))}
                    {partnership.benefits.length > 2 && (
                      <span className="badge bg-neutral-100 text-neutral-600 text-xs">
                        +{partnership.benefits.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <button className="btn btn-primary w-full group-hover:shadow-primary-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEU: Partnership Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPartnership?.title || ''}
        size="large"
      >
        {selectedPartnership && (
          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h3 className="heading-md mb-4">Partnership Overview</h3>
              <p className="text-body leading-relaxed">
                {selectedPartnership.detailContent.overview}
              </p>
            </div>

            {/* What We Offer */}
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="heading-md mb-4">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedPartnership.detailContent.whatWeOffer.map((offer, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">{offer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Seek */}
            <div className="bg-accent/5 rounded-xl p-6">
              <h3 className="heading-md mb-4">What We Seek</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedPartnership.detailContent.whatWeSeek.map((seek, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">{seek}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h3 className="heading-md mb-4">Success Stories</h3>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <p className="text-body leading-relaxed">
                  {selectedPartnership.detailContent.successStories}
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="heading-md mb-4">Partnership Process</h3>
              <p className="text-body mb-4 font-medium">
                {selectedPartnership.detailContent.nextSteps}
              </p>
              <div className="bg-neutral-50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                <p className="text-body text-sm">
                  {selectedPartnership.detailContent.requirements}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
              <motion.button
                className="btn btn-primary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  closeModal()
                  window.location.href = '/contact'
                }}
              >
                Start Partnership Discussion
              </motion.button>
              <motion.button
                className="btn btn-secondary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  closeModal()
                  window.location.href = '/donate'
                }}
              >
                Support Our Mission
              </motion.button>
            </div>
          </div>
        )}
      </Modal>

      {/* NEU: Call to Action */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Ready to Partner With Us?</h2>
            <p className="text-lead mb-8">
              Whether you're a corporation, educational institution, government agency, or NGO, 
              we have partnership opportunities that can create meaningful impact while achieving your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Start a Conversation
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/impact'}
              >
                View Our Impact
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners