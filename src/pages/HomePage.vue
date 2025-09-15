<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const stats = [
  { number: '200+', label: 'Youth Adults Trained', description: 'Digital skills training completed' },
  { number: '800+', label: 'Students Reached', description: 'Through workshops in 20+ schools' },
  { number: '40%', label: 'Female Enrollment', description: 'Promoting gender equality in tech' },
  { number: '6+', label: 'Years of Impact', description: 'Continuous commitment to education' }
]

const heroSlides = [
  {
    image: '/images/UX1.jpeg',
    title: 'Bridging the Digital Divide',
    subtitle: 'Empowering underserved youth with high-quality IT education and career opportunities'
  },
  {
    image: '/images/UX2.jpg',
    title: 'Empowering Young Women in Tech',
    subtitle: 'Over 40% female enrollment - creating pathways for women in technology careers'
  },
  {
    image: '/images/UX3.jpeg',
    title: 'From Training to Employment',
    subtitle: 'Free and low-cost programs with hands-on learning and real-world project experience'
  },
  {
    image: '/images/UX4.jpg',
    title: '200+ Lives Transformed',
    subtitle: 'Training youth in coding, web development, data analytics, and digital entrepreneurship'
  }
]

const currentSlide = ref(0)
const autoPlayInterval = ref<NodeJS.Timeout | null>(null)
const isTransitioning = ref(false)

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = currentSlide.value === 0 ? heroSlides.length - 1 : currentSlide.value - 1
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentSlide.value) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 800)
}

const startAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value)
  autoPlayInterval.value = setInterval(nextSlide, 6000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})

const testimonials = [
  {
    name: 'Belinda',
    role: 'Frontend Developer & Mentor',
    content: 'After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their programming course. Today, I am a front-end developer hoping to grow more in IT.',
    image: '/images/Belinda.jpg'
  },
  {
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    content: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I\'ve gained have opened doors I never thought possible.',
    image: '/images/elisabeth.jpg'
  },
  {
    name: 'Benedicta',
    role: 'Graphic Designer',
    content: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
    image: '/images/benedicta.png'
  },
  {
    name: 'Emmanuel',
    role: 'Data Analyst',
    content: 'IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight.',
    image: '/images/emmanuel.jpg'
  },
  {
    name: 'Danielle',
    role: 'Web Developer',
    content: 'I came in with no skills, but now I\'ve built a website! This program changed my life.',
    image: '/images/danielle.jpg'
  }
]

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value === 0 ? testimonials.length - 1 : currentTestimonial.value - 1
}

const challenges = [
  {
    title: 'Tech Education Gap',
    description: 'Bridging the digital divide by providing comprehensive IT education to underserved youth across Ghana.'
  },
  {
    title: 'Career Development',
    description: 'Empowering young people with practical skills and mentorship for sustainable careers in technology.'
  },
  {
    title: 'Innovation & Entrepreneurship',
    description: 'Fostering digital entrepreneurship and innovation to create economic opportunities in tech.'
  },
  {
    title: 'Gender Equality',
    description: 'Promoting equal access to technology education with 40% female participation in our programs.'
  }
]

const trainingImages = [
  '/images/UX1.jpeg',
  '/images/UX2.jpg',
  '/images/UX3.jpeg',
  '/images/UX4.jpg'
]
</script>

