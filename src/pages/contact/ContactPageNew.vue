<script setup lang="ts">
import ContactHeroSection from '@/components/pages/contact/sections/ContactHeroSection.vue'
import ContactFormSection from '@/components/pages/contact/sections/ContactFormSection.vue'
import ContactTeamSection from '@/components/pages/contact/sections/ContactTeamSection.vue'
import ContactFAQSection from '@/components/pages/contact/sections/ContactFAQSection.vue'
import ContactCTASection from '@/components/pages/contact/sections/ContactCTASection.vue'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <ContactHeroSection />
    
    <!-- Contact Form & Info -->
    <ContactFormSection />
    
    <!-- Meet Our Team -->
    <ContactTeamSection />
    
    <!-- FAQ Section -->
    <ContactFAQSection />
    
    <!-- Call to Action -->
    <ContactCTASection />
  </div>
</template>