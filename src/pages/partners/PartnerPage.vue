<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  organizationName: '',
  contactPerson: '',
  email: '',
  phone: '',
  partnershipType: '',
  message: ''
})

const partnershipTypes = [
  'Corporate Sponsorship',
  'Educational Institution Partnership',
  'Technology Partner',
  'Mentorship Program',
  'Internship/Job Placement',
  'Equipment Donation',
  'Venue Partnership',
  'International Collaboration',
  'Other'
]

const currentPartners = [
  {
    name: 'priME Academy AG',
    type: 'International Education Partner',
    location: 'Germany',
    description: 'Strategic partnership for our Advanced UI/UX Design Program, providing international standards and expert trainers.',
    logo: '/images/logo.png',
    collaboration: 'Training & Certification'
  }
]

const partnershipBenefits = [
  {
    title: 'Brand Visibility',
    description: 'Gain exposure through our programs, events, and social media channels reaching thousands of young professionals.',
    image: '/images/danielle.jpg'
  },
  {
    title: 'Talent Pipeline',
    description: 'Access to a pool of trained, motivated graduates ready to contribute to your organization.',
    image: '/images/emmanuel.jpg'
  },
  {
    title: 'Social Impact',
    description: 'Make a meaningful difference in youth empowerment and technology education in Ghana.',
    image: '/images/benedicta.png'
  },
  {
    title: 'Market Expansion',
    description: 'Connect with the growing Ghanaian tech ecosystem and emerging market opportunities.',
    image: '/images/peter.jpg'
  },
  {
    title: 'CSR Goals',
    description: 'Align with your corporate social responsibility objectives through education and youth development.',
    image: '/images/Belinda.jpg'
  },
  {
    title: 'Global Network',
    description: 'Join our international network of partners and mentors from around the world.',
    image: '/images/elisabeth.jpg'
  }
]

const partnershipOpportunities = [
  {
    title: 'Corporate Sponsorship',
    description: 'Support our programs financially and receive recognition as an education champion.',
    commitment: 'Flexible investment levels',
    benefits: ['Brand visibility', 'Graduate recruitment', 'CSR impact'],
    image: '/images/UX1.jpeg'
  },
  {
    title: 'Technology Partnership',
    description: 'Provide software licenses, cloud credits, or technology resources for our training programs.',
    commitment: 'Technology resources',
    benefits: ['Product exposure', 'User feedback', 'Talent pipeline'],
    image: '/images/UX2.jpg'
  },
  {
    title: 'Mentorship Program',
    description: 'Connect your professionals with our students for career guidance and industry insights.',
    commitment: '2-4 hours per month',
    benefits: ['Employee engagement', 'Talent identification', 'Industry influence'],
    image: '/images/adjej.webp'
  },
  {
    title: 'Internship & Job Placement',
    description: 'Offer internships and career opportunities to our graduates.',
    commitment: 'Internship/job positions',
    benefits: ['Qualified candidates', 'Reduced recruitment costs', 'Fresh perspectives'],
    image: '/images/UX3.jpeg'
  },
  {
    title: 'Educational Collaboration',
    description: 'Co-develop curricula, share expertise, and create joint certification programs.',
    commitment: 'Subject matter experts',
    benefits: ['Curriculum influence', 'Thought leadership', 'Academic partnerships'],
    image: '/images/UX4.jpg'
  },
  {
    title: 'International Partnership',
    description: 'Global organizations can bring international standards and exchange opportunities.',
    commitment: 'Knowledge sharing',
    benefits: ['Global impact', 'Cross-cultural exchange', 'International recognition'],
    image: '/images/Mlan.jpeg'
  }
]

const stats = [
  { number: '200+', label: 'Youth Trained' },
  { number: '40%', label: 'Female Enrollment' },
  { number: '800+', label: 'Students Reached' },
  { number: '20+', label: 'Schools Partnered' }
]

