import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import PartnerCard from './PartnerCard'
import PartnershipModal from './PartnershipModal'
import { partnershipOptions, PartnershipOption } from './partnershipData'

interface PartnershipTypesProps {
  className?: string
}

const PartnershipTypes: React.FC<PartnershipTypesProps> = ({ className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedPartnership, setSelectedPartnership] = useState<PartnershipOption | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (partnership: PartnershipOption) => {
    setSelectedPartnership(partnership)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPartnership(null)
  }

  return (
    <>
      <section ref={ref} className={`section bg-neutral-50 ${className}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Partnership Opportunities</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              Discover how your organization can partner with us to expand digital inclusion and create meaningful impact in Ghana's tech ecosystem.
            </p>
          </motion.div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipOptions.map((partnership, index) => (
              <PartnerCard
                key={partnership.title}
                partnership={partnership}
                index={index}
                isInView={isInView}
                onCardClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Details Modal */}
      <PartnershipModal
        isOpen={isModalOpen}
        onClose={closeModal}
        partnership={selectedPartnership}
      />
    </>
  )
}

export default PartnershipTypes