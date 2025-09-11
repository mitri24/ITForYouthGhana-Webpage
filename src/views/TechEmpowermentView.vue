<template>
  <div class="tech-empowerment">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Tech Empowerment Initiative</h1>
          <p class="hero-subtitle">
            Equipping Ghanaian Youth for the Future - Transform your career with comprehensive IT training, hands-on projects, and industry internships
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">250+</span>
              <span class="stat-label">Youths Trained</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">6</span>
              <span class="stat-label">Months Program</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">70+</span>
              <span class="stat-label">Girls Trained</span>
            </div>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary">Enroll Now</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Overview -->
    <section class="program-overview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Program Overview</h2>
          <p class="section-subtitle">
            The Tech Empowerment Initiative is IT For Youth Ghana's flagship program dedicated to bridging the digital divide by equipping young individuals with transformative IT skills and entrepreneurial knowledge.
          </p>
        </div>
        
        <div class="overview-grid">
          <div class="overview-card">
            <div class="card-icon">⚡</div>
            <h3>Technical Mastery</h3>
            <p>Comprehensive training in coding, programming, data analytics, graphic design, and web development</p>
          </div>
          <div class="overview-card">
            <div class="card-icon">💼</div>
            <h3>Career Readiness</h3>
            <p>Project-based learning helps participants build professional portfolios and develop in-demand digital skills</p>
          </div>
          <div class="overview-card">
            <div class="card-icon">🚀</div>
            <h3>Entrepreneurship Development</h3>
            <p>Skills in digital marketing, business development, and social media management, fostering self-reliance and innovation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Structure -->
    <section class="program-structure">
      <div class="container">
        <div class="content-split">
          <div class="text-content">
            <h2 class="section-title">Program Structure</h2>
            <p class="section-desc">
              The Tech Empowerment Initiative runs for a total of six months, strategically designed to maximize learning outcomes and industry preparedness.
            </p>
            
            <div class="structure-list">
              <div class="structure-item">
                <div class="item-number">4</div>
                <div class="item-content">
                  <h4>Months of Intensive Training</h4>
                  <p>In-person and online sessions focused on hands-on learning, ensuring accessibility for remote participants</p>
                </div>
              </div>
              <div class="structure-item">
                <div class="item-number">2</div>
                <div class="item-content">
                  <h4>Month Internship</h4>
                  <p>Partnerships with reputable firms provide participants with invaluable real-world experience and industry exposure</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="stats-visual">
            <div class="stats-grid">
              <div class="stat-card primary">
                <div class="stat-number">250</div>
                <div class="stat-label">Youths Trained</div>
              </div>
              <div class="stat-card secondary">
                <div class="stat-number">70</div>
                <div class="stat-label">Girls Trained</div>
              </div>
              <div class="stat-card accent">
                <div class="stat-number">180</div>
                <div class="stat-label">Boys Trained</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience -->
    <section class="target-audience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Who Can Apply</h2>
          <p class="section-subtitle">
            The initiative serves youth aged 18-24, prioritizing underserved communities and breaking barriers in tech education
          </p>
        </div>
        
        <div class="audience-grid">
          <div class="audience-card">
            <div class="card-icon">👩‍💻</div>
            <h3>Women & Girls</h3>
            <p>Breaking barriers in the tech industry and empowering young women to pursue careers in technology</p>
          </div>
          <div class="audience-card">
            <div class="card-icon">🎓</div>
            <h3>Financially Disadvantaged</h3>
            <p>Individuals with limited access to formal education seeking life-changing opportunities</p>
          </div>
          <div class="audience-card">
            <div class="card-icon">♿</div>
            <h3>Persons with Disabilities</h3>
            <p>Inclusive learning opportunities designed to accommodate diverse needs and abilities</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">Student Testimonials</h2>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <blockquote>
              "The hands-on approach to training was a game-changer for me. I wasn't just studying theory; I was actively applying what I learned through practical exercises and projects."
            </blockquote>
            <div class="testimonial-author">
              <h4>Belinda</h4>
              <p>Overall Best Student</p>
            </div>
          </div>
          <div class="testimonial-card">
            <blockquote>
              "The instructors are true experts in their fields. Their ability to break down complex topics into understandable, real-world examples made learning both enjoyable and effective."
            </blockquote>
            <div class="testimonial-author">
              <h4>Gloria</h4>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Launch Your Tech Career?</h2>
          <p>The Tech Empowerment Initiative is your gateway to acquiring the skills needed to thrive in the digital economy.</p>
          <div class="cta-actions">
            <button class="btn btn-primary">Enroll Now</button>
            <button class="btn btn-secondary">Partner with Us</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Tech Empowerment Initiative | IT For Youth Ghana',
  meta: [
    {
      name: 'description',
      content: 'Transform your future with our 6-month Tech Empowerment Initiative. Comprehensive IT training, internships, and career preparation for Ghanaian youth aged 18-24.'
    },
    {
      name: 'keywords',
      content: 'tech training Ghana, IT education, youth empowerment, coding bootcamp, programming skills, digital literacy, tech careers Ghana'
    }
  ]
})
</script>

