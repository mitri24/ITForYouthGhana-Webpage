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

const selectedProgramIndex = ref(0)

const selectProgram = (index: number) => {
  selectedProgramIndex.value = index
}

const programsData = [
  {
    id: 1,
    title: 'Software Development',
    subtitle: '6-Month Comprehensive Training',
    summary: 'Master modern web development with hands-on projects and real-world applications.',
    description: 'Learn to build professional websites and applications from scratch. This comprehensive program covers everything from basic programming concepts to advanced web development frameworks. You\'ll work on real projects and graduate with a portfolio that showcases your skills to potential employers.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    maxStudents: '20',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Database Design', 'API Development', 'Version Control', 'Testing'],
    careerOutcomes: ['Junior Software Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Full-Stack Developer']
  },
  {
    id: 2,
    title: 'Data Analytics',
    subtitle: '6-Month Practical Training',
    summary: 'Transform raw data into actionable insights using modern analytics tools and techniques.',
    description: 'Learn to analyze data and communicate findings effectively. This program teaches you to work with large datasets, create compelling visualizations, and present data-driven recommendations to stakeholders. You\'ll master both technical skills and business acumen.',
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    maxStudents: '15',
    skills: ['Excel Advanced', 'Python for Data', 'SQL', 'Data Visualization', 'Statistics', 'Power BI', 'Tableau', 'Report Writing'],
    careerOutcomes: ['Data Analyst', 'Business Analyst', 'Research Analyst', 'Marketing Analyst', 'Operations Analyst']
  },
  {
    id: 3,
    title: 'UI/UX Design',
    subtitle: '6-Month Creative Program',
    summary: 'Design beautiful, user-centered digital experiences that solve real problems.',
    description: 'Master the art and science of user experience design. Learn to understand user needs, create wireframes and prototypes, and design interfaces that are both beautiful and functional. This program combines creativity with analytical thinking.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    maxStudents: '12',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
    careerOutcomes: ['UI/UX Designer', 'Product Designer', 'Web Designer', 'Design Consultant', 'User Researcher']
  },
  {
    id: 4,
    title: 'Digital Marketing',
    subtitle: '6-Month Strategic Program',
    summary: 'Master digital marketing strategies that drive real business growth and engagement.',
    description: 'Learn to create and execute digital marketing campaigns that deliver measurable results. This program covers everything from social media strategy to search engine optimization, helping you understand how to reach and engage modern consumers.',
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    maxStudents: '18',
    skills: ['Social Media Strategy', 'Content Marketing', 'SEO', 'Google Ads', 'Email Marketing', 'Analytics', 'Brand Strategy', 'Campaign Management'],
    careerOutcomes: ['Digital Marketing Specialist', 'Social Media Manager', 'Content Marketing Manager', 'SEO Specialist', 'Marketing Coordinator']
  }
]
</script>

