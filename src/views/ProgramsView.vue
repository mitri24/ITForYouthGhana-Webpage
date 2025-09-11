<template>
  <main class="programs-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="content-split">
          <div class="hero-content">
            <h1 class="hero-title">Our Programs</h1>
            <p class="hero-subtitle">
              We're not just teaching code - we're transforming lives and building Ghana's tech future. Every number represents a young person empowered with digital skills.
            </p>
            <div class="hero-highlight">
              <div class="highlight-icon">
                <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana Logo" class="logo-icon" />
              </div>
              <div class="highlight-text">
                <h4>Empowering the Next Generation</h4>
                <p>From coding bootcamps to tech mentorship, we're creating pathways to success in Ghana's growing digital economy.</p>
              </div>
            </div>
          </div>
          
          <div class="hero-stats">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">200+</div>
                <div class="stat-label">Youth Adults Trained</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">20+</div>
                <div class="stat-label">School Workshops</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">40%</div>
                <div class="stat-label">Female Participation</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">800+</div>
                <div class="stat-label">Students Reached</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">250+</div>
                <div class="stat-label">Graduates Trained</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">23+</div>
                <div class="stat-label">Online Program Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div 
          class="testimonials-carousel"
          @mouseenter="stopAutoScroll"
          @mouseleave="startAutoScroll"
        >
          <div class="carousel-container" ref="carouselContainer">
            <div 
              class="carousel-track" 
              :style="{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }"
            >
              <div 
                v-for="testimonial in testimonials" 
                :key="testimonial.id" 
                class="testimonial-slide"
              >
                <div class="testimonial-card">
                  <div class="testimonial-content">
                    <p class="testimonial-text">{{ testimonial.text }}</p>
                  </div>
                  <div class="testimonial-author">
                    <div class="author-info">
                      <h4 class="author-name">{{ testimonial.name }}</h4>
                      <span class="author-role">{{ testimonial.role }}</span>
                    </div>
                    <div class="author-timing">{{ testimonial.timing }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Carousel Navigation -->
          <div class="carousel-nav">
            <button 
              @click="prevSlide" 
              class="nav-btn prev-btn"
              :disabled="currentSlide === 0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            
            <div class="carousel-dots">
              <button 
                v-for="(dot, index) in Math.ceil(testimonials.length / visibleSlides)" 
                :key="index"
                @click="goToSlide(index)"
                class="dot"
                :class="{ active: index === currentSlide }"
              ></button>
            </div>
            
            <button 
              @click="nextSlide" 
              class="nav-btn next-btn"
              :disabled="currentSlide >= Math.ceil(testimonials.length / visibleSlides) - 1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Fixed Navigation Submenu -->
    <div class="programs-navigation">
      <div class="nav-container">
        <div class="nav-tabs">
          <button 
            @click="switchTab('current')" 
            :class="{ active: activeTab === 'current' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="tab-text">Current</span>
          </button>
          <button 
            @click="switchTab('past')" 
            :class="{ active: activeTab === 'past' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
            </div>
            <span class="tab-text">Past</span>
          </button>
          <button 
            @click="switchTab('future')" 
            :class="{ active: activeTab === 'future' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <span class="tab-text">Future</span>
          </button>
        </div>
        
        <div class="search-cta">
          <div class="nav-search">
            <input 
              type="text" 
              :value="currentSearchValue"
              @input="updateSearch"
              :placeholder="getSearchPlaceholder()"
              class="nav-search-input"
            >
            <div class="nav-search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Programs -->
    <section v-if="activeTab === 'current'" class="programs-content">
      <div class="container">
        
        <div class="programs-grid" v-if="filteredCurrentPrograms.length > 0">
          <div v-for="program in filteredCurrentPrograms" :key="program.id" class="program-card current-program">
            <div class="program-status">Currently Running</div>
            <div class="program-header">
              <h4>{{ program.title }}</h4>
              <div class="program-duration">{{ program.duration }}</div>
            </div>
            <div class="program-tech">
              <span v-for="tech in program.technologies" :key="tech">{{ tech }}</span>
            </div>
            <p class="program-description">{{ program.description }}</p>
            <div class="program-details" v-if="program.details">
              <div v-for="detail in program.details" :key="detail" class="detail-item">
                <span class="detail-label">{{ detail.label }}:</span>
                <span class="detail-value">{{ detail.value }}</span>
              </div>
            </div>
            <div class="program-features" v-if="program.features">
              <span v-for="feature in program.features" :key="feature" class="feature">{{ feature }}</span>
            </div>
          </div>
        </div>
        
        <div v-else class="no-results">
          <div class="no-results-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <p>No programs found matching "{{ currentSearchQuery }}"</p>
        </div>
      </div>
    </section>

    <!-- Past Programs -->
    <section v-if="activeTab === 'past'" class="programs-content">
      <div class="container">
        
        <div class="programs-grid" v-if="filteredPastPrograms.length > 0">
          <div v-for="(program, index) in filteredPastPrograms" :key="program.id" class="program-card" :class="getCardVariant(index)">
            <div class="program-header">
              <h4>{{ program.title }}</h4>
              <div class="program-duration">{{ program.duration }}</div>
            </div>
            <div class="program-tech">
              <span v-for="tech in program.technologies" :key="tech">{{ tech }}</span>
            </div>
            <p class="program-description">{{ program.description }}</p>
          </div>
        </div>
        
        <div v-else class="no-results">
          <div class="no-results-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <p>No programs found matching "{{ pastSearchQuery }}"</p>
        </div>

        <div class="program-stats">
          <div class="stat">
            <div class="stat-number">450+</div>
            <div class="stat-label">Youth Trained</div>
          </div>
          <div class="stat">
            <div class="stat-number">70%</div>
            <div class="stat-label">Female Participation</div>
          </div>
          <div class="stat">
            <div class="stat-number">95%</div>
            <div class="stat-label">Employment Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Programs -->
    <section v-if="activeTab === 'future'" class="programs-content">
      <div class="container">
        
        <div class="programs-grid" v-if="filteredFuturePrograms.length > 0">
          <div v-for="program in filteredFuturePrograms" :key="program.id" class="program-card future-program">
            <div class="program-status future">{{ program.status }}</div>
            <div class="program-header">
              <h4>{{ program.title }}</h4>
              <div class="program-duration">{{ program.duration }}</div>
            </div>
            <div class="program-tech">
              <span v-for="tech in program.technologies" :key="tech">{{ tech }}</span>
            </div>
            <p class="program-description">{{ program.description }}</p>
            <div class="program-details" v-if="program.details">
              <div v-for="detail in program.details" :key="detail" class="detail-item">
                <span class="detail-label">{{ detail.label }}:</span>
                <span class="detail-value">{{ detail.value }}</span>
              </div>
            </div>
            <div class="program-features" v-if="program.features">
              <span v-for="feature in program.features" :key="feature" class="feature">{{ feature }}</span>
            </div>
          </div>
        </div>
        
        <div v-else class="no-results">
          <div class="no-results-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <p>No programs found matching "{{ futureSearchQuery }}"</p>
        </div>
      </div>
    </section>

    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ScrollToTop from '../components/shared/ScrollToTop.vue'

const activeTab = ref('current')

// Carousel functionality
const currentSlide = ref(0)
const visibleSlides = ref(3)
const carouselContainer = ref(null)
const autoScrollInterval = ref(null)

// Search queries
const currentSearchQuery = ref('')
const pastSearchQuery = ref('')
const futureSearchQuery = ref('')

// Student testimonials data
const testimonials = ref([
  {
    id: 1,
    name: 'Benedicta Semackor',
    role: 'Aspiring Biomedical Equipment Technologist || StemSheCan fellow || Brand partner with Oriflame Sweden || Model',
    text: "I'm really excited to be part of this🎉 My first experience was very interacting and I had fun ☺️",
    timing: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Adjei Agnes',
    role: 'Room Service Attendant at Tang Palace Hotel',
    text: "I'm really glad and empowered to grab such an opportunity.. We look forward to more of such educational programs 👍",
    timing: '3 weeks ago'
  },
  {
    id: 3,
    name: 'Delphine Semenyo',
    role: 'Student',
    text: "It may be an opportunity but to some of us it's a privilege. God bless you all for granting onto us such a vision and mission. I am proud to be a part of this mission.",
    timing: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Eleana Osei Owusu',
    role: 'Computer Engineering Student at Ghana Communication Technology University /Software Developer in the making 👩🏾‍💻',
    text: "Thank you for this opportunity! I'm excited to be part of this training",
    timing: '3 weeks ago'
  }
])

// Current programs data
const currentPrograms = ref([
  {
    id: 1,
    title: 'Advanced UI/UX Design Program',
    duration: '2-Month Intensive',
    iconClass: 'ui-ux',
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    description: 'Master user-centered design principles and create compelling digital experiences. This intensive program covers everything from user research to high-fidelity prototyping, preparing you for a career in design.',
    details: [
      { label: 'Partnership', value: 'priME Academy AG (Germany)' },
      { label: 'Trainer', value: 'Miss Miréio Trinley from Germany' },
      { label: 'Universities', value: 'Accra Technical University, GCTU, UCC, UEW, UPSA' }
    ],
    features: ['21 Assignments', 'Peer Reviews', 'Portfolio Development', 'International Standards']
  }
])

// Past programs data
const pastPrograms = ref([
  {
    id: 1,
    title: 'Programming & Coding',
    duration: '6-Month Certificate',
    iconClass: 'programming',
    technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'Django'],
    description: 'Master full-stack web development from concept to deployment. Learn programming fundamentals, build real-world applications, and gain expertise in modern frameworks and database management systems.'
  },
  {
    id: 2,
    title: 'Data Analytics',
    duration: '6-Month Certificate',
    iconClass: 'data-analytics',
    technologies: ['Excel', 'Python', 'SQL', 'Power BI', 'Tableau'],
    description: 'Transform raw data into actionable insights. Learn statistical analysis, data visualization, and business intelligence tools to make data-driven decisions in any industry.'
  },
  {
    id: 3,
    title: 'Web Design & UI/UX',
    duration: '6-Month Certificate',
    iconClass: 'web-design',
    technologies: ['HTML5', 'CSS3', 'Figma', 'Adobe XD'],
    description: 'Create beautiful, user-centered digital experiences. Master design principles, responsive development, and user experience research to build websites that convert and engage.'
  },
  {
    id: 4,
    title: 'Graphic Design & Video Editing',
    duration: '6-Month Certificate',
    iconClass: 'graphic-design',
    technologies: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Blender'],
    description: 'Bring your creative vision to life through digital media. Learn professional design software, motion graphics, 3D animation, and video production techniques used by industry professionals.'
  },
  {
    id: 5,
    title: 'Social Media & Digital Marketing',
    duration: '6-Month Certificate',
    iconClass: 'digital-marketing',
    technologies: ['Facebook Ads', 'Google Ads', 'SEO', 'Content Strategy'],
    description: 'Build successful digital marketing campaigns that drive results. Master social media strategy, paid advertising, search engine optimization, and content creation for business growth.'
  },
  {
    id: 6,
    title: 'Network Administration',
    duration: '6-Month Certificate',
    iconClass: 'network-admin',
    technologies: ['Windows Server', 'Linux', 'AWS', 'Azure'],
    description: 'Become an IT infrastructure expert. Learn to manage networks, implement security protocols, deploy cloud services, and maintain enterprise-level systems with hands-on experience.'
  },
  {
    id: 7,
    title: 'Computer Hardware & Software',
    duration: '6-Month Certificate',
    iconClass: 'hardware',
    technologies: ['Hardware Assembly', 'Diagnostics', 'Mobile Repair'],
    description: 'Master technical support and hardware repair skills. Learn computer assembly, troubleshooting techniques, mobile device repair, and system diagnostics for career opportunities in tech support.'
  },
  {
    id: 8,
    title: 'Secretarial & Database Management',
    duration: '6-Month Certificate',
    iconClass: 'database',
    technologies: ['Microsoft Office', 'Access', 'Database Design'],
    description: 'Develop essential administrative and data management skills. Master office productivity tools, database design, business communication, and organizational systems for modern workplaces.'
  },
  {
    id: 9,
    title: 'Coding Fundamentals',
    duration: '2-Month Intensive',
    iconClass: 'coding-basics',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Programming Logic'],
    description: 'Start your programming journey with solid foundations. Learn programming concepts, web development basics, and logical thinking skills that prepare you for advanced coding bootcamps.'
  },
  {
    id: 10,
    title: 'Social Media Marketing Intro',
    duration: '2-Month Intensive',
    iconClass: 'social-media',
    technologies: ['Facebook', 'Instagram', 'Content Creation', 'Basic Ads'],
    description: 'Launch your digital marketing career quickly. Learn to create engaging content, manage business social media accounts, and run basic advertising campaigns for small businesses.'
  },
  {
    id: 11,
    title: 'Basic Office Skills',
    duration: '2-Month Intensive',
    iconClass: 'office-skills',
    technologies: ['Microsoft Word', 'Excel', 'Email', 'File Management'],
    description: 'Master essential computer skills for any workplace. Learn word processing, spreadsheets, email communication, and file organization to boost your employability in office environments.'
  },
  {
    id: 12,
    title: 'Web Design Basics',
    duration: '2-Month Intensive',
    iconClass: 'web-basics',
    technologies: ['WordPress', 'Templates', 'Basic Design', 'Website Creation'],
    description: 'Create professional websites without coding. Learn to customize templates, manage content, and build attractive websites using popular platforms and design principles.'
  },
  {
    id: 13,
    title: 'Computer Introduction',
    duration: '2-Month Intensive',
    iconClass: 'computer-intro',
    technologies: ['Computer Basics', 'Internet Usage', 'File Management', 'Digital Literacy'],
    description: 'Build confidence with technology fundamentals. Perfect for beginners, this program covers computer operations, internet navigation, digital communication, and essential software skills.'
  }
])

