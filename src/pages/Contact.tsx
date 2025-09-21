import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import SEO from '../components/SEO'
import { getRandomImageSet } from '../utils/randomImages'

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
      icon: '📧',
      title: 'Email Us',
      detail: content.contact.email,
      action: `mailto:${content.contact.email}`,
      description: 'Send us an email for general inquiries'
    },
    {
      icon: '📱',
      title: 'Call Us',
      detail: content.contact.phone,
      action: `tel:${content.contact.phone}`,
      description: 'Speak directly with our team'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: content.contact.address,
      action: '#location',
      description: 'Come to our training center'
    },
    {
      icon: '⏰',
      title: 'Office Hours',
      detail: content.contact.hours,
      action: '#',
      description: 'When we\'re available'
    }
  ]

  const quickActions = [
    {
      title: 'Join a Program',
      description: 'Apply for our next cohort',
      image: '/images/randomPictures/IMG-20241118-WA0052.jpg',
      action: '/programs',
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Become a Volunteer',
      description: 'Help us teach and mentor',
      image: '/images/randomPictures/IMG_8600.JPG',
      action: '/volunteer',
      color: 'from-accent to-orange-500'
    },
    {
      title: 'Partner with Us',
      description: 'Corporate partnerships',
      image: '/images/randomPictures/2024-12-17 21.12 (3).jpg',
      action: '/partners',
      color: 'from-secondary to-green-500'
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
      <div className="min-h-screen bg-white pt-24">
        
        {/* Hero Section */}
        <section className="section-hero bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-overlay"></div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="hero-title">Get in Touch</h1>
              <p className="hero-subtitle">
                Ready to transform your future? Let's start the conversation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section ref={ref} className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">How Can We Help?</h2>
              <p className="text-lead text-center max-w-3xl mx-auto">
                Multiple ways to connect with our team
              </p>
            </motion.div>

            <div className="cards-grid mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="card text-center group cursor-pointer"
                >
                  <div className="card-content">
                    <div>
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <h3 className="card-title heading-sm group-hover:text-accent transition-colors duration-300">
                        {method.title}
                      </h3>
                    </div>
                    
                    <div className="card-text">
                      <p className="text-body font-semibold mb-2">{method.detail}</p>
                      <p className="text-small text-muted">{method.description}</p>
                    </div>
                    
                    <div className="card-footer">
                      <button className="btn btn-secondary btn-sm">
                        Contact Now
                      </button>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Ready to Take Action?</h2>
              <p className="text-lead text-center max-w-3xl mx-auto">
                Jump straight into what interests you most
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={action.image} 
                      alt={action.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${action.color} opacity-80`}></div>
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-white/90 mb-4">{action.description}</p>
                    <motion.a
                      href={action.action}
                      className="btn btn-secondary bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="card"
              >
                <div className="card-body">
                  <h2 className="heading-md mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">Email *</label>
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="contact-phone" className="form-label">Phone</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-interest" className="form-label">Interest</label>
                        <select
                          id="contact-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="">Please select...</option>
                          <option value="programs">Join a Program</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="partnership">Partnership</option>
                          <option value="donation">Support/Donation</option>
                          <option value="visit">Schedule a Visit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">Subject *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="form-input"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary w-full text-white font-bold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="heading-md mb-8">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card"
                    >
                      <div className="card-body">
                        <h3 className="heading-sm mb-3">{faq.question}</h3>
                        <p className="text-body">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 card bg-gradient-to-r from-primary/10 to-accent/10"
                >
                  <div className="card-body">
                    <h3 className="heading-sm mb-3">Still Have Questions?</h3>
                    <p className="text-body mb-4">
                      Don't hesitate to reach out directly. Our team is ready to help!
                    </p>
                    <motion.a
                      href="mailto:info@ityouthghana.org"
                      className="btn btn-primary text-white font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Email Us Directly
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Leadership Contact</h2>
              <p className="text-lead text-center max-w-3xl mx-auto">
                Connect directly with our leadership for partnerships and strategic collaboration
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card bg-gradient-to-r from-primary/5 to-accent/5"
              >
                <div className="card-body">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="heading-md mb-2">{content.contact.leadership.name}</h3>
                      <p className="text-lg text-accent font-semibold mb-4">{content.contact.leadership.title}</p>
                      <p className="text-muted mb-6">{content.contact.leadership.department}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">📧</span>
                          <div>
                            <p className="font-semibold text-primary">Email</p>
                            <a href={`mailto:${content.contact.leadership.email}`} className="text-accent hover:underline font-medium">
                              {content.contact.leadership.email}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">📱</span>
                          <div>
                            <p className="font-semibold text-primary">Phone</p>
                            <a href={`tel:${content.contact.leadership.phone}`} className="text-accent hover:underline font-medium">
                              {content.contact.leadership.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🗣️</span>
                          <div>
                            <p className="font-semibold text-primary">Languages</p>
                            <p className="text-muted">{content.contact.leadership.languages.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card bg-white">
                      <div className="card-body">
                        <h4 className="text-lg font-bold text-primary mb-4">Availability & Specialties</h4>
                        <p className="text-muted leading-relaxed mb-4">
                          {content.contact.leadership.availability}
                        </p>
                        <div className="space-y-3">
                          {['Erasmus+ partnerships', 'International collaborations', 'Project coordination', 'Flexible scheduling'].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <span className="text-accent mr-2">✓</span>
                              <span className="text-small">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location & Visit */}
        <section className="section bg-neutral-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-6">Visit Our Center</h2>
              <p className="text-lead text-center max-w-3xl mx-auto">
                Come see our facilities and meet the team in person
              </p>
            </motion.div>

            <div className="card">
              <div className="card-body">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="heading-md mb-6">IT for Youth Ghana Training Center</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">📍</span>
                        <div>
                          <p className="font-semibold text-primary">Address</p>
                          <p className="text-muted">Digital Innovation Hub<br />Accra, Ghana</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">⏰</span>
                        <div>
                          <p className="font-semibold text-primary">Hours</p>
                          <p className="text-muted">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">🚗</span>
                        <div>
                          <p className="font-semibold text-primary">Transportation</p>
                          <p className="text-muted">Public transport accessible<br />Parking available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-100 rounded-2xl overflow-hidden shadow-lg">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.56684390774!2d-0.2664328839721779!3d5.603716899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1658234567890!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="IT for Youth Ghana Location - Accra, Ghana"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href="https://goo.gl/maps/accra-ghana"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary flex-1 text-center text-white font-bold"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Open in Google Maps
                        </motion.a>
                        <motion.button
                          className="btn btn-secondary flex-1 font-bold"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            if (navigator.geolocation) {
                              navigator.geolocation.getCurrentPosition(() => {
                                window.open('https://www.google.com/maps/dir//Accra,+Ghana', '_blank')
                              })
                            }
                          }}
                        >
                          Get Directions
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact