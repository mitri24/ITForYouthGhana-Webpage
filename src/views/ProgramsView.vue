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
  background: linear-gradient(180deg, #0f1419 0%, #1a2338 50%, #243447 100%);
  min-height: 100vh;
  color: #f9f8f9;
}

.hero-header {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #0f1419 0%, #1a2338 50%, #035eac 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.hero-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(140, 181, 218, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(3, 94, 172, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: rgba(249, 248, 249, 0.9);
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  border: 1px solid rgba(140, 181, 218, 0.15);
  transition: all 0.3s ease;
  min-width: 120px;
}

.stat:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(140, 181, 218, 0.3);
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
  background: rgba(255, 255, 255, 0.95);
  color: #1a2338;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.hero-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(3, 94, 172, 0.1), transparent);
  transition: left 0.6s;
}

.hero-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  background: white;
}

.hero-cta:hover::before {
  left: 100%;
}

.value-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(36, 52, 71, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(15, 20, 25, 0.92) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.value-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(3, 94, 172, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 80% 80%, rgba(140, 181, 218, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.value-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.02em;
}

.value-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #035eac, #8cb5da);
  border-radius: 2px;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.value-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.value-card::before {
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

.value-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.value-card:hover::before {
  transform: scaleX(1);
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
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(36, 52, 71, 0.92) 100%);
  text-align: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.pricing-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 60% 40%, rgba(140, 181, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(3, 94, 172, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.pricing-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.02em;
}

.pricing-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #035eac, #8cb5da);
  border-radius: 2px;
}

.pricing-card {
  max-width: 550px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3.5rem;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
  border-color: rgba(140, 181, 218, 0.3);
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
  padding: 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(3, 94, 172, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 4px 15px rgba(3, 94, 172, 0.3); }
  50% { box-shadow: 0 8px 25px rgba(3, 94, 172, 0.5); }
  100% { box-shadow: 0 4px 15px rgba(3, 94, 172, 0.3); }
}

.programs-section {
  padding: 6rem 0;
  position: relative;
}

.programs-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #f9f8f9;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
}

.programs-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #035eac, #8cb5da);
  border-radius: 2px;
}

.programs-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: rgba(249, 248, 249, 0.8);
  margin-bottom: 4rem;
  line-height: 1.6;
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
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(3, 94, 172, 0.4);
}

.program-apply-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.program-apply-btn:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(3, 94, 172, 0.6);
}

.program-apply-btn:hover::before {
  left: 100%;
}

.guarantee {
  text-align: center;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.guarantee:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.3);
}

.guarantee h3 {
  color: #f9f8f9;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.guarantee p {
  color: rgba(249, 248, 249, 0.9);
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.6;
}

.apply-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 50%, #8cb5da 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.apply-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.apply-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.02em;
}

.apply-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.apply-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.step {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 1.2rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.step:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.arrow {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.final-cta {
  background: rgba(255, 255, 255, 0.95);
  color: #035eac;
  border: none;
  padding: 1.5rem 3.5rem;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.final-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(3, 94, 172, 0.1), transparent);
  transition: left 0.6s;
}

.final-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  background: white;
}

.final-cta:hover::before {
  left: 100%;
}

.contact-note {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
  position: relative;
  z-index: 2;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.program-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.program-card::before {
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

.program-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.program-card:hover::before {
  transform: scaleX(1);
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
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .value-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .hero-header {
    padding: 4rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto 3rem;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .value-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .apply-steps {
    flex-direction: column;
    gap: 1rem;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .pricing-section {
    padding: 4rem 0;
  }
  
  .value-section {
    padding: 4rem 0;
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