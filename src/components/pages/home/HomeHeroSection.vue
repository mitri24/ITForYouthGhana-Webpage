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
          <button class="btn btn-primary">
            Start Your Journey
          </button>
          <button class="btn btn-secondary">
            View Programs
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '@/assets/pictures/UX2.jpg'
</script>

<style scoped>
/* Clean, Professional Hero Section */
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
    linear-gradient(135deg, rgba(15, 20, 25, 0.4) 0%, rgba(26, 35, 56, 0.3) 50%, rgba(36, 52, 71, 0.4) 100%),
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

/* Clean Title */
.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
}

/* Clean Subtitle */
.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.5;
  font-weight: 400;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(209, 34, 85, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(209, 34, 85, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
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