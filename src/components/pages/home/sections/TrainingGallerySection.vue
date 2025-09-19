<script setup lang="ts">
const trainingImages = [
  '/images/UX1.jpeg',
  '/images/UX2.jpg',
  '/images/UX3.jpeg',
  '/images/UX4.jpg'
]
</script>

<template>
  <!-- Training Excellence Gallery -->
  <section class="section-fullscreen bg-accent-light">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="section-title">Excellence in Action</h2>
        <p class="section-subtitle">
          Witness the dedication and innovation of our students during intensive training programs. 
          Real skills, real projects, real career outcomes.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(image, index) in trainingImages" 
          :key="index"
          class="relative group overflow-hidden rounded-2xl shadow-lg animate-scale-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <img 
            :src="image" 
            :alt="`Training session ${index + 1}`"
            class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div class="absolute bottom-6 left-6 text-white">
              <p class="font-bold text-lg mb-1">Professional Training</p>
              <p class="text-sm opacity-90">Industry-Standard Education</p>
              <div class="mt-3 px-3 py-1 rounded-full text-xs font-semibold" :style="{ background: 'var(--accent)', color: 'var(--neutral-900)' }">
                Live Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>