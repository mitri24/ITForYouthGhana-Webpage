// NEU: Redesigned Header - Logo links, zentrale Navigation, prominenter Volunteer-CTA
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // NEU: Zentrale Navigation wie spezifiziert
  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partner', href: '/partners' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
  ]

  // NEU: Login/Register unter "Mehr" 
  const moreItems = [
    { name: 'Login', action: () => alert('Login functionality coming soon!') },
    { name: 'Register', action: () => alert('Register functionality coming soon!') },
  ]

  return (
    <motion.header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-primary-lg border-b border-primary/10 py-2' 
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* NEU: Sticky/Shrink Layout - Logo links, zentrale Navigation, Volunteer-CTA rechts */}
        <div className="flex items-center justify-between">
          {/* Logo links */}
          <Link 
            to="/" 
            onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
            aria-label="IT for Youth Ghana - Go to homepage"
            className="flex items-center"
            style={{ minHeight: 'var(--touch-target-min)' }}
          >
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/logo.png" 
                alt="IT for Youth Ghana logo" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-12'
                }`}
              />
              <span className={`ml-3 font-bold text-primary transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                IT for Youth Ghana
              </span>
            </motion.div>
          </Link>

          {/* Zentrale Navigation (Desktop) */}
          <nav 
            className="hidden xl:flex items-center space-x-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {mainNavItems.slice(0, -1).map((item, index) => ( // Alle außer Volunteer
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-neutral-700'
                  }`}
                  style={{ minHeight: 'var(--touch-target-min)' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Mehr Menu für Login/Register */}
            <div className="relative">
              <motion.button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  isMoreMenuOpen ? 'text-primary bg-primary/10' : 'text-neutral-700'
                }`}
                style={{ minHeight: 'var(--touch-target-min)' }}
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                aria-expanded={isMoreMenuOpen}
                aria-haspopup="true"
              >
                Mehr ↓
              </motion.button>
              
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-primary-lg py-2"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {moreItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setIsMoreMenuOpen(false)
                          item.action()
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                        style={{ minHeight: 'var(--touch-target-min)' }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Rechts: Prominenter Volunteer-CTA */}
          <div className="flex items-center space-x-3">
            {/* Desktop Volunteer CTA */}
            <Link 
              to="/volunteer" 
              onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
              className="hidden md:block"
            >
              <motion.button
                className={`btn btn-primary transition-all duration-300 ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
                }`}
                style={{ minHeight: 'var(--touch-target-min)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`font-semibold ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  Volunteer
                </span>
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="xl:hidden p-2 text-neutral-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              style={{ minHeight: 'var(--touch-target-min)', minWidth: 'var(--touch-target-min)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>
        </div>

        {/* NEU: Mobile Menu - Volunteer-CTA oben priorisiert */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="xl:hidden mt-4 bg-white border border-neutral-200 rounded-2xl p-6 shadow-primary-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="menu"
            >
              <div className="flex flex-col space-y-4">
                {/* Volunteer-CTA prominent am Anfang */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 pb-6 border-b border-neutral-200"
                >
                  <Link 
                    to="/volunteer" 
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setTimeout(() => window.scrollTo(0, 0), 100)
                    }}
                  >
                    <motion.button
                      className="btn btn-primary w-full text-lg font-bold"
                      style={{ 
                        minHeight: 'calc(var(--touch-target-min) + 8px)',
                        padding: 'var(--space-lg) var(--space-xl)'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Volunteer Now
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Navigation Items */}
                {mainNavItems.filter(item => item.name !== 'Volunteer').map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block transition-all duration-300 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        location.pathname === item.href
                          ? 'text-primary bg-primary/10'
                          : 'text-neutral-700 hover:text-primary hover:bg-primary/5'
                      }`}
                      style={{ 
                        minHeight: 'var(--touch-target-min)',
                        padding: 'var(--space-md) var(--space-lg)',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setTimeout(() => window.scrollTo(0, 0), 100)
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Auth Buttons - dezent am Ende */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="flex flex-col space-y-3">
                    {moreItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        className="text-left text-neutral-600 hover:text-primary font-medium transition-colors duration-300 rounded-lg"
                        style={{ 
                          minHeight: 'var(--touch-target-min)', 
                          padding: 'var(--space-md)' 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          item.action()
                        }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar