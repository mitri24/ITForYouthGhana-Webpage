<template>
  <main class="programs-page">
    <section class="hero-header">
      <div class="container">
        <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana" class="hero-logo">
        <h1 class="hero-title">Launch Your Tech Career</h1>
        <p class="hero-subtitle">Join 500+ graduates now working at top companies</p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">500+</div>
            <div class="stat-label">Graduates Employed</div>
          </div>
          <div class="stat">
            <div class="stat-number">95%</div>
            <div class="stat-label">Job Placement Rate</div>
          </div>
          <div class="stat">
            <div class="stat-number">$60</div>
            <div class="stat-label">Monthly Investment</div>
          </div>
        </div>
        <button class="hero-cta">Start Your Journey Today</button>
      </div>
    </section>


    <section class="value-section">
      <div class="container">
        <h2 class="value-title">Why Choose IT for Youth?</h2>
        <div class="value-grid">
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Fast Track to Employment</h3>
            <p>Get job-ready in just 6 months with practical, industry-relevant skills</p>
          </div>
          <div class="value-card">
            <div class="value-icon">💰</div>
            <h3>Affordable Excellence</h3>
            <p>Premium training at just GHS 1,000 - with payment assistance available</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Real Job Connections</h3>
            <p>Direct access to hiring partners and job placement support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <h2 class="pricing-title">Investment in Your Future</h2>
        <div class="pricing-card">
          <div class="price-highlight">
            <span class="currency">GHS</span>
            <span class="amount">1,000</span>
            <span class="period">Total</span>
          </div>
          <div class="price-breakdown">Only GHS 167/month for 6 months</div>
          <ul class="price-includes">
            <li>✓ Complete 6-month training</li>
            <li>✓ All materials & resources</li>
            <li>✓ Job placement assistance</li>
            <li>✓ Lifetime community access</li>
            <li>✓ 1-on-1 mentoring support</li>
          </ul>
          <div class="urgency">⚡ Limited spots - Next cohort starts February 10th</div>
        </div>
      </div>
    </section>

    <section class="programs-section">
      <div class="container">
        <h2 class="programs-title">Choose Your Path to Success</h2>
        <p class="programs-subtitle">All programs include job placement support & lifetime community access</p>
        
        <div class="programs-grid">
          <div class="program-card" v-for="program in mainPrograms" :key="program.id">
            <div class="program-header">
              <h3 class="program-name">{{ program.title }}</h3>
              <div class="program-badge">Most Popular</div>
            </div>
            <div class="program-outcome">{{ program.outcome }}</div>
            <div class="program-skills">
              <span v-for="skill in program.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
            <div class="program-price">
              <span class="price-amount">GHS 1,000</span>
              <span class="price-period">6 months</span>
            </div>
            <button class="program-apply-btn">Secure Your Spot</button>
          </div>
        </div>
        
        <div class="guarantee">
          <h3>🎯 Our Promise to You</h3>
          <p>95% of our graduates find employment within 3 months or get additional support until they do</p>
        </div>
      </div>
    </section>

    <section class="apply-section">
      <div class="container">
        <h2 class="apply-title">Ready to Start?</h2>
        <p class="apply-subtitle">Join our next cohort starting February 10th, 2025</p>
        <div class="apply-steps">
          <div class="step">1. Choose program</div>
          <div class="arrow">→</div>
          <div class="step">2. Apply online</div>
          <div class="arrow">→</div>
          <div class="step">3. Pay & start learning</div>
        </div>
        <button class="final-cta">APPLY NOW - LIMITED SPOTS</button>
        <p class="contact-note">Questions? WhatsApp us: +233 123 456 789</p>
      </div>
    </section>
    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import ScrollToTop from '../components/ScrollToTop.vue'


const mainPrograms = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    outcome: 'Build complete web applications from scratch',
    skills: ['Python', 'JavaScript', 'React', 'Databases']
  },
  {
    id: 2,
    title: 'Data Analyst',
    outcome: 'Transform data into business insights',
    skills: ['Python', 'Power BI', 'Excel', 'SQL']
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    outcome: 'Design user-friendly digital experiences',
    skills: ['Figma', 'Adobe XD', 'WordPress', 'CSS']
  }
]

</script>

<style scoped>
.programs-page {
  padding-top: 70px;
  background: #1a2338;
  min-height: 100vh;
  color: #f9f8f9;
}

