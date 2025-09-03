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
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(36, 52, 71, 0.92) 100%);
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

.challenge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(3, 94, 172, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(140, 181, 218, 0.1) 0%, transparent 50%);
  pointer-events: none;
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
  padding: 2.5rem 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(140, 181, 218, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.challenge-stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #035eac, #8cb5da);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.challenge-stat:hover {
  border-color: rgba(140, 181, 218, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
}

.challenge-stat:hover::before {
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