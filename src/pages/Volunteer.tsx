import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import Modal from '../components/Modal'
import SEO from '../components/SEO'

const Volunteer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedRole, setSelectedRole] = useState(0)
  const [selectedVolunteerRole, setSelectedVolunteerRole] = useState<any>(null)
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const openRoleModal = (role: any) => {
    setSelectedVolunteerRole(role)
    setIsRoleModalOpen(true)
  }

  const closeRoleModal = () => {
    setIsRoleModalOpen(false)
    setSelectedVolunteerRole(null)
  }

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
      const subject = `Volunteer Application - ${formData.role}`
      const body = `
Hello IT for Youth Ghana Team,

I would like to apply as a volunteer for your organization.

Personal Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Application Details:
- Preferred Role: ${formData.role}
- Experience: ${formData.experience}
- Availability: ${formData.availability}

Motivation:
${formData.motivation}

Best regards,
${formData.name}
      `
      
      const mailtoLink = `mailto:info@itforyouthghana.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
      setSubmitMessage('Your email client should open with the volunteer application. Please send the email to complete your application.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        availability: '',
        motivation: ''
      })
    } catch (error) {
      setSubmitMessage('There was an error. Please try again or contact us directly at info@itforyouthghana.org')
    }
    
    setIsSubmitting(false)
  }

  // NEU: Erweiterte Volunteer Opportunities mit detaillierten Popup-Inhalten
  const volunteerRoles = [
    {
      title: 'Tech Mentor',
      commitment: '4-6 hours/week',
      description: 'Guide and support young developers on their coding journey through one-on-one mentorship and group sessions.',
      requirements: ['2+ years programming experience', 'Patience and empathy', 'Good communication skills'],
      skills: ['Programming', 'Mentoring', 'Communication'],
      impact: 'Direct mentorship for 8-12 students per cohort',
      detailContent: {
        overview: 'As a Tech Mentor, you\'ll work directly with our students to provide technical guidance, career advice, and emotional support throughout their learning journey. This role is perfect for experienced developers who want to give back to the community.',
        responsibilities: [
          'Provide one-on-one mentorship sessions with assigned students',
          'Review and provide feedback on student projects and code',
          'Lead technical workshops and coding sessions',
          'Support students during hackathons and project presentations',
          'Help students with career planning and job search strategies'
        ],
        timeCommitment: '4-6 hours per week, flexible scheduling including some evenings and weekends',
        requirements: [
          'Minimum 2 years of professional programming experience',
          'Proficiency in at least one programming language (JavaScript, Python, Java, etc.)',
          'Experience with modern development tools and practices',
          'Strong communication and interpersonal skills',
          'Patience and passion for teaching and mentoring young people'
        ],
        benefits: [
          'Develop leadership and mentoring skills',
          'Give back to the community and make a lasting impact',
          'Network with other tech professionals and mentors',
          'Gain teaching and presentation experience',
          'Receive volunteer certificates and references'
        ]
      }
    },
    {
      title: 'Workshop Trainer',
      commitment: '6-8 hours/month',
      description: 'Lead hands-on workshops in programming, web development, and emerging technologies.',
      requirements: ['Teaching or training experience', 'Technical expertise', 'Public speaking comfort'],
      skills: ['Teaching', 'Technical Skills', 'Presentation'],
      impact: 'Train 20-30 students per workshop session',
      detailContent: {
        overview: 'Workshop Trainers are responsible for delivering high-quality technical training sessions to our students. You\'ll design and lead workshops that introduce new technologies and reinforce fundamental concepts.',
        responsibilities: [
          'Plan and develop workshop curriculum and materials',
          'Lead 2-3 hour interactive workshop sessions',
          'Create hands-on exercises and practical projects',
          'Adapt teaching methods to different learning styles',
          'Collaborate with other trainers to ensure content consistency'
        ],
        timeCommitment: '6-8 hours per month, primarily weekends and some evenings',
        requirements: [
          'Professional experience in relevant technology areas',
          'Previous teaching, training, or presentation experience preferred',
          'Ability to explain complex technical concepts clearly',
          'Comfortable speaking to groups of 15-25 people',
          'Reliable and punctual with strong organizational skills'
        ],
        benefits: [
          'Enhance your teaching and public speaking abilities',
          'Stay current with latest technologies and trends',
          'Build your professional portfolio with training experience',
          'Connect with passionate learners and fellow trainers',
          'Receive training materials and resources'
        ]
      }
    },
    {
      title: 'Career Mentor',
      commitment: '3-4 hours/week',
      description: 'Help students navigate their career paths, prepare for interviews, and connect with job opportunities.',
      requirements: ['Industry experience', 'HR or recruitment background', 'Professional network'],
      skills: ['Career Counseling', 'Networking', 'Interview Prep'],
      impact: 'Guide 15+ students toward employment opportunities',
      detailContent: {
        overview: 'Career Mentors focus on helping our graduates transition from training to employment. You\'ll provide career guidance, interview preparation, and industry insights to help students launch successful tech careers.',
        responsibilities: [
          'Conduct career counseling sessions with individual students',
          'Help students create compelling resumes and portfolios',
          'Provide mock interviews and interview preparation',
          'Share industry insights and career pathway information',
          'Connect students with job opportunities and professional networks'
        ],
        timeCommitment: '3-4 hours per week, flexible scheduling with focus on final month of student programs',
        requirements: [
          'Minimum 3 years of professional experience in tech industry',
          'Experience with hiring, HR, or talent acquisition preferred',
          'Strong professional network in Ghana\'s tech ecosystem',
          'Excellent communication and interpersonal skills',
          'Understanding of current job market and industry trends'
        ],
        benefits: [
          'Expand your professional network',
          'Develop coaching and mentoring expertise',
          'Contribute to addressing Ghana\'s tech talent needs',
          'Gain insights into emerging talent and skills',
          'Receive recognition as a career development contributor'
        ]
      }
    },
    {
      title: 'Community Outreach',
      commitment: '5-6 hours/month',
      description: 'Engage with local communities to identify potential students and build partnerships with schools.',
      requirements: ['Community engagement experience', 'Local language skills', 'Transportation access'],
      skills: ['Communication', 'Relationship Building', 'Cultural Awareness'],
      impact: 'Reach 200+ potential students through outreach activities',
      detailContent: {
        overview: 'Community Outreach volunteers are our ambassadors in local communities. You\'ll help us identify and engage potential students, particularly in underserved areas, and build lasting partnerships with schools and community organizations.',
        responsibilities: [
          'Visit schools and community centers to present our programs',
          'Identify and engage potential students, especially young women',
          'Build relationships with teachers, administrators, and community leaders',
          'Organize information sessions and recruitment events',
          'Collect feedback from communities to improve our outreach approach'
        ],
        timeCommitment: '5-6 hours per month, primarily during school hours and community events',
        requirements: [
          'Strong communication skills in English and local languages',
          'Experience working with diverse communities',
          'Access to reliable transportation',
          'Outgoing personality and cultural sensitivity',
          'Previous experience in education, social work, or community development preferred'
        ],
        benefits: [
          'Make a direct impact in underserved communities',
          'Develop cultural competency and communication skills',
          'Build relationships across diverse communities',
          'Contribute to increasing diversity in tech education',
          'Gain experience in community engagement and social impact'
        ]
      }
    },
    {
      title: 'Event Coordination',
      commitment: 'Project-based',
      description: 'Support the planning and execution of hackathons, graduations, and other events.',
      requirements: ['Organizational skills', 'Event experience', 'Teamwork'],
      skills: ['Project management', 'Organization', 'Logistics'],
      impact: 'Successful execution of 4-6 major events per year',
      detailContent: {
        overview: 'Event Coordinators help bring our major events to life, from intimate graduation ceremonies to large-scale hackathons. This role is perfect for detail-oriented volunteers who enjoy project management and creating memorable experiences.',
        responsibilities: [
          'Assist with event planning, logistics, and timeline management',
          'Coordinate with vendors, venues, and external partners',
          'Support participant registration and communication',
          'Help with event setup, management, and breakdown',
          'Document events through photos and feedback collection'
        ],
        timeCommitment: 'Project-based: 10-15 hours per event, with 4-6 events annually',
        requirements: [
          'Previous event planning or project management experience',
          'Strong organizational and time management skills',
          'Ability to work under pressure and handle multiple tasks',
          'Excellent attention to detail and problem-solving abilities',
          'Flexible schedule to accommodate event preparation and execution'
        ],
        benefits: [
          'Gain hands-on event management experience',
          'Network with sponsors, partners, and community leaders',
          'Contribute to milestone moments in student journeys',
          'Develop project management and coordination skills',
          'Be part of creating impactful community events'
        ]
      }
    }
  ]

  const volunteerBenefits = [
    {
      icon: 'Skills',
      title: 'Meaningful Work',
      description: 'Direct contribution to transforming lives and communities'
    },
    {
      icon: 'Growth',
      title: 'Personal Growth',
      description: 'Develop new skills and expand your network'
    },
    {
      icon: 'Team',
      title: 'Community',
      description: 'Become part of a passionate community of changemakers'
    },
    {
      icon: 'Impact',
      title: 'Recognition',
      description: 'Certificates and recommendation letters for your contributions'
    }
  ]

  const volunteerProcess = [
    {
      step: 1,
      title: 'Application',
      description: 'Fill out our volunteer form and share your interests with us',
      duration: '5 minutes'
    },
    {
      step: 2,
      title: 'Interview',
      description: 'Brief conversation about your motivation and how you can best contribute',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Orientation',
      description: 'Introduction to our mission, values and way of working',
      duration: '2 hours'
    },
    {
      step: 4,
      title: 'Start',
      description: 'Begin your volunteer work with full support from our team',
      duration: 'Ongoing'
    }
  ]

  return (
    <>
      <SEO 
        title="Volunteer Opportunities - Tech Mentoring Ghana"
        description="Join our volunteer team to mentor young developers in Ghana. Tech mentors, workshop trainers, and community outreach opportunities available."
        canonical="/volunteer"
        ogType="website"
      />
      <div className="min-h-screen bg-white" style={{ paddingTop: 'var(--space-3xl)' }}>
      {/* CHANGED: UX-optimierter Hero mit klarem CTA-Flow */}
      <section className="section-hero bg-primary overflow-hidden relative">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="heading-xl text-white mb-6">Join Our Volunteer Team</h1>
            <div className="text-container">
              <p className="text-lead text-white/90 mb-8">
                Transform lives through technology. Use your skills to bridge Ghana's digital divide and empower the next generation of tech leaders.
              </p>
            </div>
            
            {/* CHANGED: Dual CTA - Primary und Secondary Actions (Hick's Law) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.button
                onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary flex-1"
                style={{ minHeight: 'var(--touch-comfort)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('volunteer-roles')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-lg font-medium"
                style={{ 
                  minHeight: 'var(--touch-comfort)',
                  padding: 'var(--space-md) var(--space-lg)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Roles
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Why Become a Volunteer?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Your time and expertise can sustainably transform the lives of young people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-float border border-secondary/20 text-center group"
              >
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{benefit.icon.slice(0,3)}</span>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANGED: Volunteer Roles mit ID für Navigation */}
      <section id="volunteer-roles" className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="heading-lg mb-6">Volunteer Opportunities</h2>
            <div className="text-container">
              <p className="text-lead text-center">
                Find the perfect role that matches your skills, interests, and availability
              </p>
            </div>
          </motion.div>

          {/* NEU: Clickable Volunteer Role Cards mit Popup-Triggern */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openRoleModal(role)}
                className="card cursor-pointer group hover:shadow-primary-lg transition-all duration-300"
                whileHover={{ y: -5 }}
                style={{ 
                  minHeight: 'var(--touch-target-min)',
                  padding: 'var(--space-lg)'
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-sm text-primary group-hover:text-primary-600 transition-colors duration-300">
                    {role.title}
                  </h3>
                  <span className="badge badge-accent text-xs">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-body mb-4 line-clamp-3">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.skills.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="badge badge-primary text-xs">
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 2 && (
                    <span className="badge bg-neutral-100 text-neutral-600 text-xs">
                      +{role.skills.length - 2} more
                    </span>
                  )}
                </div>
                {/* Learn More Button */}
                <button className="btn btn-secondary w-full text-sm group-hover:btn-primary transition-all duration-300">
                  Learn More & Apply
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">How to Become a Volunteer</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A simple 4-step process to become part of our team
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {volunteerProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-float border border-secondary/20 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-neutral-600 mb-3 text-sm leading-relaxed">{step.description}</p>
                    <span className="inline-block bg-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Volunteers */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Voices of Our Volunteers</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear what our current volunteers say about their experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mensah',
                role: 'Tech Mentor',
                quote: 'Working as a Tech Mentor at IT for Youth has enriched my life. The joy of seeing young people write their first programs is priceless.',
                duration: '2 years'
              },
              {
                name: 'Kwame Asante',
                role: 'Workshop Trainer',
                quote: 'The opportunity to share my knowledge about Data Science while learning from the fresh perspectives of participants is fantastic.',
                duration: '1.5 years'
              },
              {
                name: 'Ama Osei',
                role: 'Community Outreach',
                quote: 'Through my work in Community Outreach, I was able to reach new communities while developing my own communication skills.',
                duration: '1 year'
              }
            ].map((volunteer, index) => (
              <motion.div
                key={volunteer.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-neutral-50 rounded-2xl p-6 border border-secondary/20"
              >
                <div className="text-4xl mb-4">💙</div>
                <blockquote className="text-neutral-700 mb-4 italic leading-relaxed">
                  "{volunteer.quote}"
                </blockquote>
                <div className="border-t border-secondary/20 pt-4">
                  <p className="font-bold text-primary">{volunteer.name}</p>
                  <p className="text-accent text-sm">{volunteer.role}</p>
                  <p className="text-neutral-500 text-xs">Volunteering for {volunteer.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANGED: UX-optimiertes Application Form mit ID */}
      <section id="volunteer-form" className="section bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="heading-lg mb-6">Start Your Volunteer Journey</h2>
            <div className="text-container">
              <p className="text-lead text-center">
                Ready to make a difference? Complete the application below and join our team of changemakers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="card" style={{ padding: 'var(--space-2xl)' }}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
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
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Preferred Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a role</option>
                    <option value="Tech Mentor">Tech Mentor</option>
                    <option value="Workshop Trainer">Workshop Trainer</option>
                    <option value="Career Mentor">Career Mentor</option>
                    <option value="Event Coordination">Event Coordination</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Relevant Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Brief description of your relevant experience"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="availability" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="e.g., Weekends, Evenings, 4-6 hours/week"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="motivation" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your motivation and what you hope to contribute..."
                />
              </div>

              {submitMessage && (
                <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-xl">
                  <p className="text-primary font-medium">{submitMessage}</p>
                </div>
              )}

              {/* CHANGED: UX-optimierter Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full text-lg"
                style={{ minHeight: 'var(--touch-comfort)' }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Volunteer Application'}
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
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Join our team of passionate volunteers and help build Ghana's next generation of tech leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                onClick={() => document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.a
                href="mailto:info@itforyouthghana.org"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEU: Volunteer Role Details Modal */}
      <Modal
        isOpen={isRoleModalOpen}
        onClose={closeRoleModal}
        title={selectedVolunteerRole?.title || ''}
        size="large"
      >
        {selectedVolunteerRole && (
          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h3 className="heading-md mb-4">Role Overview</h3>
              <p className="text-body leading-relaxed">
                {selectedVolunteerRole.detailContent.overview}
              </p>
            </div>

            {/* Time Commitment */}
            <div className="bg-primary/5 rounded-xl p-6">
              <h3 className="heading-md mb-4">Time Commitment</h3>
              <p className="text-body font-medium text-primary">
                {selectedVolunteerRole.detailContent.timeCommitment}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="heading-md mb-4">Key Responsibilities</h3>
              <div className="grid gap-3">
                {selectedVolunteerRole.detailContent.responsibilities.map((responsibility: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-accent/5 rounded-xl p-6">
              <h3 className="heading-md mb-4">Requirements</h3>
              <div className="grid gap-3">
                {selectedVolunteerRole.detailContent.requirements.map((requirement: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="heading-md mb-4">What You'll Gain</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedVolunteerRole.detailContent.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
              <h3 className="heading-md mb-4">Your Impact</h3>
              <p className="text-body font-medium">
                {selectedVolunteerRole.impact}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
              <motion.button
                className="btn btn-primary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFormData({ ...formData, role: selectedVolunteerRole.title })
                  closeRoleModal()
                  document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Apply for This Role
              </motion.button>
              <motion.button
                className="btn btn-secondary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  closeRoleModal()
                  window.location.href = 'mailto:info@itforyouthghana.org?subject=Volunteer Inquiry - ' + encodeURIComponent(selectedVolunteerRole.title)
                }}
              >
                Ask Questions
              </motion.button>
            </div>
          </div>
        )}
      </Modal>
      </div>
    </>
  )
}

export default Volunteer