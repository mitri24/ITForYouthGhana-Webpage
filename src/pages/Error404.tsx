import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Error404: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - IT for Youth Ghana"
        description="The page you're looking for could not be found. Return to IT for Youth Ghana homepage."
        canonical="/404"
        noindex={true}
      />
      
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-24">
        <div className="max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              className="text-9xl font-bold text-primary mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.h1>
            
            {/* Error Message */}
            <motion.h2
              className="text-3xl font-semibold text-neutral-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p
              className="text-lg text-neutral-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/" className="btn btn-primary">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Return Home
                </motion.span>
              </Link>
              
              <Link to="/programs" className="btn btn-secondary">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Programs
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Additional Help */}
            <motion.div
              className="mt-12 p-6 bg-neutral-50 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                Need Help?
              </h3>
              <p className="text-neutral-600 mb-4">
                If you believe this is an error, please contact us.
              </p>
              <Link 
                to="/contact" 
                className="text-primary hover:text-primary-800 font-medium transition-colors duration-200"
              >
                Contact Support →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Error404