<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const heroSlides = [
  {
    image: '/images/UX1.jpeg',
    title: 'Bridging the Digital Divide',
    subtitle: 'Empowering underserved youth with high-quality IT education and career opportunities'
  },
  {
    image: '/images/UX2.jpg',
    title: 'Empowering Young Women in Tech',
    subtitle: 'Over 40% female enrollment - creating pathways for women in technology careers'
  },
  {
    image: '/images/UX3.jpeg',
    title: 'From Training to Employment',
    subtitle: 'Free and low-cost programs with hands-on learning and real-world project experience'
  },
  {
    image: '/images/UX4.jpg',
    title: '200+ Lives Transformed',
    subtitle: 'Training youth in coding, web development, data analytics, and digital entrepreneurship'
  }
]

const currentSlide = ref(0)
const autoPlayInterval = ref<NodeJS.Timeout | null>(null)
const isTransitioning = ref(false)

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = currentSlide.value === 0 ? heroSlides.length - 1 : currentSlide.value - 1
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentSlide.value) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const startAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value)
  autoPlayInterval.value = setInterval(nextSlide, 6000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <!-- Hero Gallery Section -->
  <section class="hero-gallery" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div 
      v-for="(slide, index) in heroSlides" 
      :key="index"
      class="hero-slide bg-overlay"
      :class="{ 'active': index === currentSlide, 'prev': index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1) }"
      :style="{ backgroundImage: `url('${slide.image}')` }"
    >
      <div class="hero-content">
        <h1 class="hero-title text-shadow mb-6 animate-slide-up">
          {{ slide.title }}
        </h1>
        <p class="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium animate-fade-in">
          {{ slide.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <RouterLink to="/programs" class="btn-primary text-lg px-8 py-4">
            Explore Programs
          </RouterLink>
          <RouterLink to="/volunteer" class="btn-outline text-lg px-8 py-4">
            Start Your Journey
          </RouterLink>
        </div>
      </div>
    </div>
    
    <!-- Gallery Navigation -->
    <div class="gallery-nav">
      <button @click="prevSlide" class="nav-arrow nav-prev" :disabled="isTransitioning">
        ‹
      </button>
      <div class="gallery-dots">
        <button
          v-for="(_, index) in heroSlides"
          :key="index"
          @click="goToSlide(index)"
          class="gallery-dot"
          :class="{ 'active': index === currentSlide }"
          :disabled="isTransitioning"
        />
      </div>
      <button @click="nextSlide" class="nav-arrow nav-next" :disabled="isTransitioning">
        ›
      </button>
    </div>
  </section>
</template>