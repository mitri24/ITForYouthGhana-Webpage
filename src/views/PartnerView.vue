<template>
  <main class="partner-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="content-split">
          <div class="hero-content">
            <h1 class="hero-title">Partner With Us</h1>
            <p class="hero-subtitle">
              Join forces with IT For Youth Ghana to drive meaningful change in Ghana's tech landscape. Together, we can empower the next generation of digital innovators and create lasting impact in underserved communities.
            </p>
            <div class="hero-highlight">
              <div class="highlight-icon">
                <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana Logo" class="logo-icon" />
              </div>
              <div class="highlight-text">
                <h4>Building Bridges to Success</h4>
                <p>Connect with us to create opportunities, share resources, and transform lives through technology education.</p>
              </div>
            </div>
          </div>
          
          <div class="hero-stats">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Active Partners</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">200%</div>
                <div class="stat-label">Impact Growth</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Countries Reached</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fixed Navigation Submenu -->
    <div class="partnership-navigation">
      <div class="nav-container">
        <div class="nav-tabs">
          <button 
            @click="switchTab('volunteers')" 
            :class="{ active: activeTab === 'volunteers' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.02 3.02 0 0 0 17.06 6H16.8c-.8 0-1.54.37-2.01.99l-.49.66c-.32.43-.85.71-1.45.71-.64 0-1.23-.32-1.58-.86L10.83 6c-.47-.63-1.21-1-2.01-1h-.26c-1.45 0-2.66 1.02-2.9 2.37L2.5 16H5v6h2v-6h1.5l-.85-7.15c-.07-.59.38-1.15.97-1.15h.26c.22 0 .42.1.55.27l.44.58c.56.75 1.44 1.2 2.38 1.2 1.12 0 2.11-.59 2.67-1.54l.49-.66c.13-.17.33-.27.55-.27h.26c.59 0 1.04.56.97 1.15L15.5 16H17v6h3z"/>
              </svg>
            </div>
            <span class="tab-text">Volunteers</span>
          </button>
          <button 
            @click="switchTab('organizations')" 
            :class="{ active: activeTab === 'organizations' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <span class="tab-text">Organizations</span>
          </button>
          <button 
            @click="switchTab('companies')" 
            :class="{ active: activeTab === 'companies' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </div>
            <span class="tab-text">Companies</span>
          </button>
          <button 
            @click="switchTab('institutions')" 
            :class="{ active: activeTab === 'institutions' }"
            class="nav-tab"
          >
            <div class="tab-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            </div>
            <span class="tab-text">Institutions</span>
          </button>
        </div>
        
        <div class="contact-cta">
          <button class="contact-btn">Get In Touch</button>
        </div>
      </div>
    </div>

    <!-- Volunteers Section -->
    <section v-if="activeTab === 'volunteers'" class="partnership-content volunteers-section">
      <div class="container">
        <h2 class="section-title">Individual Volunteers</h2>
        <p class="section-subtitle">Make a personal impact by sharing your skills, time, and passion for technology education.</p>
        
        <div class="opportunities-grid">
          <div class="opportunity-card">
            <div class="opportunity-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l1.4-1.4 3.2 3.2 8.2-8.2L19 7z"/>
              </svg>
            </div>
            <h4>Tech Mentorship</h4>
            <p>Guide young minds in their coding journey through one-on-one mentoring sessions and workshops.</p>
            <ul class="opportunity-features">
              <li>Flexible scheduling</li>
              <li>Remote or in-person options</li>
              <li>Impact tracking and feedback</li>
              <li>Professional development credits</li>
            </ul>
            <button class="opportunity-btn">Apply Now</button>
          </div>
          
          <div class="opportunity-card">
            <div class="opportunity-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4>Workshop Facilitator</h4>
            <p>Lead hands-on coding workshops and bootcamps in schools and community centers across Ghana.</p>
            <ul class="opportunity-features">
              <li>Curriculum provided</li>
              <li>Training and support</li>
              <li>Travel opportunities</li>
              <li>Community impact</li>
            </ul>
            <button class="opportunity-btn">Apply Now</button>
          </div>
          
          <div class="opportunity-card">
            <div class="opportunity-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67c-.11.14-.24.27-.37.38C11.22 4.13 10.67 4 10 4 8.9 4 8 4.9 8 6v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h4>Content Creator</h4>
            <p>Develop educational content, tutorials, and resources to support our digital learning initiatives.</p>
            <ul class="opportunity-features">
              <li>Creative freedom</li>
              <li>Global reach</li>
              <li>Portfolio building</li>
              <li>Collaborative environment</li>
            </ul>
            <button class="opportunity-btn">Apply Now</button>
          </div>
        </div>
        
        <div class="volunteer-benefits">
          <h3>Why Volunteer With Us?</h3>
          <div class="benefits-grid">
            <div class="benefit-item">
              <div class="benefit-icon">🌍</div>
              <h4>Global Impact</h4>
              <p>Be part of a movement transforming tech education across Africa</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🚀</div>
              <h4>Skill Development</h4>
              <p>Enhance your teaching, leadership, and cross-cultural communication skills</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🤝</div>
              <h4>Community</h4>
              <p>Join a network of passionate tech professionals and educators</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">📈</div>
              <h4>Recognition</h4>
              <p>Receive certificates and LinkedIn recommendations for your contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organizations Section -->
    <section v-if="activeTab === 'organizations'" class="partnership-content organizations-section">
      <div class="container">
        <h2 class="section-title">Non-Profit Organizations</h2>
        <p class="section-subtitle">Collaborate with fellow mission-driven organizations to amplify our collective impact.</p>
        
        <div class="partnership-types">
          <div class="partnership-card">
            <div class="partnership-header">
              <h4>Program Collaboration</h4>
              <div class="partnership-badge">Joint Initiatives</div>
            </div>
            <p>Partner with us to co-develop and deliver comprehensive tech education programs that serve broader communities.</p>
            <ul class="partnership-benefits">
              <li>Shared resources and expertise</li>
              <li>Expanded program reach</li>
              <li>Joint funding opportunities</li>
              <li>Knowledge exchange</li>
            </ul>
            <div class="partnership-examples">
              <h5>Success Stories:</h5>
              <div class="example-tags">
                <span class="example-tag">Girls in Tech Alliance</span>
                <span class="example-tag">Rural Education Network</span>
                <span class="example-tag">Youth Development Consortium</span>
              </div>
            </div>
          </div>
          
          <div class="partnership-card">
            <div class="partnership-header">
              <h4>Resource Sharing</h4>
              <div class="partnership-badge">Mutual Support</div>
            </div>
            <p>Exchange facilities, equipment, expertise, and volunteer networks to maximize efficiency and impact.</p>
            <ul class="partnership-benefits">
              <li>Cost-effective operations</li>
              <li>Access to specialized equipment</li>
              <li>Volunteer network expansion</li>
              <li>Best practices sharing</li>
            </ul>
            <div class="partnership-examples">
              <h5>Available Resources:</h5>
              <div class="example-tags">
                <span class="example-tag">Training Facilities</span>
                <span class="example-tag">Tech Equipment</span>
                <span class="example-tag">Expert Volunteers</span>
              </div>
            </div>
          </div>
          
          <div class="partnership-card">
            <div class="partnership-header">
              <h4>Advocacy & Awareness</h4>
              <div class="partnership-badge">Collective Voice</div>
            </div>
            <p>Join forces to advocate for digital inclusion policies and raise awareness about the importance of tech education.</p>
            <ul class="partnership-benefits">
              <li>Stronger advocacy voice</li>
              <li>Policy influence</li>
              <li>Media visibility</li>
              <li>Community engagement</li>
            </ul>
            <div class="partnership-examples">
              <h5>Current Campaigns:</h5>
              <div class="example-tags">
                <span class="example-tag">Digital Rights</span>
                <span class="example-tag">Tech Education Policy</span>
                <span class="example-tag">Gender Inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Companies Section -->
    <section v-if="activeTab === 'companies'" class="partnership-content companies-section">
      <div class="container">
        <h2 class="section-title">Corporate Partners</h2>
        <p class="section-subtitle">Partner with us to build sustainable tech talent pipelines while fulfilling your corporate social responsibility goals.</p>
        
        <div class="corporate-tiers">
          <div class="tier-card platinum">
            <div class="tier-header">
              <h4>Platinum Partnership</h4>
              <div class="tier-badge">$50,000+ annually</div>
            </div>
            <ul class="tier-benefits">
              <li>Named program sponsorship</li>
              <li>Dedicated recruitment pipeline</li>
              <li>Co-branded learning materials</li>
              <li>Executive mentorship program</li>
              <li>Quarterly impact reports</li>
              <li>Media recognition</li>
            </ul>
            <div class="tier-impact">
              <h5>Expected Impact:</h5>
              <p>Train 200+ students annually, 80% job placement rate</p>
            </div>
          </div>
          
          <div class="tier-card gold">
            <div class="tier-header">
              <h4>Gold Partnership</h4>
              <div class="tier-badge">$25,000+ annually</div>
            </div>
            <ul class="tier-benefits">
              <li>Workshop series sponsorship</li>
              <li>Intern placement program</li>
              <li>Employee volunteer opportunities</li>
              <li>Skills-based training tracks</li>
              <li>Bi-annual reports</li>
            </ul>
            <div class="tier-impact">
              <h5>Expected Impact:</h5>
              <p>Train 100+ students annually, skills certification program</p>
            </div>
          </div>
          
          <div class="tier-card silver">
            <div class="tier-header">
              <h4>Silver Partnership</h4>
              <div class="tier-badge">$10,000+ annually</div>
            </div>
            <ul class="tier-benefits">
              <li>Equipment and technology donations</li>
              <li>Guest speaker series</li>
              <li>Mentorship opportunities</li>
              <li>Corporate volunteering days</li>
              <li>Annual impact summary</li>
            </ul>
            <div class="tier-impact">
              <h5>Expected Impact:</h5>
              <p>Support 50+ students, equipment for 2 training centers</p>
            </div>
          </div>
        </div>
        
        <div class="corporate-benefits">
          <h3>Why Partner With IT For Youth Ghana?</h3>
          <div class="benefits-showcase">
            <div class="benefit-section">
              <h4>Talent Pipeline</h4>
              <p>Access to skilled, motivated graduates ready to contribute to your tech initiatives</p>
            </div>
            <div class="benefit-section">
              <h4>Brand Enhancement</h4>
              <p>Associate your brand with meaningful social impact and community development</p>
            </div>
            <div class="benefit-section">
              <h4>Tax Benefits</h4>
              <p>Leverage charitable contributions for tax advantages while making a difference</p>
            </div>
            <div class="benefit-section">
              <h4>Market Expansion</h4>
              <p>Build relationships and understanding in emerging African tech markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Educational Institutions Section -->
    <section v-if="activeTab === 'institutions'" class="partnership-content institutions-section">
      <div class="container">
        <h2 class="section-title">Educational Institutions</h2>
        <p class="section-subtitle">Collaborate with universities, schools, and training centers to create comprehensive educational pathways.</p>
        
        <div class="institution-partnerships">
          <div class="institution-card">
            <div class="institution-type">Universities & Colleges</div>
            <h4>Academic Integration</h4>
            <p>Integrate our practical tech training programs into your curriculum to bridge the gap between theory and industry practice.</p>
            <div class="partnership-features">
              <div class="feature-group">
                <h5>Program Features:</h5>
                <ul>
                  <li>Credit-bearing courses</li>
                  <li>Industry-standard curricula</li>
                  <li>Practical project work</li>
                  <li>Industry mentor network</li>
                </ul>
              </div>
              <div class="feature-group">
                <h5>Benefits:</h5>
                <ul>
                  <li>Enhanced graduate employability</li>
                  <li>Industry connections</li>
                  <li>Modern tech skills</li>
                  <li>Shared resources</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="institution-card">
            <div class="institution-type">Secondary Schools</div>
            <h4>Early Tech Exposure</h4>
            <p>Introduce students to technology careers through engaging workshops, camps, and after-school programs.</p>
            <div class="partnership-features">
              <div class="feature-group">
                <h5>Program Features:</h5>
                <ul>
                  <li>Age-appropriate coding workshops</li>
                  <li>STEM integration</li>
                  <li>Career guidance sessions</li>
                  <li>Tech club establishment</li>
                </ul>
              </div>
              <div class="feature-group">
                <h5>Benefits:</h5>
                <ul>
                  <li>Student engagement increase</li>
                  <li>Modern learning opportunities</li>
                  <li>Teacher development</li>
                  <li>Community recognition</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="institution-card">
            <div class="institution-type">Vocational Centers</div>
            <h4>Skills Enhancement</h4>
            <p>Upgrade existing vocational programs with digital skills training to prepare students for the modern workforce.</p>
            <div class="partnership-features">
              <div class="feature-group">
                <h5>Program Features:</h5>
                <ul>
                  <li>Digital literacy training</li>
                  <li>Tech integration workshops</li>
                  <li>Certification programs</li>
                  <li>Equipment sharing</li>
                </ul>
              </div>
              <div class="feature-group">
                <h5>Benefits:</h5>
                <ul>
                  <li>Modernized curriculum</li>
                  <li>Increased job placement</li>
                  <li>Higher earning potential</li>
                  <li>Industry relevance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="current-partners">
          <h3>Our Current Educational Partners</h3>
          <div class="partners-showcase">
            <div class="partner-logo">
              <div class="logo-placeholder">Accra Technical University</div>
            </div>
            <div class="partner-logo">
              <div class="logo-placeholder">Ghana Communication Technology University</div>
            </div>
            <div class="partner-logo">
              <div class="logo-placeholder">University of Cape Coast</div>
            </div>
            <div class="partner-logo">
              <div class="logo-placeholder">University of Education, Winneba</div>
            </div>
            <div class="partner-logo">
              <div class="logo-placeholder">University of Professional Studies</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="contact-cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Make an Impact Together?</h2>
          <p class="cta-subtitle">Let's discuss how we can collaborate to transform lives through technology education. Every partnership starts with a conversation.</p>
          <div class="contact-options">
            <div class="contact-method">
              <h4>Schedule a Meeting</h4>
              <p>Book a consultation to explore partnership opportunities</p>
              <button class="contact-btn primary">Book Meeting</button>
            </div>
            <div class="contact-method">
              <h4>Send Proposal</h4>
              <p>Submit your partnership ideas and requirements</p>
              <button class="contact-btn secondary">Send Proposal</button>
            </div>
            <div class="contact-method">
              <h4>General Inquiry</h4>
              <p>Get in touch for more information</p>
              <button class="contact-btn tertiary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScrollToTop from '../components/shared/ScrollToTop.vue'

