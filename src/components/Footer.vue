<template>
  <footer class="footer">
    <div class="container">
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
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  background: #1a2338;
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
  border-top: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #035eac;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-description {
  color: #8cb5da;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #2071b8;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #035eac;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #8cb5da;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.contact-info p {
  color: #8cb5da;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #2071b8;
  padding-top: 1rem;
  text-align: center;
  color: #8cb5da;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>