<script setup lang="ts">
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
</script>

<template>
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
</template>