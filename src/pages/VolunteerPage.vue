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

const selectedOpportunity = ref(0)

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

const opportunities = [
  {
    title: 'Program Instructor',
    description: 'Teach programming, web design, digital marketing, or other technical skills to our students.',
    commitment: '4-8 hours per week',
    skills: ['Technical expertise', 'Teaching ability', 'Patience'],
    type: 'Teaching & Training',
    image: '/images/UX1.jpeg'
  },
  {
    title: 'Career Mentor',
    description: 'Guide students in career development, job search strategies, and professional growth.',
    commitment: '2-4 hours per week',
    skills: ['Industry experience', 'Communication', 'Leadership'],
    type: 'Mentorship',
    image: '/images/emmanuel.jpg'
  },
  {
    title: 'Workshop Facilitator',
    description: 'Lead specialized workshops on emerging technologies, soft skills, and industry trends.',
    commitment: 'Monthly workshops',
    skills: ['Subject matter expertise', 'Public speaking', 'Workshop design'],
    type: 'Teaching & Training',
    image: '/images/UX2.jpg'
  },
  {
    title: 'Program Coordinator',
    description: 'Help organize and coordinate program activities, student communications, and logistics.',
    commitment: '6-10 hours per week',
    skills: ['Organization', 'Communication', 'Project management'],
    type: 'Administrative Support',
    image: '/images/peter.jpg'
  },
  {
    title: 'Marketing Volunteer',
    description: 'Create content, manage social media, and help promote our programs and success stories.',
    commitment: '3-5 hours per week',
    skills: ['Content creation', 'Social media', 'Graphic design'],
    type: 'Marketing & Communications',
    image: '/images/UX3.jpeg'
  },
  {
    title: 'Technical Support',
    description: 'Provide IT support, website maintenance, and technical assistance for our programs.',
    commitment: 'As needed basis',
    skills: ['Technical troubleshooting', 'Web development', 'IT support'],
    type: 'Technical Support',
    image: '/images/UX4.jpg'
  }
]

const volunteerBenefits = [
  {
    title: 'Professional Development',
    description: 'Enhance your skills while teaching others and gain leadership experience',
    image: '/images/Belinda.jpg'
  },
  {
    title: 'Network Building',
    description: 'Connect with like-minded professionals and expand your professional network',
    image: '/images/danielle.jpg'
  },
  {
    title: 'Community Impact',
    description: 'Make a real difference in young people\'s lives and contribute to Ghana\'s tech ecosystem',
    image: '/images/benedicta.png'
  },
  {
    title: 'Flexible Commitment',
    description: 'Choose volunteer opportunities that fit your schedule and expertise',
    image: '/images/elisabeth.jpg'
  }
]

const requirements = [
  {
    title: 'Expertise & Experience',
    description: 'Relevant professional or educational background in your area of contribution'
  },
  {
    title: 'Commitment',
    description: 'Reliable availability for your chosen volunteer role and duration'
  },
  {
    title: 'Communication Skills',
    description: 'Ability to effectively communicate with students and team members'
  },
  {
    title: 'Passion for Education',
    description: 'Genuine interest in empowering youth through technology education'
  }
]

const process = [
  {
    step: '01',
    title: 'Application',
    description: 'Fill out our volunteer application form with your details and interests'
  },
  {
    step: '02',
    title: 'Interview',
    description: 'Brief interview to discuss your background and volunteer preferences'
  },
  {
    step: '03',
    title: 'Orientation',
    description: 'Introduction to our programs, students, and volunteer guidelines'
  },
  {
    step: '04',
    title: 'Start Volunteering',
    description: 'Begin your volunteer journey and make an impact in students\' lives'
  }
]

