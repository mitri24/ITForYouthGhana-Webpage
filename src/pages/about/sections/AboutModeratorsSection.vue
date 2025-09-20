<script setup lang="ts">
const moderators = [
  {
    name: 'Solomon Mlan',
    role: 'IT For Youth Ghana Administrator',
    image: '/images/Mlan.jpeg',
    specialization: 'Program Administration'
  },
  {
    name: 'Joel A. Junior',
    role: 'IT For Youth Ghana Facilitator',
    image: '/images/junior.jpeg',
    specialization: 'Training Facilitation'
  },
  {
    name: 'Ernest Amoako',
    role: 'Web Design/UX&UI Moderator',
    image: '/images/amoako.png',
    specialization: 'Design Systems'
  },
  {
    name: 'Isaac Konadu',
    role: 'Cybersecurity Expert',
    image: '/images/konadu.jpeg',
    specialization: 'Security Protocols'
  },
  {
    name: 'Ransford Agboku',
    role: 'Data Science Moderator',
    image: '/images/agboku.jpeg',
    specialization: 'Data Analytics'
  },
  {
    name: 'Theophilus Mensah',
    role: 'Software Development Moderator',
    image: '/images/mensah.jpeg',
    specialization: 'Full Stack Development'
  },
  {
    name: 'Sampson Saah',
    role: 'Mobile App Development Expert',
    image: '/images/saah.jpeg',
    specialization: 'Mobile Technologies'
  }
]
</script>

<template>
  <!-- Technical Moderators -->
  <section class="section-fullscreen bg-gradient-light gpu-accelerated">
    <div class="container optimize-text">
      <div class="text-center mb-16">
        <h2 class="section-title will-change-opacity" style="color: #030b14;">Technical Excellence Team</h2>
        <p class="section-subtitle will-change-opacity" style="color: #051218;">
          Skilled practitioners and industry experts who facilitate hands-on learning 
          and ensure technical excellence in all our programs.
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(moderator, index) in moderators" 
          :key="moderator.name"
          class="glass-card text-center animate-scale-in will-change-transform"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <img 
            :src="moderator.image" 
            :alt="moderator.name"
            class="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-lg"
            loading="lazy" decoding="async"
          >
          <h3 class="font-semibold mb-1 will-change-opacity" style="color: #030b14;">{{ moderator.name }}</h3>
          <p class="text-sm mb-2 will-change-opacity" style="color: #195aa5;">{{ moderator.role }}</p>
          <div class="px-3 py-1 rounded-full text-xs font-medium"
               style="background: var(--primary-100); color: var(--primary)">
            {{ moderator.specialization }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>