<script setup lang="ts">
const programStats = [
  { number: '40%', label: 'Female Participation Rate' },
  { number: '100+', label: 'Women Trained' },
  { number: '3', label: 'Female Leaders on Team' },
  { number: '15', label: 'First AI Program Cohort' }
]

const initiatives = [
  {
    title: 'Women-Only Training Sessions',
    description: 'Dedicated training sessions creating safe spaces for women to learn and ask questions without hesitation.',
    icon: '👩‍💻',
    benefits: ['Supportive environment', 'Peer mentorship', 'Confidence building', 'Leadership development']
  },
  {
    title: 'Female Role Model Program',
    description: 'Connecting our students with successful women in technology for inspiration and guidance.',
    icon: '🌟',
    benefits: ['Career guidance', 'Real-world insights', 'Network building', 'Professional mentorship']
  },
  {
    title: 'Work-Life Balance Workshops',
    description: 'Specialized workshops addressing unique challenges women face in technology careers.',
    icon: '⚖️',
    benefits: ['Time management', 'Career progression', 'Family balance', 'Self-advocacy']
  },
  {
    title: 'Leadership Development',
    description: 'Programs specifically designed to develop leadership skills and confidence in women.',
    icon: '👑',
    benefits: ['Public speaking', 'Team leadership', 'Decision making', 'Strategic thinking']
  }
]

const successStories = [
  {
    name: 'Belinda',
    role: 'Frontend Developer & Mentor',
    story: 'After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their programming course. Today, I am a front-end developer hoping to grow more in IT.',
    achievement: 'Now mentoring other young women in programming',
    image: '/images/Belinda.jpg'
  },
  {
    name: 'Elizabeth',
    role: 'Database Management Specialist',
    story: 'IT For Youth Ghana has completely transformed my outlook on technology. The skills I\'ve gained have opened doors I never thought possible.',
    achievement: 'Leading database projects at a tech company',
    image: '/images/elisabeth.jpg'
  },
  {
    name: 'Benedicta',
    role: 'Graphic Designer',
    story: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
    achievement: 'Running her own design consultancy',
    image: '/images/benedicta.png'
  },
  {
    name: 'Danielle',
    role: 'Web Developer',
    story: 'I came in with no skills, but now I\'ve built a website! This program changed my life.',
    achievement: 'Freelance web developer with multiple clients',
    image: '/images/danielle.jpg'
  }
]

const upcomingProgram = {
  title: 'AI and Robotics for Women in Development and Engineering',
  launch: 'Q1 2026',
  status: '60% Complete',
  firstCohort: '15 Women',
  focus: ['Smart agriculture', 'Water management', 'Health monitoring'],
  technologies: ['Python', 'Machine Learning', 'Arduino', 'Raspberry Pi', 'AI Ethics'],
  partnerships: 'Two international universities + European AI companies'
}

const challenges = [
  {
    challenge: 'Gender Stereotypes',
    solution: 'Showcasing successful women in tech and providing female role models',
    impact: 'Increased confidence and career aspirations'
  },
  {
    challenge: 'Family Expectations',
    solution: 'Community education and involving families in the journey',
    impact: 'Better family support for women in tech'
  },
  {
    challenge: 'Work-Life Balance Concerns',
    solution: 'Flexible training schedules and childcare support during sessions',
    impact: 'Higher completion rates among mothers'
  },
  {
    challenge: 'Limited Female Networks',
    solution: 'Building strong alumni networks and peer support groups',
    impact: 'Ongoing mentorship and collaboration'
  }
]