const selectOpportunity = (index: number) => {
  selectedOpportunity.value = index
}

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
  <div>
    <!-- Hero Section -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Join Our Volunteer Community
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Share your expertise, mentor the next generation, and help transform lives through technology education. 
            Your skills and passion can make a lasting impact on Ghana's digital future.
          </p>
          
          <div class="grid md:grid-cols-3 gap-8 mb-12 animate-scale-in">
            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Teach & Mentor</h3>
              <p class="text-white/80">Share your knowledge and guide students</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Build Community</h3>
              <p class="text-white/80">Connect with passionate educators</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Create Impact</h3>
              <p class="text-white/80">Transform lives and communities</p>
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

    <!-- Why Volunteer -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Why Volunteer With Us?</h2>
          <p class="section-subtitle">
            Join a community of passionate professionals making a real difference in Ghana's technology landscape.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(benefit, index) in volunteerBenefits" 
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

    <!-- Volunteer Opportunities - Split View -->
    <section id="opportunities" class="section-fullscreen section-diagonal bg-gradient-light">
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <h2 class="section-title">Volunteer Opportunities</h2>
          <p class="section-subtitle">
            Find the perfect way to contribute your skills and make an impact in technology education. Select a role to learn more.
          </p>
        </div>
        
        <!-- Split View Layout -->
        <div class="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          <!-- Opportunities Overview -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold mb-6">Available Volunteer Roles</h3>
            <div 
              v-for="(opportunity, index) in opportunities" 
              :key="opportunity.title"
              class="glass-card cursor-pointer transition-all duration-300"
              :class="{ 'ring-2 ring-primary/30 bg-primary/5 scale-102': selectedOpportunity === index }"
              @click="selectOpportunity(index)"
            >
              <div class="flex items-start gap-4">
                <div class="relative flex-shrink-0">
                  <img 
                    :src="opportunity.image" 
                    :alt="opportunity.title"
                    class="w-20 h-20 rounded-xl object-cover"
                  >
                  <div class="absolute -top-2 -right-2">
                    <span class="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent to-accent-light text-white">
                      {{ opportunity.type.split(' ')[0] }}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {{ opportunity.title }}
                  </h4>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ opportunity.description }}</p>
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-medium text-accent">{{ opportunity.commitment }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <svg class="w-5 h-5 text-gray-400 transition-transform" :class="{ 'rotate-90': selectedOpportunity === index }" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Opportunity Details -->
          <div class="glass-card p-8 sticky top-8">
            <div class="opportunity-details">
              <!-- Header -->
              <div class="relative mb-8">
                <img 
                  :src="opportunities[selectedOpportunity].image" 
                  :alt="opportunities[selectedOpportunity].title"
                  class="w-full h-48 rounded-2xl object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                <div class="absolute bottom-6 left-6 text-white">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur">
                      {{ opportunities[selectedOpportunity].type }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold mb-2">{{ opportunities[selectedOpportunity].title }}</h3>
                  <p class="text-white/90 text-sm">{{ opportunities[selectedOpportunity].commitment }}</p>
                </div>
              </div>
              
              <!-- Content -->
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-lg mb-3">Role Description</h4>
                  <p class="text-gray-600 leading-relaxed">{{ opportunities[selectedOpportunity].description }}</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-lg mb-3">Required Skills & Qualities</h4>
                  <div class="grid grid-cols-1 gap-3">
                    <div 
                      v-for="skill in opportunities[selectedOpportunity].skills" 
                      :key="skill"
                      class="flex items-center gap-3 p-3 rounded-lg bg-primary/5"
                    >
                      <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-medium text-primary">{{ skill }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
                  <h4 class="font-semibold text-lg mb-3">Time Commitment</h4>
                  <div class="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                    {{ opportunities[selectedOpportunity].commitment }}
                  </div>
                  <p class="text-gray-600 text-sm">Flexible scheduling available to accommodate your lifestyle</p>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <div class="flex gap-3">
                    <a href="#apply" class="btn-primary flex-1 text-center py-3">
                      Apply for This Role
                    </a>
                    <button 
                      @click="form.volunteerType = opportunities[selectedOpportunity].type"
                      class="btn-outline flex-1 text-center py-3"
                    >
                      Quick Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section class="section-fullscreen">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Volunteer Requirements</h2>
          <p class="section-subtitle">
            What we look for in our volunteers to ensure the best experience for both you and our students.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(requirement, index) in requirements" 
            :key="requirement.title"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style="background: var(--accent-100); color: var(--accent)">
              <svg v-if="index === 0" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
              <svg v-else-if="index === 1" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              <svg v-else-if="index === 2" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
              </svg>
              <svg v-else class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ requirement.title }}</h3>
            <p class="leading-relaxed" style="color: var(--text-secondary)">{{ requirement.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">How to Get Started</h2>
          <p class="section-subtitle">
            Simple steps to begin your volunteer journey with IT For Youth Ghana.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in process" 
            :key="step.step"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style="background: var(--gradient-primary)">
              <span class="text-2xl font-bold text-white">{{ step.step }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
            <p class="leading-relaxed" style="color: var(--text-secondary)">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

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

    <!-- Call to Action -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
            Ready to Make a Difference?
          </h2>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Join our community of volunteers and help shape the future of technology education in Ghana. 
            Your contribution, no matter how small, creates lasting impact.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <a href="#apply" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              Apply to Volunteer
            </a>
            <RouterLink to="/contact" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Ask Questions
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>