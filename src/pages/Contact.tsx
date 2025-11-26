import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content/index'
import SEO from '../components/SEO'
import Hero from '../components/shared/Hero'

const Contact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Here you would make your actual API call
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      detail: content.contact.email,
      action: `mailto:${content.contact.email}`,
      description: 'Send us an email for general inquiries'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      detail: content.contact.phone,
      action: `tel:${content.contact.phone}`,
      description: 'Speak directly with our team'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      detail: content.contact.address,
      action: 'https://maps.google.com/?q=Accra,Ghana',
      description: 'Come to our training center'
    }
  ]

  const faqItems = content.faq

  return (
    <>
      <SEO 
        title="Contact Us - IT for Youth Ghana"
        description="Get in touch with IT for Youth Ghana. Contact us for program info, partnerships, volunteer opportunities, or visit our Accra office."
        canonical="/contact"
        ogType="organization"
      />
      <div id="main-content" className="min-h-screen bg-white pt-24">
        <Hero
          title="Get in Touch"
          subtitle="Ready to Start Your Tech Journey?"
          description="Have questions about our programs? Want to get involved? Need support or guidance? We're here to help you take the next step towards transforming your future through technology."
          primaryCta={{ text: "Contact Us", action: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
        />

        {/* Contact Methods Section */}
        <section ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>How to Reach Us</h2>
              <p className="text-lead max-w-4xl mx-auto">
                We're here to help! Choose your preferred way to connect with our team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.title === 'Visit Us' ? '_blank' : '_self'}
                  rel={method.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group hover:scale-105 text-center"
                  style={{ borderColor: 'rgba(12, 45, 90, 0.1)' }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:text-white transition-all duration-300 group-hover:bg-[#0c2d5a]"
                    style={{ 
                      backgroundColor: 'rgba(12, 45, 90, 0.1)'
                    }}
                  >
                    <div style={{ color: '#0c2d5a' }} className="group-hover:text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="heading-sm mb-2 group-hover:text-opacity-80 transition-colors duration-300" style={{ color: '#0c2d5a' }}>{method.title}</h3>
                  <p className="font-semibold mb-2" style={{ color: '#0c2d5a' }}>{method.detail}</p>
                  <p className="text-body text-sm text-gray-600">{method.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Quick Actions</h2>
              <p className="text-lead max-w-4xl mx-auto">
                Need something specific? Jump right to what you're looking for.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { 
                  title: 'Join a Program', 
                  description: 'Ready to start learning?', 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ), 
                  action: () => window.location.href = '/opportunities/students-graduates',
                  color: 'from-blue-500 to-indigo-600' 
                },
                { 
                  title: 'Partner with Us', 
                  description: 'Business collaboration', 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ), 
                  action: () => window.location.href = '/opportunities/businesses',
                  color: 'from-green-500 to-teal-600' 
                },
                { 
                  title: 'Volunteer', 
                  description: 'Make a difference', 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ), 
                  action: () => window.location.href = '/opportunities/volunteers',
                  color: 'from-pink-500 to-rose-600' 
                },
                { 
                  title: 'Donate', 
                  description: 'Support our mission', 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), 
                  action: () => window.location.href = '/donate',
                  color: 'from-purple-500 to-violet-600' 
                }
              ].map((item, index) => (
                <motion.button
                  key={item.title}
                  onClick={item.action}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border text-center group"
                  style={{ borderColor: 'rgba(12, 45, 90, 0.1)' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:text-white transition-all duration-300" style={{ backgroundColor: 'rgba(12, 45, 90, 0.1)' }}>
                    <div style={{ color: '#0c2d5a' }} className="group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-opacity-80 transition-colors duration-300" style={{ color: '#0c2d5a' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Send Us a Message</h2>
              <p className="text-lead max-w-4xl mx-auto">
                Have a specific question or want to get started? We typically respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl border shadow-lg p-8" style={{ borderColor: 'rgba(12, 45, 90, 0.1)' }}>
                  
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-green-800 font-semibold">Message sent successfully!</h3>
                          <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-red-800 font-semibold">Something went wrong</h3>
                          <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: '#0c2d5a' }}>
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                          placeholder="Enter your full name"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: '#0c2d5a' }}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-interest" className="block text-sm font-semibold mb-2" style={{ color: '#0c2d5a' }}>
                        I'm interested in...
                      </label>
                      <select
                        id="contact-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        <option value="">Please select your area of interest</option>
                        <option value="programs">Joining a Program</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="donation">Supporting/Donating</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: '#0c2d5a' }}>
                        Your Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="form-input w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                        placeholder="Tell us about your goals, questions, or how we can help you..."
                        disabled={isSubmitting}
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    <div style={{ marginTop: '32px' }}>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative"
                        style={{
                          padding: '16px 32px',
                          borderRadius: '50px',
                          background: isSubmitting ? '#9ca3af' : '#0c2d5a',
                          color: 'white',
                          border: 'none',
                          fontWeight: '600',
                          fontSize: '16px',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          boxShadow: '0 8px 25px rgba(12, 45, 90, 0.3)',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(12, 45, 90, 0.4)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)'
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(12, 45, 90, 0.3)'
                          }
                        }}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          {isSubmitting && (
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          )}
                          <span>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </span>
                        </div>
                      </motion.button>
                      
                      <p className="text-center text-sm text-gray-500 mt-4">
                        Your information is secure and will never be shared with third parties.
                      </p>
                    </div>
                  </form>
                </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-xl mb-6" style={{ color: '#0c2d5a' }}>Frequently Asked Questions</h2>
              <p className="text-lead max-w-4xl mx-auto">
                Find answers to common questions about our programs and services
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-neutral-200 transition-all duration-300 p-5"
                    style={{ 
                      borderColor: 'rgba(12, 45, 90, 0.1)'
                    }}
                  >
                    <h3 className="heading-sm mb-3" style={{ color: '#0c2d5a' }}>{faq.question}</h3>
                    <p className="text-body text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              {/* Still Have Questions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center"
              >
                <div 
                  className="rounded-2xl p-12 border shadow-lg text-center"
                  style={{ 
                    backgroundColor: 'rgba(12, 45, 90, 0.05)',
                    borderColor: 'rgba(12, 45, 90, 0.1)'
                  }}
                >
                  <h3 className="heading-md mb-4" style={{ color: '#0c2d5a' }}>Still Have Questions?</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    We're here to help! Get in touch with our team directly.
                  </p>
                  <motion.a
                    href={`mailto:${content.contact.email}`}
                    style={{
                      display: 'inline-block',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      background: '#0c2d5a',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '16px',
                      boxShadow: '0 8px 25px rgba(12, 45, 90, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(12, 45, 90, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(12, 45, 90, 0.3)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Email Us Directly
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}

export default Contact