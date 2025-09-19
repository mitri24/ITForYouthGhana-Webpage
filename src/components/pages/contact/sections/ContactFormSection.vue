<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  interest: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')

const interests = [
  'General Information',
  'Program Enrollment',
  'Partnership Opportunities',
  'Volunteering',
  'Mentorship',
  'Donations',
  'Media Inquiries',
  'Other'
]

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Create email content
    const subject = encodeURIComponent('Contact Form - ' + form.value.subject)
    const body = encodeURIComponent(`
Contact Form Submission:

Name: ${form.value.name}
Email: ${form.value.email}
Phone: ${form.value.phone}
Interest: ${form.value.interest}
Subject: ${form.value.subject}

Message:
${form.value.message}

Submitted from: IT For Youth Ghana Website
    `)
    
    // Open email client
    window.location.href = `mailto:info@itforyouthghana.org?subject=${subject}&body=${body}`
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Your message email has been prepared. Please send it from your email client. We will get back to you within 24 hours.'
    
    // Reset form after showing message
    setTimeout(() => {
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: ''
      }
    }, 3000)
  } catch (error) {
    submitMessage.value = 'There was an error preparing your message. Please try again or email us directly at info@itforyouthghana.org'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <!-- Contact Form & Info -->
  <section class="section-fullscreen bg-accent-light">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Form -->
        <div class="animate-slide-left">
          <div class="glass-card">
            <h2 class="text-3xl font-bold mb-6">Send us a Message</h2>
            <p class="mb-8" style="color: var(--text-secondary)">
              Fill out the form below and we'll get back to you as soon as possible. 
              We're excited to hear from you!
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name and Email Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block font-medium mb-2">Full Name *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
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
                    :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
                    placeholder="your.email@example.com"
                  >
                </div>
              </div>

              <!-- Phone and Interest Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block font-medium mb-2">Phone Number</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
                    placeholder="+233 XX XXX XXXX"
                  >
                </div>
                <div>
                  <label for="interest" class="block font-medium mb-2">Interest *</label>
                  <select
                    id="interest"
                    v-model="form.interest"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
                  >
                    <option value="">Select your interest</option>
                    <option v-for="interest in interests" :key="interest" :value="interest">
                      {{ interest }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block font-medium mb-2">Subject *</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
                  placeholder="Brief subject of your message"
                >
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  :style="{ '&:focus': { ringColor: 'var(--primary)' } }"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary py-4 text-lg font-semibold"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <span v-if="isSubmitting">Sending Message...</span>
                <span v-else>Send Message</span>
              </button>

              <!-- Success/Error Message -->
              <div v-if="submitMessage" class="text-center p-4 rounded-lg" 
                   :class="submitMessage.includes('error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="animate-slide-right">
          <div class="space-y-8">
            <!-- Office Location -->
            <div class="glass-card">
              <h3 class="text-2xl font-bold mb-6">Visit Our Office</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: var(--primary-100); color: var(--primary)">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Our Address</h4>
                    <p style="color: var(--text-secondary)">Hno. L529, Gecko Street, Kwabenya-Musuku, Accra, Ghana</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: var(--accent-100); color: var(--accent)">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Office Hours</h4>
                    <p style="color: var(--text-secondary)">Monday - Friday: 8:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Contact -->
            <div class="glass-card">
              <h3 class="text-2xl font-bold mb-6">Quick Contact</h3>
              <div class="space-y-4">
                <a 
                  href="mailto:info@itforyouthghana.org"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style="background: var(--primary-50)"
                  @mouseenter="$event.target.style.background = 'var(--primary-100)'"
                  @mouseleave="$event.target.style.background = 'var(--primary-50)'"
                >
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary); color: white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold">Email Us</h4>
                    <p style="color: var(--text-secondary)">info@itforyouthghana.org</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+233-596-244-834"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style="background: var(--accent-50)"
                  @mouseenter="$event.target.style.background = 'var(--accent-100)'"
                  @mouseleave="$event.target.style.background = 'var(--accent-50)'"
                >
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--accent); color: white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold">Call Us</h4>
                    <p style="color: var(--text-secondary)">+233-596-244-834</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Social Media -->
            <div class="glass-card">
              <h3 class="text-2xl font-bold mb-6">Follow Us</h3>
              <div class="grid gap-4">
                <a 
                  href="https://www.linkedin.com/company/it-for-youth-ghana-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style="background: var(--neutral-100)"
                  @mouseenter="$event.target.style.background = 'var(--neutral-200)'"
                  @mouseleave="$event.target.style.background = 'var(--neutral-100)'"
                >
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary); color: white">
                    <span class="font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">LinkedIn</h4>
                    <p class="text-sm" style="color: var(--text-secondary)">2.3k followers</p>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/itforyouthghana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style="background: var(--neutral-100)"
                  @mouseenter="$event.target.style.background = 'var(--neutral-200)'"
                  @mouseleave="$event.target.style.background = 'var(--neutral-100)'"
                >
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary); color: white">
                    <span class="font-bold text-lg">I</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Instagram</h4>
                    <p class="text-sm" style="color: var(--text-secondary)">1.2k followers</p>
                  </div>
                </a>
                <a 
                  href="https://web.facebook.com/itforyouthghanacollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style="background: var(--neutral-100)"
                  @mouseenter="$event.target.style.background = 'var(--neutral-200)'"
                  @mouseleave="$event.target.style.background = 'var(--neutral-100)'"
                >
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary); color: white">
                    <span class="font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Facebook</h4>
                    <p class="text-sm" style="color: var(--text-secondary)">5.4k followers</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>