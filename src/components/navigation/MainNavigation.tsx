import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_CONFIG } from '../../constants/navigation'

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_CONFIG.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-200 ${
                      isActivePath(item.path, item.subItems)
                        ? 'text-primary'
                        : 'text-blue-600 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`font-medium transition-colors duration-200 flex items-center space-x-1 ${
                      isActivePath(item.path, item.subItems)
                        ? 'text-primary'
                        : 'text-blue-600 hover:text-primary'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-100 py-2 z-50"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path!}
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            location.pathname === subItem.path
                              ? 'text-primary bg-primary/5'
                              : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-blue-600 transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-blue-600 transition-all ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <div className={`w-6 h-0.5 bg-blue-600 transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200"
            >
              <div className="py-4 space-y-4">
                {NAVIGATION_CONFIG.map((item) => (
                  <div key={item.id}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="block px-4 py-2 font-medium text-blue-600 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div className="px-4 py-2 font-medium text-blue-600">
                          {item.label}
                        </div>
                        {item.subItems && (
                          <div className="pl-8 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path!}
                                className="block px-4 py-2 text-sm text-blue-600 hover:text-primary"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default MainNavigation