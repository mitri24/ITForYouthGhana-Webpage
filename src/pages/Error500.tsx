import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Error500: React.FC = () => {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
      <SEO 
        title="Server Error - IT for Youth Ghana"
        description="We're experiencing technical difficulties. Please try again later."
        canonical="/500"
        noindex={true}
      />
      
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-24">
        <div className="max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 500 Number */}
            <motion.h1
              className="text-9xl font-bold text-accent mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              500
            </motion.h1>
            
            {/* Error Message */}
            <motion.h2
              className="text-3xl font-semibold text-neutral-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Internal Server Error
            </motion.h2>
            
            <motion.p
              className="text-lg text-neutral-800 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We're experiencing some technical difficulties on our end. 
              Our team has been notified and is working to fix this issue.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={refreshPage}
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try Again
              </motion.button>
              
              <Link to="/" className="btn btn-secondary">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Return Home
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Status Information */}
            <motion.div
              className="mt-12 p-6 bg-accent/5 rounded-xl border border-accent/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-lg font-semibold text-accent mb-3">
                What happened?
              </h3>
              <p className="text-neutral-800 mb-4">
                This error typically occurs due to temporary server issues. 
                Please try refreshing the page or come back in a few minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <Link 
                  to="/contact" 
                  className="text-accent hover:text-accent-800 font-medium transition-colors duration-200"
                >
                  Report Issue →
                </Link>
                <a 
                  href="https://status.itforyouthghana.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-800 font-medium transition-colors duration-200"
                >
                  Check Status →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Error500