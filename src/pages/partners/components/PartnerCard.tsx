import React from 'react'
import { motion } from 'framer-motion'
import { PartnershipOption } from './partnershipData'

interface PartnerCardProps {
  partnership: PartnershipOption
  index: number
  isInView: boolean
  onCardClick: (partnership: PartnershipOption) => void
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  partnership, 
  index, 
  isInView, 
  onCardClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="card cursor-pointer group"
      onClick={() => onCardClick(partnership)}
    >
      <div className="card-content text-center">
        {/* Headline */}
        <div>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-800 transition-colors duration-300">
              {partnership.icon}
            </div>
          </div>
          <h3 className="card-title heading-sm group-hover:text-primary-800 transition-colors duration-300">
            {partnership.title}
          </h3>
        </div>
        
        {/* Content */}
        <div className="card-text">
          <p className="text-body mb-6 leading-relaxed">
            {partnership.description}
          </p>

          {/* Benefits Preview */}
          <div className="flex flex-wrap gap-2 mb-6">
            {partnership.benefits.slice(0, 2).map((benefit, idx) => (
              <span key={idx} className="badge badge-primary text-xs">
                {benefit}
              </span>
            ))}
            {partnership.benefits.length > 2 && (
              <span className="badge bg-neutral-100 text-neutral-800 text-xs">
                +{partnership.benefits.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="card-footer">
          <button className="btn btn-primary w-full text-white font-bold group-hover:shadow-primary-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PartnerCard