<style scoped>
/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  padding: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/pictures/UX2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  width: 100%;
  padding: 2rem 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(143, 178, 214, 0.5);
  transform: translateY(-2px);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #8fb2d6;
  line-height: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #ffffff;
  font-weight: 600;
  margin-top: 0.3rem;
  letter-spacing: 0.3px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.4);
  border: 2px solid transparent;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(209, 34, 85, 0.6);
  border-color: #8fb2d6;
}

.btn-secondary {
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  border: 2px solid rgba(143, 178, 214, 0.6);
  backdrop-filter: blur(10px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-secondary:hover {
  background: rgba(143, 178, 214, 0.3);
  border-color: #8fb2d6;
  color: #ffffff;
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(143, 178, 214, 0.4);
}

/* Program Overview */
.program-overview {
  padding: 6rem 0;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.overview-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 20px;
  border: 2px solid rgba(143, 178, 214, 0.2);
  transition: all 0.4s ease;
}

.overview-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(25, 90, 165, 0.15);
  border-color: #195aa5;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.overview-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #195aa5;
  margin-bottom: 1rem;
}

.overview-card p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

/* Program Structure */
.program-structure {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
}

.content-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content {
  color: #000000;
}

.section-desc {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.structure-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.structure-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid rgba(143, 178, 214, 0.1);
  transition: all 0.3s ease;
}

.structure-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(25, 90, 165, 0.1);
  border-color: rgba(143, 178, 214, 0.3);
}

.item-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #d12255;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
}

.item-content h4 {
  font-size: 1.3rem;
  color: #195aa5;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.item-content p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.stat-card.primary {
  background: linear-gradient(135deg, rgba(25, 90, 165, 0.1) 0%, rgba(143, 178, 214, 0.05) 100%);
  border: 2px solid rgba(25, 90, 165, 0.2);
  grid-column: span 2;
}

.stat-card.secondary {
  background: linear-gradient(135deg, rgba(209, 34, 85, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 2px solid rgba(209, 34, 85, 0.2);
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.1) 0%, rgba(25, 90, 165, 0.05) 100%);
  border: 2px solid rgba(143, 178, 214, 0.2);
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(25, 90, 165, 0.2);
}

.stat-card .stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #d12255;
  margin-bottom: 0.5rem;
  text-shadow: none;
}

.stat-card .stat-label {
  font-size: 1rem;
  color: #000000;
  font-weight: 600;
  text-shadow: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Target Audience */
.target-audience {
  padding: 6rem 0;
  background: #ffffff;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.audience-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 20px;
  border: 2px solid rgba(143, 178, 214, 0.2);
  transition: all 0.4s ease;
}

.audience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(25, 90, 165, 0.15);
  border-color: #195aa5;
}

.audience-card .card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.audience-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #195aa5;
  margin-bottom: 1rem;
}

.audience-card p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 20px;
  border: 2px solid rgba(143, 178, 214, 0.2);
  transition: all 0.4s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(25, 90, 165, 0.15);
  border-color: #195aa5;
}

.testimonial-card blockquote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author h4 {
  font-size: 1.2rem;
  color: #d12255;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.testimonial-author p {
  color: #195aa5;
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/pictures/UX3.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.cta-content {
  text-align: center;
  color: #ffffff;
}

.cta-content h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .content-split {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .structure-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-card.primary {
    grid-column: span 1;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>