<script setup lang="ts">
// Placeholder page for Code Impact Challenge
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-32 bg-gradient-secondary relative overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="hero-title text-white mb-6">
            Code Impact Challenge
          </h1>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            A competitive programming initiative designed to solve real-world problems 
            while building technical skills and fostering innovation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/contact" class="btn-primary text-lg px-8 py-4">
              Learn More
            </RouterLink>
            <RouterLink to="/programs" class="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Back to Programs
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20">
      <div class="container">
        <div class="glass p-12 rounded-2xl text-center max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold text-white mb-4">
            Program Details Coming Soon
          </h2>
          <p class="text-white/80 mb-8">
            We're working on bringing you comprehensive information about our Code Impact Challenge. 
            This program will focus on using technology to solve community challenges.
          </p>
          <RouterLink to="/contact" class="btn-primary">
            Get Notified When Available
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>