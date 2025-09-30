import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_CONFIG } from '../../constants/navigation'
import { Button } from '../ui/Button'

const MainNavigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActivePath = (path?: string, subItems?: any[]) => {
    if (path) return location.pathname === path
    if (subItems) {
      return subItems.some(item => location.pathname === item.path)
    }
    return false
  }

  const handleMouseEnter = (itemId: string) => {
    setActiveDropdown(itemId)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo/logo.png" 
              alt="IT for Youth Ghana" 
              className="h-16 w-auto filter brightness-110 contrast-110"
            />
          </Link>

          {/* Desktop Navigation - Clean & Professional */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_CONFIG.filter(item => item.id !== 'donate').map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 font-medium text-sm transition-all duration-200 ${
                      isActivePath(item.path, item.subItems)
                        ? 'text-primary'
                        : 'text-neutral-600 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {isActivePath(item.path, item.subItems) && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    className={`relative px-4 py-2 font-medium text-sm transition-all duration-200 flex items-center gap-1 ${
                      isActivePath(item.path, item.subItems)
                        ? 'text-primary'
                        : 'text-neutral-600 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {item.subItems && (
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActivePath(item.path, item.subItems) && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                )}

                {/* Clean Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-neutral-100 py-1 z-50"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path!}
                          className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                            location.pathname === subItem.path
                              ? 'text-primary bg-primary/5 font-medium'
                              : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Clean Donate Button */}
            <div className="ml-6 pl-6 border-l border-neutral-200">
              <a
                href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donate
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Clean */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'
              }`} />
              <div className={`w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'mb-1'
              }`} />
              <div className={`w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Clean Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 bg-white"
            >
              <div className="py-4">
                {NAVIGATION_CONFIG.filter(item => item.id !== 'donate').map((item) => (
                  <div key={item.id} className="px-4">
                    {item.path ? (
                      <Link
                        to={item.path}
                        className={`block py-3 font-medium transition-colors duration-200 ${
                          isActivePath(item.path, item.subItems)
                            ? 'text-primary'
                            : 'text-neutral-700 hover:text-primary'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div className="py-3 font-medium text-neutral-700">
                          {item.label}
                        </div>
                        {item.subItems && (
                          <div className="pl-4 space-y-1 mb-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path!}
                                className={`block py-2 text-sm transition-colors duration-200 ${
                                  location.pathname === subItem.path
                                    ? 'text-primary font-medium'
                                    : 'text-neutral-600 hover:text-primary'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
                
                {/* Mobile Donate Button */}
                <div className="px-4 pt-4 mt-4 border-t border-neutral-200">
                  <a
                    href="https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:bg-green-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Donate Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default MainNavigation