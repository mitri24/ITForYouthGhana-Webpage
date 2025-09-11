<template>
  <main class="volunteer-page">
    <!-- About Our Work -->
    <section class="about-work">
      <div class="container">
        <h2 class="section-title">About Our Work</h2>
        <p class="work-description">
          IT For Youth Ghana provides technology education and career development programs 
          for underserved youth. Our programs focus on practical skills, mentorship, and 
          connecting graduates with employment opportunities in Ghana's growing tech sector.
        </p>
        <div class="work-stats">
          <div class="work-stat">
            <span class="stat-label">Students Trained</span>
            <span class="stat-number">450+</span>
          </div>
          <div class="work-stat">
            <span class="stat-label">Female Participation</span>
            <span class="stat-number">40%</span>
          </div>
          <div class="work-stat">
            <span class="stat-label">Program Duration</span>
            <span class="stat-number">6 Months</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Options -->
    <section class="partnership-section">
      <div class="container">
        <h2 class="section-title">How You Can Partner With Us</h2>
        <div class="partnership-tiers">
          
          <!-- Corporate Sponsorships -->
          <div class="partnership-tier featured">
            <div class="tier-badge">High Impact</div>
            <div class="tier-icon">💰</div>
            <h3 class="tier-title">Corporate Sponsorships</h3>
            <div class="tier-impact">Fund the next generation of tech talent</div>
            
            <div class="tier-benefits">
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Provide financial support for training & infrastructure</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Sponsor scholarships for deserving students</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Sponsor hackathons & outreach events</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Brand recognition in our programs</span>
              </div>
            </div>
            
            <button class="tier-btn primary" @click="scrollToForm">Become a Sponsor</button>
          </div>

          <!-- Resource Donations -->
          <div class="partnership-tier">
            <div class="tier-icon">💻</div>
            <h3 class="tier-title">Resource Donations</h3>
            <div class="tier-impact">Provide the tools for success</div>
            
            <div class="tier-benefits">
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Donate laptops & equipment for training</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Provide software licenses</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Support internet connectivity</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Supply hands-on training equipment</span>
              </div>
            </div>
            
            <button class="tier-btn" @click="scrollToForm">Donate Resources</button>
          </div>

          <!-- Employment & Mentorship -->
          <div class="partnership-tier">
            <div class="tier-icon">🤝</div>
            <h3 class="tier-title">Employment & Mentorship</h3>
            <div class="tier-impact">Guide careers & provide opportunities</div>
            
            <div class="tier-benefits">
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Offer internship placements to graduates</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Hire skilled alumni for your organization</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Share expertise as mentor or trainer</span>
              </div>
              <div class="benefit-item">
                <span class="check">✓</span>
                <span>Provide industry insights as guest speaker</span>
              </div>
            </div>
            
            <button class="tier-btn" @click="scrollToForm">Join Our Network</button>
          </div>

        </div>
        
        <!-- Social Proof -->
        <div class="social-proof">
          <div class="proof-quote">
            <p>"Partnering with IT For Youth Ghana was the best CSR decision we made. Their graduates are exceptional."</p>
            <div class="quote-author">- Tech Company Partner</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Form -->
    <section class="quick-form-section" id="partnership-form">
      <div class="container">
        <div class="form-header">
          <h2 class="form-title">Contact Us</h2>
          <p class="form-subtitle">Tell us about your interest and we'll get back to you</p>
        </div>
        
        <div class="quick-form">
          <form @submit.prevent="submitQuickForm" class="form">
            <div class="form-row">
              <div class="form-group">
                <input type="text" v-model="quickForm.name" class="form-input" placeholder="Your Name*" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="quickForm.email" class="form-input" placeholder="Email Address*" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <input type="text" v-model="quickForm.company" class="form-input" placeholder="Company/Organization">
              </div>
              <div class="form-group">
                <select v-model="quickForm.interest" class="form-select" required>
                  <option value="">I'm interested in...*</option>
                  <option value="corporate-sponsorship">Corporate Sponsorships</option>
                  <option value="resource-donation">Resource Donations</option>
                  <option value="internship-employment">Internship & Employment Opportunities</option>
                  <option value="expertise-mentorship">Expertise & Mentorship</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <textarea v-model="quickForm.message" class="form-textarea" rows="3" placeholder="Tell us about your goals (optional)"></textarea>
            </div>
            
            <button type="submit" class="submit-btn-large">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Detailed Volunteer Form -->
    <section class="volunteer-form-section">
      <div class="container">
        <div class="volunteer-header">
          <h2 class="section-title">Volunteer Application</h2>
          <p class="volunteer-subtitle">Ready to mentor and train? Join our expert volunteer network</p>
        </div>
        
        <div class="volunteer-form">
          <form @submit.prevent="submitVolunteerForm" class="detailed-form">
            <div class="form-section">
              <h3 class="section-heading">Personal Information</h3>
              <div class="form-row">
                <input type="text" v-model="form.firstName" class="form-input" placeholder="First Name*" required>
                <input type="text" v-model="form.lastName" class="form-input" placeholder="Last Name*" required>
              </div>
              <div class="form-row">
                <input type="email" v-model="form.email" class="form-input" placeholder="Email*" required>
                <input type="tel" v-model="form.phone" class="form-input" placeholder="Phone*" required>
              </div>
            </div>
            
            <div class="form-section">
              <h3 class="section-heading">Professional Background</h3>
              <select v-model="form.education" class="form-select" required>
                <option value="">Education Level*</option>
                <option value="high-school">High School</option>
                <option value="university">University</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
              
              <div class="expertise-grid">
                <label class="expertise-item">
                  <input type="checkbox" v-model="form.expertise" value="coding">
                  <span class="expertise-check"></span>
                  <span class="expertise-label">Coding/Programming</span>
                </label>
                <label class="expertise-item">
                  <input type="checkbox" v-model="form.expertise" value="design">
                  <span class="expertise-check"></span>
                  <span class="expertise-label">Design/Video</span>
                </label>
                <label class="expertise-item">
                  <input type="checkbox" v-model="form.expertise" value="data">
                  <span class="expertise-check"></span>
                  <span class="expertise-label">Data Analytics</span>
                </label>
                <label class="expertise-item">
                  <input type="checkbox" v-model="form.expertise" value="marketing">
                  <span class="expertise-check"></span>
                  <span class="expertise-label">Digital Marketing</span>
                </label>
              </div>
            </div>
            
            <div class="form-section">
              <h3 class="section-heading">Availability</h3>
              <div class="availability-options">
                <label class="availability-item">
                  <input type="radio" v-model="form.mode" value="in-person">
                  <span class="availability-check"></span>
                  <div class="availability-content">
                    <span class="availability-title">In-Person (Accra)</span>
                    <span class="availability-desc">Teach at our training center</span>
                  </div>
                </label>
                <label class="availability-item">
                  <input type="radio" v-model="form.mode" value="remote">
                  <span class="availability-check"></span>
                  <div class="availability-content">
                    <span class="availability-title">Remote Mentoring</span>
                    <span class="availability-desc">Online 1-on-1 sessions</span>
                  </div>
                </label>
              </div>
              
              <textarea v-model="form.motivation" class="form-textarea" rows="3" placeholder="Why do you want to help our community?*" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn-volunteer">Apply to Volunteer</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta">
      <div class="container">
        <h2 class="cta-title">Ready to Make a Difference?</h2>
        <p class="cta-subtitle">Contact us to discuss partnership opportunities and start transforming lives today</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span class="contact-text">info@itforyouthghana.org</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span class="contact-text">+233 59 624 4834</span>
          </div>
        </div>
        <div class="cta-actions">
          <button class="btn btn-primary">Start Partnership</button>
          <button class="btn btn-secondary">Download Partnership Info</button>
        </div>
      </div>
    </section>

    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScrollToTop from '../components/shared/ScrollToTop.vue'

