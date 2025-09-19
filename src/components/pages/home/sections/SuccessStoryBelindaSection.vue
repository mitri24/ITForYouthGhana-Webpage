<template>
  <!-- Individual Success Story: Belinda -->
  <section class="section-fullscreen bg-gradient-light relative overflow-hidden">
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <!-- Story Content -->
        <div class="space-y-8" data-aos="fade-right">
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
            <span class="text-sm font-semibold text-primary">Software Development Program • Graduate 2023</span>
          </div>
          
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              From Shop Worker to 
              <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h2>
            <h3 class="text-2xl font-semibold text-accent mb-6">Belinda Asante</h3>
            <p class="text-lg text-muted mb-6">Local Tech Startup • Frontend Developer</p>
          </div>

          <blockquote class="relative">
            <div class="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
            <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
              Before IT For Youth, I was working at a shop for very little money. The 6-month programming course was challenging, but the instructors believed in me even when I doubted myself. Now I build websites and earn enough to support my family and save for the future.
            </p>
          </blockquote>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">JavaScript</span>
            <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
            <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Web Development</span>
            <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Career Transformation</span>
          </div>
        </div>

        <!-- Portrait -->
        <div class="relative" data-aos="fade-left">
          <div class="relative mx-auto">
            <img 
              src="/images/Belinda.jpg" 
              alt="Belinda Asante" 
              class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
            >
            <div class="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>