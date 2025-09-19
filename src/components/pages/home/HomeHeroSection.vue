<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Empowering Youth Through Technology
        </h1>
        
        <p class="hero-subtitle">
          Building digital skills for Ghana's next generation of tech leaders
        </p>

        <div class="hero-actions">
          <RouterLink to="/programs" class="btn btn-primary">
            Start Your Journey
          </RouterLink>
          <RouterLink to="/about" class="btn btn-secondary">
            Learn About Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import heroImage from '@/assets/pictures/UX2.jpg'
</script>

<style scoped>
/* Apple-inspired Hero Section */
.hero {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: 
    linear-gradient(135deg, rgba(10, 22, 40, 0.75) 0%, rgba(5, 17, 31, 0.65) 50%, rgba(184, 134, 11, 0.15) 100%),
    url('@/assets/pictures/UX2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

/* Apple-inspired Title */
.hero-title {
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.75rem;
  line-height: 1.15;
  letter-spacing: -0.025em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Apple-inspired Subtitle */
.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  line-height: 1.5;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.005em;
}

/* Clean Buttons */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 160px;
}

.btn-primary {
  background: linear-gradient(135deg, #0a1628 0%, #0c2461 100%);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(10, 22, 40, 0.25);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(10, 22, 40, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px) saturate(180%);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px) scale(1.02);
  backdrop-filter: blur(20px) saturate(200%);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container {
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    gap: 1rem;
  }
  
  .btn {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
    min-width: 140px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    padding: 0.8rem;
    min-width: auto;
  }
}
</style>