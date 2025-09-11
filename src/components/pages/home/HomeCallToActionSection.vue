<template>
  <section class="cta">
    <div class="container">
      <div class="content-split">
        <div class="text-content">
          <h2 class="section-title">Transform Your Future</h2>
          <p class="cta-intro">
            Join hundreds of youth who are already building their tech careers with us and become part of Ghana's digital revolution.
          </p>
          
          <div class="cta-benefits">
            <div class="benefit-item">
              <div class="benefit-number">01</div>
              <div class="benefit-text">
                <h4>Free Training Programs</h4>
                <p>No cost barrier to your tech education</p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-number">02</div>
              <div class="benefit-text">
                <h4>Industry Connections</h4>
                <p>Direct pathways to job opportunities</p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-number">03</div>
              <div class="benefit-text">
                <h4>Lifetime Support</h4>
                <p>Ongoing mentorship and career guidance</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
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

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(25, 90, 165, 0.02) 0%, rgba(209, 34, 85, 0.02) 100%),
    radial-gradient(circle at 30% 70%, rgba(143, 178, 214, 0.05) 0%, transparent 50%);
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
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.cta-intro {
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 400;
}

.cta-benefits {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(143, 178, 214, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(143, 178, 214, 0.12);
  border-color: rgba(25, 90, 165, 0.2);
  transform: translateX(8px);
}

.benefit-number {
  font-size: 1.5rem;
  font-weight: 800;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
  color: #ffffff;
}

.benefit-text h4 {
  font-size: 1.2rem;
  color: #195aa5;
  margin-bottom: 0.3rem;
  font-weight: 700;
}

.benefit-text p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

.action-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 24px;
  padding: 3rem 2rem;
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.15);
  border: 3px solid rgba(143, 178, 214, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  max-width: 400px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}


.cta-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 24px 64px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
}

.card-title {
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 800;
}

.card-subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  min-width: 180px;
}

.btn.large {
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  min-width: 220px;
}

.btn-primary {
  background: rgba(26, 35, 56, 0.9);
  color: white;
  box-shadow: 0 10px 30px rgba(26, 35, 56, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn-primary:hover {
  background: rgba(15, 20, 25, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(26, 35, 56, 0.7);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-outline {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .cta {
    padding: 4rem 0;
  }
  
  .cta-title {
    font-size: 2.2rem;
  }
  
  .cta-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn.large {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .cta {
    padding: 3rem 0;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
  
  .cta-subtitle {
    font-size: 1rem;
  }
}</style>