<template>
  <div class="homepage">
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
    <section class="section-fullscreen section-asymmetric bg-accent-light">
      <div class="container relative z-10">
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
            class="text-center glass-card glass-card-skewed animate-count-up subtle-accent micro-bounce"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
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
    <section class="section-fullscreen section-diagonal bg-gradient-light">
      <div class="container relative z-10">
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
            class="glass-card text-center animate-scale-in interactive-element depth-shadow-2"
            :style="{ animationDelay: `${index * 0.15}s`, transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)` }"
            @mouseover="$event.target.style.transform = 'rotate(0deg) translateY(-12px) scale(1.02)'"
            @mouseleave="$event.target.style.transform = `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)`"
          >
            <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto bg-gradient-to-br from-primary-100 to-accent/20" :style="{ color: 'var(--primary)' }">
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

    <!-- Success Stories Introduction -->
    <section class="section-fullscreen bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <h2 class="section-title">Inspiring Success Stories</h2>
          <p class="section-subtitle">
            Meet our graduates who are now leading the way in Ghana's tech industry, 
            creating opportunities and inspiring the next generation.
          </p>
        </div>
      </div>
    </section>

    <!-- Individual Success Story: Belinda -->
    <section class="section-fullscreen bg-gradient-light relative overflow-hidden">
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Story Content -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
              <span class="text-sm font-semibold text-primary">Software Development Program • Graduate 2023</span>
            </div>
            
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                From Shop Worker to 
                <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Frontend Developer
                </span>
              </h2>
              <h3 class="text-2xl font-semibold text-accent mb-6">Belinda Asante</h3>
              <p class="text-lg text-muted mb-6">Local Tech Startup • Frontend Developer</p>
            </div>

            <blockquote class="relative">
              <div class="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
              <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
                Before IT For Youth, I was working at a shop for very little money. The 6-month programming course was challenging, but the instructors believed in me even when I doubted myself. Now I build websites and earn enough to support my family and save for the future.
              </p>
            </blockquote>

            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">JavaScript</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Web Development</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Career Transformation</span>
            </div>
          </div>

          <!-- Portrait -->
          <div class="relative" data-aos="fade-left">
            <div class="relative mx-auto">
              <img 
                src="/images/Belinda.jpg" 
                alt="Belinda Asante" 
                class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              >
              <div class="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Success Story: Elizabeth -->
    <section class="section-fullscreen bg-white relative overflow-hidden">
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Portrait -->
          <div class="relative lg:order-1" data-aos="fade-right">
            <div class="relative mx-auto">
              <img 
                src="/images/elisabeth.jpg" 
                alt="Elizabeth" 
                class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              >
              <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Story Content -->
          <div class="space-y-8 lg:order-2" data-aos="fade-left">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full">
              <span class="text-sm font-semibold text-accent">Database Management Program • Graduate 2023</span>
            </div>
            
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Mastering 
                <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Database Management
                </span>
              </h2>
              <h3 class="text-2xl font-semibold text-primary mb-6">Elizabeth</h3>
              <p class="text-lg text-muted mb-6">Database Management Specialist</p>
            </div>

            <blockquote class="relative">
              <div class="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
              <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
                IT For Youth Ghana has completely transformed my outlook on technology. The skills I've gained have opened doors I never thought possible.
              </p>
            </blockquote>

            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">SQL</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Database Design</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Data Analysis</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Tech Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Success Story: Benedicta -->
    <section class="section-fullscreen bg-accent-light relative overflow-hidden">
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Story Content -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
              <span class="text-sm font-semibold text-primary">Creative Media Program • Graduate 2022</span>
            </div>
            
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Creative 
                <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Design Excellence
                </span>
              </h2>
              <h3 class="text-2xl font-semibold text-accent mb-6">Benedicta</h3>
              <p class="text-lg text-muted mb-6">Graphic Designer</p>
            </div>

            <blockquote class="relative">
              <div class="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
              <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
                The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.
              </p>
            </blockquote>

            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Graphic Design</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Adobe Creative Suite</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Visual Branding</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Creative Leadership</span>
            </div>
          </div>

          <!-- Portrait -->
          <div class="relative" data-aos="fade-left">
            <div class="relative mx-auto">
              <img 
                src="/images/benedicta.png" 
                alt="Benedicta" 
                class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              >
              <div class="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Success Story: Emmanuel -->
    <section class="section-fullscreen bg-white relative overflow-hidden">
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Portrait -->
          <div class="relative lg:order-1" data-aos="fade-right">
            <div class="relative mx-auto">
              <img 
                src="/images/emmanuel.jpg" 
                alt="Emmanuel" 
                class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              >
              <div class="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Story Content -->
          <div class="space-y-8 lg:order-2" data-aos="fade-left">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full">
              <span class="text-sm font-semibold text-accent">Data Analytics Program • Graduate 2022</span>
            </div>
            
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Transforming Data into 
                <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Insights
                </span>
              </h2>
              <h3 class="text-2xl font-semibold text-primary mb-6">Emmanuel</h3>
              <p class="text-lg text-muted mb-6">Data Analyst</p>
            </div>

            <blockquote class="relative">
              <div class="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
              <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
                IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight.
              </p>
            </blockquote>

            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Python</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Data Visualization</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Statistical Analysis</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Business Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Success Story: Danielle -->
    <section class="section-fullscreen bg-gradient-light relative overflow-hidden">
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Story Content -->
          <div class="space-y-8" data-aos="fade-right">
            <div class="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
              <span class="text-sm font-semibold text-primary">Web Development Program • Graduate 2023</span>
            </div>
            
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                From Zero to 
                <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h2>
              <h3 class="text-2xl font-semibold text-accent mb-6">Danielle</h3>
              <p class="text-lg text-muted mb-6">Web Developer</p>
            </div>

            <blockquote class="relative">
              <div class="absolute -top-4 -left-4 text-6xl text-accent/20 font-serif">"</div>
              <p class="text-xl lg:text-2xl leading-relaxed italic pl-8 pr-4">
                I came in with no skills, but now I've built a website! This program changed my life.
              </p>
            </blockquote>

            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">HTML/CSS</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">JavaScript</span>
              <span class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Responsive Design</span>
              <span class="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Life Transformation</span>
            </div>
          </div>

          <!-- Portrait -->
          <div class="relative" data-aos="fade-left">
            <div class="relative mx-auto">
              <img 
                src="/images/danielle.jpg" 
                alt="Danielle" 
                class="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              >
              <div class="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
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
            Ready to be part of Ghana's digital transformation?
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
    <!-- Choose Your Program - New Implementation -->
    <section class="programs-split-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <h2 class="main-title">Transform Your Future With Technology</h2>
          <p class="main-subtitle">
            Comprehensive programs designed to launch your tech career. Choose your path and start building tomorrow's digital solutions today.
          </p>
        </div>

        <!-- Split Layout Container -->
        <div class="split-container">
          
          <!-- Left Panel - Programs Overview -->
          <div class="overview-panel">
            <div class="panel-header">
              <h3 class="panel-title">Available Programs</h3>
              <span class="program-count">{{ programsData.length }} Programs</span>
            </div>
            
            <div class="programs-list">
              <div 
                v-for="(program, index) in programsData" 
                :key="program.id"
                class="program-item"
                :class="{ 'active': selectedProgramIndex === index }"
                @click="selectProgram(index)"
              >
                <div class="program-header">
                  <h4 class="program-title">{{ program.title }}</h4>
                  <span class="program-duration">{{ program.duration }}</span>
                </div>
                <p class="program-summary">{{ program.summary }}</p>
                <div class="program-meta">
                  <span class="meta-level">{{ program.level }}</span>
                  <span class="meta-students">{{ program.maxStudents }} students max</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Panel - Program Details -->
          <div class="details-panel">
            <div class="details-content" v-if="selectedProgramIndex !== null">
              
              <!-- Program Header -->
              <div class="details-header">
                <h3 class="details-title">{{ programsData[selectedProgramIndex].title }}</h3>
                <p class="details-subtitle">{{ programsData[selectedProgramIndex].subtitle }}</p>
                
                <div class="details-badges">
                  <span class="badge duration">{{ programsData[selectedProgramIndex].duration }}</span>
                  <span class="badge level">{{ programsData[selectedProgramIndex].level }}</span>
                  <span class="badge students">{{ programsData[selectedProgramIndex].maxStudents }} students</span>
                </div>
              </div>

              <!-- Program Description -->
              <div class="details-section">
                <h4 class="section-title">Program Overview</h4>
                <p class="section-text">{{ programsData[selectedProgramIndex].description }}</p>
              </div>

              <!-- Skills -->
              <div class="details-section">
                <h4 class="section-title">What You'll Learn</h4>
                <div class="skills-grid">
                  <span 
                    v-for="skill in programsData[selectedProgramIndex].skills" 
                    :key="skill"
                    class="skill-tag"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Career Outcomes -->
              <div class="details-section">
                <h4 class="section-title">Career Opportunities</h4>
                <ul class="outcomes-list">
                  <li 
                    v-for="outcome in programsData[selectedProgramIndex].careerOutcomes" 
                    :key="outcome"
                    class="outcome-item"
                  >
                    {{ outcome }}
                  </li>
                </ul>
              </div>

              <!-- Action Buttons -->
              <div class="actions-section">
                <RouterLink to="/programs" class="action-btn primary">Learn More</RouterLink>
                <RouterLink to="/contact" class="action-btn secondary">Apply Now</RouterLink>
              </div>

            </div>
            
            <!-- Placeholder when no program selected -->
            <div v-else class="no-selection">
              <h3>Select a Program</h3>
              <p>Choose a program from the left to view detailed information</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Programs Split Section Styling */
