<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'News', href: '/news' },
  { name: 'Partner With Us', href: '/partner' },
  { name: 'Contact', href: '/contact' }
]
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-neutral-200' 
        : 'bg-white/90 backdrop-blur-md'
    ]"
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3" @click="closeMenu">
          <img 
            src="/images/logo.png" 
            alt="IT For Youth Ghana" 
            class="h-12 w-auto"
          >
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold" :style="{ color: 'var(--text-primary)' }">IT For Youth Ghana</h1>
            <p class="text-sm" :style="{ color: 'var(--primary)' }">Empowering Youth Through Technology</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="nav-link"
            :class="{ 'active': route.path === item.href }"
          >
            {{ item.name }}
          </RouterLink>
          <RouterLink 
            to="/volunteer" 
            class="btn-primary ml-4"
          >
            Volunteer
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="lg:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Open main menu</span>
          <div class="w-6 h-6 relative">
            <span
              class="absolute block h-0.5 w-6 bg-dark-50 transform transition-transform duration-300"
              :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
            ></span>
            <span
              class="absolute block h-0.5 w-6 bg-dark-50 transform transition-opacity duration-300"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute block h-0.5 w-6 bg-dark-50 transform transition-transform duration-300"
              :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="opacity-0 transform scale-95"
        enter-to-class="opacity-100 transform scale-100"
        leave-from-class="opacity-100 transform scale-100"
        leave-to-class="opacity-0 transform scale-95"
      >
        <div v-if="isOpen" class="lg:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 glass mt-4 rounded-xl">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              @click="closeMenu"
              class="block px-4 py-3 text-base font-medium rounded-lg transition-all"
              :style="{ 
                color: route.path === item.href ? 'var(--primary)' : 'var(--text-primary)',
                backgroundColor: route.path === item.href ? 'var(--primary-100)' : 'transparent'
              }"
            >
              {{ item.name }}
            </RouterLink>
            <div class="pt-4 border-t" :style="{ borderColor: 'var(--neutral-200)' }">
              <RouterLink 
                to="/volunteer" 
                @click="closeMenu"
                class="block w-full btn-primary text-center"
              >
                Volunteer
              </RouterLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>