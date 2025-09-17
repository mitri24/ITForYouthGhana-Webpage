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

  const socialLinks = [
    { name: 'LinkedIn', image: '/images/logo.png', href: '#' },
    { name: 'Twitter', image: '/images/logo.png', href: '#' },
    { name: 'Facebook', image: '/images/logo.png', href: '#' },
    { name: 'Instagram', image: '/images/logo.png', href: '#' },
    { name: 'YouTube', image: '/images/logo.png', href: '#' }
  ]

  return (
    <footer className="bg-[#1b65b2] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8fb2d6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d02355]/10 rounded-full blur-3xl"></div>
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
              <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
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
                      className="text-white/80 hover:text-[#8fb2d6] transition-colors duration-300 block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">About</h3>
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
                      className="text-white/80 hover:text-[#8fb2d6] transition-colors duration-300 block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Get Involved</h3>
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
                        className="text-white/80 hover:text-[#8fb2d6] transition-colors duration-300 block"
                      >
                        {link}
                      </Link>
                    ) : link === 'Donate' ? (
                      <Link 
                        to="/donate" 
                        onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                        className="text-white/80 hover:text-[#8fb2d6] transition-colors duration-300 block"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a 
                        href="#" 
                        className="text-white/80 hover:text-[#8fb2d6] transition-colors duration-300 block"
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
              <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get the latest updates on our programs, success stories, and opportunities to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#8fb2d6] transition-colors duration-300"
                />
                <motion.button
                  className="bg-[#d02355] hover:bg-[#d02355]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-[#8fb2d6] rounded-lg flex items-center justify-center text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src="/images/logo.png" alt={social.name} className="w-5 h-5 object-contain" />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right text-white/90">
              <p className="mb-2">© 2024 IT for Youth Ghana. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="#" className="hover:text-[#8fb2d6] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-[#8fb2d6] transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-[#8fb2d6] transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1b65b2] hover:bg-[#195aa5] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50 transition-colors duration-300"
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