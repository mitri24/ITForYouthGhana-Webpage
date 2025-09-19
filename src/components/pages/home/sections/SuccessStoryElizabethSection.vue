<template>
  <!-- Individual Success Story: Elizabeth -->
  <section class="section-fullscreen bg-white relative overflow-hidden">
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <!-- Portrait -->
        <div class="relative lg:order-1" data-aos="fade-right">
          <div class="relative mx-auto">
            <img 
              src="/images/elisabeth.jpg" 
              alt="Elizabeth" 
              class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
            >
            <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Story Content -->
        <div class="space-y-8 lg:order-2" data-aos="fade-left">
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full">
            <span class="text-sm font-semibold text-accent">Database Management Program • Graduate 2023</span>
          </div>
          
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Mastering 
              <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Database Management
              </span>
            </h2>
            <h3 class="text-2xl font-semibold text-primary mb-6">Elizabeth</h3>
            <p class="text-lg text-muted mb-6">Database Management Specialist</p>
          </div>

          <blockquote class="relative">
            <div class="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
              IT For Youth Ghana has completely transformed my outlook on technology. The skills I've gained have opened doors I never thought possible.
            </p>
          </blockquote>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">SQL</span>
            <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Database Design</span>
            <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Data Analysis</span>
            <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Tech Leadership</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>