<script setup lang="ts">
// Import all volunteer page sections
import VolunteerHeroSection from '@/components/pages/volunteer/sections/VolunteerHeroSection.vue'
import VolunteerBenefitsSection from '@/components/pages/volunteer/sections/VolunteerBenefitsSection.vue'
import VolunteerOpportunitiesSection from '@/components/pages/volunteer/sections/VolunteerOpportunitiesSection.vue'
import VolunteerRequirementsSection from '@/components/pages/volunteer/sections/VolunteerRequirementsSection.vue'
import VolunteerProcessSection from '@/components/pages/volunteer/sections/VolunteerProcessSection.vue'
import VolunteerApplicationSection from '@/components/pages/volunteer/sections/VolunteerApplicationSection.vue'
import VolunteerCTASection from '@/components/pages/volunteer/sections/VolunteerCTASection.vue'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <VolunteerHeroSection />
    
    <!-- Why Volunteer -->
    <VolunteerBenefitsSection />
    
    <!-- Volunteer Opportunities -->
    <VolunteerOpportunitiesSection />
    
    <!-- Requirements -->
    <VolunteerRequirementsSection />
    
    <!-- Process -->
    <VolunteerProcessSection />
    
    <!-- Application Form -->
    <VolunteerApplicationSection />
    
    <!-- Call to Action -->
    <VolunteerCTASection />
  </div>
</template>