import React from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  role: string
  experience: string
  availability: string
  motivation: string
}

interface VolunteerFormFieldsProps {
  formData: FormData
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const VolunteerFormFields: React.FC<VolunteerFormFieldsProps> = ({
  formData,
  onInputChange
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
            placeholder="+233 XXX XXX XXX"
          />
        </div>
        
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-neutral-700 mb-2">
            Preferred Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={onInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
          >
            <option value="">Select a role</option>
            <option value="Tech Mentor">Tech Mentor</option>
            <option value="Workshop Trainer">Workshop Trainer</option>
            <option value="Career Mentor">Career Mentor</option>
            <option value="Event Coordination">Event Coordination</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="experience" className="block text-sm font-semibold text-neutral-700 mb-2">
          Relevant Experience
        </label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="Brief description of your relevant experience"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="availability" className="block text-sm font-semibold text-neutral-700 mb-2">
          Availability
        </label>
        <input
          type="text"
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={onInputChange}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="e.g., Weekends, Evenings, 4-6 hours/week"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="motivation" className="block text-sm font-semibold text-neutral-700 mb-2">
          Why do you want to volunteer with us? *
        </label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={onInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Tell us about your motivation and what you hope to contribute..."
        />
      </div>
    </>
  )
}

export default VolunteerFormFields