const isSubmitting = ref(false)
const submitMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Create email content
    const subject = encodeURIComponent('Partnership Proposal - ' + form.value.organizationName)
    const body = encodeURIComponent(`
Partnership Proposal Details:

Organization Name: ${form.value.organizationName}
Contact Person: ${form.value.contactPerson}
Email: ${form.value.email}
Phone: ${form.value.phone}
Partnership Type: ${form.value.partnershipType}

Partnership Proposal:
${form.value.message}

Submitted from: IT For Youth Ghana Website
    `)
    
    // Open email client
    window.location.href = `mailto:info@itforyouthghana.org?subject=${subject}&body=${body}`
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    submitMessage.value = 'Your partnership proposal email has been prepared. Please send it from your email client. We will review and respond within 48 hours.'
    
    // Reset form after showing message
    setTimeout(() => {
      form.value = {
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: ''
      }
    }, 3000)
  } catch (error) {
    submitMessage.value = 'There was an error preparing your proposal. Please try again or email us directly at info@itforyouthghana.org'
  } finally {
    isSubmitting.value = false
  }
}

const validateForm = () => {
  return form.value.organizationName && form.value.contactPerson && form.value.email && form.value.partnershipType && form.value.message
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Partner With Us
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Join us in empowering the next generation of African tech leaders. 
            Together, we can create lasting impact through education and innovation.
          </p>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="text-center"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">{{ stat.number }}</div>
              <div class="text-white/80 font-medium">{{ stat.label }}</div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style="animation-delay: 0.4s">
            <a href="#opportunities" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              View Opportunities
            </a>
            <a href="#apply" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Benefits -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Why Partner With Us?</h2>
          <p class="section-subtitle">
            Discover the mutual benefits of partnering with IT For Youth Ghana and 
            the positive impact we can create together.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(benefit, index) in partnershipBenefits" 
            :key="benefit.title" 
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <img 
              :src="benefit.image" 
              :alt="benefit.title"
              class="w-24 h-24 rounded-full object-cover mx-auto mb-6 shadow-lg"
            >
            <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
            <p class="leading-relaxed" style="color: var(--text-secondary)">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Opportunities -->
    <section id="opportunities" class="section-fullscreen bg-gradient-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Partnership Opportunities</h2>
          <p class="section-subtitle">
            Multiple ways to collaborate and make a meaningful impact on youth education in Ghana.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(opportunity, index) in partnershipOpportunities" 
            :key="opportunity.title" 
            class="glass-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="relative mb-6 overflow-hidden rounded-xl">
              <img 
                :src="opportunity.image" 
                :alt="opportunity.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              >
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/90" style="color: var(--primary)">
                  Partnership
                </span>
              </div>
            </div>
            
            <h3 class="text-xl font-bold mb-3">{{ opportunity.title }}</h3>
            <p class="mb-4" style="color: var(--text-secondary)">{{ opportunity.description }}</p>
            
            <div class="space-y-3 mb-6">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 flex-shrink-0" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">{{ opportunity.commitment }}</span>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2 text-sm">Key Benefits:</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="benefit in opportunity.benefits" 
                    :key="benefit"
                    class="px-3 py-1 rounded-lg text-xs font-medium"
                    style="background: var(--accent-100); color: var(--accent)"
                  >
                    {{ benefit }}
                  </span>
                </div>
              </div>
            </div>
            
            <a href="#apply" class="btn-primary w-full text-center py-3">
              Start This Partnership
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Partners -->
    <section class="section-fullscreen">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Current Partners</h2>
          <p class="section-subtitle">
            Meet the organizations that are already making a difference with us.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div 
            v-for="(partner, index) in currentPartners" 
            :key="partner.name" 
            class="glass-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="grid lg:grid-cols-3 gap-8 items-center">
              <div class="text-center lg:text-left">
                <img :src="partner.logo" :alt="partner.name" class="w-32 h-32 object-contain mx-auto lg:mx-0 mb-4">
                <div class="text-center lg:text-left">
                  <h3 class="text-2xl font-bold mb-2">{{ partner.name }}</h3>
                  <p class="font-medium mb-1" style="color: var(--primary)">{{ partner.type }}</p>
                  <p class="mb-3" style="color: var(--accent)">{{ partner.location }}</p>
                </div>
              </div>
              <div class="lg:col-span-2">
                <p class="leading-relaxed mb-6" style="color: var(--text-secondary)">{{ partner.description }}</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="p-4 rounded-xl" style="background: var(--primary-50)">
                    <div class="flex items-center gap-3 mb-2">
                      <svg class="w-5 h-5" style="color: var(--primary)" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="font-semibold" style="color: var(--primary)">Collaboration Type</span>
                    </div>
                    <p class="text-sm" style="color: var(--text-secondary)">{{ partner.collaboration }}</p>
                  </div>
                  <div class="p-4 rounded-xl" style="background: var(--accent-50)">
                    <div class="flex items-center gap-3 mb-2">
                      <svg class="w-5 h-5" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-semibold" style="color: var(--accent)">Impact Level</span>
                    </div>
                    <p class="text-sm" style="color: var(--text-secondary)">International Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Application Form -->
    <section id="apply" class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="section-title">Start a Partnership</h2>
            <p class="section-subtitle">
              Ready to make a difference? Submit your partnership proposal and let's discuss 
              how we can work together.
            </p>
          </div>
          
          <div class="glass-card">
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Organization & Contact -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="organizationName" class="block font-medium mb-2">
                    Organization Name *
                  </label>
                  <input
                    id="organizationName"
                    v-model="form.organizationName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style="focus:ring-color: var(--primary)"
                    placeholder="Your organization name"
                  >
                </div>
                <div>
                  <label for="contactPerson" class="block font-medium mb-2">
                    Contact Person *
                  </label>
                  <input
                    id="contactPerson"
                    v-model="form.contactPerson"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style="focus:ring-color: var(--primary)"
                    placeholder="Your full name"
                  >
                </div>
              </div>

              <!-- Email & Phone -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style="focus:ring-color: var(--primary)"
                    placeholder="contact@organization.com"
                  >
                </div>
                <div>
                  <label for="phone" class="block font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style="focus:ring-color: var(--primary)"
                    placeholder="+233 XX XXX XXXX"
                  >
                </div>
              </div>

              <!-- Partnership Type -->
              <div>
                <label for="partnershipType" class="block font-medium mb-2">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  v-model="form.partnershipType"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  style="focus:ring-color: var(--primary)"
                >
                  <option value="">Select partnership type</option>
                  <option v-for="type in partnershipTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block font-medium mb-2">
                  Partnership Proposal *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  style="focus:ring-color: var(--primary)"
                  placeholder="Tell us about your organization, partnership goals, and how you'd like to collaborate with us. Include any specific resources, expertise, or support you can offer."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!validateForm() || isSubmitting"
                class="w-full btn-primary py-4 text-lg font-semibold"
                :class="{ 'opacity-50 cursor-not-allowed': !validateForm() || isSubmitting }"
              >
                <span v-if="isSubmitting">Submitting Partnership Proposal...</span>
                <span v-else>Submit Partnership Proposal</span>
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

    <!-- Call to Action -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
            Let's Build Something Great Together
          </h2>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Have questions about partnership opportunities? Want to discuss a custom collaboration? 
            We're here to help you make a meaningful impact through education and innovation.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <RouterLink to="/contact" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              Contact Partnership Team
            </RouterLink>
            <a 
              href="mailto:info@itforyouthghana.org" 
              class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important"
            >
              Email Us Directly
            </a>
          </div>
          <div class="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-white font-medium">Email</span>
              </div>
              <p class="text-white/80">info@itforyouthghana.org</p>
            </div>
            <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-white font-medium">Phone</span>
              </div>
              <p class="text-white/80">+233 59 624 4834</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>