<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  location: '',
  skills: '',
  availability: '',
  experience: '',
  motivation: '',
  volunteerType: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')

const volunteerTypes = [
  'Teaching & Training',
  'Mentorship',
  'Program Development',
  'Marketing & Communications',
  'Event Organization',
  'Technical Support',
  'Administrative Support',
  'Fundraising',
  'Other'
]

const availabilityOptions = [
  'Few hours per week',
  'One day per week',
  'Weekends only',
  'Flexible schedule',
  'Project-based',
  'Full-time volunteer'
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Create email content
    const subject = encodeURIComponent('Volunteer Application - ' + form.value.name)
    const body = encodeURIComponent(`
Volunteer Application Details:

Name: ${form.value.name}
Email: ${form.value.email}
Phone: ${form.value.phone}
Location: ${form.value.location}
Volunteer Type: ${form.value.volunteerType}
Availability: ${form.value.availability}

Skills & Expertise:
${form.value.skills}

Experience:
${form.value.experience}

Motivation:
${form.value.motivation}

Submitted from: IT For Youth Ghana Website
    `)
    
    // Open email client
    window.location.href = `mailto:info@itforyouthghana.org?subject=${subject}&body=${body}`
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Your email application has been prepared. Please send it from your email client. We will contact you within 48 hours.'
    
    // Reset form after showing message
    setTimeout(() => {
      form.value = {
        name: '',
        email: '',
        phone: '',
        location: '',
        skills: '',
        availability: '',
        experience: '',
        motivation: '',
        volunteerType: ''
      }
    }, 3000)
  } catch (error) {
    submitMessage.value = 'There was an error preparing your application. Please try again or email us directly at info@itforyouthghana.org'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <!-- Application Form -->
  <section id="apply" class="section-fullscreen bg-gradient-light">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="section-title">Volunteer Application</h2>
          <p class="section-subtitle">
            Ready to make a difference? Fill out our application form and we'll get back to you soon.
          </p>
        </div>
        
        <div class="glass-card">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Personal Information -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block font-medium mb-2">Full Name *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                  placeholder="Your full name"
                >
              </div>
              <div>
                <label for="email" class="block font-medium mb-2">Email Address *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                  placeholder="your.email@example.com"
                >
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block font-medium mb-2">Phone Number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                  placeholder="+233 XX XXX XXXX"
                >
              </div>
              <div>
                <label for="location" class="block font-medium mb-2">Location</label>
                <input
                  id="location"
                  v-model="form.location"
                  type="text"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                  placeholder="City, Country"
                >
              </div>
            </div>

            <!-- Volunteer Preferences -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="volunteerType" class="block font-medium mb-2">Volunteer Interest *</label>
                <select
                  id="volunteerType"
                  v-model="form.volunteerType"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                >
                  <option value="">Select your interest</option>
                  <option v-for="type in volunteerTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>
              <div>
                <label for="availability" class="block font-medium mb-2">Availability *</label>
                <select
                  id="availability"
                  v-model="form.availability"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                >
                  <option value="">Select your availability</option>
                  <option v-for="option in availabilityOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Skills and Experience -->
            <div>
              <label for="skills" class="block font-medium mb-2">Skills & Expertise *</label>
              <textarea
                id="skills"
                v-model="form.skills"
                required
                rows="3"
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                style="focus:ring-color: var(--primary)"
                placeholder="Describe your relevant skills and areas of expertise..."
              ></textarea>
            </div>

            <div>
              <label for="experience" class="block font-medium mb-2">Relevant Experience</label>
              <textarea
                id="experience"
                v-model="form.experience"
                rows="3"
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                style="focus:ring-color: var(--primary)"
                placeholder="Tell us about your professional or volunteer experience..."
              ></textarea>
            </div>

            <div>
              <label for="motivation" class="block font-medium mb-2">Why do you want to volunteer with us? *</label>
              <textarea
                id="motivation"
                v-model="form.motivation"
                required
                rows="4"
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                style="focus:ring-color: var(--primary)"
                placeholder="Share your motivation and what you hope to achieve through volunteering..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary py-4 text-lg font-semibold"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              <span v-if="isSubmitting">Submitting Application...</span>
              <span v-else>Submit Volunteer Application</span>
            </button>

            <!-- Success/Error Message -->
            <div v-if="submitMessage" class="text-center p-4 rounded-lg" 
                 :class="submitMessage.includes('error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>