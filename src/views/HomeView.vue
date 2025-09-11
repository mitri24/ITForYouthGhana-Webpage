<script setup lang="ts">
import SEOHead from '../components/shared/SEOHead.vue'
import HomeHeroSection from '../components/pages/home/HomeHeroSection.vue'
import HomeChallengeSection from '../components/pages/home/HomeChallengeSection.vue'
import HomeImpactSection from '../components/pages/home/HomeImpactSection.vue'
import HomeTestimonialSection from '../components/pages/home/HomeTestimonialSection.vue'
import HomeTrainingGallerySection from '../components/pages/home/HomeTrainingGallerySection.vue'
import HomeCallToActionSection from '../components/pages/home/HomeCallToActionSection.vue'
import ScrollToTop from '../components/shared/ScrollToTop.vue'
</script>

<template>
  <SEOHead />
  <main>
    <HomeHeroSection />
    <HomeImpactSection />
    <HomeChallengeSection />
    <HomeTestimonialSection />
    <HomeTrainingGallerySection />
    <HomeCallToActionSection />
    <ScrollToTop />
  </main>
</template>
