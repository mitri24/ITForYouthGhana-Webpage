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
  padding: 4rem 0;
  background: rgba(26, 35, 56, 0.98);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
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
  padding: 2rem 1.5rem;
  background: rgba(249, 248, 249, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  overflow: hidden;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
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