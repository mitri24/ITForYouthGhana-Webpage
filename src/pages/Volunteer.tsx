import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const Volunteer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedRole, setSelectedRole] = useState(0)
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

  const volunteerRoles = content.volunteer.roles.concat([
    {
      title: 'Event Coordination',
      commitment: 'Project-based',
      description: 'Support the planning and execution of hackathons, graduations, and other events.',
      requirements: ['Organizational skills', 'Event experience', 'Teamwork'],
      skills: ['Project management', 'Organization', 'Logistics'],
      impact: 'Successful execution of 4-6 major events per year'
    }
  ])

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
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Become a Volunteer</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Use your skills to shape Ghana's tech future and transform lives
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-float hover:shadow-blue-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Volunteer Now
            </motion.button>
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

      {/* Volunteer Roles */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Volunteer Roles</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Find the perfect role that matches your skills and availability
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedRole(index)}
                className={`bg-white rounded-2xl p-6 shadow-float border-2 cursor-pointer transition-all duration-300 ${
                  selectedRole === index 
                    ? 'border-primary shadow-blue-glow' 
                    : 'border-secondary/20 hover:border-primary/40'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-neutral-600 mb-4 line-clamp-3">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="bg-secondary/20 text-primary px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 2 && (
                    <span className="text-neutral-400 text-sm">+{role.skills.length - 2} more</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Role View */}
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-neutral-50 to-secondary/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {volunteerRoles[selectedRole].title}
                </h3>
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  {volunteerRoles[selectedRole].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Time Commitment:</h4>
                  <p className="text-accent font-semibold">{volunteerRoles[selectedRole].commitment}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Your Impact:</h4>
                  <p className="text-neutral-700">{volunteerRoles[selectedRole].impact}</p>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Requirements:</h4>
                  <ul className="space-y-3">
                    {volunteerRoles[selectedRole].requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-neutral-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Required Skills:</h4>
                  <div className="flex flex-wrap gap-3">
                    {volunteerRoles[selectedRole].skills.map((skill, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-2 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => {
                    setFormData({ ...formData, role: volunteerRoles[selectedRole].title })
                    document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for this Role
                </motion.button>
              </div>
            </div>
          </motion.div>
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

      {/* Volunteer Application Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Apply to Volunteer</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ready to make a difference? Fill out this form and we'll get back to you soon.
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

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
    </div>
  )
}

export default Volunteer