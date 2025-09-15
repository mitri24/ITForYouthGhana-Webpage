<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' }
]

const programs = [
  { name: 'Tech Empowerment', href: '/programs/tech-empowerment' },
  { name: 'Girls in Tech', href: '/programs/girls-in-tech' },
  { name: 'Code Impact Challenge', href: '/programs/code-impact-challenge' },
  { name: 'Rural Tech Connect', href: '/programs/rural-tech-connect' }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation',
    followers: '2.3k followers'
  },
  {
    name: 'Instagram', 
    href: 'https://www.instagram.com/itforyouthghana/',
    followers: '1.2k followers'
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/itforyouthghanacollege',
    followers: '5.4k followers'
  }
]
</script>

<template>
  <footer class="border-t border-neutral-200 mt-20 bg-gradient-primary">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Organization Info -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="IT For Youth Ghana" 
              class="h-12 w-auto"
            >
            <div>
              <h2 class="text-lg font-bold text-white">IT For Youth Ghana</h2>
              <p class="text-sm text-white/80">Foundation</p>
            </div>
          </div>
          <p class="text-white/90 leading-relaxed">
            Bridging the digital divide by empowering underserved youth with high-quality IT education, 
            creating pathways to employment and entrepreneurship in Ghana's growing tech ecosystem.
          </p>
          <div class="space-y-2 text-sm text-white/80">
            <p>📍 Hno. L529, Gecko Street, Kwabenya-Musuku, Accra, Ghana</p>
            <p>📧 info@itforyouthghana.org</p>
            <p>📞 +233-596-244-834</p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <RouterLink 
                :to="link.href" 
                class="text-white/80 hover:text-white transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/volunteer" 
                class="text-white/80 hover:text-white transition-colors"
              >
                Volunteer
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/partner" 
                class="text-white/80 hover:text-white transition-colors"
              >
                Partner With Us
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Programs -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Our Programs</h3>
          <ul class="space-y-3">
            <li v-for="program in programs" :key="program.name">
              <RouterLink 
                :to="program.href" 
                class="text-white/80 hover:text-white transition-colors"
              >
                {{ program.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Social Media & Contact -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-6">Connect With Us</h3>
          <div class="space-y-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
            >
              <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span class="text-xs font-semibold text-white">{{ social.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-medium">{{ social.name }}</div>
                <div class="text-xs text-white/60">{{ social.followers }}</div>
              </div>
            </a>
          </div>

          <!-- Newsletter Signup -->
          <div class="mt-8">
            <h4 class="font-semibold text-white mb-3">Stay Updated</h4>
            <form class="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                class="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-white/50"
              >
              <button type="submit" class="w-full btn-primary text-sm py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-sm text-white/80">
              © {{ currentYear }} IT For Youth Ghana Foundation. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="text-white/80 hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>