<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-logo">
        <img src="@/assets/pictures/logo.png" alt="IT For Youth Ghana" class="logo-img">
        <span class="logo-text">IT For Youth Ghana</span>
      </RouterLink>
      
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/programs" class="nav-link" @click="closeMenu">Programs</RouterLink>
        <RouterLink to="/about" class="nav-link" @click="closeMenu">About</RouterLink>
        <RouterLink to="/partner" class="nav-link" @click="closeMenu">Partner With Us</RouterLink>
        <RouterLink to="/news" class="nav-link" @click="closeMenu">News</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="closeMenu">Contact</RouterLink>
        <DonationButton />
      </div>
      
      <button class="nav-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import DonationButton from '@/components/DonationButton.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 1px 20px rgba(10, 22, 40, 0.1);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  letter-spacing: -0.01em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.005em;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.btn-donate {
  background: linear-gradient(135deg, #0a1628 0%, #0c2461 100%);
  box-shadow: 0 4px 14px rgba(10, 22, 40, 0.2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.01em;
}

.btn-donate:hover {
  background: linear-gradient(135deg, #0c2461 0%, #1e40af 100%);
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 6px 20px rgba(10, 22, 40, 0.3);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 25px;
  height: 3px;
  background: #f9f8f9;
  transition: all 0.3s ease;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background: #f9f8f9;
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  top: 8px;
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 1.5rem;
  }
  
  .nav-menu {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-container {
    padding: 0 1rem;
    height: 60px;
  }
  
  .navbar {
    height: 60px;
  }
  
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 60px;
    flex-direction: column;
    background-color: rgba(26, 35, 56, 0.98);
    backdrop-filter: blur(20px);
    width: 100vw;
    height: calc(100vh - 60px);
    text-align: center;
    transition: left 0.3s ease;
    box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    padding: 2rem 0;
    gap: 1.5rem;
    z-index: 999;
    overflow-y: auto;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-link {
    padding: 1rem 2rem;
    display: block;
    font-size: 1.2rem;
    width: 100%;
  }
  
  .btn-donate {
    margin: 2rem auto 0;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    height: 60px;
    padding: 0 0.8rem;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .logo-img {
    height: 35px;
  }
  
  .nav-menu {
    top: 60px;
    padding: 1.5rem 0;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.8rem;
  }
}

</style>