import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { content } from '../data/content'

const Footer: React.FC = () => {
  const footerLinks = {
    programs: [
      'Tech Outreach Initiative',
      'Girls in Tech Programs',
      'Rural Tech Connect',
      'Code Impact Challenge',
      'School Workshops'
    ],
    about: [
      'Our Mission',
      'Our Vision',
      'Impact Stories',
      'Team',
      'Partners'
    ],
    getInvolved: [
      'Volunteer',
      'Donate',
      'Corporate Partnership',
      'Mentorship',
      'Join a Program'
    ]
  }

  // CHANGED: Nur Original Social Media Logos - LinkedIn und Facebook wie spezifiziert
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/it-for-youth-ghana',
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/ityouthghana',
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/logo.png" 
                  alt="IT for Youth Ghana" 
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
              
              <p className="text-white/90 leading-relaxed mb-6">
                {content.seo.description.split('.')[0]}. Building the next generation of tech leaders.
              </p>
              
              <div className="space-y-2 text-white/90">
                <p>E-Mail: {content.contact.email}</p>
                <p>Phone: {content.contact.phone}</p>
                <p>Address: {content.contact.address}</p>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="heading-sm text-white mb-6">Programs</h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-secondary transition-colors duration-300 block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="heading-sm text-white mb-6">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-secondary transition-colors duration-300 block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="heading-sm text-white mb-6">Get Involved</h3>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link === 'Volunteer' ? (
                      <Link 
                        to="/volunteer" 
                        onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                        className="text-white/80 hover:text-secondary transition-colors duration-300 block"
                      >
                        {link}
                      </Link>
                    ) : link === 'Donate' ? (
                      <Link 
                        to="/donate" 
                        onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                        className="text-white/80 hover:text-secondary transition-colors duration-300 block"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a 
                        href="#" 
                        className="text-white/80 hover:text-secondary transition-colors duration-300 block"
                      >
                        {link}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <div className="text-center">
              <h3 className="heading-md text-white mb-4">Stay Connected</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get the latest updates on our programs, success stories, and opportunities to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors duration-300"
                />
                <motion.button
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* CHANGED: Social links mit Original Platform-Logos */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  title={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right text-white/90">
              <p className="mb-2">© 2024 IT for Youth Ghana. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="#" className="hover:text-secondary transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        ↑
      </motion.button>
    </footer>
  )
}

export default Footer