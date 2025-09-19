<script setup lang="ts">
import AboutHeroSection from '@/components/pages/about/sections/AboutHeroSection.vue'
import AboutMissionSection from '@/components/pages/about/sections/AboutMissionSection.vue'
import AboutApproachSection from '@/components/pages/about/sections/AboutApproachSection.vue'
import AboutLeadershipSection from '@/components/pages/about/sections/AboutLeadershipSection.vue'
import AboutMentorsSection from '@/components/pages/about/sections/AboutMentorsSection.vue'
import AboutModeratorsSection from '@/components/pages/about/sections/AboutModeratorsSection.vue'
import AboutCTASection from '@/components/pages/about/sections/AboutCTASection.vue'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <AboutHeroSection />
    
    <!-- Mission Statement -->
    <AboutMissionSection />
    
    <!-- Our Approach -->
    <AboutApproachSection />
    
    <!-- Leadership Team -->
    <AboutLeadershipSection />
    
    <!-- International Mentors -->
    <AboutMentorsSection />
    
    <!-- Technical Moderators -->
    <AboutModeratorsSection />
    
    <!-- Call to Action -->
    <AboutCTASection />
  </div>
</template>