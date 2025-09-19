<script setup lang="ts">
const challenges = [
  {
    title: 'Tech Education Gap',
    description: 'Bridging the digital divide by providing comprehensive IT education to underserved youth across Ghana.'
  },
  {
    title: 'Career Development',
    description: 'Empowering young people with practical skills and mentorship for sustainable careers in technology.'
  },
  {
    title: 'Innovation & Entrepreneurship',
    description: 'Fostering digital entrepreneurship and innovation to create economic opportunities in tech.'
  },
  {
    title: 'Gender Equality',
    description: 'Promoting equal access to technology education with 40% female participation in our programs.'
  }
]
</script>

<template>
  <!-- Mission & Vision Section -->
  <section class="section-fullscreen section-diagonal bg-gradient-light">
    <div class="container relative z-10">
      <div class="text-center mb-16">
        <h2 class="section-title">Transforming Communities Through Technology</h2>
        <p class="section-subtitle">
          We tackle the most pressing challenges in technology education and career development 
          to create sustainable, lasting impact across Ghana and beyond.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(challenge, index) in challenges" 
          :key="challenge.title"
          class="glass-card text-center animate-scale-in interactive-element depth-shadow-2"
          :style="{ animationDelay: `${index * 0.15}s`, transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)` }"
          @mouseover="$event.target.style.transform = 'rotate(0deg) translateY(-12px) scale(1.02)'"
          @mouseleave="$event.target.style.transform = `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)`"
        >
          <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto bg-gradient-to-br from-primary-100 to-accent/20" :style="{ color: 'var(--primary)' }">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4">{{ challenge.title }}</h3>
          <p class="leading-relaxed">{{ challenge.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>