<script setup lang="ts">
import { ref } from 'vue'

const selectedOpportunity = ref(0)

const selectOpportunity = (index: number) => {
  selectedOpportunity.value = index
}

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
</script>

<template>
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
                  <button class="btn-outline flex-1 text-center py-3">
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
</template>