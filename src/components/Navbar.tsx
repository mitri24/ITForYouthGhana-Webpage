import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Partner with Us', href: '/partners' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg' 
          : 'bg-primary/90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/logo.png" 
                alt="IT for Youth Ghana" 
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                  className={`transition-colors duration-300 font-medium ${
                    location.pathname === item.href
                      ? 'text-[#8fb2d6]'
                      : 'text-white hover:text-[#8fb2d6]'
                  }`}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Volunteer Button */}
          <Link to="/volunteer" onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}>
            <motion.button
              className="hidden md:block bg-accent hover:bg-accent/90 text-white px-6 py-3 text-sm rounded-xl font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Volunteer
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <motion.span
                className="absolute top-0 left-0 w-full h-0.5 bg-current origin-left"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 11 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2.5 left-0 w-full h-0.5 bg-current"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-full h-0.5 bg-current origin-left"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -11 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 bg-primary rounded-2xl p-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block py-2 transition-colors duration-300 font-medium ${
                        location.pathname === item.href
                          ? 'text-[#8fb2d6]'
                          : 'text-white hover:text-[#8fb2d6]'
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setTimeout(() => window.scrollTo(0, 0), 100)
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/volunteer" onClick={() => {
                  setIsMobileMenuOpen(false)
                  setTimeout(() => window.scrollTo(0, 0), 100)
                }}>
                  <motion.button
                    className="bg-accent hover:bg-accent/90 text-white w-full py-3 mt-4 rounded-xl font-semibold transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Volunteer
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar