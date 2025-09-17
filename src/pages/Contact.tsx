import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

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
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '/images/logo.png',
      title: 'Email',
      detail: content.contact.email,
      action: `mailto:${content.contact.email}`
    },
    {
      icon: '/images/logo.png',
      title: 'Phone',
      detail: content.contact.phone,
      action: `tel:${content.contact.phone}`
    },
    {
      icon: '/images/logo.png',
      title: 'Address',
      detail: content.contact.address,
      action: '#'
    },
    {
      icon: '/images/logo.png',
      title: 'Office Hours',
      detail: content.contact.hours,
      action: '#'
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '/images/logo.png', color: 'from-[#1b65b2] to-[#195aa5]', href: '#' },
    { name: 'Twitter', icon: '/images/logo.png', color: 'from-[#8fb2d6] to-[#1b65b2]', href: '#' },
    { name: 'Facebook', icon: '/images/logo.png', color: 'from-[#1b65b2] to-[#195aa5]', href: '#' },
    { name: 'Instagram', icon: '/images/logo.png', color: 'from-[#d02355] to-[#1b65b2]', href: '#' },
    { name: 'YouTube', icon: '/images/logo.png', color: 'from-[#d02355] to-[#8fb2d6]', href: '#' }
  ]

  const faqItems = content.faq

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Have questions or want to be part of our mission? We look forward to your message!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Contact Information</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Reach us through various channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#8fb2d6]/20 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 mb-4 mx-auto">
                  <img src={info.icon} alt={info.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-[#1b65b2] mb-2 group-hover:text-[#d02355] transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-neutral-600">{info.detail}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[#1b65b2] mb-8">Follow Us</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1b65b2] mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8fb2d6]/20 focus:border-[#1b65b2] focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8fb2d6]/20 focus:border-[#1b65b2] focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8fb2d6]/20 focus:border-[#1b65b2] focus:outline-none transition-colors duration-300"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8fb2d6]/20 focus:border-[#1b65b2] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Please select...</option>
                      <option value="programs">Programs</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1b65b2] mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1b65b2] to-[#195aa5] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-[#1b65b2] mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-secondary/20"
                  >
                    <h3 className="text-lg font-bold text-[#1b65b2] mb-3">{faq.question}</h3>
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-r from-[#1b65b2]/10 to-[#d02355]/10 rounded-2xl"
              >
                <h3 className="text-lg font-bold text-[#1b65b2] mb-3">More Questions?</h3>
                <p className="text-neutral-700 mb-4">
                  Don't hesitate to contact us directly. Our team is happy to help you!
                </p>
                <motion.a
                  href="mailto:info@ityouthghana.org"
                  className="inline-block bg-[#1b65b2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#195aa5] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Direct Email
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Contact */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Leadership Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Connect directly with our executive leadership for partnerships and coordination
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-[#1b65b2]/5 to-[#d02355]/5 rounded-3xl p-8 border border-[#8fb2d6]/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1b65b2] mb-2">{content.contact.leadership.name}</h3>
                  <p className="text-lg text-[#d02355] font-semibold mb-4">{content.contact.leadership.title}</p>
                  <p className="text-neutral-600 mb-6">{content.contact.leadership.department}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">@</span>
                      <div>
                        <p className="font-semibold text-[#1b65b2]">Email</p>
                        <a href={`mailto:${content.contact.leadership.email}`} className="text-[#d02355] hover:underline">
                          {content.contact.leadership.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">+</span>
                      <div>
                        <p className="font-semibold text-[#1b65b2]">Phone</p>
                        <a href={`tel:${content.contact.leadership.phone}`} className="text-[#d02355] hover:underline">
                          {content.contact.leadership.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">*</span>
                      <div>
                        <p className="font-semibold text-[#1b65b2]">Languages</p>
                        <p className="text-neutral-600">{content.contact.leadership.languages.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-[#1b65b2] mb-4">Availability & Coordination</h4>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {content.contact.leadership.availability}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">•</span>
                      <span className="text-sm text-neutral-600">Erasmus+ partnerships</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">•</span>
                      <span className="text-sm text-neutral-600">International collaborations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">•</span>
                      <span className="text-sm text-neutral-600">Project coordination</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg mr-2">•</span>
                      <span className="text-sm text-neutral-600">Flexible scheduling</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location/Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b65b2]">Visit Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Come visit and get to know our team and facilities
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#1b65b2] mb-6">IT for Youth Ghana</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img src="/images/logo.png" alt="Location" className="w-6 h-6 mr-4 object-contain" />
                    <div>
                      <p className="font-semibold text-[#1b65b2]">Main Office</p>
                      <p className="text-neutral-600">Digital Innovation Hub<br />Accra, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src="/images/logo.png" alt="Hours" className="w-6 h-6 mr-4 object-contain" />
                    <div>
                      <p className="font-semibold text-[#1b65b2]">Office Hours</p>
                      <p className="text-neutral-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src="/images/logo.png" alt="Transport" className="w-6 h-6 mr-4 object-contain" />
                    <div>
                      <p className="font-semibold text-[#1b65b2]">Transportation</p>
                      <p className="text-neutral-600">Public transportation and parking available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img src="/images/logo.png" alt="Map" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-xl font-bold text-[#1b65b2] mb-4">Map Coming Soon</h4>
                <p className="text-neutral-600 mb-6">
                  Detailed directions and interactive map will be available here.
                </p>
                <motion.button
                  className="bg-gradient-to-r from-[#1b65b2] to-[#195aa5] text-white px-6 py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Route Planner
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact