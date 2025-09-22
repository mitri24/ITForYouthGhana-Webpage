import React from 'react'
import { motion } from 'framer-motion'

interface VolunteerFormActionsProps {
  isSubmitting: boolean
  submitMessage: string
}

const VolunteerFormActions: React.FC<VolunteerFormActionsProps> = ({
  isSubmitting,
  submitMessage
}) => {
  return (
    <>
      {submitMessage && (
        <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-xl">
          <p className="text-primary font-medium">{submitMessage}</p>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full text-lg"
        style={{ minHeight: 'var(--touch-comfort)' }}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? 'Submitting Application...' : 'Submit Volunteer Application'}
      </motion.button>
    </>
  )
}

export default VolunteerFormActions