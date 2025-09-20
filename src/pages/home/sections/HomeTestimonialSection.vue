<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import belindaImg from '@/assets/pictures/Belinda.jpg'
import elizabethImg from '@/assets/pictures/elisabeth.jpg'
import benedictaImg from '@/assets/pictures/benedicta.png'
import emmanuelImg from '@/assets/pictures/emmanuel.jpg'
import danielleImg from '@/assets/pictures/danielle.jpg'

const currentSlide = ref(0)
const slideWidth = 100
const autoScrollInterval = ref(null)

const testimonials = [
  {
    id: 1,
    name: 'Belinda',
    role: 'Frontend Developer & Mentor',
    badge: 'Winner',
    quote: 'After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their programming course. Today, I am a front-end developer hoping to grow more in IT.',
    image: belindaImg
  },
  {
    id: 2,
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    badge: 'Excel Expert',
    quote: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I\'ve gained have opened doors I never thought possible. I\'m now excited about my future in tech!',
    image: elizabethImg
  },
  {
    id: 3,
    name: 'Benedicta',
    role: 'Graphic Designer',
    badge: 'Designer',
    quote: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world. IT For Youth Ghana transformed my passion into professional skills.',
    image: benedictaImg
  },
  {
    id: 4,
    name: 'Emmanuel',
    role: 'Data Analyst',
    badge: 'Analyst',
    quote: 'IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight, ready to tackle real-world challenges and make an impact!',
    image: emmanuelImg
  },
  {
    id: 5,
    name: 'Danielle',
    role: 'Web Developer',
    badge: 'Coder',
    quote: 'I came in with no skills, but now I\'ve built a website! This program changed my life. IT For Youth Ghana showed me what\'s possible when you have the right support.',
    image: danielleImg
  }
]

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = testimonials.length - 1
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoScroll = () => {
  autoScrollInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section class="testimonials homepage gpu-accelerated">
    <div class="container optimize-text">
      <div class="testimonials-header">
        <h2 class="section-title will-change-opacity">Student Success Stories</h2>
        <p class="section-subtitle will-change-opacity">Real impact, real careers, real transformation</p>
      </div>
      
      <div class="testimonials-carousel" @mouseenter="stopAutoScroll" @mouseleave="startAutoScroll">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-slide">
            <div class="testimonial-card will-change-transform">
              <div class="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              <blockquote class="testimonial-text will-change-opacity">{{ testimonial.quote }}</blockquote>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <img :src="testimonial.image" :alt="testimonial.name" loading="lazy" decoding="async" />
                </div>
                <div class="author-info">
                  <h4 class="author-name will-change-opacity">{{ testimonial.name }}</h4>
                  <p class="author-role will-change-opacity">{{ testimonial.role }}</p>
                  <div class="author-badge">{{ testimonial.badge }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-controls">
          <button @click="prevSlide" class="control-btn" :disabled="currentSlide === 0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div class="carousel-dots">
            <button 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              @click="goToSlide(index)"
              class="dot"
              :class="{ active: index === currentSlide }"
            ></button>
          </div>
          
          <button @click="nextSlide" class="control-btn" :disabled="currentSlide >= testimonials.length - 1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 4rem 0;
  background: #ffffff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.testimonials::before {
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
  position: relative;
  z-index: 2;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #030b14;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #051218;
  font-weight: 500;
}

.testimonials-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-slide {
  flex: 0 0 100%;
  padding: 0 1rem;
}

.testimonial-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 20px;
  padding: 2.5rem;
  border: 2px solid rgba(143, 178, 214, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}


.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: rgba(25, 90, 165, 0.3);
}

.quote-icon {
  color: rgba(209, 34, 85, 0.3);
  margin-bottom: 1rem;
  text-align: center;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #051218;
  text-align: center;
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(143, 178, 214, 0.3);
  transition: all 0.3s ease;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #195aa5;
  margin: 0 0 0.2rem 0;
}

.author-role {
  font-size: 0.9rem;
  color: #051218;
  margin: 0 0 0.5rem 0;
}

.author-badge {
  display: inline-block;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(143, 178, 214, 0.1) 100%);
  border: 2px solid rgba(25, 90, 165, 0.2);
  border-radius: 50%;
  color: #195aa5;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.control-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(25, 90, 165, 0.3);
}

.control-btn:disabled {
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
  transform: scale(1.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
  
  .testimonial-text {
    font-size: 1.1rem;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
  }
  
  .control-btn {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .testimonials {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  
  .author-info {
    text-align: center;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  .carousel-controls {
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .control-btn {
    width: 32px;
    height: 32px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>