<template>
  <section class="challenge">
    <div class="container">
      <h2 class="section-title">The Challenge We Address</h2>
      <p class="challenge-intro">
        Access to quality technology education remains limited in Ghana, 
        especially for students in underserved communities.
      </p>
      
      <div class="stats-row">
        <div class="challenge-stat">
          <div class="stat-number">30%</div>
          <div class="stat-label">Limited Access</div>
          <p class="stat-desc">Only 30% of students have access to tech education</p>
        </div>
        
        <div class="challenge-stat">
          <div class="stat-number">20%</div>
          <div class="stat-label">Gender Gap</div>
          <p class="stat-desc">Fewer than 20% of women pursue tech careers</p>
        </div>
        
        <div class="challenge-stat">
          <div class="stat-number">60%</div>
          <div class="stat-label">Skills Shortage</div>
          <p class="stat-desc">Companies report shortage of skilled tech workers</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.challenge {
  padding: 3.5rem 0;
  background: linear-gradient(135deg, #1a2338 0%, rgba(26, 35, 56, 0.95) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  color: #f9f8f9;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.challenge-intro {
  text-align: center;
  font-size: 1.3rem;
  color: rgba(249, 248, 249, 0.9);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.challenge-stat {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  background: rgba(249, 248, 249, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(140, 181, 218, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.challenge-stat:hover {
  border-color: #8cb5da;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #8cb5da;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 1.3rem;
  color: #f9f8f9;
  font-weight: 600;
  margin-bottom: 0.8rem;
  letter-spacing: 0.5px;
}

.stat-desc {
  font-size: 1rem;
  color: rgba(249, 248, 249, 0.8);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .challenge {
    padding: 3rem 0;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .challenge-stat {
    height: 180px;
    padding: 1.5rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .challenge-intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .challenge {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .challenge-intro {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 1.1rem;
  }
}
</style>