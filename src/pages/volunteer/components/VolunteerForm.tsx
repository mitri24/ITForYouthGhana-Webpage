import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import VolunteerFormFields from './VolunteerFormFields'
import VolunteerFormActions from './VolunteerFormActions'
import VolunteerCallToAction from './VolunteerCallToAction'

interface FormData {
  name: string
  email: string
  phone: string
  role: string
  experience: string
  availability: string
  motivation: string
}

interface VolunteerFormProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  onSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
  submitMessage: string
}

const VolunteerForm: React.FC<VolunteerFormProps> = ({ 
  formData, 
  setFormData, 
  onSubmit, 
  isSubmitting, 
  submitMessage 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Application Form */}
      <section id="volunteer-form" className="section bg-neutral-50" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}
          >
            <h2 className="heading-lg mb-6">Start Your Volunteer Journey</h2>
            <div className="text-container">
              <p className="text-lead text-center">
                Ready to make a difference? Complete the application below and join our team of changemakers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={onSubmit} className="card" style={{ padding: 'var(--space-2xl)' }}>
              <VolunteerFormFields 
                formData={formData}
                onInputChange={handleInputChange}
              />
              
              <VolunteerFormActions 
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
              />
            </form>
          </motion.div>
        </div>
      </section>

      <VolunteerCallToAction isInView={isInView} />
    </>
  )
}

export default VolunteerForm