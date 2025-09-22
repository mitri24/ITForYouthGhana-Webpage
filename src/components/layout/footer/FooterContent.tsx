import React from 'react'
import { motion } from 'framer-motion'

const FooterContent: React.FC = () => {
  return (
    <div>
      <motion.div 
        className="flex items-center mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src="/images/logo/logo.png" 
          alt="IT for Youth Ghana" 
          className="h-16 w-auto object-contain"
        />
      </motion.div>
      
      <p className="text-white leading-relaxed mb-8 text-lg">
        IT for Youth Ghana empowers underserved youth with essential technology skills. Building the next generation of tech leaders.
      </p>
      
      <div className="space-y-3 text-white">
        <p className="text-lg"><strong>E-Mail:</strong> info@itforyouthghana.org</p>
        <p className="text-lg"><strong>Phone:</strong> +233-596-244-834</p>
        <p className="text-lg"><strong>Address:</strong> Hno. L529, Gecko Street, Kwabenya-Musuku, Accra, Ghana</p>
      </div>
    </div>
  )
}

export default FooterContent