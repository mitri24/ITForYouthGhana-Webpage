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
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(26, 35, 56, 0.95) 100%);
  color: white;
  padding: 5rem 0 3rem;
  margin-top: auto;
  border-top: 1px solid rgba(140, 181, 218, 0.2);
  position: relative;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 50% 0%, rgba(3, 94, 172, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.container h3 {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.footer-tagline {
  color: #8cb5da;
  font-size: 1rem;
  margin: 0 0 2rem 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.footer-link {
  color: rgba(249, 248, 249, 0.8);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8cb5da, white);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.footer-link:hover::before {
  width: 80%;
}

.footer-copyright {
  color: #8cb5da;
  font-size: 0.85rem;
  margin: 0;
  border-top: 1px solid #2071b8;
  padding-top: 1.5rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
}
</style>