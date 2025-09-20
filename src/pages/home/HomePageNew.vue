<script setup lang="ts">
// Import all home page sections
import HeroGallerySection from '@/components/pages/home/sections/HeroGallerySection.vue'
import ImpactStatisticsSection from '@/components/pages/home/sections/ImpactStatisticsSection.vue'
import MissionVisionSection from '@/components/pages/home/sections/MissionVisionSection.vue'
import ProgramsSplitSection from '@/components/pages/home/sections/ProgramsSplitSection.vue'
import SuccessStoriesIntroSection from '@/components/pages/home/sections/SuccessStoriesIntroSection.vue'
import SuccessStoryBelindaSection from '@/components/pages/home/sections/SuccessStoryBelindaSection.vue'
import TrainingGallerySection from '@/components/pages/home/sections/TrainingGallerySection.vue'
import InitiativesSection from '@/components/pages/home/sections/InitiativesSection.vue'
import CallToActionSection from '@/components/pages/home/sections/CallToActionSection.vue'
</script>

<template>
  <div>
    <!-- Hero Gallery Section -->
    <HeroGallerySection />
    
    <!-- Impact Statistics -->
    <ImpactStatisticsSection />
    
    <!-- Mission & Vision Section -->
    <MissionVisionSection />
    
    <!-- Programs Split Section -->
    <ProgramsSplitSection />
    
    <!-- Success Stories Introduction -->
    <SuccessStoriesIntroSection />
    
    <!-- Individual Success Story: Belinda -->
    <SuccessStoryBelindaSection />
    
    <!-- Training Excellence Gallery -->
    <TrainingGallerySection />
    
    <!-- Our Key Initiatives -->
    <InitiativesSection />
    
    <!-- Call to Action -->
    <CallToActionSection />
  </div>
</template>