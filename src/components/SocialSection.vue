<template>
  <section class="social-section">
    <div class="container">
      <h2 class="social-title">Follow Our Journey</h2>
      <p class="social-subtitle">Stay connected with our community and see student success stories</p>
      
      <div class="social-grid">
        <a href="https://www.linkedin.com/company/it-for-youth-ghana-foundation/?viewAsMember=true" target="_blank" class="social-card linkedin">
          <div class="social-icon linkedin-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <h4>LinkedIn</h4>
          <div class="followers">2.3k followers</div>
        </a>

        <a href="https://www.instagram.com/itforyouthghana/" target="_blank" class="social-card instagram">
          <div class="social-icon instagram-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
            </svg>
          </div>
          <h4>Instagram</h4>
          <div class="followers">1.2k followers</div>
        </a>

        <a href="https://web.facebook.com/itforyouthghanacollege/?_rdc=1&_rdr#" target="_blank" class="social-card facebook">
          <div class="social-icon facebook-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <h4>Facebook</h4>
          <div class="followers">5.4k followers</div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-section {
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(26, 35, 56, 0.92) 0%, #1a2338 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 70vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  text-align: center;
}

.social-title {
  font-size: 2.2rem;
  color: #f9f8f9;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.social-subtitle {
  font-size: 1.1rem;
  color: rgba(249, 248, 249, 0.7);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.social-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.social-card {
  background: rgba(249, 248, 249, 0.06);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(140, 181, 218, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;
  height: 140px;
  justify-content: center;
}

.social-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(140, 181, 218, 0.4);
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.linkedin-icon {
  background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
  color: white;
}

.instagram-icon {
  background: linear-gradient(135deg, #e4405f 0%, #833ab4 100%);
  color: white;
}

.facebook-icon {
  background: linear-gradient(135deg, #1877f2 0%, #42a5f5 100%);
  color: white;
}

.social-card h4 {
  font-size: 1.1rem;
  color: #f9f8f9;
  margin: 0 0 0.3rem 0;
  font-weight: 600;
}

.followers {
  color: #8cb5da;
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0;
}

@media (max-width: 1024px) {
  .social-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .social-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .social-card {
    width: 300px;
  }
}

@media (max-width: 480px) {
  .social-section {
    padding: 2rem 0;
  }
  
  .social-title {
    font-size: 1.8rem;
  }
  
  .social-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .social-card {
    width: 250px;
    height: 120px;
    padding: 1.2rem;
  }
  
  .social-icon {
    width: 35px;
    height: 35px;
  }
  
  .social-card h4 {
    font-size: 1rem;
  }
  
  .followers {
    font-size: 0.8rem;
  }
}
</style>