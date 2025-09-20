<template>
  <section class="impact homepage gpu-accelerated">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-16 optimize-text">
        <h2 class="section-title will-change-opacity">Our Impact & Success Stories</h2>
        <p class="impact-intro will-change-opacity max-w-4xl mx-auto">
          We're not just teaching code - we're transforming lives and building Ghana's tech future. Meet some of our graduates who are now leading in the tech industry.
        </p>
      </div>

      <!-- Impact Grid -->
      <div class="impact-grid">
        <!-- Statistics Cards -->
        <div class="stat-card gpu-accelerated will-change-transform" v-for="stat in stats" :key="stat.label">
          <div class="stat-number will-change-opacity">{{ stat.number }}</div>
          <div class="stat-label will-change-opacity">{{ stat.label }}</div>
          <div class="stat-description will-change-opacity">{{ stat.description }}</div>
        </div>

        <!-- Success Story Cards -->
        <div class="story-card gpu-accelerated will-change-transform" v-for="story in successStories" :key="story.name">
          <div class="story-image">
            <img :src="story.image" :alt="story.name" class="story-photo lazy-image" loading="lazy" decoding="async" />
            <div class="graduation-badge">{{ story.graduationYear }}</div>
          </div>
          <div class="story-content optimize-text">
            <h3 class="story-name will-change-opacity">{{ story.name }}</h3>
            <p class="story-role will-change-opacity">{{ story.role }}</p>
            <p class="story-company will-change-opacity">{{ story.company }}</p>
            <blockquote class="story-quote will-change-opacity">
              "{{ story.quote }}"
            </blockquote>
            <div class="story-skills">
              <span v-for="skill in story.skills" :key="skill" class="skill-badge">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { 
    number: '200+', 
    label: 'Youth Adults Trained',
    description: 'Digital skills training completed'
  },
  { 
    number: '800+', 
    label: 'Students Reached',
    description: 'Through workshops in 20+ schools'
  },
  { 
    number: '40%', 
    label: 'Female Participation',
    description: 'Promoting gender equality in tech'
  },
  { 
    number: '6+', 
    label: 'Years of Impact',
    description: 'Continuous commitment to education'
  }
]

const successStories = [
  {
    name: 'Belinda Asante',
    role: 'Frontend Developer',
    company: 'Local Tech Startup',
    graduationYear: 'Graduate 2023',
    image: '/images/Belinda.jpg',
    quote: 'Before IT For Youth, I was working at a shop for very little money. The 6-month programming course was challenging, but the instructors believed in me even when I doubted myself. Now I build websites and earn enough to support my family and save for the future.',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Vue.js']
  },
  {
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    company: 'Tech Solutions Ghana',
    graduationYear: 'Graduate 2023',
    image: '/images/elisabeth.jpg',
    quote: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I have gained have opened doors I never thought possible.',
    skills: ['SQL', 'Database Design', 'Data Analysis', 'MySQL']
  },
  {
    name: 'Emmanuel',
    role: 'Data Analyst',
    company: 'Financial Services',
    graduationYear: 'Graduate 2022',
    image: '/images/emmanuel.jpg',
    quote: 'IT For Youth Ghana has been instrumental in my growth. I now approach data with greater confidence and insight.',
    skills: ['Python', 'Data Visualization', 'Excel', 'Power BI']
  },
  {
    name: 'Benedicta',
    role: 'Graphic Designer',
    company: 'Creative Agency',
    graduationYear: 'Graduate 2022',
    image: '/images/benedicta.png',
    quote: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
    skills: ['Adobe Creative Suite', 'UI/UX Design', 'Branding', 'Web Design']
  }
]
</script>

<style scoped>
.impact {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  color: #030b14 !important;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.impact-intro {
  font-size: 1.25rem;
  color: #051218 !important;
  line-height: 1.6;
  font-weight: 400;
}

/* Grid Layout */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Statistics Cards */
.stat-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(3, 11, 20, 0.05) 100%);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(3, 11, 20, 0.1);
  border: 2px solid rgba(3, 11, 20, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #030b14, #051218);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 48px rgba(3, 11, 20, 0.2);
  border-color: #030b14;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #030b14 !important;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: #051218 !important;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.stat-description {
  font-size: 0.9rem;
  color: #051218 !important;
  opacity: 0.8;
  line-height: 1.4;
}

/* Success Story Cards */
.story-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(3, 11, 20, 0.02) 100%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(3, 11, 20, 0.15);
  border: 1px solid rgba(3, 11, 20, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.story-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 60px rgba(3, 11, 20, 0.25);
}

.story-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.story-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.story-card:hover .story-photo {
  transform: scale(1.05);
}

.graduation-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #030b14, #051218);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(3, 11, 20, 0.3);
}

.story-content {
  padding: 2rem;
}

.story-name {
  font-size: 1.5rem;
  color: #030b14 !important;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.story-role {
  font-size: 1.1rem;
  color: #051218 !important;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.story-company {
  font-size: 1rem;
  color: #051218 !important;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.story-quote {
  font-size: 1rem;
  color: #051218 !important;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid #030b14;
  position: relative;
}

.story-quote::before {
  content: '"';
  font-size: 3rem;
  color: #030b14;
  position: absolute;
  top: -1rem;
  left: -1rem;
  opacity: 0.3;
}

.story-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge {
  background: linear-gradient(135deg, #030b14, #051218);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(3, 11, 20, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .impact {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .impact-intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .impact-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .stat-card {
    padding: 2rem 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
  }
  
  .stat-description {
    font-size: 0.85rem;
  }
  
  .story-card {
    border-radius: 20px;
  }
  
  .story-image {
    height: 240px;
  }
  
  .story-content {
    padding: 1.5rem;
  }
  
  .story-name {
    font-size: 1.3rem;
  }
  
  .story-role {
    font-size: 1rem;
  }
  
  .story-company {
    font-size: 0.9rem;
  }
  
  .story-quote {
    font-size: 0.9rem;
    padding-left: 0.8rem;
  }
  
  .skill-badge {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .impact {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 0.5rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  
  .impact-intro {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .impact-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 0 0.5rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
  
  .stat-description {
    font-size: 0.8rem;
  }
  
  .story-card {
    border-radius: 16px;
  }
  
  .story-image {
    height: 200px;
  }
  
  .story-content {
    padding: 1.2rem;
  }
  
  .story-name {
    font-size: 1.2rem;
  }
  
  .story-role {
    font-size: 0.95rem;
  }
  
  .story-company {
    font-size: 0.85rem;
  }
  
  .story-quote {
    font-size: 0.85rem;
    padding-left: 0.6rem;
    margin-bottom: 1rem;
  }
  
  .story-quote::before {
    font-size: 2rem;
    top: -0.5rem;
    left: -0.5rem;
  }
  
  .skill-badge {
    padding: 0.25rem 0.5rem;
    font-size: 0.7rem;
  }
}
</style>