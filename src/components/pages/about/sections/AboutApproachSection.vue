<script setup lang="ts">
const approach = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'We assess individual skills and career goals to create personalized learning paths that align with industry demands.',
    icon: 'search'
  },
  {
    step: '02',
    title: 'Intensive Training',
    description: 'Hands-on, practical training with real-world projects using industry-standard tools and technologies.',
    icon: 'code'
  },
  {
    step: '03',
    title: 'Mentorship & Support',
    description: 'Ongoing mentorship from industry professionals and career guidance to ensure sustainable growth.',
    icon: 'users'
  },
  {
    step: '04',
    title: 'Career Placement',
    description: 'Job placement assistance, entrepreneurship support, and continued alumni network engagement.',
    icon: 'briefcase'
  }
]
</script>

<template>
  <!-- Our Approach -->
  <section class="section-fullscreen bg-gradient-light">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="section-title">Our Proven Approach</h2>
        <p class="section-subtitle">
          A comprehensive methodology that ensures every student receives personalized attention 
          and achieves measurable career outcomes.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(step, index) in approach" 
          :key="step.step"
          class="glass-card text-center animate-scale-in"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" 
               style="background: var(--gradient-primary)">
            <span class="text-2xl font-bold text-white">{{ step.step }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
          <p class="leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>