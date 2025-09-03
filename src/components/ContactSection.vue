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
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(36, 52, 71, 0.95) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 70vh;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
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
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  position: relative;
  z-index: 2;
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
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(140, 181, 218, 0.15);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(140, 181, 218, 0.3);
  background: rgba(255, 255, 255, 0.08);
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
  padding: 1.2rem;
  border: 1px solid rgba(140, 181, 218, 0.3);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #f9f8f9;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #035eac;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(3, 94, 172, 0.1);
  transform: translateY(-1px);
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
  box-shadow: 0 6px 20px rgba(3, 94, 172, 0.4);
  color: white;
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
  transition: left 0.5s;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(3, 94, 172, 0.5);
}

.btn-primary:hover::before {
  left: 100%;
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