.hero-header {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(135deg, #1a2338 0%, #035eac 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(249, 248, 249, 0.9);
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #8cb5da;
  line-height: 1;
}

.stat-label {
  color: rgba(249, 248, 249, 0.8);
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

.hero-cta {
  background: #f9f8f9;
  color: #1a2338;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.value-section {
  padding: 4rem 0;
  background: rgba(3, 94, 172, 0.05);
}

.value-title {
  text-align: center;
  font-size: 2.5rem;
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 3rem;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.value-card {
  background: rgba(249, 248, 249, 0.08);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #f9f8f9;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.value-card p {
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.5;
  font-size: 1rem;
}

.pricing-section {
  padding: 4rem 0;
  background: rgba(3, 94, 172, 0.05);
  text-align: center;
}

.pricing-title {
  font-size: 2.5rem;
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 3rem;
}

.pricing-card {
  max-width: 500px;
  margin: 0 auto;
  background: rgba(249, 248, 249, 0.08);
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid rgba(140, 181, 218, 0.3);
  backdrop-filter: blur(15px);
}

.price-highlight {
  margin-bottom: 1.5rem;
}

.currency {
  font-size: 1.5rem;
  color: #8cb5da;
  font-weight: 600;
}

.amount {
  font-size: 4rem;
  color: #f9f8f9;
  font-weight: 700;
  margin: 0 0.5rem;
}

.period {
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.7);
  font-weight: 500;
}

.price-breakdown {
  color: #8cb5da;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.price-includes {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
}

.price-includes li {
  color: rgba(249, 248, 249, 0.9);
  padding: 0.5rem 0;
  font-size: 1.1rem;
}

.urgency {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
}

.programs-section {
  padding: 4rem 0;
}

.programs-title {
  text-align: center;
  font-size: 2.8rem;
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 1rem;
}

.programs-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.8);
  margin-bottom: 3rem;
}

.program-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.program-name {
  font-size: 1.5rem;
  color: #f9f8f9;
  font-weight: 600;
  margin: 0;
}

.program-badge {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.program-outcome {
  color: #8cb5da;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.program-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.skill-tag {
  background: rgba(140, 181, 218, 0.2);
  color: #8cb5da;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.program-price {
  margin-bottom: 2rem;
  text-align: center;
}

.price-amount {
  font-size: 2rem;
  color: #f9f8f9;
  font-weight: 700;
  margin-right: 0.5rem;
}

.price-period {
  color: rgba(249, 248, 249, 0.7);
  font-size: 1rem;
}

.program-apply-btn {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.program-apply-btn:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

.guarantee {
  text-align: center;
  margin-top: 4rem;
  background: rgba(140, 181, 218, 0.1);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(140, 181, 218, 0.3);
}

.guarantee h3 {
  color: #f9f8f9;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.guarantee p {
  color: rgba(249, 248, 249, 0.9);
  font-size: 1.1rem;
  margin: 0;
}

.apply-section {
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.apply-title {
  font-size: 2.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
}

.apply-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.apply-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.step {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
}

.arrow {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.final-cta {
  background: white;
  color: #035eac;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.final-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.contact-note {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.program-card {
  background: rgba(249, 248, 249, 0.08);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.5);
}

.event-card {
  background: rgba(249, 248, 249, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  text-align: center;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.event-status {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.event-card.upcoming .event-status {
  background: rgba(32, 113, 184, 0.3);
  color: #8cb5da;
}

.event-card .event-status:not(.upcoming) {
  background: rgba(140, 181, 218, 0.2);
  color: rgba(249, 248, 249, 0.8);
}

.event-title {
  font-size: 1.3rem;
  color: #f9f8f9;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.event-date {
  color: #8cb5da;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.event-description {
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.event-btn {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.event-btn:hover:not(.disabled) {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

.event-btn.disabled {
  background: rgba(140, 181, 218, 0.3);
  cursor: not-allowed;
}

.apply-btn {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
}

.apply-btn:hover:not(.disabled) {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

.apply-btn.disabled {
  background: rgba(140, 181, 218, 0.3);
  cursor: not-allowed;
}

.program-status {
  color: #8cb5da;
  font-size: 0.9rem;
  font-weight: 600;
}

.program-date {
  color: rgba(249, 248, 249, 0.7);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .programs-page {
    padding-top: 60px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .tab-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  
  .tab-btn {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 3rem 0;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .program-card {
    padding: 1.5rem;
  }
  
  .program-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 1024px) {
  .hero-stats {
    gap: 2rem;
  }
  
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .value-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-header {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .apply-steps {
    flex-direction: column;
    gap: 1rem;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 480px) {
  .hero-header {
    padding: 2.5rem 0;
  }
  
  .hero-logo {
    height: 60px;
    margin-bottom: 1.5rem;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .programs-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .program-card {
    padding: 1.5rem;
    height: auto;
  }
  
  .pricing-card {
    padding: 2rem 1.5rem;
  }
  
  .amount {
    font-size: 3rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>