// Future programs data
const futurePrograms = ref([
  {
    id: 1,
    title: 'AI and Robotics for Women in Development and Engineering',
    duration: 'Comprehensive Program - Launch Q1 2026',
    status: 'In Development - 60%',
    iconClass: 'ai-robotics',
    technologies: ['Python', 'Machine Learning', 'Arduino', 'Raspberry Pi', 'AI Ethics'],
    description: 'Addressing severe underrepresentation of women in AI and engineering fields through hands-on learning. This comprehensive program combines theoretical knowledge with practical applications in smart agriculture, water management, and health monitoring systems.',
    details: [
      { label: 'Target', value: 'First Cohort - 15 Women' },
      { label: 'Partnerships', value: 'Two international universities + European AI companies' },
      { label: 'Focus Areas', value: 'Smart agriculture, water management, health monitoring' },
      { label: 'Timeline', value: 'Curriculum completion Dec 2025, Launch Mar 2026' }
    ],
    features: ['Hands-on Projects', 'International Partnerships', 'Real-world Applications', 'Women-focused Initiative']
  }
])

// Search functionality
const currentSearchValue = computed(() => {
  if (activeTab.value === 'current') return currentSearchQuery.value
  if (activeTab.value === 'past') return pastSearchQuery.value
  if (activeTab.value === 'future') return futureSearchQuery.value
  return ''
})

