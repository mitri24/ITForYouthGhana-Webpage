<template>
  <main class="news-page">
    <!-- Latest Updates Section -->
    <section class="news-hero">
      <div class="container">
        <div class="news-hero-content">
          <h1 class="hero-title">News & Updates</h1>
          <p class="hero-subtitle">
            Stay updated with our latest achievements, events, and success stories from the IT For Youth Ghana community.
          </p>
        </div>
      </div>
    </section>

    <!-- LinkedIn-style Posts Section -->
    <section class="posts-section">
      <div class="container">
        <h2 class="section-title">Latest Updates</h2>
        <div class="posts-grid">
          <article v-for="post in staticPosts" :key="post.id" class="post-card">
            <div class="post-header">
              <div class="post-author">
                <img src="https://www.itforyouthghana.org/wp-content/uploads/2024/04/Asset-2-1-2048x2027.png" alt="IT For Youth Ghana" class="author-avatar">
                <div class="author-info">
                  <h3 class="author-name">IT For Youth Ghana</h3>
                  <span class="post-date">{{ post.date }}</span>
                </div>
              </div>
              <a :href="post.linkedinUrl" target="_blank" class="linkedin-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            <div class="post-content">
              <p class="post-text">{{ post.text }}</p>
              <img v-if="post.image" :src="post.image" :alt="post.text" class="post-image">
            </div>
            
            <div class="post-engagement">
              <span class="engagement-item">
                <span class="engagement-icon">👍</span>
                {{ post.likes }} likes
              </span>
              <span class="engagement-item">
                <span class="engagement-icon">💬</span>
                {{ post.comments }} comments
              </span>
              <span class="engagement-item">
                <span class="engagement-icon">🔄</span>
                {{ post.shares }} shares
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Social Media Links Section -->
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

    <ScrollToTop />
  </main>
</template>

<script setup lang="ts">
import ScrollToTop from '../components/shared/ScrollToTop.vue'

interface Post {
  id: string
  text: string
  image?: string
  date: string
  linkedinUrl: string
  likes: number
  comments: number
  shares: number
}

const staticPosts: Post[] = [
  {
    id: '1',
    text: '🎉 Exciting news! We\'ve just completed another successful coding bootcamp with 25 young Ghanaians mastering web development fundamentals. From HTML/CSS to JavaScript and React, these brilliant minds are ready to shape Ghana\'s digital future! 💻✨ #TechEducation #YouthEmpowerment #DigitalGhana',
    image: '/images/coding-bootcamp.jpg',
    date: 'December 15, 2024',
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 127,
    comments: 23,
    shares: 18
  },
  {
    id: '2',
    text: '👩‍💻 Women in Tech Wednesday! Meet Sarah, one of our outstanding graduates who landed her first software developer role at a leading tech company in Accra. Her journey from complete beginner to professional developer in just 6 months is truly inspiring! 🚀 #WomenInTech #SuccessStory #CareerGrowth',
    image: '/images/women-in-tech.jpg',
    date: 'December 10, 2024',
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 89,
    comments: 15,
    shares: 32
  },
  {
    id: '3',
    text: '🌟 Rural Tech Connect Update: Our mobile tech lab reached 3 rural communities this month, training 45 students in basic computer skills and digital literacy. Breaking the digital divide, one community at a time! 🚗💻 #DigitalInclusion #RuralDevelopment #TechForAll',
    image: '/images/rural-tech-lab.jpg',
    date: 'December 5, 2024',
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 156,
    comments: 28,
    shares: 24
  },
  {
    id: '4',
    text: '🏆 Partnership Spotlight: We\'re thrilled to announce our collaboration with TechGhana to launch advanced data analytics workshops. This partnership will equip our students with in-demand skills for the growing data science field in Ghana! 📊 #Partnership #DataAnalytics #TechEducation',
    date: 'November 28, 2024',
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 203,
    comments: 41,
    shares: 67
  },
  {
    id: '5',
    text: '💡 Innovation Friday: Our students showcased incredible projects at the monthly demo day! From e-commerce platforms to educational apps, these young innovators are solving real problems with technology. The future of Ghana tech is bright! ✨ #Innovation #StudentProjects #TechDemo',
    image: '/images/demo-day.jpg',
    date: 'November 22, 2024',
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 174,
    comments: 35,
    shares: 29
  }
]
</script>

