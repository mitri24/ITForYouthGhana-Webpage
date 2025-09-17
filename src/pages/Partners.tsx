import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const Partners: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activePartnership, setActivePartnership] = useState(0)
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationType: '',
    partnershipType: '',
    description: '',
    goals: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = `Partnership Inquiry - ${formData.partnershipType} from ${formData.organizationName}`
      const body = `
Hello IT for Youth Ghana Team,

We are interested in exploring a partnership opportunity with your organization.

Organization Details:
- Organization Name: ${formData.organizationName}
- Contact Person: ${formData.contactName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Organization Type: ${formData.organizationType}

Partnership Information:
- Preferred Partnership Type: ${formData.partnershipType}
- Organization Description: ${formData.description}
- Partnership Goals: ${formData.goals}
- Proposed Timeline: ${formData.timeline}

We look forward to discussing this opportunity further.

Best regards,
${formData.contactName}
${formData.organizationName}
      `
      
      const mailtoLink = `mailto:info@itforyouthghana.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
      setSubmitMessage('Your email client should open with the partnership inquiry. Please send the email to complete your application.')
      
      // Reset form
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        organizationType: '',
        partnershipType: '',
        description: '',
        goals: '',
        timeline: ''
      })
    } catch (error) {
      setSubmitMessage('There was an error. Please try again or contact us directly at info@itforyouthghana.org')
    }
    
    setIsSubmitting(false)
  }

  const partnershipTypes = [
    {
      title: 'Corporate Partnerships',
      subtitle: 'Strategic alliances for sustainable impact',
      description: 'Partner with us to create meaningful change in Ghana\'s tech landscape. Our corporate partnerships offer opportunities for employee volunteer programs, skills-based volunteering, and joint technology initiatives.',
      image: '/images/UX1.jpeg',
      benefits: [
        'Brand association with social impact',
        'Employee engagement opportunities',
        'Corporate social responsibility fulfillment',
        'Access to emerging tech talent',
        'Community development visibility'
      ],
      commitment: 'Flexible partnership models',
      examples: 'Tech companies, financial institutions, consultancies'
    },
    {
      title: 'Educational Institution Partnerships',
      subtitle: 'Bridging academic and practical learning',
      description: 'Collaborate with us to enhance technology education curricula, provide student internships, and create pathways between education and employment in the tech sector.',
      image: '/images/UX2.jpg',
      benefits: [
        'Enhanced student practical experience',
        'Industry-relevant curriculum development',
        'Graduate employment pathways',
        'Faculty development opportunities',
        'Research collaboration possibilities'
      ],
      commitment: 'Long-term educational partnerships',
      examples: 'Universities, technical institutes, vocational schools'
    },
    {
      title: 'Government Partnerships',
      subtitle: 'Policy and systemic change collaboration',
      description: 'Work with us to develop and implement policies that support digital inclusion, technology education, and youth empowerment initiatives across Ghana.',
      image: '/images/UX3.jpeg',
      benefits: [
        'Evidence-based policy development',
        'Grassroots implementation expertise',
        'Community engagement capabilities',
        'Program scaling opportunities',
        'Impact measurement and reporting'
      ],
      commitment: 'Policy development and implementation',
      examples: 'Ministry of Education, local government, development agencies'
    },
    {
      title: 'International NGO Partnerships',
      subtitle: 'Global collaboration for local impact',
      description: 'Join forces with us to leverage international expertise, funding, and networks while maintaining deep local knowledge and community connections.',
      image: '/images/UX4.jpg',
      benefits: [
        'Local implementation expertise',
        'Established community relationships',
        'Cultural competency and language skills',
        'Cost-effective program delivery',
        'Sustainable impact strategies'
      ],
      commitment: 'Collaborative program implementation',
      examples: 'International development organizations, foundations, donor agencies'
    },
    {
      title: 'Technology Company Partnerships',
      subtitle: 'Innovation and resource sharing',
      description: 'Partner with us to provide cutting-edge technology access, technical expertise, and industry mentorship to our programs and participants.',
      image: '/images/adjej.webp',
      benefits: [
        'Access to latest technologies',
        'Industry expert mentorship',
        'Real-world project opportunities',
        'Talent pipeline development',
        'Innovation ecosystem building'
      ],
      commitment: 'Technology and expertise sharing',
      examples: 'Software companies, hardware manufacturers, tech startups'
    },
    {
      title: 'Funding and Grant Partnerships',
      subtitle: 'Financial sustainability and growth',
      description: 'Support our mission through strategic funding partnerships that enable program expansion, innovation, and long-term sustainability.',
      image: '/images/Mlan.jpeg',
      benefits: [
        'Transparent fund utilization',
        'Regular impact reporting',
        'Program scalability',
        'Measurable outcomes',
        'Community-driven initiatives'
      ],
      commitment: 'Grant management and reporting',
      examples: 'Foundations, donor agencies, impact investors'
    }
  ]

  const currentPartners = [
    { name: 'Ghana Education Service', logo: '/images/logo.png', type: 'Government' },
    { name: 'Local Universities', logo: '/images/logo.png', type: 'Education' },
    { name: 'Community Organizations', logo: '/images/logo.png', type: 'Community' },
    { name: 'Tech Companies', logo: '/images/logo.png', type: 'Corporate' }
  ]

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Schedule a meeting to discuss your organization\'s goals and our partnership opportunities'
    },
    {
      step: '2', 
      title: 'Partnership Design',
      description: 'Collaboratively design a partnership model that aligns with both organizations\' objectives'
    },
    {
      step: '3',
      title: 'Agreement Development',
      description: 'Formalize the partnership through a comprehensive agreement outlining roles and expectations'
    },
    {
      step: '4',
      title: 'Implementation & Support',
      description: 'Launch the partnership with ongoing support, monitoring, and regular impact assessment'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner with Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Join us in transforming Ghana's digital future through strategic partnerships that create lasting impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Overview */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Partnership Opportunities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover how your organization can collaborate with us to create meaningful change in Ghana's technology education landscape
            </p>
          </motion.div>

          {/* Partnership Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setActivePartnership(index)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#8fb2d6]/20 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partnership.image}
                    alt={partnership.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b65b2]/80 via-[#1b65b2]/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{partnership.title}</h3>
                    <p className="text-sm opacity-90">{partnership.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-neutral-600 mb-4 line-clamp-3">{partnership.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#1b65b2] font-semibold">{partnership.commitment}</span>
                    <span className="text-[#d02355] font-semibold">Learn More →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Partnership View */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            key={activePartnership}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={partnershipTypes[activePartnership].image}
                  alt={partnershipTypes[activePartnership].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-[#1b65b2] mb-4">
                  {partnershipTypes[activePartnership].title}
                </h3>
                <p className="text-xl text-[#d02355] mb-6">
                  {partnershipTypes[activePartnership].subtitle}
                </p>
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  {partnershipTypes[activePartnership].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-[#1b65b2] mb-2">Commitment Level:</h4>
                    <p className="text-neutral-600">{partnershipTypes[activePartnership].commitment}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1b65b2] mb-2">Ideal Partners:</h4>
                    <p className="text-neutral-600">{partnershipTypes[activePartnership].examples}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#1b65b2] mb-4">Partnership Benefits:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {partnershipTypes[activePartnership].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-[#d02355] rounded-full mr-3"></span>
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="bg-gradient-to-r from-[#1b65b2] to-[#195aa5] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Partnership Discussion
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Our Current Partners</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're proud to work with these organizations in creating positive change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-bold text-[#1b65b2] mb-2">{partner.name}</h3>
                <p className="text-sm text-[#d02355] font-medium">{partner.type} Partner</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">How to Partner with Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our straightforward partnership process ensures alignment and mutual success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#1b65b2] to-[#d02355] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#1b65b2] mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Erasmus+ & International Collaborations */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">
              International Partnerships & Erasmus+
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              IT for Youth Ghana is positioned as a valuable partner for European institutions seeking 
              meaningful collaboration that benefits both sides through genuine knowledge exchange.
            </p>
          </motion.div>

          {/* Current International Partnership */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-[#d02355]"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1b65b2] mb-4">
                    Current Partnership: priME Academy AG (Germany)
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Our successful 2-month intensive UI/UX Design program demonstrates our capacity 
                    for international collaboration. Led by expert trainer Miss Miréio Trinley from Germany, 
                    this partnership brings world-class expertise to Ghanaian students.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-[#1b65b2] mb-2">Program Highlights</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• 21 comprehensive assignments</li>
                        <li>• Portfolio development focus</li>
                        <li>• International design standards</li>
                        <li>• Cross-cultural collaboration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1b65b2] mb-2">University Partners</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• Accra Technical University</li>
                        <li>• Ghana Communication Technology University</li>
                        <li>• University of Education Winneba</li>
                        <li>• University of Cape Coast</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#1b65b2]/5 to-[#d02355]/5 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-[#1b65b2] mb-4">Trainer Perspective</h4>
                  <blockquote className="text-neutral-600 italic leading-relaxed">
                    "Working with IT for Youth Ghana has changed how I think about inclusive education. 
                    Their 70% female participation rates are something we struggle with in Europe. This 
                    isn't development aid - it's genuine partnership where both sides contribute expertise 
                    and both sides benefit."
                  </blockquote>
                  <p className="text-right text-sm font-semibold text-[#d02355] mt-4">
                    - Miss Miréio Trinley, priME Academy AG
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What We Bring to Erasmus+ */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1b65b2] mb-6">What We Contribute</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">W</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Proven Gender Inclusion Methods</h4>
                    <p className="text-neutral-600 text-sm">70% female participation strategies that European institutions can adapt</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">I</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Operational Infrastructure</h4>
                    <p className="text-neutral-600 text-sm">Fully functional training lab with CISCO Academy platform and custom management systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">C</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Community Connections</h4>
                    <p className="text-neutral-600 text-sm">Established relationships with municipal education offices and local schools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">S</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Sustainable Model</h4>
                    <p className="text-neutral-600 text-sm">Self-sustaining programs through participant contributions and local partnerships</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1b65b2] mb-6">What We Seek to Learn</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">P</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Cutting-Edge Pedagogical Approaches</h4>
                    <p className="text-neutral-600 text-sm">Latest European methods in technology education and instructional design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">T</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Scaling Strategies</h4>
                    <p className="text-neutral-600 text-sm">European approaches to expanding educational programs across multiple locations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">C</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">International Certification</h4>
                    <p className="text-neutral-600 text-sm">Integration of global certification standards with local community needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">R</span>
                  <div>
                    <h4 className="font-semibold text-[#d02355] mb-1">Research Methodologies</h4>
                    <p className="text-neutral-600 text-sm">Advanced techniques for measuring and documenting educational impact</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Alignment with Ghana's Digital Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#1b65b2] mb-6 text-center">
              Alignment with National & Continental Frameworks
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1b65b2] to-[#8fb2d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">GH</span>
                </div>
                <h4 className="font-semibold text-[#1b65b2] mb-2">Ghana Digital Transformation</h4>
                <p className="text-neutral-600 text-sm">
                  Supporting the Ministry of Communications, Digitalisation, and Innovations 
                  led by Samuel Nartey George in accelerating digital transformation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d02355] to-[#1b65b2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">AU</span>
                </div>
                <h4 className="font-semibold text-[#1b65b2] mb-2">African Union Strategy</h4>
                <p className="text-neutral-600 text-sm">
                  Contributing to the African Union Digital Transformation Strategy 2020-2030 
                  and Continental Data Policy Framework
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8fb2d6] to-[#d02355] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">EU</span>
                </div>
                <h4 className="font-semibold text-[#1b65b2] mb-2">EU Global Gateway</h4>
                <p className="text-neutral-600 text-sm">
                  Positioned to contribute to EU Global Gateway initiatives and 
                  strengthen Ghana's role as a regional technology hub
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Partner with Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ready to make a lasting impact? Submit your partnership inquiry and we'll connect with you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your organization's name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="your.email@organization.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="+233 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="organizationType" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Organization Type *
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select organization type</option>
                    <option value="Corporate">Corporate/Private Company</option>
                    <option value="NGO">Non-Governmental Organization</option>
                    <option value="Educational">Educational Institution</option>
                    <option value="Government">Government Agency</option>
                    <option value="Foundation">Foundation/Trust</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select partnership type</option>
                    <option value="Corporate Partnership">Corporate Partnership</option>
                    <option value="Educational Partnership">Educational Partnership</option>
                    <option value="Government Partnership">Government Partnership</option>
                    <option value="Funding Partnership">Funding Partnership</option>
                    <option value="Technology Partnership">Technology Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Organization Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Brief description of your organization and what you do..."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="goals" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Partnership Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="What do you hope to achieve through this partnership?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="timeline" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Proposed Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="e.g., 6 months, 1 year, ongoing"
                />
              </div>

              {submitMessage && (
                <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-xl">
                  <p className="text-primary font-medium">{submitMessage}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Create Impact Together?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join us in empowering Ghana's youth through technology education and digital skills development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={() => document.getElementById('organizationName')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.a
                href="mailto:info@itforyouthghana.org"
                className="border-2 border-white text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Directly
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partners