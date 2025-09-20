<template>
  <!-- Call to Action -->
  <section class="section-fullscreen bg-gradient-primary">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
          Ready to Get Started?
        </h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
          Don't wait to transform your future. Contact us today and take the first step 
          towards a rewarding career in technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <RouterLink to="/programs" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
            View Programs
          </RouterLink>
          <RouterLink to="/about" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Learn About Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>