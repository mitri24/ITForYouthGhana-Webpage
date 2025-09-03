<template>
  <section class="cta">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Transform Your Future?</h2>
        <p class="cta-subtitle">
          Join hundreds of youth who are already building their tech careers with us.
        </p>
        <div class="cta-actions">
          <button class="btn btn-primary large">Apply For Training</button>
          <button class="btn btn-outline large">Download Brochure</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  text-align: center;
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

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 3rem;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  min-width: 180px;
}

.btn.large {
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  min-width: 220px;
}

.btn-primary {
  background-color: #1a2338;
  color: white;
  box-shadow: 0 8px 25px rgba(26, 35, 56, 0.4);
}

.btn-primary:hover {
  background-color: rgba(26, 35, 56, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(26, 35, 56, 0.6);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: rgba(249, 248, 249, 0.1);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .cta {
    padding: 4rem 0;
  }
  
  .cta-title {
    font-size: 2.2rem;
  }
  
  .cta-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .btn.large {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .cta {
    padding: 3rem 0;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
  
  .cta-subtitle {
    font-size: 1rem;
  }
}</style>