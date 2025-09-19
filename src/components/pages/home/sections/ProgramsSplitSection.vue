<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const selectedProgramIndex = ref(0)

const selectProgram = (index: number) => {
  selectedProgramIndex.value = index
}

const programsData = [
  {
    id: 1,
    title: 'Software Development',
    subtitle: '6-Month Comprehensive Training',
    summary: 'Master modern web development with hands-on projects and real-world applications.',
    description: 'Learn to build professional websites and applications from scratch. This comprehensive program covers everything from basic programming concepts to advanced web development frameworks. You\'ll work on real projects and graduate with a portfolio that showcases your skills to potential employers.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    maxStudents: '20',
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Database Design', 'API Development', 'Version Control', 'Testing'],
    careerOutcomes: ['Junior Software Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Full-Stack Developer']
  },
  {
    id: 2,
    title: 'Data Analytics',
    subtitle: '6-Month Practical Training',
    summary: 'Transform raw data into actionable insights using modern analytics tools and techniques.',
    description: 'Learn to analyze data and communicate findings effectively. This program teaches you to work with large datasets, create compelling visualizations, and present data-driven recommendations to stakeholders. You\'ll master both technical skills and business acumen.',
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    maxStudents: '15',
    skills: ['Excel Advanced', 'Python for Data', 'SQL', 'Data Visualization', 'Statistics', 'Power BI', 'Tableau', 'Report Writing'],
    careerOutcomes: ['Data Analyst', 'Business Analyst', 'Research Analyst', 'Marketing Analyst', 'Operations Analyst']
  },
  {
    id: 3,
    title: 'UI/UX Design',
    subtitle: '6-Month Creative Program',
    summary: 'Design beautiful, user-centered digital experiences that solve real problems.',
    description: 'Master the art and science of user experience design. Learn to understand user needs, create wireframes and prototypes, and design interfaces that are both beautiful and functional. This program combines creativity with analytical thinking.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    maxStudents: '12',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
    careerOutcomes: ['UI/UX Designer', 'Product Designer', 'Web Designer', 'Design Consultant', 'User Researcher']
  },
  {
    id: 4,
    title: 'Digital Marketing',
    subtitle: '6-Month Strategic Program',
    summary: 'Master digital marketing strategies that drive real business growth and engagement.',
    description: 'Learn to create and execute digital marketing campaigns that deliver measurable results. This program covers everything from social media strategy to search engine optimization, helping you understand how to reach and engage modern consumers.',
    duration: '6 Months',
    level: 'Beginner to Intermediate',
    maxStudents: '18',
    skills: ['Social Media Strategy', 'Content Marketing', 'SEO', 'Google Ads', 'Email Marketing', 'Analytics', 'Brand Strategy', 'Campaign Management'],
    careerOutcomes: ['Digital Marketing Specialist', 'Social Media Manager', 'Content Marketing Manager', 'SEO Specialist', 'Marketing Coordinator']
  }
]
</script>

<template>
  <!-- Choose Your Program - Split View Section -->
  <section class="programs-split-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="main-title">Transform Your Future With Technology</h2>
        <p class="main-subtitle">
          Comprehensive programs designed to launch your tech career. Choose your path and start building tomorrow's digital solutions today.
        </p>
      </div>

      <!-- Split Layout Container -->
      <div class="split-container">
        
        <!-- Left Panel - Programs Overview -->
        <div class="overview-panel">
          <div class="panel-header">
            <h3 class="panel-title">Available Programs</h3>
            <span class="program-count">{{ programsData.length }} Programs</span>
          </div>
          
          <div class="programs-list">
            <div 
              v-for="(program, index) in programsData" 
              :key="program.id"
              class="program-item"
              :class="{ 'active': selectedProgramIndex === index }"
              @click="selectProgram(index)"
            >
              <div class="program-header">
                <h4 class="program-title">{{ program.title }}</h4>
                <span class="program-duration">{{ program.duration }}</span>
              </div>
              <p class="program-summary">{{ program.summary }}</p>
              <div class="program-meta">
                <span class="meta-level">{{ program.level }}</span>
                <span class="meta-students">{{ program.maxStudents }} students max</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel - Program Details -->
        <div class="details-panel">
          <div class="details-content" v-if="selectedProgramIndex !== null">
            
            <!-- Program Header -->
            <div class="details-header">
              <h3 class="details-title">{{ programsData[selectedProgramIndex].title }}</h3>
              <p class="details-subtitle">{{ programsData[selectedProgramIndex].subtitle }}</p>
              
              <div class="details-badges">
                <span class="badge duration">{{ programsData[selectedProgramIndex].duration }}</span>
                <span class="badge level">{{ programsData[selectedProgramIndex].level }}</span>
                <span class="badge students">{{ programsData[selectedProgramIndex].maxStudents }} students</span>
              </div>
            </div>

            <!-- Program Description -->
            <div class="details-section">
              <h4 class="section-title">Program Overview</h4>
              <p class="section-text">{{ programsData[selectedProgramIndex].description }}</p>
            </div>

            <!-- Skills -->
            <div class="details-section">
              <h4 class="section-title">What You'll Learn</h4>
              <div class="skills-grid">
                <span 
                  v-for="skill in programsData[selectedProgramIndex].skills" 
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Career Outcomes -->
            <div class="details-section">
              <h4 class="section-title">Career Opportunities</h4>
              <ul class="outcomes-list">
                <li 
                  v-for="outcome in programsData[selectedProgramIndex].careerOutcomes" 
                  :key="outcome"
                  class="outcome-item"
                >
                  {{ outcome }}
                </li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="actions-section">
              <RouterLink to="/programs" class="action-btn primary">Learn More</RouterLink>
              <RouterLink to="/contact" class="action-btn secondary">Apply Now</RouterLink>
            </div>

          </div>
          
          <!-- Placeholder when no program selected -->
          <div v-else class="no-selection">
            <h3>Select a Program</h3>
            <p>Choose a program from the left to view detailed information</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Programs Split Section Styling */
