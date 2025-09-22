import React from 'react'
import { motion } from 'framer-motion'

interface ProgramFilterProps {
  activeFilter: 'current' | 'past' | 'future'
  setActiveFilter: (filter: 'current' | 'past' | 'future') => void
  currentCount: number
  pastCount: number
  futureCount: number
}

const ProgramFilter: React.FC<ProgramFilterProps> = ({
  activeFilter,
  setActiveFilter,
  currentCount,
  pastCount,
  futureCount
}) => {
  const filters = [
    { key: 'current' as const, label: 'Current', icon: 'CUR', count: currentCount },
    { key: 'past' as const, label: 'Past', icon: 'PAS', count: pastCount },
    { key: 'future' as const, label: 'Future', icon: 'FUT', count: futureCount }
  ]

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {filters.map((filter) => (
        <motion.button
          key={filter.key}
          onClick={() => setActiveFilter(filter.key)}
          className={`filter-button ${
            activeFilter === filter.key ? 'active' : ''
          }`}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          title={`${filter.label} Programs (${filter.count})`}
        >
          <div className="text-center">
            <div className="font-bold text-lg mb-1">{filter.icon}</div>
            <div className="text-xs">{filter.count}</div>
          </div>
        </motion.button>
      ))}
    </div>
  )
}

export default ProgramFilter