const activeTab = ref('volunteers')

const switchTab = (tab: string) => {
  activeTab.value = tab
  // Smooth scroll to content
  const contentElement = document.querySelector('.partnership-content')
  if (contentElement) {
    const offsetTop = contentElement.offsetTop - 120 // Account for fixed navigation
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.partner-page {
  padding-top: 70px;
  background: #ffffff;
  min-height: 100vh;
  color: #000000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  max-height: 80vh;
  padding: 0;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/pictures/UX1.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  gap: 3rem;
  align-items: center;
  height: 100%;
  max-height: calc(80vh - 4rem);
  padding: 1.5rem 0;
  overflow: hidden;
}

.hero-content {
  color: #ffffff;
}

.hero-title {
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}


.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 400;
}

.hero-highlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
}

.highlight-icon {
  font-size: 2.5rem;
  font-weight: 800;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
  color: #ffffff;
  padding: 15px;
}

.logo-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  max-width: 100%;
  max-height: 100%;
}

.highlight-text h4 {
  font-size: 1.4rem;
  color: #8cb5da;
  margin-bottom: 0.5rem;
  font-weight: 700;
}


.highlight-text p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 500px;
}

.stat-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  border: 1px solid rgba(140, 181, 218, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(10px);
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8cb5da 0%, #ffffff 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.stat-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #8cb5da;
  background: rgba(255, 255, 255, 0.12);
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 900;
  color: #8cb5da;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 8px rgba(140, 181, 218, 0.2);
}

.stat-label {
  font-size: 0.95rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.3;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
}

/* Fixed Navigation */
.partnership-navigation {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(25, 90, 165, 0.1);
  box-shadow: 0 2px 20px rgba(25, 90, 165, 0.1);
  width: 100vw;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
}

.nav-tabs {
  display: flex;
  gap: 0.5rem;
}

.nav-tab {
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(25, 90, 165, 0.2);
  border-radius: 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 120px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-text {
  font-size: 0.85rem;
  font-weight: 600;
}

.nav-tab:hover {
  background: rgba(25, 90, 165, 0.1);
  color: #195aa5;
  border-color: #195aa5;
  transform: translateY(-2px);
}

.nav-tab.active {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  color: white;
  border-color: #195aa5;
  box-shadow: 0 4px 20px rgba(25, 90, 165, 0.3);
}

.contact-cta {
  margin-left: 1rem;
}

.contact-btn {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(209, 34, 85, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(209, 34, 85, 0.4);
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
}

/* Partnership Content */
.partnership-content {
  padding: 8rem 0 6rem;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
}

.partnership-content .section-title {
  text-align: center;
  font-size: 3rem;
  color: #000000;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}


.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Volunteers Section Styles */
.opportunities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.opportunity-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2.5rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.opportunity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.opportunity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
  background: rgba(255, 255, 255, 1);
}

.opportunity-card:hover::before {
  transform: scaleX(1);
}

.opportunity-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
}

.opportunity-card h4 {
  font-size: 1.4rem;
  color: #195aa5;
  margin-bottom: 1rem;
  font-weight: 700;
}

.opportunity-card p {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.opportunity-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.opportunity-features li {
  padding: 0.5rem 0;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  padding-left: 1.5rem;
}

.opportunity-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #22c55e;
  font-weight: bold;
}

.opportunity-btn {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(209, 34, 85, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.opportunity-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(209, 34, 85, 0.4);
}

.volunteer-benefits {
  margin-top: 4rem;
}

.volunteer-benefits h3 {
  text-align: center;
  font-size: 2rem;
  color: #195aa5;
  margin-bottom: 3rem;
  font-weight: 700;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
  border-radius: 16px;
  border: 1px solid rgba(25, 90, 165, 0.1);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit-item h4 {
  font-size: 1.2rem;
  color: #195aa5;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.benefit-item p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

/* Organizations Section */
.partnership-types {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.partnership-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  position: relative;
  overflow: hidden;
}

.partnership-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.partnership-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
}

.partnership-card:hover::before {
  transform: scaleX(1);
}

.partnership-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.partnership-header h4 {
  font-size: 1.5rem;
  color: #195aa5;
  margin: 0;
  font-weight: 700;
}

.partnership-badge {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.partnership-card p {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.partnership-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.partnership-benefits li {
  padding: 0.5rem 0;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  padding-left: 1.5rem;
}

.partnership-benefits li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #195aa5;
}

.partnership-examples h5 {
  font-size: 1rem;
  color: #195aa5;
  margin-bottom: 1rem;
  font-weight: 700;
}

.example-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.example-tag {
  background: rgba(25, 90, 165, 0.1);
  color: #195aa5;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(25, 90, 165, 0.2);
}

/* Companies Section */
.corporate-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.tier-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2.5rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  position: relative;
  overflow: hidden;
}

.tier-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.tier-card.platinum::before {
  background: linear-gradient(90deg, #a855f7 0%, #7c3aed 100%);
}

.tier-card.gold::before {
  background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
}

.tier-card.silver::before {
  background: linear-gradient(90deg, #6b7280 0%, #4b5563 100%);
}

.tier-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
}

.tier-card:hover::before {
  transform: scaleX(1);
}

.tier-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.tier-header h4 {
  font-size: 1.4rem;
  color: #195aa5;
  margin: 0;
  font-weight: 700;
}

.tier-badge {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.tier-benefits li {
  padding: 0.8rem 0;
  color: rgba(0, 0, 0, 0.8);
  position: relative;
  padding-left: 1.5rem;
  border-bottom: 1px solid rgba(25, 90, 165, 0.1);
}

.tier-benefits li::before {
  content: '★';
  position: absolute;
  left: 0;
  color: #f59e0b;
}

.tier-impact h5 {
  font-size: 1rem;
  color: #195aa5;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.tier-impact p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

.corporate-benefits h3 {
  text-align: center;
  font-size: 2rem;
  color: #195aa5;
  margin-bottom: 3rem;
  font-weight: 700;
}

.benefits-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-section {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(143, 178, 214, 0.03) 0%, rgba(25, 90, 165, 0.02) 100%);
  border-radius: 16px;
  border: 1px solid rgba(25, 90, 165, 0.1);
}

.benefit-section h4 {
  font-size: 1.2rem;
  color: #195aa5;
  margin-bottom: 1rem;
  font-weight: 700;
}

.benefit-section p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

/* Institutions Section */
.institution-partnerships {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.institution-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  position: relative;
  overflow: hidden;
}

.institution-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.institution-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
}

.institution-card:hover::before {
  transform: scaleX(1);
}

.institution-type {
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.institution-card h4 {
  font-size: 1.5rem;
  color: #195aa5;
  margin-bottom: 1rem;
  font-weight: 700;
}

.institution-card p {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.partnership-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-group h5 {
  font-size: 1rem;
  color: #195aa5;
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-group ul {
  list-style: none;
  padding: 0;
}

.feature-group li {
  padding: 0.5rem 0;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  padding-left: 1.5rem;
}

.feature-group li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #195aa5;
  font-size: 0.8rem;
}

.current-partners h3 {
  text-align: center;
  font-size: 2rem;
  color: #195aa5;
  margin-bottom: 3rem;
  font-weight: 700;
}

.partners-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.partner-logo {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem 1rem;
  border: 2px solid rgba(25, 90, 165, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(25, 90, 165, 0.1);
  border-color: #195aa5;
}

.logo-placeholder {
  color: #195aa5;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.3;
}

/* Contact CTA Section */
.contact-cta-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.contact-cta-section::before {
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

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}


.cta-subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.contact-method {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.contact-method h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.contact-method p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.contact-method .contact-btn {
  width: 100%;
  margin: 0;
}

.contact-btn.primary {
  background: rgba(255, 255, 255, 0.95);
  color: #d12255;
}

.contact-btn.primary:hover {
  background: white;
  transform: translateY(-2px);
}

.contact-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.contact-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.contact-btn.tertiary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.contact-btn.tertiary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-split {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-highlight {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .highlight-icon {
    width: 60px;
    height: 60px;
  }
  
  .highlight-text h4 {
    font-size: 1.2rem;
  }
  
  .highlight-text p {
    font-size: 0.9rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: 300px;
  }
  
  .stat-item {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
  }
  
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
  
  .nav-tabs {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .nav-tab {
    padding: 0.6rem 1rem;
    min-width: 80px;
    font-size: 0.8rem;
  }
  
  .tab-text {
    font-size: 0.75rem;
  }
  
  .partnership-content {
    padding: 6rem 0 4rem;
  }
  
  .partnership-content .section-title {
    font-size: 2.5rem;
  }
  
  .opportunities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .corporate-tiers {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefits-showcase {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .partnership-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .partners-showcase {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .contact-options {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 480px) {
  .content-split {
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-highlight {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
  }
  
  .highlight-icon {
    width: 50px;
    height: 50px;
  }
  
  .highlight-text h4 {
    font-size: 1.1rem;
  }
  
  .highlight-text p {
    font-size: 0.85rem;
  }
  
  .stats-grid {
    gap: 1rem;
    max-width: 250px;
  }
  
  .stat-item {
    padding: 1.2rem 0.8rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
  
  .partnership-content .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .opportunity-card,
  .partnership-card,
  .tier-card,
  .institution-card {
    padding: 1.5rem;
  }
  
  .partnership-content {
    padding: 5rem 0 3rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>