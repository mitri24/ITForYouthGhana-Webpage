<template>
  <section class="impact">
    <div class="container">
      <div class="content-split">
        <div class="text-content">
          <h2 class="section-title">Our Impact</h2>
          <p class="impact-intro">
            We're not just teaching code - we're transforming lives and building Ghana's tech future. Every number represents a young person empowered with digital skills.
          </p>
          <div class="impact-highlight">
            <div class="highlight-icon">
              <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana Logo" class="logo-icon" />
            </div>
            <div class="highlight-text">
              <h4>Empowering the Next Generation</h4>
              <p>From coding bootcamps to tech mentorship, we're creating pathways to success in Ghana's growing digital economy.</p>
            </div>
          </div>
        </div>
        
        <div class="stats-visual">
          <div class="stats-grid">
            <div class="stat-item" v-for="stat in stats" :key="stat.label">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import logo from '@/assets/pictures/logo.png'

const stats = [
  { number: '200+', label: 'Youth Adults Trained' },
  { number: '20+', label: 'School Workshops' },
  { number: '40%', label: 'Female Participation' },
  { number: '800+', label: 'Students Reached' },
  { number: '250+', label: 'Graduates Trained' },
  { number: '23+', label: 'Online Program Participants' }
]
</script>

<style scoped>
.impact {
  min-height: 100vh;
  max-height: 100vh;
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

.impact::before {
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
  gap: 4rem;
  align-items: center;
  height: 100%;
  max-height: calc(100vh - 4rem);
  padding: 2rem 0;
  overflow: hidden;
}

.text-content {
  color: #000000;
}

.section-title {
  font-size: 3.5rem;
  color: #000000;
  margin-bottom: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}


.impact-intro {
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 400;
}

.impact-highlight {
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

.stats-visual {
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

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .content-split {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .impact-intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .impact-highlight {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .highlight-icon {
    font-size: 2.5rem;
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
}

@media (max-width: 480px) {
  .content-split {
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .impact-intro {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .impact-highlight {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
  }
  
  .highlight-icon {
    font-size: 2rem;
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
}
</style>