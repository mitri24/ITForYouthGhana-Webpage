import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  role: string
  experience: string
  availability: string
  motivation: string
}

export const useVolunteerForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = `Volunteer Application - ${formData.role}`
      const body = `
Hello IT for Youth Ghana Team,

I would like to apply as a volunteer for your organization.

Personal Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Application Details:
- Preferred Role: ${formData.role}
- Experience: ${formData.experience}
- Availability: ${formData.availability}

Motivation:
${formData.motivation}

Best regards,
${formData.name}
      `
      
      const mailtoLink = `mailto:info@itforyouthghana.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
      setSubmitMessage('Your email client should open with the volunteer application. Please send the email to complete your application.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        availability: '',
        motivation: ''
      })
    } catch (error) {
      setSubmitMessage('There was an error. Please try again or contact us directly at info@itforyouthghana.org')
    }
    
    setIsSubmitting(false)
  }

  return {
    formData,
    setFormData,
    isSubmitting,
    submitMessage,
    handleSubmit
  }
}