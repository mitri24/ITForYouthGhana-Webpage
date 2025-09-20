<script setup lang="ts">
const leadership = [
  {
    name: 'Mr. Peter Duodu',
    role: 'Program Lead',
    credentials: 'MPhil Accounting, BSc Administration, Chartered Accountant',
    image: '/images/peter.jpg',
    description: 'Leading strategic program development and organizational growth with extensive financial and administrative expertise.',
    expertise: ['Strategic Planning', 'Financial Management', 'Organizational Development']
  },
  {
    name: 'Mr Frank Avevor',
    role: 'Project Development Coordinator',
    credentials: 'Master\'s Accounting & Finance, Co-founder of Lernexe AI platform',
    image: '/images/avevor.jpg',
    description: 'Driving innovation in educational technology and overseeing project implementation and development.',
    expertise: ['AI Development', 'Project Management', 'EdTech Innovation']
  },
  {
    name: 'Mrs Esther Afua Adjei',
    role: 'Media and Corporate Coordinator',
    credentials: 'Regional Health Promotion Manager',
    image: '/images/adjej.webp',
    description: 'Managing communications, partnerships, and corporate relations to expand our community impact.',
    expertise: ['Strategic Communication', 'Partnership Development', 'Community Outreach']
  },
  {
    name: 'Mr. Emmanuel Awartey',
    role: 'Finance and Administrative Coordinator',
    credentials: '8+ years banking experience',
    image: '/images/awartey.jpeg',
    description: 'Ensuring financial sustainability and operational excellence with extensive banking sector experience.',
    expertise: ['Financial Planning', 'Operations Management', 'Risk Assessment']
  }
]
</script>

<template>
  <!-- Leadership Team -->
  <section class="section-fullscreen gpu-accelerated">
    <div class="container optimize-text">
      <div class="text-center mb-16">
        <h2 class="section-title will-change-opacity" style="color: #030b14;">Leadership Team</h2>
        <p class="section-subtitle will-change-opacity" style="color: #051218;">
          Experienced professionals dedicated to transforming technology education 
          and creating opportunities for Ghana's youth.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(leader, index) in leadership" 
          :key="leader.name"
          class="glass-card text-center animate-scale-in will-change-transform"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative mb-6">
            <img 
              :src="leader.image" 
              :alt="leader.name"
              class="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
              loading="lazy" decoding="async"
            >
            <div class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" 
                 style="background: var(--accent)">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-2 will-change-opacity" style="color: #030b14;">{{ leader.name }}</h3>
          <p class="font-medium mb-3 will-change-opacity" style="color: #195aa5;">{{ leader.role }}</p>
          <p class="text-sm mb-4 will-change-opacity" style="color: #051218;">{{ leader.credentials }}</p>
          <p class="text-sm leading-relaxed mb-4 will-change-opacity" style="color: #051218;">{{ leader.description }}</p>
          <div class="flex flex-wrap gap-2 justify-center">
            <span 
              v-for="skill in leader.expertise" 
              :key="skill"
              class="px-3 py-1 rounded-full text-xs font-medium"
              style="background: var(--primary-100); color: var(--primary)"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>