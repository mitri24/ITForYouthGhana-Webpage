<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Call to Action -->
  <section class="section-fullscreen bg-gradient-primary">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
          Ready to be part of Ghana's digital transformation?
        </h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Join Ghana's most impactful technology education program. Whether you're a student, 
          professional, or organization - we have opportunities for you to grow and make a difference.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="text-center animate-scale-in" style="animation-delay: 0.2s">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524 9.026 9.026 0 01-.3.04z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Learn</h3>
            <p class="text-white/80">World-class curriculum</p>
          </div>
          <div class="text-center animate-scale-in" style="animation-delay: 0.4s">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Connect</h3>
            <p class="text-white/80">Join our community</p>
          </div>
          <div class="text-center animate-scale-in" style="animation-delay: 0.6s">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Thrive</h3>
            <p class="text-white/80">Build your career</p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style="animation-delay: 0.8s">
          <RouterLink to="/programs" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
            Explore Programs
          </RouterLink>
          <RouterLink to="/volunteer" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Join as Volunteer
          </RouterLink>
          <RouterLink to="/contact" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Get In Touch
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>