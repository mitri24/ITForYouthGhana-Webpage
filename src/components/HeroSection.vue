<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana" class="hero-content-logo">
        <h1 class="hero-title">Empowering Youth Through Technology</h1>
        <p class="hero-subtitle">
          We equip young people, especially women, with essential tech skills through hands-on training 
          in coding, data analytics, and digital tools.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Apply For Training</button>
          <button class="btn btn-secondary">View Programs</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://www.itforyouthghana.org/wp-content/uploads/2025/01/IMG_2732.jpg" alt="IT For Youth Ghana students learning technology" loading="eager" class="hero-img">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 85vh;
  max-height: 95vh;
  padding: 3rem 0;
  background: #1a2338;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-content-logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #f9f8f9;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(249, 248, 249, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 180px;
}

.btn-primary {
  background-color: #035eac;
  color: white;
  box-shadow: 0 4px 15px rgba(3, 94, 172, 0.4);
}

.btn-primary:hover {
  background-color: #035eac;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #f9f8f9;
  border: 2px solid #1a2338;
}

.btn-secondary:hover {
  background-color: #8cb5da;
  color: #1a2338;
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.hero-img:hover {
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .hero-container {
    gap: 3rem;
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 3rem 0;
  }
  
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    justify-content: center;
    gap: 1rem;
  }
  
  .hero-image {
    width: 100%;
    max-width: 500px;
  }
  
  .hero-img {
    max-height: 300px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 0;
  }
  
  .hero-container {
    padding: 0 0.75rem;
    gap: 1.5rem;
  }
  
  .hero-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    width: 100%;
    min-width: 120px;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
  
  .hero-img {
    max-height: 250px;
  }
}
</style>