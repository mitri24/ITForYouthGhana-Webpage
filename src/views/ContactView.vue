<template>
  <div class="contact-page">
    <ContactPageHeader />
    <ContactPageForm />
    <ContactPageInfo />
  </div>
</template>

<script setup lang="ts">
import ContactPageHeader from '@/components/pages/contact/ContactPageHeader.vue'
import ContactPageForm from '@/components/pages/contact/ContactPageForm.vue'
import ContactPageInfo from '@/components/pages/contact/ContactPageInfo.vue'
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}
</style>