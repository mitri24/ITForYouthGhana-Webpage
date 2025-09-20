<template>
  <!-- Call to Action -->
  <section class="section-fullscreen bg-gradient-primary">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
          Join Our Mission
        </h2>
        <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
          Whether you're a student ready to transform your future, a professional wanting to mentor, 
          or an organization seeking to partner with us - there's a place for you in our community.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
          <RouterLink to="/programs" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
            Explore Programs
          </RouterLink>
          <RouterLink to="/volunteer" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Become a Mentor
          </RouterLink>
          <RouterLink to="/partner" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
            Partner With Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>