const switchTab = (tab: string) => {
  activeTab.value = tab
  // Scroll to content area while keeping the navigation visible
  const contentElement = document.querySelector('.programs-content')
  if (contentElement) {
    const offsetTop = contentElement.offsetTop - 140 // Account for fixed navigation height
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }
}

const updateSearch = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  if (activeTab.value === 'current') {
    currentSearchQuery.value = value
  } else if (activeTab.value === 'past') {
    pastSearchQuery.value = value
  } else if (activeTab.value === 'future') {
    futureSearchQuery.value = value
  }
}

const getSearchPlaceholder = () => {
  if (activeTab.value === 'current') return 'Search current programs...'
  if (activeTab.value === 'past') return 'Search past programs...'
  if (activeTab.value === 'future') return 'Search future programs...'
  return 'Search programs...'
}

// Computed properties for filtered programs
const filteredCurrentPrograms = computed(() => {
  const query = currentSearchQuery.value.toLowerCase()
  if (!query) return currentPrograms.value
  
  return currentPrograms.value.filter(program => 
    program.title.toLowerCase().includes(query) ||
    program.description.toLowerCase().includes(query) ||
    program.technologies.some(tech => tech.toLowerCase().includes(query))
  )
})

const filteredPastPrograms = computed(() => {
  const query = pastSearchQuery.value.toLowerCase()
  if (!query) return pastPrograms.value
  
  return pastPrograms.value.filter(program => 
    program.title.toLowerCase().includes(query) ||
    program.description.toLowerCase().includes(query) ||
    program.technologies.some(tech => tech.toLowerCase().includes(query)) ||
    program.duration.toLowerCase().includes(query)
  )
})

const filteredFuturePrograms = computed(() => {
  const query = futureSearchQuery.value.toLowerCase()
  if (!query) return futurePrograms.value
  
  return futurePrograms.value.filter(program => 
    program.title.toLowerCase().includes(query) ||
    program.description.toLowerCase().includes(query) ||
    program.technologies.some(tech => tech.toLowerCase().includes(query)) ||
    program.status.toLowerCase().includes(query)
  )
})

// Function to create visual variety for cards
const getCardVariant = (index: number) => {
  const variants = ['variant-1', 'variant-2', 'variant-3', 'variant-4']
  return variants[index % variants.length]
}

// Carousel methods
const nextSlide = () => {
  const maxSlides = Math.ceil(testimonials.value.length / visibleSlides.value)
  if (currentSlide.value < maxSlides - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0 // Loop back to start
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    const maxSlides = Math.ceil(testimonials.value.length / visibleSlides.value)
    currentSlide.value = maxSlides - 1 // Loop to end
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    nextSlide()
  }, 4000) // Change slide every 4 seconds
}

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
}

const updateVisibleSlides = () => {
  const width = window.innerWidth
  if (width < 768) {
    visibleSlides.value = 1
  } else if (width < 1024) {
    visibleSlides.value = 2
  } else {
    visibleSlides.value = 3
  }
  // Reset to first slide when changing layout
  currentSlide.value = 0
}

onMounted(() => {
  updateVisibleSlides()
  startAutoScroll()
  window.addEventListener('resize', updateVisibleSlides)
})

onUnmounted(() => {
  stopAutoScroll()
  window.removeEventListener('resize', updateVisibleSlides)
})
</script>

<style scoped>
.programs-page {
  padding-top: 70px;
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  max-height: 80vh;
  padding: 0;
  background: #ffffff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(25, 90, 165, 0.02) 0%, rgba(209, 34, 85, 0.02) 100%),
    radial-gradient(circle at 20% 80%, rgba(143, 178, 214, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

.content-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  height: 100%;
  max-height: calc(80vh - 4rem);
  padding: 1.5rem 0;
  overflow: hidden;
}

.hero-content {
  color: #000000;
}

.hero-title {
  font-size: 3rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}


.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 400;
}

.hero-highlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(143, 178, 214, 0.08);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
}

.highlight-icon {
  font-size: 2.5rem;
  font-weight: 800;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
  color: #ffffff;
  padding: 15px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  max-width: 100%;
  max-height: 100%;
}

.highlight-text h4 {
  font-size: 1.4rem;
  color: #195aa5;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.highlight-text p {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 500px;
}

.stat-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  border: 2px solid rgba(143, 178, 214, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(10px);
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.stat-item::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(209, 34, 85, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.4s ease;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.stat-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(143, 178, 214, 0.1) 100%);
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-item:hover::after {
  width: 200px;
  height: 200px;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 900;
  color: #d12255;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 8px rgba(209, 34, 85, 0.2);
}

.stat-label {
  font-size: 0.95rem;
  color: #000000;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.3;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
}

/* Student Testimonials Section */
.testimonials-section {
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  border-top: 1px solid rgba(143, 178, 214, 0.1);
  border-bottom: 1px solid rgba(143, 178, 214, 0.1);
}

.testimonials-carousel {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.carousel-container {
  overflow: hidden;
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.testimonial-slide {
  flex: 0 0 calc(100% / 3);
  padding: 0 0.75rem;
  box-sizing: border-box;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(143, 178, 214, 0.15);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(25, 90, 165, 0.08);
}

.testimonial-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(25, 90, 165, 0.15);
  border-color: rgba(25, 90, 165, 0.3);
}

.testimonial-content {
  margin-bottom: 1rem;
  flex: 1;
}

.testimonial-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-top: auto;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #195aa5;
  margin: 0 0 0.2rem 0;
}

.author-role {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.3;
  display: block;
}

.author-timing {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

/* Carousel Navigation */
.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(143, 178, 214, 0.1) 100%);
  border: 2px solid rgba(25, 90, 165, 0.2);
  border-radius: 50%;
  color: #195aa5;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(25, 90, 165, 0.3);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(25, 90, 165, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  transform: scale(1.2);
}

/* Fixed Navigation */
.programs-navigation {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(25, 90, 165, 0.1);
  box-shadow: 0 2px 20px rgba(25, 90, 165, 0.1);
  width: 100vw;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
}

.nav-tabs {
  display: flex;
  gap: 0.5rem;
}

.search-cta {
  margin-left: 1rem;
}

.nav-search {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-search-input {
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 2px solid rgba(25, 90, 165, 0.2);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #000000;
  width: 280px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
}

.nav-search-input::placeholder {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
}

.nav-search-input:focus {
  outline: none;
  border-color: #195aa5;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 15px rgba(25, 90, 165, 0.2);
}

.nav-search-icon {
  position: absolute;
  right: 1rem;
  color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.page-title {
  font-size: 3rem;
  color: #f9f8f9;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.nav-tab {
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(25, 90, 165, 0.2);
  border-radius: 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 120px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-text {
  font-size: 0.85rem;
  font-weight: 600;
}

.nav-tab:hover {
  background: rgba(25, 90, 165, 0.1);
  color: #195aa5;
  border-color: #195aa5;
  transform: translateY(-2px);
}

.nav-tab.active {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  color: white;
  border-color: #195aa5;
  box-shadow: 0 4px 20px rgba(25, 90, 165, 0.3);
}

.programs-content {
  width: 100%;
  padding: 6rem 0 6rem;
  margin-top: 0;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

.programs-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, rgba(25, 90, 165, 0.05) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(143, 178, 214, 0.03) 0%, transparent 60%);
  pointer-events: none;
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(249, 248, 249, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.program-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.current-program {
  position: relative;
  border: 2px solid #22c55e;
  background: rgba(34, 197, 94, 0.05);
}

.future-program {
  position: relative;
  border: 2px solid #8b5cf6;
  background: rgba(139, 92, 246, 0.05);
}

.program-status.future {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  position: absolute;
  top: 1rem;
  right: 1rem;
  animation: pulse 3s infinite;
}

.program-duration {
  background: rgba(140, 181, 218, 0.2);
  color: #8cb5da;
  padding: 0.3rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: inline-block;
}

.program-description {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
  margin: 0.8rem 0;
  font-size: 0.9rem;
  flex-grow: 1;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 4rem;
  z-index: 2;
  padding: 0 2rem;
}

.search-input {
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 3.5rem;
  border: 1px solid rgba(140, 181, 218, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  font-size: 1.1rem;
  color: #f9f8f9;
  font-family: inherit;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.search-input::placeholder {
  color: rgba(249, 248, 249, 0.5);
}

.search-input:focus {
  outline: none;
  border-color: #8cb5da;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 40px rgba(140, 181, 218, 0.2);
  transform: translateY(-2px);
}

.search-icon {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(249, 248, 249, 0.5);
  pointer-events: none;
  transition: all 0.3s ease;
}

.search-input:focus + .search-icon {
  color: #8cb5da;
}

.no-results {
  text-align: center;
  padding: 4rem 0;
  color: rgba(249, 248, 249, 0.6);
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results p {
  font-size: 1.1rem;
  margin: 0;
}

.program-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(25, 90, 165, 0.2);
  backdrop-filter: blur(25px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 12px 40px rgba(25, 90, 165, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 280px;
}

.program-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(25, 90, 165, 0.25);
  border-color: #195aa5;
  background: rgba(255, 255, 255, 1);
}

.program-card:hover::before {
  opacity: 1;
}

.program-card.featured {
  border: 2px solid #035eac;
  background: rgba(3, 94, 172, 0.1);
}

.program-card.future {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
}

.program-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.program-header h3 {
  font-size: 1.4rem;
  color: #f9f8f9;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.duration {
  background: rgba(140, 181, 218, 0.2);
  color: #8cb5da;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.program-details p {
  margin-bottom: 0.5rem;
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.6;
}

.program-modules h4 {
  color: #8cb5da;
  margin: 1.5rem 0 1rem 0;
  font-size: 1.1rem;
}

.program-modules ul {
  list-style: none;
  padding: 0;
}

.program-modules li {
  padding: 0.5rem 0;
  color: rgba(249, 248, 249, 0.9);
  position: relative;
  padding-left: 1.5rem;
}

.program-modules li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #035eac;
  font-weight: bold;
}

.program-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.feature {
  background: linear-gradient(135deg, rgba(25, 90, 165, 0.1) 0%, rgba(209, 34, 85, 0.05) 100%);
  color: #195aa5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(25, 90, 165, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
}

.feature:hover {
  background: linear-gradient(135deg, rgba(25, 90, 165, 0.2) 0%, rgba(209, 34, 85, 0.1) 100%);
  transform: translateY(-1px);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #f9f8f9;
  margin-bottom: 3rem;
  font-weight: 700;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
}

/* Program Header */
.program-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.program-header h4 {
  font-size: 1.4rem;
  color: #000000;
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  flex: 1;
}

/* Card Variants for Visual Interest */
.program-card.variant-1 {
  border-left: 4px solid #d12255;
  background: linear-gradient(135deg, rgba(209, 34, 85, 0.03) 0%, rgba(255, 255, 255, 0.95) 100%);
}

.program-card.variant-2 {
  border-left: 4px solid #195aa5;
  background: linear-gradient(135deg, rgba(25, 90, 165, 0.03) 0%, rgba(255, 255, 255, 0.95) 100%);
}

.program-card.variant-3 {
  border-left: 4px solid #8cb5da;
  background: linear-gradient(135deg, rgba(140, 181, 218, 0.03) 0%, rgba(255, 255, 255, 0.95) 100%);
}

.program-card.variant-4 {
  border-left: 4px solid #ff6b9d;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.03) 0%, rgba(255, 255, 255, 0.95) 100%);
}

.program-card.variant-1:hover {
  border-left-color: #d12255;
  box-shadow: 0 25px 60px rgba(209, 34, 85, 0.15);
}

.program-card.variant-2:hover {
  border-left-color: #195aa5;
  box-shadow: 0 25px 60px rgba(25, 90, 165, 0.15);
}

.program-card.variant-3:hover {
  border-left-color: #8cb5da;
  box-shadow: 0 25px 60px rgba(140, 181, 218, 0.15);
}

.program-card.variant-4:hover {
  border-left-color: #ff6b9d;
  box-shadow: 0 25px 60px rgba(255, 107, 157, 0.15);
}

/* Enhanced Program Details */
.detail-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(25, 90, 165, 0.05);
  border-radius: 8px;
  border-left: 3px solid rgba(25, 90, 165, 0.3);
}

.detail-label {
  font-weight: 700;
  color: #195aa5;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  font-size: 0.95rem;
}


.program-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}

.program-tech span {
  background: rgba(25, 90, 165, 0.1);
  color: #195aa5;
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
}


.program-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(140, 181, 218, 0.2);
}

.stat {
  text-align: center;
}

.program-stats .stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #d12255;
  line-height: 1;
}

.program-stats .stat-label {
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  margin-top: 0.5rem;
}

.development-status {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.status-badge {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
}

.launch-date {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
}

.detail-section {
  margin-bottom: 2rem;
}

.detail-section h4 {
  color: #8cb5da;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.timeline h4 {
  color: #8cb5da;
  margin-bottom: 1.5rem;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid rgba(139, 92, 246, 0.3);
}

.timeline-item.completed {
  border-left-color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.date {
  font-size: 0.85rem;
  color: #8cb5da;
  font-weight: 600;
  min-width: 80px;
}

.milestone {
  color: rgba(249, 248, 249, 0.9);
}

.partnerships h4 {
  color: #8cb5da;
  margin-bottom: 1rem;
}

.partnerships p {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .content-split {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-highlight {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .highlight-icon {
    width: 60px;
    height: 60px;
  }
  
  .highlight-text h4 {
    font-size: 1.2rem;
  }
  
  .highlight-text p {
    font-size: 0.9rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: 300px;
  }
  
  .stat-item {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
  }
  
  .programs-navigation {
    top: 70px;
    padding: 0.5rem 0;
  }
  
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
  
  .nav-tabs {
    gap: 0.3rem;
  }
  
  .nav-search-input {
    width: 200px;
    font-size: 0.85rem;
    padding: 0.7rem 2.2rem 0.7rem 0.8rem;
  }

  .nav-tab {
    padding: 0.6rem 1rem;
    min-width: 90px;
    font-size: 0.8rem;
  }

  .tab-icon svg {
    width: 16px;
    height: 16px;
  }

  .tab-text {
    font-size: 0.75rem;
  }

  .search-cta {
    margin-left: 0;
  }

  .programs-content {
    padding: 7rem 0 4rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  .program-card {
    padding: 2rem;
    min-height: 260px;
  }

  .search-container {
    padding: 0 1.5rem;
    margin: 0 auto 3rem;
  }

  .program-stats {
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }

  .container {
    padding: 0 2rem;
  }
  
  .testimonials-section {
    padding: 2rem 0;
  }
  
  .testimonial-slide {
    flex: 0 0 calc(100% / 2);
  }
  
  .testimonial-card {
    padding: 1.2rem;
  }
  
  .carousel-nav {
    margin-top: 1.5rem;
    gap: 1rem;
  }
  
  .nav-btn {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 480px) {
  .content-split {
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-highlight {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
  }
  
  .highlight-icon {
    width: 50px;
    height: 50px;
  }
  
  .highlight-text h4 {
    font-size: 1.1rem;
  }
  
  .highlight-text p {
    font-size: 0.85rem;
  }
  
  .stats-grid {
    gap: 1rem;
    max-width: 250px;
  }
  
  .stat-item {
    padding: 1.2rem 0.8rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
  
  .programs-navigation {
    padding: 0.3rem 0;
  }
  
  .nav-container {
    padding: 0.3rem 0.8rem;
    gap: 0.8rem;
  }
  
  .nav-search-input {
    width: 160px;
    font-size: 0.8rem;
    padding: 0.6rem 2rem 0.6rem 0.8rem;
  }

  .nav-tab {
    padding: 0.5rem 0.8rem;
    min-width: 80px;
    font-size: 0.75rem;
  }

  .tab-icon {
    font-size: 0.9rem;
  }

  .tab-text {
    font-size: 0.65rem;
  }

  .container {
    padding: 0 1rem;
  }

  .programs-content {
    padding: 6rem 0 3rem;
  }

  .program-card {
    padding: 1.5rem;
    border-radius: 18px;
    min-height: 240px;
  }

  .programs-grid {
    padding: 0 1rem;
  }

  .search-container {
    padding: 0 1rem;
  }

  .search-input {
    padding: 1rem 1.2rem 1rem 3rem;
    font-size: 1rem;
  }

  .search-icon {
    left: 1rem;
  }

  .program-stats {
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .testimonials-section {
    padding: 1.5rem 0;
  }
  
  .testimonial-slide {
    flex: 0 0 100%;
    padding: 0 0.5rem;
  }
  
  .testimonial-card {
    padding: 1rem;
  }
  
  .testimonial-text {
    font-size: 0.85rem;
  }
  
  .author-name {
    font-size: 0.8rem;
  }
  
  .author-role {
    font-size: 0.7rem;
  }
  
  .author-timing {
    font-size: 0.7rem;
  }
  
  .carousel-nav {
    margin-top: 1rem;
    gap: 0.8rem;
  }
  
  .nav-btn {
    width: 28px;
    height: 28px;
  }
  
  .nav-btn svg {
    width: 12px;
    height: 12px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>