const quickForm = ref({
  name: '',
  email: '',
  company: '',
  interest: '',
  message: ''
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  education: '',
  expertise: [],
  motivation: '',
  mode: ''
})

const scrollToForm = () => {
  document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })
}

const submitQuickForm = () => {
  console.log('Quick form submitted:', quickForm.value)
  // Handle quick form submission
}

const submitVolunteerForm = () => {
  console.log('Volunteer form submitted:', form.value)
  // Handle volunteer form submission
}
</script>

<style scoped>
.volunteer-page {
  padding-top: 70px;
  background: linear-gradient(180deg, #0f1419 0%, #1a2338 50%, #243447 100%);
  min-height: 100vh;
  color: #f9f8f9;
}

/* Common Styles */
.section-title {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;
}

.section-title::after {
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

/* About Work Section */
.about-work {
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(36, 52, 71, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(15, 20, 25, 0.92) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.about-work::before {
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

.work-description {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 3rem;
  position: relative;
  z-index: 2;
}

.work-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.work-stat {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(10px);
  min-width: 140px;
}

.stat-label {
  display: block;
  color: rgba(249, 248, 249, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  color: #8cb5da;
  line-height: 1;
}

/* Partnership Tiers */
.partnership-section {
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

.partnership-section::before {
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

.partnership-tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.partnership-tier {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.partnership-tier.featured {
  transform: scale(1.05);
  border-color: #035eac;
  background: rgba(3, 94, 172, 0.1);
}

.tier-badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0 0 12px 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tier-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tier-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
}

.tier-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #8cb5da;
  margin-bottom: 0.5rem;
}

.tier-impact {
  color: rgba(249, 248, 249, 0.8);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.tier-benefits {
  text-align: left;
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: rgba(249, 248, 249, 0.9);
}

.check {
  color: #8cb5da;
  font-weight: bold;
  font-size: 1.1rem;
}

.tier-btn {
  width: 100%;
  padding: 1rem 2rem;
  border: 2px solid rgba(140, 181, 218, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: #f9f8f9;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tier-btn.primary {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  border-color: #035eac;
  color: white;
}

.tier-btn:hover {
  transform: translateY(-2px);
  background: rgba(140, 181, 218, 0.2);
  border-color: #8cb5da;
}

.tier-btn.primary:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
}

.social-proof {
  margin-top: 4rem;
  text-align: center;
}

.proof-quote {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  border-left: 4px solid #8cb5da;
}

.proof-quote p {
  font-size: 1.2rem;
  font-style: italic;
  color: #f9f8f9;
  margin-bottom: 1rem;
}

.quote-author {
  color: #8cb5da;
  font-weight: 600;
}

.partnership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.partnership-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.partnership-card::before {
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

.partnership-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.4);
  background: rgba(255, 255, 255, 0.12);
}

.partnership-card:hover::before {
  transform: scaleX(1);
}

.partnership-number {
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

.partnership-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1.5rem;
}

.partnership-list {
  list-style: none;
  padding: 0;
}

.partnership-list li {
  color: rgba(249, 248, 249, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.partnership-list li::before {
  content: '•';
  color: #8cb5da;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Quick Form Section */
.quick-form-section {
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

.quick-form-section::before {
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

.form-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.form-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.form-subtitle {
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.8);
}

.quick-form {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.submit-btn-large {
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(3, 94, 172, 0.4);
}

.submit-btn-large:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(3, 94, 172, 0.6);
}

/* Volunteer Form Section */
.volunteer-form-section {
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

.volunteer-form-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(140, 181, 218, 0.08) 0%, transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(3, 94, 172, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.volunteer-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.volunteer-subtitle {
  font-size: 1.2rem;
  color: rgba(249, 248, 249, 0.8);
  margin-top: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

.form-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.form-subtitle {
  font-size: 1.3rem;
  color: rgba(249, 248, 249, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.volunteer-benefits {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.volunteer-benefit {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #f9f8f9;
}

.benefit-check {
  color: #8cb5da;
  font-weight: bold;
  font-size: 1.2rem;
}

.volunteer-form {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(15px);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 1rem;
  font-weight: 600;
  color: #f9f8f9;
}

.form-input,
.form-select,
.form-textarea {
  padding: 1rem;
  border: 1px solid rgba(140, 181, 218, 0.3);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  color: #f9f8f9;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #035eac;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(3, 94, 172, 0.1);
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
  color: rgba(249, 248, 249, 0.9);
}

.checkbox-item input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(140, 181, 218, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.checkbox-item input[type="checkbox"]:checked + .checkmark {
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-color: #035eac;
}

.checkbox-item input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radio-group {
  display: flex;
  gap: 2rem;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
  color: rgba(249, 248, 249, 0.9);
}

.radio-item input[type="radio"] {
  display: none;
}

.radio-mark {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(140, 181, 218, 0.3);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.radio-item input[type="radio"]:checked + .radio-mark {
  border-color: #035eac;
}

.radio-item input[type="radio"]:checked + .radio-mark::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.submit-btn {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(3, 94, 172, 0.4);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(3, 94, 172, 0.6);
}

.submit-btn:hover::before {
  left: 100%;
}

/* Contact CTA */
.contact-cta {
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

.contact-cta::before {
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
  line-height: 1.6;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-text {
  color: white;
  font-weight: 500;
  font-size: 1rem;
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

/* Form sections styling */
.form-section {
  margin-bottom: 2.5rem;
}

.section-heading {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f9f8f9;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(140, 181, 218, 0.2);
  padding-bottom: 0.5rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.expertise-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.expertise-item input[type="checkbox"] {
  display: none;
}

.expertise-check {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(140, 181, 218, 0.3);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  flex-shrink: 0;
}

.expertise-item input[type="checkbox"]:checked + .expertise-check {
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-color: #035eac;
}

.expertise-item input[type="checkbox"]:checked + .expertise-check::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.expertise-label {
  color: rgba(249, 248, 249, 0.9);
  font-size: 1rem;
  font-weight: 500;
}

.availability-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.availability-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(140, 181, 218, 0.15);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.availability-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(140, 181, 218, 0.3);
}

.availability-item input[type="radio"] {
  display: none;
}

.availability-check {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(140, 181, 218, 0.3);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  flex-shrink: 0;
}

.availability-item input[type="radio"]:checked + .availability-check {
  border-color: #035eac;
}

.availability-item input[type="radio"]:checked + .availability-check::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #035eac 0%, #8cb5da 100%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.availability-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.availability-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f9f8f9;
}

.availability-desc {
  font-size: 0.9rem;
  color: rgba(249, 248, 249, 0.7);
}

.submit-btn-volunteer {
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(3, 94, 172, 0.4);
  margin-top: 1rem;
}

.submit-btn-volunteer:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(3, 94, 172, 0.6);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .partnership-tiers {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .work-stats {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    max-width: 400px;
  }
  
  .contact-info {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .work-stats {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .partnership-tiers {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
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
  
  .value-props {
    padding: 4rem 0;
  }
  
  .partnership-section {
    padding: 4rem 0;
  }
  
  .volunteer-form-section {
    padding: 4rem 0;
  }
  
  .contact-cta {
    padding: 4rem 0;
  }
  
  .partnership-tier {
    padding: 2rem;
  }
  
  .quick-form {
    padding: 2rem;
  }
  
  .volunteer-form {
    padding: 2rem;
  }
  
  
  .value-item {
    min-width: auto;
  }
  
  .tier-price {
    font-size: 2rem;
  }
}
</style>