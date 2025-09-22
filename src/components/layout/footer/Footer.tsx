import React from 'react'
import { motion } from 'framer-motion'
import FooterContent from './FooterContent'
import FooterSocial from './FooterSocial'
import FooterCopyright from './FooterCopyright'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background decoration removed for clean Apple look */}

      <div className="container relative z-10">
        {/* UPDATED: Redesigned Footer Structure */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Logo, description and contact info */}
            <FooterContent />

            {/* Social Media and Newsletter */}
            <FooterSocial />
          </div>

          {/* UPDATED: Bereinigte Copyright Section */}
          <FooterCopyright />
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-40 transition-colors duration-300"
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