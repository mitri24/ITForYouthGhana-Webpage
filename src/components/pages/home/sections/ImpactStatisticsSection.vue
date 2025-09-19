<script setup lang="ts">
const stats = [
  { number: '200+', label: 'Youth Adults Trained', description: 'Digital skills training completed' },
  { number: '800+', label: 'Students Reached', description: 'Through workshops in 20+ schools' },
  { number: '40%', label: 'Female Enrollment', description: 'Promoting gender equality in tech' },
  { number: '6+', label: 'Years of Impact', description: 'Continuous commitment to education' }
]
</script>

<template>
  <!-- Impact Statistics -->
  <section class="section-fullscreen section-asymmetric bg-accent-light">
    <div class="container relative z-10">
      <div class="text-center mb-16">
        <h2 class="section-title">Creating Measurable Impact</h2>
        <p class="section-subtitle">
          Six years of dedicated commitment to transforming lives through technology education
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="text-center glass-card glass-card-skewed animate-count-up subtle-accent micro-bounce"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
            {{ stat.number }}
          </div>
          <h3 class="text-xl font-semibold mb-2" style="color: var(--text-primary)">
            {{ stat.label }}
          </h3>
          <p class="text-sm" style="color: var(--text-secondary)">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>