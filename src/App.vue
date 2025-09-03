<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.7;
  color: #f9f8f9;
  background: linear-gradient(180deg, #0f1419 0%, #1a2338 50%, #243447 100%);
  overflow-x: hidden;
  padding-top: 70px;
  font-feature-settings: 'kern' 1, 'liga' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
}

main {
  flex: 1;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section separators and spacing improvements */
section:not(:first-child) {
  position: relative;
}

section:not(:first-child)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(140, 181, 218, 0.2) 50%, transparent 100%);
  z-index: 1;
}

/* Improved section spacing */
section {
  margin: 6rem 0;
  position: relative;
}

section:first-of-type {
  margin-top: 0;
}

section:last-of-type {
  margin-bottom: 0;
}

/* Glass morphism effects */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Improved animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideInUp 0.8s ease-out forwards;
}

/* Typography improvements */
.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #f9f8f9;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #035eac, #8cb5da);
  border-radius: 2px;
}

@media (max-width: 768px) {
  body {
    padding-top: 60px;
  }
  
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 14px;
  }
  
  .container {
    padding: 0 0.75rem;
  }
}
</style>
