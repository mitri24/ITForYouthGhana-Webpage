<template>
  <section class="challenge">
    <div class="container">
      <div class="content-split">
        <div class="text-content">
          <h2 class="section-title">What We Do</h2>
          <p class="challenge-intro">
            At IT For Youth Ghana, we provide cutting-edge tech training programs to empower young people, with a focus on women and underserved communities.
          </p>
        </div>
          
        <div class="initiatives-visual">
          <div class="initiatives-grid">
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Girls in Tech Programs</h4>
                <p class="initiative-desc">Empowering young girls with confidence and technical skills to thrive in tech</p>
                <RouterLink to="/girls-in-tech" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
            
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Code Impact Challenge</h4>
                <p class="initiative-desc">Students develop innovative digital solutions to societal issues</p>
                <RouterLink to="/code-impact-challenge" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
            
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Tech Outreach Initiative</h4>
                <p class="initiative-desc">Raising tech awareness among JHS and SHS students across Ghana</p>
                <RouterLink to="/tech-outreach" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
            
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Tech Empowerment Initiative</h4>
                <p class="initiative-desc">Comprehensive technology skills development program for youth</p>
                <RouterLink to="/tech-empowerment" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
            
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Advocacy</h4>
                <p class="initiative-desc">Promoting tech education policy and digital inclusion across Ghana</p>
                <RouterLink to="/advocacy" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
            
            <div class="initiative-card">
              <div class="initiative-content">
                <h4 class="initiative-title">Rural Tech Connect</h4>
                <p class="initiative-desc">Bridging the digital divide in underserved rural communities</p>
                <RouterLink to="/rural-tech-connect" class="initiative-btn">Learn More</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.challenge {
  min-height: 100vh;
  max-height: 100vh;
  padding: 0;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/pictures/UX3.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  position: relative;
  z-index: 2;
}

.content-split {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-height: calc(100vh - 4rem);
}

.text-content {
  color: #ffffff;
  text-align: center;
  max-width: 700px;
  flex-shrink: 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}


.challenge-intro {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
  line-height: 1.5;
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.program-item {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.8rem;
  transition: all 0.4s ease;
}

.program-item:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(140, 181, 218, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.program-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(3, 94, 172, 0.3);
  padding: 10px;
}

.program-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.program-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.program-title {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.program-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.program-btn {
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.program-btn:hover {
  background: linear-gradient(135deg, #8cb5da 0%, #035eac 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(3, 94, 172, 0.4);
}

.initiatives-visual {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
}

.initiative-card {
  background: linear-gradient(135deg, rgba(3, 94, 172, 0.15) 0%, rgba(140, 181, 218, 0.08) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(140, 181, 218, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  height: fit-content;
}


.initiative-card:hover {
  background: linear-gradient(135deg, rgba(3, 94, 172, 0.25) 0%, rgba(140, 181, 218, 0.15) 100%);
  border-color: rgba(140, 181, 218, 0.6);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(3, 94, 172, 0.3),
    0 0 30px rgba(140, 181, 218, 0.2);
}

.initiative-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-radius: 16px;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(3, 94, 172, 0.3);
  padding: 12px;
}

.initiative-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.initiative-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.initiative-title {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  line-height: 1.3;
}

.initiative-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.initiative-btn {
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(3, 94, 172, 0.3);
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: inline-block;
}

.initiative-btn:hover {
  background: linear-gradient(135deg, #8cb5da 0%, #035eac 100%);
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(3, 94, 172, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-split {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .programs-list {
    gap: 1.5rem;
  }
  
  .program-item {
    padding: 1.5rem;
  }
  
  .initiatives-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .initiative-card {
    padding: 1.5rem;
  }
  
  .initiative-title {
    font-size: 1.1rem;
  }
  
  .initiative-desc {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .challenge {
    padding: 4rem 0;
  }
  
  .program-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.2rem;
  }
  
  .initiatives-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .initiative-card {
    padding: 1.2rem;
  }
  
  .initiative-title {
    font-size: 1rem;
  }
  
  .initiative-desc {
    font-size: 0.85rem;
  }
  
  .initiative-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
}
</style>
