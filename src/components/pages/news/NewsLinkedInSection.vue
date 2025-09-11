<template>
  <section class="news">
    <div class="container">
      <h2 class="section-title">Latest Updates</h2>
      <div class="news-grid">
        <article class="news-card" v-for="article in news" :key="article.id">
          <div class="news-image">
            <div class="news-placeholder">{{ article.id }}</div>
          </div>
          <div class="news-content">
            <div class="news-date">{{ article.date }}</div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const news = [
  {
    id: 1,
    title: 'Admissions Open for Coding & Programming!',
    excerpt: 'Kickstart your tech journey with hands-on coding training. Build innovative applications and thrive in the digital world.',
    date: 'Open Now',
    image: '/news1.jpg'
  },
  {
    id: 2,
    title: 'Data Analytics for Women - Feb 2025',
    excerpt: 'Exclusive program for female graduates. Join our Data Analytics Program and unlock job opportunities in tech.',
    date: 'Feb 2025',
    image: '/news2.jpg'
  },
  {
    id: 3,
    title: '3rd Edition Graduation - Dec 21, 2024',
    excerpt: 'Celebrate remarkable achievements of our students at the IT For Youth Ghana Graduation Ceremony!',
    date: 'Dec 21, 2024',
    image: '/news3.jpg'
  }
]
</script>

<style scoped>
.news {
  padding: 4rem 0;
  background: #1a2338;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  color: #f9f8f9;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.news-card {
  background: rgba(249, 248, 249, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(140, 181, 218, 0.2);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #035eac, #2071b8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  transition: transform 0.3s ease;
}

.news-card:hover .news-placeholder {
  transform: scale(1.05);
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: #8cb5da;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.news-title {
  font-size: 1.3rem;
  color: #f9f8f9;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.news-excerpt {
  color: rgba(249, 248, 249, 0.9);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.read-more {
  color: #035eac;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #2071b8;
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .news {
    padding: 3rem 0;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .news-card {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .news {
    padding: 2rem 0;
  }
  
  .news-grid {
    gap: 1rem;
  }
  
  .news-content {
    padding: 1.2rem;
  }
  
  .news-title {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>