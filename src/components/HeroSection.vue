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
  min-height: 90vh;
  padding: 4rem 0;
  background: linear-gradient(135deg, #0f1419 0%, #1a2338 50%, #243447 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(3, 94, 172, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(140, 181, 218, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  position: relative;
  z-index: 2;
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
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(3, 94, 172, 0.4);
  border: 1px solid rgba(140, 181, 218, 0.2);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(3, 94, 172, 0.6);
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #f9f8f9;
  border: 2px solid rgba(140, 181, 218, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(140, 181, 218, 0.15);
  border-color: #8cb5da;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(140, 181, 218, 0.3);
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-img {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(140, 181, 218, 0.2);
}

.hero-img:hover {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
  border-color: rgba(140, 181, 218, 0.4);
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