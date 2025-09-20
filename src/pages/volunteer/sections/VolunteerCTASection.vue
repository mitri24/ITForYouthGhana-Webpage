<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Call to Action -->
  <section class="section-fullscreen bg-gradient-primary">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
          Ready to Make a Difference?
        </h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
          Join our community of volunteers and help shape the future of technology education in Ghana. 
          Your contribution, no matter how small, creates lasting impact.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <a href="#apply" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
            Apply to Volunteer
          </a>
          <RouterLink to="/contact" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Ask Questions
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>