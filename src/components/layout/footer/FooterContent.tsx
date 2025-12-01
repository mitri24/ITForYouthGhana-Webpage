import { getImagePath } from '../../utils/randomImages'
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
          src=getImagePath("/images/logo/logo.png") 
          alt="IT for Youth Ghana" 
          className="h-16 w-auto object-contain"
        />
      </motion.div>
      
      <p className="text-white leading-relaxed mb-8 text-lg">
        IT for Youth Ghana empowers underserved youth with essential technology skills. Building the next generation of tech leaders.
      </p>
      
      <div className="space-y-3 text-white">
        <p className="text-lg text-white"><strong className="text-white">E-Mail:</strong> <span className="text-white">info@itforyouthghana.org</span></p>
        <p className="text-lg text-white"><strong className="text-white">Phone:</strong> <span className="text-white">+233-596-244-834</span></p>
        <p className="text-lg text-white"><strong className="text-white">Address:</strong> <span className="text-white">Hno. L529, Gecko Street, Kwabenya-Musuku, Accra, Ghana</span></p>
      </div>
    </div>
  )
}

export default FooterContent