<template>
  <div>
    <!-- Hero Gallery Section -->
    <section class="hero-gallery" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
      <div 
        v-for="(slide, index) in heroSlides" 
        :key="index"
        class="hero-slide bg-overlay"
        :class="{ 'active': index === currentSlide, 'prev': index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1) }"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      >
        <div class="hero-content">
          <h1 class="hero-title text-shadow mb-6 animate-slide-up">
            {{ slide.title }}
          </h1>
          <p class="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium animate-fade-in">
            {{ slide.subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <RouterLink to="/programs" class="btn-primary text-lg px-8 py-4">
              Explore Programs
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-8 py-4">
              Start Your Journey
            </RouterLink>
          </div>
        </div>
      </div>
      
      <!-- Gallery Navigation -->
      <div class="gallery-nav">
        <button @click="prevSlide" class="nav-arrow nav-prev" :disabled="isTransitioning">
          ‹
        </button>
        <div class="gallery-dots">
          <button
            v-for="(_, index) in heroSlides"
            :key="index"
            @click="goToSlide(index)"
            class="gallery-dot"
            :class="{ 'active': index === currentSlide }"
            :disabled="isTransitioning"
          />
        </div>
        <button @click="nextSlide" class="nav-arrow nav-next" :disabled="isTransitioning">
          ›
        </button>
      </div>
    </section>

    <!-- Impact Statistics -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Creating Measurable Impact</h2>
          <p class="section-subtitle">
            Six years of dedicated commitment to transforming lives through technology education
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="text-center glass-card animate-count-up"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="text-5xl lg:text-6xl font-bold mb-4" style="color: var(--primary)">
              {{ stat.number }}
            </div>
            <h3 class="text-xl font-semibold mb-2" style="color: var(--text-primary)">
              {{ stat.label }}
            </h3>
            <p class="text-sm" style="color: var(--text-secondary)">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="section-fullscreen bg-gradient-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Transforming Communities Through Technology</h2>
          <p class="section-subtitle">
            We tackle the most pressing challenges in technology education and career development 
            to create sustainable, lasting impact across Ghana and beyond.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(challenge, index) in challenges" 
            :key="challenge.title"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto" :style="{ background: 'var(--primary-100)', color: 'var(--primary)' }">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ challenge.title }}</h3>
            <p class="leading-relaxed">{{ challenge.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="section-fullscreen">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Inspiring Success Stories</h2>
          <p class="section-subtitle">
            Meet our graduates who are now leading the way in Ghana's tech industry, 
            creating opportunities and inspiring the next generation.
          </p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="glass p-8 lg:p-16 rounded-3xl">
            <div class="flex flex-col lg:flex-row items-center gap-12">
              <div class="flex-shrink-0">
                <div class="relative">
                  <img 
                    :src="testimonials[currentTestimonial].image" 
                    :alt="testimonials[currentTestimonial].name"
                    class="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl"
                  >
                  <div class="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center" :style="{ background: 'var(--primary)' }">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex-1 text-center lg:text-left">
                <blockquote class="text-xl lg:text-2xl mb-8 leading-relaxed italic font-medium" :style="{ color: 'var(--text-secondary)' }">
                  "{{ testimonials[currentTestimonial].content }}"
                </blockquote>
                <div>
                  <div class="text-2xl font-bold mb-2" :style="{ color: 'var(--text-primary)' }">
                    {{ testimonials[currentTestimonial].name }}
                  </div>
                  <div class="text-lg font-semibold" :style="{ color: 'var(--primary)' }">
                    {{ testimonials[currentTestimonial].role }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex items-center justify-center gap-6 mt-12">
              <button 
                @click="prevTestimonial"
                class="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                :style="{ background: 'var(--primary-100)', color: 'var(--primary)' }"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div class="flex space-x-3">
                <button
                  v-for="(_, index) in testimonials"
                  :key="index"
                  @click="currentTestimonial = index"
                  class="w-3 h-3 rounded-full transition-all"
                  :style="{ background: currentTestimonial === index ? 'var(--primary)' : 'var(--neutral-300)' }"
                />
              </div>
              <button 
                @click="nextTestimonial"
                class="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                :style="{ background: 'var(--primary-100)', color: 'var(--primary)' }"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Excellence Gallery -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Excellence in Action</h2>
          <p class="section-subtitle">
            Witness the dedication and innovation of our students during intensive training programs. 
            Real skills, real projects, real career outcomes.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(image, index) in trainingImages" 
            :key="index"
            class="relative group overflow-hidden rounded-2xl shadow-lg animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <img 
              :src="image" 
              :alt="`Training session ${index + 1}`"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div class="absolute bottom-6 left-6 text-white">
                <p class="font-bold text-lg mb-1">Professional Training</p>
                <p class="text-sm opacity-90">Industry-Standard Education</p>
                <div class="mt-3 px-3 py-1 rounded-full text-xs font-semibold" :style="{ background: 'var(--accent)', color: 'var(--neutral-900)' }">
                  Live Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Initiatives -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Key Initiatives</h2>
          <p class="section-subtitle">
            Comprehensive programs and initiatives designed to bridge the digital divide and empower Ghana's youth with technology skills.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="glass-card animate-scale-in">
            <img 
              src="/images/UX1.jpeg" 
              alt="Tech Outreach Initiative"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">Tech Outreach Initiative</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Bringing technology education directly to underserved communities across Ghana, 
              ensuring no youth is left behind in the digital revolution.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--accent)">Community Impact</span>
            </div>
          </div>

          <div class="glass-card animate-scale-in" style="animation-delay: 0.1s">
            <img 
              src="/images/UX2.jpg" 
              alt="Girls in Tech Programs"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">Girls in Tech Programs</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Dedicated programs to empower young women with technology skills, 
              achieving over 40% female participation in our training initiatives.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--primary)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--primary)">Gender Equality</span>
            </div>
          </div>

          <div class="glass-card animate-scale-in" style="animation-delay: 0.2s">
            <img 
              src="/images/UX3.jpeg" 
              alt="Rural Tech Connect"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">Rural Tech Connect</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Connecting rural communities to digital opportunities through mobile training units 
              and partnerships with local schools and institutions.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--accent)">Rural Empowerment</span>
            </div>
          </div>

          <div class="glass-card animate-scale-in" style="animation-delay: 0.3s">
            <img 
              src="/images/UX4.jpg" 
              alt="Code Impact Challenge"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">Code Impact Challenge</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Annual coding competitions and hackathons that bring together young developers 
              to solve real-world problems facing Ghanaian communities.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--primary)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--primary)">Innovation</span>
            </div>
          </div>

          <div class="glass-card animate-scale-in" style="animation-delay: 0.4s">
            <img 
              src="/images/adjej.webp" 
              alt="Advocacy Programs"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">Tech Advocacy</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Advocating for digital inclusion policies and working with government and NGOs 
              to create supportive environments for technology education.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--accent)">Policy Impact</span>
            </div>
          </div>

          <div class="glass-card animate-scale-in" style="animation-delay: 0.5s">
            <img 
              src="/images/Mlan.jpeg" 
              alt="School Workshop Programs"
              class="w-full h-48 object-cover rounded-xl mb-6"
            >
            <h3 class="text-xl font-bold mb-3">School Workshop Programs</h3>
            <p class="mb-4" style="color: var(--text-secondary)">
              Conducted workshops in 20+ schools, reaching over 800 students with hands-on 
              technology training and career guidance sessions.
            </p>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" style="color: var(--primary)" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm font-medium" style="color: var(--primary)">Educational Outreach</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
            Ready to Transform Your Future?
          </h2>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join Ghana's most impactful technology education program. Whether you're a student, 
            professional, or organization - we have opportunities for you to grow and make a difference.
          </p>
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="text-center animate-scale-in" style="animation-delay: 0.2s">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524 9.026 9.026 0 01-.3.04z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Learn</h3>
              <p class="text-white/80">World-class curriculum</p>
            </div>
            <div class="text-center animate-scale-in" style="animation-delay: 0.4s">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Connect</h3>
              <p class="text-white/80">Join our community</p>
            </div>
            <div class="text-center animate-scale-in" style="animation-delay: 0.6s">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Thrive</h3>
              <p class="text-white/80">Build your career</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style="animation-delay: 0.8s">
            <RouterLink to="/programs" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              Explore Programs
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Join as Volunteer
            </RouterLink>
            <RouterLink to="/contact" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Get In Touch
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>