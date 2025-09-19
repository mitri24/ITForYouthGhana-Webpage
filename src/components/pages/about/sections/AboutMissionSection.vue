<script setup lang="ts">
const stats = [
  { number: '250+', label: 'Graduates Trained', description: 'Lives transformed through comprehensive education' },
  { number: '23+', label: 'University Partners', description: 'Leading institutions across Ghana' },
  { number: '40%', label: 'Female Participation', description: 'Breaking barriers in technology education' },
  { number: '6', label: 'Years of Impact', description: 'Continuous innovation and growth' }
]
</script>

<template>
  <!-- Mission Statement -->
  <section class="section-fullscreen bg-accent-light">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="animate-slide-left">
          <h2 class="section-title text-left">Our Mission</h2>
          <p class="text-xl leading-relaxed mb-8" style="color: var(--text-secondary)">
            To empower underserved youth across Ghana with high-quality technology education, 
            fostering innovation, digital entrepreneurship, and creating equitable opportunities 
            that transform lives and communities.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary-100); color: var(--primary)">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Education Excellence</h3>
                <p style="color: var(--text-secondary)">World-class curriculum and training methods</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--accent-100); color: var(--accent)">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Community Impact</h3>
                <p style="color: var(--text-secondary)">Creating lasting change in local communities</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary-100); color: var(--primary)">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Career Success</h3>
                <p style="color: var(--text-secondary)">Direct pathways to meaningful employment</p>
              </div>
            </div>
          </div>
        </div>
        <div class="animate-slide-right">
          <div class="grid grid-cols-2 gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="glass-card text-center animate-count-up"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="text-4xl font-bold mb-3" style="color: var(--primary)">
                {{ stat.number }}
              </div>
              <h3 class="font-semibold mb-2">{{ stat.label }}</h3>
              <p class="text-sm" style="color: var(--text-secondary)">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>