import React from 'react'
import { Link } from 'react-router-dom'

const FooterCopyright: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
      <div className="text-white mb-4 md:mb-0">
        <p>© 2024 IT for Youth Ghana. All rights reserved.</p>
      </div>

      <div className="text-white">
        <Link 
          to="/contact" 
          onClick={() => setTimeout(() => window.scrollTo(0, 0), 100)}
          className="hover:text-white transition-colors duration-300 font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default FooterCopyright