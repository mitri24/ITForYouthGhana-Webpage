<template>
  <main class="about-page">
    <!-- Hero Section -->
    <section class="hero-about">
      <div class="container">
        <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana" class="hero-logo">
        <h1 class="hero-title">Empowering Ghana's Digital Future</h1>
        <p class="hero-subtitle">Bridging the digital divide through accessible technology education for underserved youth</p>
        <div class="hero-metrics">
          <div class="metric">
            <span class="metric-number">450+</span>
            <span class="metric-label">Youth Trained</span>
          </div>
          <div class="metric">
            <span class="metric-number">40%</span>
            <span class="metric-label">Female Participation</span>
          </div>
          <div class="metric">
            <span class="metric-number">95%</span>
            <span class="metric-label">Employment Rate</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision">
      <div class="container">
        <div class="mission-vision-grid">
          <div class="mission-card">
            <h2 class="card-title">Our Mission</h2>
            <p class="card-content">
              Empowering underserved youth with high-quality IT education and career development. 
              We foster innovation, digital entrepreneurship, and equitable opportunities for all.
            </p>
          </div>
          <div class="vision-card">
            <h2 class="card-title">Our Vision</h2>
            <p class="card-content">
              A future where every youth has access to transformative technology education, 
              driving innovation and building sustainable careers in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Impact -->
    <section class="impact-showcase">
      <div class="container">
        <h2 class="section-title">Our Impact in Numbers</h2>
        <div class="impact-grid">
          <div class="impact-item">
            <div class="impact-icon">🎓</div>
            <h3>Tech Skills Training</h3>
            <p>200 youth adults equipped with coding, web development, and data analytics skills</p>
          </div>
          <div class="impact-item">
            <div class="impact-icon">🏫</div>
            <h3>School Outreach</h3>
            <p>800 students inspired through workshops in 20 schools across Ghana</p>
          </div>
          <div class="impact-item">
            <div class="impact-icon">👩‍💻</div>
            <h3>Gender Inclusion</h3>
            <p>Breaking barriers with 40% female enrollment in our programs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="approach-section">
      <div class="container">
        <h2 class="section-title">How We Make a Difference</h2>
        <div class="approach-grid">
          <div class="approach-card">
            <div class="approach-number">01</div>
            <h3>Project-Based Learning</h3>
            <p>Real-world projects in coding, app development, and digital marketing</p>
          </div>
          <div class="approach-card">
            <div class="approach-number">02</div>
            <h3>Industry Mentorship</h3>
            <p>Guidance from professionals providing career insights and support</p>
          </div>
          <div class="approach-card">
            <div class="approach-number">03</div>
            <h3>Practical Internships</h3>
            <p>Real workplace experience through local business partnerships</p>
          </div>
          <div class="approach-card">
            <div class="approach-number">04</div>
            <h3>Entrepreneurial Development</h3>
            <p>Teaching youth to launch tech ventures and solve local challenges</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Meet Our Leadership</h2>
        <div class="team-content">
          <div class="team-lead">
            <h3>Peter Duodu</h3>
            <p class="team-role">Executive Director & Program Lead</p>
            <p class="team-bio">Master's in Accounting and Financial Research with extensive experience in youth training and digital inclusion</p>
          </div>
          <div class="team-features">
            <div class="team-feature">
              <span class="feature-icon">👥</span>
              <span>Experienced Board of Directors</span>
            </div>
            <div class="team-feature">
              <span class="feature-icon">💻</span>
              <span>Software & Computer Engineers</span>
            </div>
            <div class="team-feature">
              <span class="feature-icon">🌍</span>
              <span>International Mentorship Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container">
        <h2 class="cta-title">Join Our Mission</h2>
        <p class="cta-subtitle">Partner with us to transform lives and build Ghana's digital future</p>
        <div class="cta-actions">
          <button class="btn btn-primary">Donate Now</button>
          <button class="btn btn-secondary">Become a Partner</button>
        </div>
      </div>
    </section>

    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import ScrollToTop from '../components/ScrollToTop.vue'