<style scoped>
.news-page {
  padding-top: 70px;
  background: #ffffff;
  min-height: 100vh;
}

/* News Hero Section */
.news-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  overflow: hidden;
}

.news-hero .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

.news-hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #ffffff;
  line-height: 1.6;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
}

/* Posts Section */
.posts-section {
  padding: 6rem 0;
  background: #ffffff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.posts-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(25, 90, 165, 0.02) 0%, rgba(209, 34, 85, 0.02) 100%),
    radial-gradient(circle at 20% 80%, rgba(143, 178, 214, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

.section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
  position: relative;
  z-index: 2;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #195aa5, #8cb5da);
  border-radius: 2px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.post-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(143, 178, 214, 0.05) 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(143, 178, 214, 0.2);
  box-shadow: 0 8px 32px rgba(25, 90, 165, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #d12255 0%, #195aa5 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 20px 20px 0 0;
}

.post-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(209, 34, 85, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.4s ease;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.post-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(25, 90, 165, 0.2);
  border-color: #195aa5;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(143, 178, 214, 0.1) 100%);
}

.post-card:hover::before {
  transform: scaleX(1);
}

.post-card:hover::after {
  width: 200px;
  height: 200px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  border: 2px solid rgba(143, 178, 214, 0.3);
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #195aa5;
  margin: 0;
}

.post-date {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.linkedin-link {
  color: #0077b5;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linkedin-link:hover {
  background: rgba(0, 119, 181, 0.1);
}

.post-content {
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.post-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;
}

.post-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(143, 178, 214, 0.15);
}

.post-engagement {
  display: flex;
  gap: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(143, 178, 214, 0.15);
  position: relative;
  z-index: 1;
}

.engagement-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
}

.engagement-icon {
  font-size: 1rem;
}

.posts-loading,
.posts-error,
.posts-empty {
  text-align: center;
  padding: 4rem 0;
  position: relative;
  z-index: 2;
}

.posts-error {
  color: #ff6b6b;
}

.posts-empty {
  color: rgba(249, 248, 249, 0.7);
}

.error-icon,
.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: linear-gradient(135deg, #035eac 0%, #2071b8 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.retry-btn:hover {
  background: linear-gradient(135deg, #2071b8 0%, #8cb5da 100%);
  transform: translateY(-2px);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(140, 181, 218, 0.3);
  border-top: 3px solid #8cb5da;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Social Media Links Section */
.social-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(26, 35, 56, 0.95) 50%, rgba(36, 52, 71, 0.92) 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.social-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 75%, rgba(140, 181, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(3, 94, 172, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.social-title {
  font-size: 2.2rem;
  color: #f9f8f9;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
  position: relative;
  z-index: 2;
}

.social-subtitle {
  font-size: 1.1rem;
  color: rgba(249, 248, 249, 0.7);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.social-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .social-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .news-hero {
    min-height: 50vh;
  }
  
  .news-hero .container {
    padding: 3rem 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .posts-section {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .post-card {
    padding: 1.5rem;
  }
  
  .post-engagement {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .social-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .social-card {
    width: 300px;
  }
}

@media (max-width: 480px) {
  .news-hero {
    min-height: 40vh;
  }
  
  .news-hero .container {
    padding: 2rem 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .posts-section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .posts-grid {
    gap: 1.5rem;
  }
  
  .post-card {
    padding: 1.2rem;
  }
  
  .social-section {
    padding: 4rem 0;
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