.programs-split-section {
  min-height: 100vh;
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
  position: relative;
}

.programs-split-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: inherit;
  transform: skewY(-1deg);
  transform-origin: top left;
}

.programs-split-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #0a1628 0%, #1e293b 50%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.main-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
}

/* Split Container */
.split-container {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(10, 22, 40, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  min-height: 600px;
}

/* Overview Panel (Left) */
.overview-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
  border-right: 1px solid rgba(10, 22, 40, 0.06);
  padding: 2rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(10, 22, 40, 0.08);
}

.panel-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a1628;
  margin: 0;
}

.program-count {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  background: rgba(10, 22, 40, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.program-item {
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(10, 22, 40, 0.06);
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.program-item:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(10, 22, 40, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(10, 22, 40, 0.08);
}

.program-item.active {
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.08) 0%, rgba(184, 134, 11, 0.04) 100%);
  border-color: rgba(10, 22, 40, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(10, 22, 40, 0.12);
}

.program-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #0a1628, #b8860b);
  border-radius: 0 2px 2px 0;
}

.program-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.program-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a1628;
  margin: 0;
  line-height: 1.3;
}

.program-duration {
  font-size: 0.875rem;
  color: #b8860b;
  font-weight: 600;
  background: rgba(184, 134, 11, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
}

.program-summary {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.program-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
}

.meta-level,
.meta-students {
  color: #64748b;
  font-weight: 500;
}

/* Details Panel (Right) */
.details-panel {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
  padding: 2rem;
  overflow-y: auto;
}

.details-content {
  height: 100%;
}

.details-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(10, 22, 40, 0.08);
}

.details-title {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, #0a1628, #b8860b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.details-subtitle {
  font-size: 1.125rem;
  color: #b8860b;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.details-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge.duration {
  background: rgba(10, 22, 40, 0.1);
  color: #0a1628;
}

.badge.level {
  background: rgba(184, 134, 11, 0.1);
  color: #b8860b;
}

.badge.students {
  background: rgba(100, 116, 139, 0.1);
  color: #64748b;
}

.details-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #0a1628;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #0a1628, #b8860b);
  border-radius: 2px;
}

.section-text {
  color: #475569;
  line-height: 1.7;
  font-size: 1.0625rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.skill-tag {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(184, 134, 11, 0.2);
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(184, 134, 11, 0.1);
  border-color: rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
}

.outcomes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.outcome-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid #b8860b;
  color: #475569;
  font-weight: 500;
  transition: all 0.3s ease;
}

.outcome-item:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateX(4px);
}

.actions-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(10, 22, 40, 0.08);
  display: flex;
  gap: 1rem;
}

.action-btn {
  flex: 1;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.action-btn.primary {
  background: linear-gradient(135deg, #0a1628, #b8860b);
  color: white;
  box-shadow: 0 8px 25px rgba(10, 22, 40, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(10, 22, 40, 0.3);
}

.action-btn.secondary {
  background: transparent;
  color: #0a1628;
  border: 2px solid #0a1628;
}

.action-btn.secondary:hover {
  background: #0a1628;
  color: white;
  transform: translateY(-2px);
}

.no-selection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #64748b;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .split-container {
    grid-template-columns: 1fr;
  }
  
  .overview-panel {
    border-right: none;
    border-bottom: 1px solid rgba(10, 22, 40, 0.06);
  }
  
  .programs-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .programs-split-section .container {
    padding: 0 1rem;
  }
  
  .overview-panel,
  .details-panel {
    padding: 1.5rem;
  }
  
  .programs-list {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  
  .actions-section {
    flex-direction: column;
  }
  
  .details-badges {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2rem;
  }
  
  .panel-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .program-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>