</script>

<style scoped>
.about-page {
  padding-top: 70px;
  background: linear-gradient(180deg, #0f1419 0%, #1a2338 50%, #243447 100%);
  min-height: 100vh;
  color: #f9f8f9;
}

/* Hero Section */
.hero-about {
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

.hero-about::before {
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-metrics {
  display: flex;
  justify-content: center;
  gap: 3rem;
  position: relative;
  z-index: 2;
}

.metric {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  border: 1px solid rgba(140, 181, 218, 0.15);
  transition: all 0.3s ease;
  min-width: 120px;
}

.metric:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(140, 181, 218, 0.3);
}

.metric-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8cb5da;
  line-height: 1;
}

.metric-label {
  display: block;
  color: rgba(249, 248, 249, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

/* Mission & Vision */
.mission-vision {
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

.mission-vision::before {
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

.mission-vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.mission-card,
.vision-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.mission-card::before,
.vision-card::before {
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

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.mission-card:hover::before,
.vision-card:hover::before {
  transform: scaleX(1);
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.card-content {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(249, 248, 249, 0.9);
}

/* Impact Showcase */
.impact-showcase {
  padding: 6rem 0;
  position: relative;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.impact-item {
  text-align: center;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.impact-item::before {
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

.impact-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.impact-item:hover::before {
  transform: scaleX(1);
}

.impact-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.impact-item h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
}

.impact-item p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(249, 248, 249, 0.9);
}

/* Approach Section */
.approach-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(36, 52, 71, 0.92) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.approach-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 75%, rgba(140, 181, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(3, 94, 172, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.approach-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.approach-card::before {
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

.approach-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.approach-card:hover::before {
  transform: scaleX(1);
}

.approach-number {
  display: inline-block;
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 40px;
  text-align: center;
  margin-bottom: 1.5rem;
}

.approach-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
}

.approach-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(249, 248, 249, 0.9);
}

/* Team Section */
.team-section {
  padding: 6rem 0;
  position: relative;
}

.team-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.team-lead {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
}

.team-lead h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #8cb5da;
  margin-bottom: 0.5rem;
}

.team-role {
  font-size: 1.2rem;
  color: #f9f8f9;
  font-weight: 600;
  margin-bottom: 1rem;
}

.team-bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(249, 248, 249, 0.9);
}

.team-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.team-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(140, 181, 218, 0.1);
  transition: all 0.3s ease;
}

.team-feature:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
}

.feature-icon {
  font-size: 2rem;
  width: 50px;
  text-align: center;
}

.team-feature span:last-child {
  font-size: 1.1rem;
  color: #f9f8f9;
  font-weight: 600;
}

/* CTA Section */
.about-cta {
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

.about-cta::before {
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

.cta-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.btn {
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  min-width: 200px;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #035eac;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(3, 94, 172, 0.1), transparent);
  transition: left 0.6s;
}

.btn-primary:hover {
  background: white;
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .mission-vision-grid {
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .approach-grid {
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .team-content {
    gap: 3rem;
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .hero-metrics {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .mission-vision-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .impact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .team-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-about {
    padding: 4rem 0;
  }
  
  .mission-vision {
    padding: 4rem 0;
  }
  
  .impact-showcase {
    padding: 4rem 0;
  }
  
  .approach-section {
    padding: 4rem 0;
  }
  
  .team-section {
    padding: 4rem 0;
  }
  
  .about-cta {
    padding: 4rem 0;
  }
  
  .mission-card,
  .vision-card {
    padding: 2rem;
  }
  
  .impact-item {
    padding: 2rem;
  }
  
  .approach-card {
    padding: 2rem;
  }
  
  .team-lead {
    padding: 2rem;
  }
}
</style>
