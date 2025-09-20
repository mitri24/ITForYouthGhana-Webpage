<script setup lang="ts">
const mentors = [
  {
    name: 'Catherine Castillo',
    role: 'Emotional Intelligence Expert',
    location: 'Philippines',
    expertise: 'Leadership development and emotional intelligence training for tech professionals.',
    focus: 'Soft Skills Development'
  },
  {
    name: 'Aditi Kashyap',
    role: 'Branding & Social Media Expert',
    experience: '8+ years with Google, Audi, Accenture, Mercedes',
    expertise: 'Digital marketing, brand strategy, and social media optimization for tech startups.',
    focus: 'Digital Marketing'
  },
  {
    name: 'Paul Sloane',
    role: 'Organizational Behavior Expert',
    credentials: '20+ books, CEO experience',
    expertise: 'Organizational development, leadership strategies, and business management.',
    focus: 'Leadership Strategy'
  }
]
</script>

<template>
  <!-- International Mentors -->
  <section class="section-fullscreen bg-accent-light gpu-accelerated">
    <div class="container optimize-text">
      <div class="text-center mb-16">
        <h2 class="section-title will-change-opacity" style="color: #030b14;">Global Mentor Network</h2>
        <p class="section-subtitle will-change-opacity" style="color: #051218;">
          World-class experts providing guidance and insights to ensure our students 
          receive international-standard education and career advice.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(mentor, index) in mentors" 
          :key="mentor.name"
          class="glass-card text-center animate-scale-in will-change-transform"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
               style="background: var(--gradient-accent)">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 will-change-opacity" style="color: #030b14;">{{ mentor.name }}</h3>
          <p class="font-medium mb-3 will-change-opacity" style="color: #195aa5;">{{ mentor.role }}</p>
          <p class="text-sm mb-4 will-change-opacity" style="color: #051218;">
            {{ mentor.location || mentor.experience || mentor.credentials }}
          </p>
          <p class="text-sm leading-relaxed mb-4 will-change-opacity" style="color: #051218;">{{ mentor.expertise }}</p>
          <div class="px-4 py-2 rounded-full text-sm font-medium"
               style="background: var(--accent-100); color: var(--accent)">
            {{ mentor.focus }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>