.programs-split-section {
  min-height: 100vh;
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  position: relative;
}

.programs-split-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: inherit;
  transform: skewY(-1deg);
  transform-origin: top left;
}

.programs-split-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #0a1628 0%, #1e293b 50%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.main-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
}

/* Split Container */
.split-container {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(10, 22, 40, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  min-height: 600px;
}

/* Overview Panel (Left) */
.overview-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  border-right: 1px solid rgba(10, 22, 40, 0.06);
  padding: 2rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(10, 22, 40, 0.08);
}

.panel-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a1628;
  margin: 0;
}

.program-count {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  background: rgba(10, 22, 40, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.program-item {
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(10, 22, 40, 0.06);
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.program-item:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(10, 22, 40, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(10, 22, 40, 0.08);
}

.program-item.active {
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.08) 0%, rgba(184, 134, 11, 0.04) 100%);
  border-color: rgba(10, 22, 40, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(10, 22, 40, 0.12);
}

.program-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #0a1628, #b8860b);
  border-radius: 0 2px 2px 0;
}

.program-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.program-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a1628;
  margin: 0;
  line-height: 1.3;
}

.program-duration {
  font-size: 0.875rem;
  color: #b8860b;
  font-weight: 600;
  background: rgba(184, 134, 11, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
}

.program-summary {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.program-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
}

.meta-level,
.meta-students {
  color: #64748b;
  font-weight: 500;
}

/* Details Panel (Right) */
.details-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
  padding: 2rem;
  overflow-y: auto;
}

