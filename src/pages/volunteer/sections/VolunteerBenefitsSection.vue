<script setup lang="ts">
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
</script>

<template>
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
</template>