const leadership = [
  {
    name: 'Mrs Esther Afua Adjei',
    role: 'Media and Corporate Coordinator',
    background: 'Regional Health Promotion Manager',
    contribution: 'Leading women empowerment initiatives and corporate partnerships',
    image: '/images/adjej.webp'
  },
  {
    name: 'Miss Miréio Trinley',
    role: 'UI/UX Program Lead',
    background: 'International trainer from Germany',
    contribution: 'Bringing international standards to women in design',
    image: '/images/UX1.jpeg'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-32 bg-gradient-secondary relative overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="hero-title text-white mb-6">
            Girls in Tech Program
          </h1>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            Empowering women to break barriers in technology through dedicated support, 
            mentorship, and specialized training programs.
          </p>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div v-for="stat in programStats" :key="stat.label" class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">{{ stat.number }}</div>
              <div class="text-white/80">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Matters -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Breaking Barriers in Tech</h2>
          <p class="section-subtitle">
            Addressing the unique challenges women face in technology and creating pathways for success.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">The Challenge</h3>
            <p class="text-lg text-white/80 leading-relaxed mb-6">
              Despite representing half the population, women remain significantly underrepresented 
              in technology fields across Africa. Cultural expectations, limited role models, and 
              systemic barriers continue to prevent women from fully participating in the digital economy.
            </p>
            <h3 class="text-2xl font-bold text-white mb-6">Our Solution</h3>
            <p class="text-lg text-white/80 leading-relaxed">
              We've achieved 40% female participation across our programs through intentional design, 
              supportive environments, and addressing specific barriers that women face. Our approach 
              creates not just skilled professionals, but confident leaders who inspire others.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img src="/images/Belinda.jpg" alt="Women in tech" class="rounded-lg shadow-lg">
            <img src="/images/elisabeth.jpg" alt="Female graduates" class="rounded-lg shadow-lg">
            <img src="/images/benedicta.png" alt="Success stories" class="rounded-lg shadow-lg">
            <img src="/images/danielle.jpg" alt="Women empowerment" class="rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Program Initiatives -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Initiatives</h2>
          <p class="section-subtitle">
            Comprehensive support systems designed specifically for women entering technology.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="initiative in initiatives" :key="initiative.title" class="glass-card text-center">
            <div class="text-4xl mb-4">{{ initiative.icon }}</div>
            <h3 class="text-lg font-semibold text-white mb-3">{{ initiative.title }}</h3>
            <p class="text-white/80 text-sm leading-relaxed mb-4">{{ initiative.description }}</p>
            <div>
              <p class="text-xs font-medium text-accent mb-2">Key Benefits:</p>
              <ul class="text-xs text-white/80 space-y-1">
                <li v-for="benefit in initiative.benefits" :key="benefit" class="flex items-center">
                  <span class="w-1 h-1 bg-accent rounded-full mr-2"></span>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Inspiring Success Stories</h2>
          <p class="section-subtitle">
            Meet the women who are breaking barriers and inspiring the next generation.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="story in successStories" :key="story.name" class="glass p-8 rounded-2xl">
            <div class="flex items-start space-x-4 mb-6">
              <img 
                :src="story.image" 
                :alt="story.name"
                class="w-16 h-16 rounded-full object-cover shadow-lg flex-shrink-0"
              >
              <div>
                <h3 class="font-bold text-white text-lg">{{ story.name }}</h3>
                <p class="text-primary font-medium">{{ story.role }}</p>
              </div>
            </div>
            
            <blockquote class="text-white/90 leading-relaxed mb-4 italic">
              "{{ story.story }}"
            </blockquote>
            
            <div class="p-4 bg-primary/10 rounded-lg">
              <p class="text-sm font-medium text-primary mb-1">Current Achievement:</p>
              <p class="text-sm text-white/80">{{ story.achievement }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Addressing Challenges -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Overcoming Barriers</h2>
          <p class="section-subtitle">
            How we address common challenges women face in pursuing technology careers.
          </p>
        </div>
        
        <div class="space-y-6 max-w-5xl mx-auto">
          <div v-for="item in challenges" :key="item.challenge" class="glass p-6 rounded-lg">
            <div class="grid lg:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-white mb-2">Challenge</h4>
                <p class="text-white/80 text-sm">{{ item.challenge }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-primary mb-2">Our Solution</h4>
                <p class="text-white/80 text-sm">{{ item.solution }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-accent mb-2">Impact</h4>
                <p class="text-white/80 text-sm">{{ item.impact }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Female Leadership -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Female Leadership</h2>
          <p class="section-subtitle">
            Women leading by example and paving the way for others.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="leader in leadership" :key="leader.name" class="glass p-8 rounded-2xl text-center">
            <img 
              :src="leader.image" 
              :alt="leader.name"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
            >
            <h3 class="text-xl font-semibold text-white mb-2">{{ leader.name }}</h3>
            <p class="text-primary font-medium mb-1">{{ leader.role }}</p>
            <p class="text-accent text-sm mb-4">{{ leader.background }}</p>
            <p class="text-white/80 text-sm leading-relaxed">{{ leader.contribution }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming AI Program -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Groundbreaking AI Program for Women</h2>
          <p class="section-subtitle">
            Our most ambitious program yet, specifically designed for women in development and engineering.
          </p>
        </div>
        
        <div class="glass p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-4">{{ upcomingProgram.title }}</h3>
            <div class="flex justify-center gap-4 text-sm">
              <span class="px-3 py-1 bg-primary/20 text-primary rounded-full">{{ upcomingProgram.launch }}</span>
              <span class="px-3 py-1 bg-accent/20 text-accent rounded-full">{{ upcomingProgram.status }}</span>
              <span class="px-3 py-1 bg-secondary/20 text-secondary rounded-full">{{ upcomingProgram.firstCohort }}</span>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-semibold text-white mb-3">Focus Areas:</h4>
              <ul class="space-y-2 mb-6">
                <li v-for="focus in upcomingProgram.focus" :key="focus" class="flex items-center text-white/80">
                  <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {{ focus }}
                </li>
              </ul>
              
              <h4 class="font-semibold text-white mb-3">Technologies:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in upcomingProgram.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-white mb-3">International Partnerships:</h4>
              <p class="text-white/80 mb-6">{{ upcomingProgram.partnerships }}</p>
              
              <div class="bg-primary/10 p-4 rounded-lg">
                <h5 class="font-medium text-primary mb-2">Why This Matters</h5>
                <p class="text-sm text-white/80">
                  This program will be the first of its kind in Ghana, specifically targeting women 
                  in development and engineering roles. By combining AI and robotics with real-world 
                  applications, we're preparing women to lead in emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20">
      <div class="container">
        <div class="glass p-12 rounded-2xl text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a woman looking to enter tech, or someone who wants to support women in technology, 
            there are many ways to get involved with our Girls in Tech program.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/programs" class="btn-primary text-lg px-8 py-4">
              Apply for Programs
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-8 py-4">
              Become a Mentor
            </RouterLink>
            <RouterLink to="/partner" class="btn-secondary text-lg px-8 py-4">
              Support Our Mission
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>