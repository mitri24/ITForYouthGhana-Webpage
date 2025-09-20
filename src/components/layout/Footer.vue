<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo and Company Info -->
        <div class="footer-logo-section">
          <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana" class="footer-logo">
          <h3 class="company-name">IT For Youth Ghana</h3>
          <p class="footer-tagline">Empowering Ghana's youth through technology</p>
        </div>

        <!-- Address -->
        <div class="footer-address">
          <h4>Address</h4>
          <p>GECKO STREET L539</p>
          <p>Kwabenya, Musuku</p>
          <p>Accra, Ghana</p>
          <p class="contact-info">
            <strong>Email:</strong> info@itforyouthghana.org<br>
            <strong>Phone:</strong> +233 59 624 4834
          </p>
        </div>

        <!-- Social Media -->
        <div class="footer-social">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/it-for-youth-ghana-foundation" class="social-link linkedin" target="_blank" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="https://www.instagram.com/itforyouthghana/" class="social-link instagram" target="_blank" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a href="https://web.facebook.com/itforyouthghanacollege" class="social-link facebook" target="_blank" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2025 IT For Youth Ghana Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(5, 17, 31, 0.98) 100%);
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
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
    radial-gradient(circle at 50% 0%, rgba(3, 94, 172, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 20% 100%, rgba(140, 181, 218, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 2.5rem;
}

.footer-logo-section {
  text-align: left;
}

.footer-logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: brightness(1.1);
}

.company-name {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.0625rem;
  margin: 0;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.005em;
}

.footer-address h4,
.footer-social h4 {
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  letter-spacing: -0.01em;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
}

.footer-address p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 0.3rem 0;
  line-height: 1.5;
  font-size: 0.9375rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.005em;
}

.contact-info {
  margin-top: 1.2rem !important;
  font-size: 0.9rem;
  line-height: 1.6;
}

.contact-info strong {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(249, 248, 249, 0.8);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(140, 181, 218, 0.2);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: rgba(140, 181, 218, 0.4);
}

.social-link.linkedin:hover {
  background: #0077b5;
  color: white;
}

.social-link.instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
}

.social-link.facebook:hover {
  background: #1877f2;
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(140, 181, 218, 0.2);
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
  letter-spacing: -0.005em;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  .footer-logo-section {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .footer-logo-section {
    text-align: center;
  }
  
  .footer-address,
  .footer-social {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2rem 0 1.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .footer-content {
    gap: 2rem;
  }
  
  .social-link {
    width: 44px;
    height: 44px;
  }
  
  .company-name {
    font-size: 1.5rem;
  }
  
  .footer-tagline {
    font-size: 1rem;
  }
}
</style>