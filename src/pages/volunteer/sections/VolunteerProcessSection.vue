<script setup lang="ts">
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
</script>

<template>
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
</template>