.details-content {
  height: 100%;
}

.details-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(10, 22, 40, 0.08);
}

.details-title {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0a1628, #b8860b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.details-subtitle {
  font-size: 1.125rem;
  color: #b8860b;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.details-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge.duration {
  background: rgba(10, 22, 40, 0.1);
  color: #0a1628;
}

.badge.level {
  background: rgba(184, 134, 11, 0.1);
  color: #b8860b;
}

.badge.students {
  background: rgba(100, 116, 139, 0.1);
  color: #64748b;
}

.details-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0a1628;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #0a1628, #b8860b);
  border-radius: 2px;
}

.section-text {
  color: #475569;
  line-height: 1.7;
  font-size: 1.0625rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(184, 134, 11, 0.2);
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(184, 134, 11, 0.1);
  border-color: rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
}

.outcomes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.outcome-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid #b8860b;
  color: #475569;
  font-weight: 500;
  transition: all 0.3s ease;
}

.outcome-item:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateX(4px);
}

.actions-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(10, 22, 40, 0.08);
  display: flex;
  gap: 1rem;
}

.action-btn {
  flex: 1;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.action-btn.primary {
  background: linear-gradient(135deg, #0a1628, #b8860b);
  color: white;
  box-shadow: 0 8px 25px rgba(10, 22, 40, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(10, 22, 40, 0.3);
}

.action-btn.secondary {
  background: transparent;
  color: #0a1628;
  border: 2px solid #0a1628;
}

.action-btn.secondary:hover {
  background: #0a1628;
  color: white;
  transform: translateY(-2px);
}

.no-selection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #64748b;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .split-container {
    grid-template-columns: 1fr;
  }
  
  .overview-panel {
    border-right: none;
    border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  }
  
  .programs-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .programs-split-section .container {
    padding: 0 1rem;
  }
  
  .overview-panel,
  .details-panel {
    padding: 1.5rem;
  }
  
  .programs-list {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  
  .actions-section {
    flex-direction: column;
  }
  
  .details-badges {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2rem;
  }
  
  .panel-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .program-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>