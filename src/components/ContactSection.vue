<template>
  <section class="contact">
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      
      <div class="contact-grid">
        <div class="contact-info">
          <h3 class="contact-subtitle">Contact Information</h3>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+233 59 624 4834</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span class="contact-text">info@itforyouthghana.org</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text">Accra, Ghana</span>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h3 class="contact-subtitle">Send us a Message</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                v-model="form.name"
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                v-model="form.email"
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <textarea 
                placeholder="Your Message" 
                v-model="form.message"
                class="form-textarea"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary full-width">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    
    <footer class="footer">
      <div class="footer-container">
        <h3>IT For Youth Ghana</h3>
        <p class="footer-tagline">Empowering Ghana's youth through technology</p>
        <div class="footer-links">
          <a href="https://www.linkedin.com/company/it-for-youth-ghana-foundation" class="footer-link">LinkedIn</a>
          <a href="https://www.instagram.com/itforyouthghana/" class="footer-link">Instagram</a>
          <a href="https://web.facebook.com/itforyouthghanacollege" class="footer-link">Facebook</a>
        </div>
        <p class="footer-copyright">&copy; 2025 IT For Youth Ghana. All rights reserved.</p>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.contact {
  padding: 4rem 0;
  background: rgba(26, 35, 56, 0.90);
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
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
}

.contact-subtitle {
  font-size: 1.6rem;
  color: #f9f8f9;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: rgba(249, 248, 249, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(140, 181, 218, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
  width: 45px;
  text-align: center;
}

.contact-text {
  font-size: 1.1rem;
  color: #f9f8f9;
  font-weight: 500;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(140, 181, 218, 0.4);
  background: rgba(249, 248, 249, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #8cb5da;
  background: rgba(140, 181, 218, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  box-shadow: 0 4px 15px rgba(3, 94, 172, 0.4);
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

.full-width {
  width: 100%;
}

.footer {
  background: rgba(26, 35, 56, 0.98);
  border-top: 1px solid rgba(140, 181, 218, 0.1);
  padding: 3rem 0 2rem;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  text-align: center;
}

.footer-container h3 {
  color: #f9f8f9;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.footer-tagline {
  color: rgba(249, 248, 249, 0.8);
  font-size: 1rem;
  margin: 0 0 2rem 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-link {
  color: rgba(249, 248, 249, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #8cb5da;
}

.footer-copyright {
  color: rgba(249, 248, 249, 0.6);
  font-size: 0.85rem;
  margin: 0;
  border-top: 1px solid rgba(140, 181, 218, 0.1);
  padding-top: 1.5rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 0;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .contact-item {
    padding: 0.75rem;
  }
  
  .contact-text {
    font-size: 1rem;
  }
  
  .footer {
    padding: 2rem 0 1.5rem;
  }
  
  .footer-container h3 {
    font-size: 1.5rem;
  }
  
  .footer-tagline {
    font-size: 0.9rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>