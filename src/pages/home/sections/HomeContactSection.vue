<template>
  <section class="contact gpu-accelerated">
    <div class="container optimize-text">
      <div class="content-split">
        <div class="text-content">
          <h2 class="section-title will-change-opacity">Get In Touch</h2>
          <p class="contact-intro will-change-opacity">
            Ready to start your tech journey? Connect with us and take the first step towards transforming your future.
          </p>
          
          <div class="contact-info">
            <div class="info-item will-change-transform">
              <div class="info-icon">P</div>
              <div class="info-details">
                <span class="info-label will-change-opacity">Phone</span>
                <span class="info-value will-change-opacity">+233 59 624 4834</span>
              </div>
            </div>

            <div class="info-item will-change-transform">
              <div class="info-icon">E</div>
              <div class="info-details">
                <span class="info-label will-change-opacity">Email</span>
                <span class="info-value will-change-opacity">info@itforyouthghana.org</span>
              </div>
            </div>

            <div class="info-item will-change-transform">
              <div class="info-icon">L</div>
              <div class="info-details">
                <span class="info-label will-change-opacity">Location</span>
                <span class="info-value will-change-opacity">GECKO STREET L539<br>Kwabenya, Accra</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="form-content">
          <div class="contact-form">
            <form @submit.prevent="submitForm" class="form">
              <div class="form-row">
                <div class="form-field">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    v-model="form.name"
                    class="form-input"
                    required
                  >
                </div>
                <div class="form-field">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    v-model="form.email"
                    class="form-input"
                    required
                  >
                </div>
              </div>
              <div class="form-field">
                <textarea 
                  placeholder="Message" 
                  v-model="form.message"
                  class="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>
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
  // Here you would typically send the form data to a server
}
</script>

<style scoped>
.contact {
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
  display: flex;
  align-items: center;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/pictures/UX1.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  height: 100vh;
  padding: 1.5rem 0;
  overflow: hidden;
}

.text-content {
  color: #051218;
}

.section-title {
  font-size: 3.5rem;
  color: #030b14;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.contact-intro {
  font-size: 1.3rem;
  color: #051218;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateX(8px);
}

.info-icon {
  font-size: 1.5rem;
  font-weight: 800;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  flex-shrink: 0;
  color: #030b14;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.info-label {
  font-size: 0.9rem;
  color: #051218;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.info-value {
  font-size: 1.1rem;
  color: #030b14;
  font-weight: 500;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.form-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  padding: 1rem 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
  font-family: inherit;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.submit-btn {
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #d12255 0%, #195aa5 100%);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
  min-width: 200px;
  box-shadow: 0 8px 24px rgba(209, 34, 85, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #195aa5 0%, #d12255 100%);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(209, 34, 85, 0.5);
  border-color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .contact-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .submit-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .info-item {
    padding: 1rem;
  }

  .info-icon {
    width: 36px;
    height: 36px;
  }
}
</style>