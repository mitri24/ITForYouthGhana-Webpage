<template>
  <section class="impact">
    <div class="container">
      <h2 class="section-title">Our Impact</h2>
      <div class="stats-grid">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { number: '450+', label: 'Youth Trained' },
  { number: '40+', label: 'Workshops' },
  { number: '40%', label: 'Female Participation' },
  { number: '800+', label: 'Students Reached' }
]
</script>

<style scoped>
.impact {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(36, 52, 71, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(15, 20, 25, 0.92) 100%);
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
    radial-gradient(circle at 30% 30%, rgba(140, 181, 218, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(3, 94, 172, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  color: #f9f8f9;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #8cb5da, #035eac);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.stat-item:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #8cb5da;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 1.2rem;
  color: #f9f8f9;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .impact {
    padding: 3rem 0;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .impact {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
    height: 130px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>