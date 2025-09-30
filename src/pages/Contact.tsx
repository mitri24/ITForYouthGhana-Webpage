import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content/index'
import SEO from '../components/SEO'
import { navigateToPage } from '../utils/navigation'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
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
              <h1 className="heading-xl text-white">Get in Touch</h1>
              <p className="text-lead text-white/90 mb-8 max-w-3xl mx-auto">
                Ready to start your tech journey? Have questions about our programs? We're here to help!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section ref={ref} className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Contact Methods</h2>
              <p className="text-lead text-center max-w-3xl mx-auto text-neutral-800">
                Choose the most convenient way to reach us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.title === 'Visit Us' ? '_blank' : '_self'}
                  rel={method.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <div className="text-primary group-hover:text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="heading-sm mb-2 group-hover:text-primary">{method.title}</h3>
                  <p className="text-primary font-semibold mb-2">{method.detail}</p>
                  <p className="text-body text-sm text-neutral-700">{method.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact - Mittig und kompakt */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-2xl border border-primary/10 shadow-lg">
                <div className="p-8">
                  <h2 className="heading-md mb-6 text-center">Quick Contact</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        id="contact-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">What interests you?</option>
                        <option value="programs">Join a Program</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="donation">Support/Donation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="form-input"
                        placeholder="Your message..."
                      />
                    </div>

                    <div style={{ marginTop: '24px' }}>
                      <motion.button
                        type="submit"
                        className="btn btn-primary w-full"
                        style={{ marginBottom: '16px' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs - Separate Section */}
        <section className="py-20 bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="heading-lg mb-12 text-center">Frequently Asked Questions</h2>
                
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-neutral-200 hover:border-primary transition-all duration-300"
                    style={{ padding: '20px' }}
                  >
                    <h3 className="heading-sm mb-3">{faq.question}</h3>
                    <p className="text-body text-neutral-700">{faq.answer}</p>
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
                <div className="bg-primary rounded-2xl text-white" style={{ padding: '32px' }}>
                  <h3 className="heading-md mb-4 text-white">Still Have Questions?</h3>
                  <p className="text-lg mb-6 text-white/90">
                    We're here to help! Get in touch with our team directly.
                  </p>
                  <motion.a
                    href={`mailto:${content.contact.email}`}
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Email Us Directly
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact