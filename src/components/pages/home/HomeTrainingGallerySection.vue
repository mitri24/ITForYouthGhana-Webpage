<template>
  <section class="impact-showcase">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Student Success Stories</h2>
        <p class="section-subtitle">Real impact, real careers, real transformation</p>
      </div>
      
      <!-- Main Content Grid -->
      <div class="showcase-grid">
        <!-- Call-to-Action Panel -->
        <div class="cta-panel">
          <div class="cta-content">
            <div class="cta-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
              </svg>
            </div>
            <h3>Your Future Starts Here</h3>
            <p class="cta-highlight">Join 1000+ students who transformed their lives</p>
            <p class="cta-description">Get industry-ready skills, mentorship, and job placement support</p>
            
            <div class="cta-features">
              <div class="feature">
                <span class="feature-icon">🚀</span>
                <span>Fast-track to career</span>
              </div>
              <div class="feature">
                <span class="feature-icon">💼</span>
                <span>Job placement support</span>
              </div>
            </div>
            
            <div class="cta-buttons">
              <button class="btn-primary">
                <span>Apply For Training</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
              <button class="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7,10 12,15 17,10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>
            
            <div class="cta-trust">
              <p>✨ Free consultation • No hidden costs • 100% satisfaction guarantee</p>
            </div>
          </div>
        </div>
        
        <!-- Featured Story -->
        <div class="featured-story">
          <div class="story-image">
            <img :src="successStories[currentStory].image" :alt="successStories[currentStory].name" />
            <div class="story-badge">{{ successStories[currentStory].badge }}</div>
            <div class="story-overlay">
              <div class="story-info">
                <h3>{{ successStories[currentStory].name }}</h3>
                <p class="role">{{ successStories[currentStory].role }}</p>
              </div>
            </div>
          </div>
          
          <div class="story-quote">
            "{{ successStories[currentStory].quote }}"
          </div>
          
          <div class="story-achievements">
            <div class="achievement">
              <span class="value">{{ successStories[currentStory].achievement }}</span>
              <span class="label">Achievement</span>
            </div>
            <div class="achievement">
              <span class="value">{{ successStories[currentStory].timeframe }}</span>
              <span class="label">Journey</span>
            </div>
          </div>
        </div>
        
        <!-- Navigation Panel -->
        <div class="nav-panel">
          <!-- Story Navigation -->
          <div class="story-navigation">
            <button 
              v-for="(story, index) in successStories" 
              :key="index"
              @click="currentStory = index"
              class="nav-dot"
              :class="{ active: currentStory === index }"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Import images for success stories
import story1 from '@/assets/pictures/UX1.jpeg'
import story2 from '@/assets/pictures/UX2.jpg'
import story3 from '@/assets/pictures/UX3.jpeg'
import story4 from '@/assets/pictures/UX4.jpg'

const currentStory = ref(0)
const autoRotateInterval = ref<number | null>(null)

const successStories = [
  {
    name: 'Belinda',
    role: 'Frontend Developer & Mentor',
    badge: 'Winner',
    image: story1,
    quote: 'After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their programming course. Today, I am a front-end developer hoping to grow more in IT.',
    achievement: 'Self-taught to Professional',
    timeframe: 'From Zero to Hero'
  },
  {
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    badge: 'Excel Expert',
    image: story2,
    quote: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I\'ve gained have opened doors I never thought possible. I\'m now excited about my future in tech!',
    achievement: 'Career Breakthrough',
    timeframe: 'New Opportunities'
  },
  {
    name: 'Benedicta',
    role: 'Graphic Designer',
    badge: 'Designer',
    image: story3,
    quote: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world. IT For Youth Ghana transformed my passion into professional skills.',
    achievement: 'Passion to Profession',
    timeframe: 'Dream Realized'
  },
  {
    name: 'Emmanuel',
    role: 'Data Analyst',
    badge: 'Analyst',
    image: story4,
    quote: 'IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight, ready to tackle real-world challenges and make an impact!',
    achievement: 'Data Expert',
    timeframe: 'Real-World Impact'
  },
  {
    name: 'Danielle',
    role: 'Web Developer',
    badge: 'Coder',
    image: story1,
    quote: 'I came in with no skills, but now I\'ve built a website! This program changed my life. IT For Youth Ghana showed me what\'s possible when you have the right support.',
    achievement: 'Life-Changing Skills',
    timeframe: 'Complete Transformation'
  }
]

const playStory = (index: number) => {
  currentStory.value = index
  // Here you could implement video/audio playback functionality
  console.log(`Playing story for ${successStories[index].name}`)
}

// Auto-rotate functionality
const startAutoRotate = () => {
  if (autoRotateInterval.value) return
  autoRotateInterval.value = setInterval(() => {
    currentStory.value = (currentStory.value + 1) % successStories.length
  }, 8000) // Change story every 8 seconds
}

const stopAutoRotate = () => {
  if (autoRotateInterval.value) {
    clearInterval(autoRotateInterval.value)
    autoRotateInterval.value = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoRotate()
})

onUnmounted(() => {
  stopAutoRotate()
})
</script>

<style scoped>
.impact-showcase {
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  background: linear-gradient(135deg, #0a0f1a 0%, #1a2332 50%, #2d3e52 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.impact-showcase::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(209, 34, 85, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(25, 90, 165, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(140, 181, 218, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: #f9f8f9;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(135deg, #f9f8f9 0%, #8cb5da 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(249, 248, 249, 0.7);
  font-weight: 500;
  margin-bottom: 0;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 200px 1fr 250px;
  gap: 2rem;
  align-items: center;
  height: 400px;
}

/* CTA Panel */
.cta-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.cta-content {
  background: linear-gradient(135deg, rgba(249, 248, 249, 0.15) 0%, rgba(140, 181, 218, 0.1) 100%);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  border: 2px solid transparent;
  background-clip: padding-box;
  backdrop-filter: blur(20px);
  text-align: center;
  width: 100%;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.cta-content::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(135deg, rgba(209, 34, 85, 0.3) 0%, rgba(25, 90, 165, 0.3) 50%, rgba(140, 181, 218, 0.3) 100%);
  border-radius: 24px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.cta-content:hover {
  transform: translateY(-4px) scale(1.02);
  background: linear-gradient(135deg, rgba(249, 248, 249, 0.2) 0%, rgba(140, 181, 218, 0.15) 100%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  color: white;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.cta-content:hover .cta-icon {
  transform: scale(1.1) rotate(5deg);
}

.cta-content h3 {
  font-size: 2rem;
  font-weight: 900;
  color: #f9f8f9;
  margin-bottom: 0.8rem;
  background: linear-gradient(135deg, #f9f8f9 0%, #8cb5da 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.cta-highlight {
  font-size: 1.1rem;
  font-weight: 700;
  color: #8cb5da;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.cta-description {
  font-size: 0.95rem;
  color: rgba(249, 248, 249, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(249, 248, 249, 0.9);
  font-weight: 600;
}

.feature-icon {
  font-size: 1.2rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.cta-trust {
  font-size: 0.8rem;
  color: rgba(249, 248, 249, 0.6);
  font-weight: 500;
  line-height: 1.4;
}

.cta-trust p {
  margin: 0;
}

/* Featured Story */
.featured-story {
  background: rgba(249, 248, 249, 0.06);
  border-radius: 20px;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(20px);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.story-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.story-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.story-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  transition: all 0.3s ease;
}

.story-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.story-info .role {
  font-size: 0.9rem;
  color: #8cb5da;
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.story-info .company {
  font-size: 0.8rem;
  opacity: 0.8;
}

.story-quote {
  flex: 1;
  padding: 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #f9f8f9;
  line-height: 1.4;
  font-style: italic;
  display: flex;
  align-items: center;
  position: relative;
}

.story-quote::before {
  content: '"';
  position: absolute;
  left: 0.5rem;
  top: 0.2rem;
  font-size: 2rem;
  color: rgba(140, 181, 218, 0.3);
  font-family: serif;
}

.story-achievements {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid rgba(140, 181, 218, 0.1);
}

.achievement {
  text-align: center;
}

.achievement .value {
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  color: #8cb5da;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.achievement .label {
  font-size: 0.7rem;
  color: rgba(249, 248, 249, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

/* Navigation Panel */
.nav-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.btn-primary, .btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 1.8rem;
  border-radius: 14px;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.4s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(209, 34, 85, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  transition: opacity 0.3s ease;
  opacity: 0;
}

.btn-primary:hover::before {
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(209, 34, 85, 0.5);
}

.btn-primary svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: translateX(4px);
}

.btn-secondary {
  background: rgba(249, 248, 249, 0.12);
  color: #f9f8f9;
  border: 2px solid rgba(140, 181, 218, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background: rgba(249, 248, 249, 0.2);
  border-color: rgba(140, 181, 218, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary svg {
  transition: transform 0.3s ease;
}

.btn-secondary:hover svg {
  transform: translateY(2px);
}

.story-navigation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(140, 181, 218, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  transform: scale(1.2);
}

.nav-dot:hover {
  background: rgba(140, 181, 218, 0.5);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .showcase-grid {
    grid-template-columns: 180px 1fr 220px;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 1024px) {
  .impact-showcase {
    height: auto;
    min-height: 70vh;
    padding: 3rem 0;
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
    height: auto;
  }
  
  .cta-content {
    padding: 2rem 1.5rem;
  }
  
  .cta-content h3 {
    font-size: 1.8rem;
  }
  
  .cta-features {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-buttons {
    flex-direction: row;
    gap: 1rem;
  }
  
  .featured-story {
    height: 500px;
  }
  
  .story-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .impact-showcase {
    padding: 2rem 0;
    min-height: 80vh;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-content {
    padding: 1.8rem 1.2rem;
  }
  
  .cta-content h3 {
    font-size: 1.6rem;
  }
  
  .cta-highlight {
    font-size: 1rem;
  }
  
  .cta-description {
    font-size: 0.9rem;
  }
  
  .cta-features {
    gap: 0.8rem;
  }
  
  .cta-icon {
    width: 50px;
    height: 50px;
  }
  
  .featured-story {
    height: 450px;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .impact-showcase {
    padding: 1.5rem 0;
    min-height: 90vh;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .showcase-grid {
    gap: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-content {
    padding: 1.5rem 1rem;
  }
  
  .cta-content h3 {
    font-size: 1.4rem;
  }
  
  .cta-icon {
    width: 45px;
    height: 45px;
  }
  
  .btn-primary, .btn-secondary {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .story-quote {
    font-size: 0.9rem;
    padding: 1rem;
  }
  
  .achievement .value {
    font-size: 1.1rem;
  }
}
</style>
