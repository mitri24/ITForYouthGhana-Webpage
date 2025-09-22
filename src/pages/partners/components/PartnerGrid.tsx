import React from 'react'
import PartnershipTypes from './PartnershipTypes'

interface PartnerGridProps {
  className?: string
}

const PartnerGrid: React.FC<PartnerGridProps> = ({ className = '' }) => {
  return <PartnershipTypes className={className} />
}

export default PartnerGrid