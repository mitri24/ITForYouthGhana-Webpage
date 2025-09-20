<script setup lang="ts">
import { SEOHead } from '../components/layout'
import { ScrollToTop } from '../components/ui'
import { defineAsyncComponent } from 'vue'

// Lazy load sections for better performance
const HomeHeroSection = defineAsyncComponent(() => import('../pages/home/sections/HomeHeroSection.vue'))
const HomeImpactSection = defineAsyncComponent(() => import('../pages/home/sections/HomeImpactSection.vue'))
const HomeChallengeSection = defineAsyncComponent(() => import('../pages/home/sections/HomeChallengeSection.vue'))
const HomeTrainingGallerySection = defineAsyncComponent(() => import('../pages/home/sections/HomeTrainingGallerySection.vue'))
const HomeCallToActionSection = defineAsyncComponent(() => import('../pages/home/sections/HomeCallToActionSection.vue'))
</script>

<template>
  <SEOHead />
  <main class="homepage">
    <HomeHeroSection />
    <HomeImpactSection />
    <HomeChallengeSection />
    <HomeTrainingGallerySection />
    <HomeCallToActionSection />
    <ScrollToTop />
  </main>
</template>
