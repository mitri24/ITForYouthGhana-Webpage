<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1 pt-20">
      <RouterView />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
