<template>
  <section class="programs">
    <div class="container">
      <h2 class="section-title">Our Programs</h2>
      <div class="programs-grid">
        <div class="program-card" v-for="program in programs" :key="program.title">
          <div class="program-icon">
            <i :class="program.icon"></i>
          </div>
          <h3 class="program-title">{{ program.title }}</h3>
          <p class="program-description">{{ program.description }}</p>
          <RouterLink to="/programs" class="btn-learn-more">View All Programs</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
const programs = [
  {
    title: 'Coding & Programming',
    description: 'Master coding fundamentals and build innovative applications with hands-on training.',
    icon: '💻'
  },
  {
    title: 'Data Analytics',
    description: 'Learn data analysis and visualization to make data-driven decisions in any industry.',
    icon: '📊'
  },
  {
    title: 'Girls in Tech',
    description: 'Exclusive program empowering young women with confidence and technical skills.',
    icon: '👩‍💻'
  }
]
</script>

<style scoped>
.programs {
  padding: 4rem 0;
  background: #1a2338;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 90vh;
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

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.program-card {
  background: rgba(249, 248, 249, 0.08);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
}

.program-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.program-title {
  font-size: 1.6rem;
  color: #f9f8f9;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;
}

.program-description {
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 1.1rem;
}

.btn-learn-more {
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  box-shadow: 0 4px 15px rgba(3, 94, 172, 0.4);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
}

.btn-learn-more:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .programs {
    padding: 3rem 0;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .program-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .programs {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .programs-grid {
    gap: 1rem;
  }
  
  .program-card {
    padding: 1.2rem;
  }
  
  .program-title {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>