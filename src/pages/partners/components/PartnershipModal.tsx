import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../../../components/Modal'
import { PartnershipOption } from './partnershipData'

interface PartnershipModalProps {
  isOpen: boolean
  onClose: () => void
  partnership: PartnershipOption | null
}

const PartnershipModal: React.FC<PartnershipModalProps> = ({
  isOpen,
  onClose,
  partnership
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={partnership?.title || ''}
      size="large"
    >
      {partnership && (
        <div className="space-y-8">
          {/* Overview */}
          <div>
            <h3 className="heading-md mb-4">Partnership Overview</h3>
            <p className="text-body leading-relaxed">
              {partnership.detailContent.overview}
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-primary/5 rounded-xl p-6">
            <h3 className="heading-md mb-4">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {partnership.detailContent.whatWeOffer.map((offer, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-body">{offer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Seek */}
          <div className="bg-accent/5 rounded-xl p-6">
            <h3 className="heading-md mb-4">What We Seek</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {partnership.detailContent.whatWeSeek.map((seek, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-body">{seek}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div>
            <h3 className="heading-md mb-4">Success Stories</h3>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
              <p className="text-body leading-relaxed">
                {partnership.detailContent.successStories}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="heading-md mb-4">Partnership Process</h3>
            <p className="text-body mb-4 font-medium">
              {partnership.detailContent.nextSteps}
            </p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
              <p className="text-body text-sm">
                {partnership.detailContent.requirements}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
            <motion.button
              className="btn btn-primary flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose()
                window.location.href = '/contact'
              }}
            >
              Start Partnership Discussion
            </motion.button>
            <motion.button
              className="btn btn-secondary flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose()
                window.location.href = '/donate'
              }}
            >
              Support Our Mission
            </motion.button>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default PartnershipModal