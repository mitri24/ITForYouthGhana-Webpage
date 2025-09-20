<script setup lang="ts">
const stats = [
  { number: '250+', label: 'Graduates Trained', description: 'Lives transformed through comprehensive education' },
  { number: '23+', label: 'University Partners', description: 'Leading institutions across Ghana' },
  { number: '40%', label: 'Female Participation', description: 'Breaking barriers in technology education' },
  { number: '6', label: 'Years of Impact', description: 'Continuous innovation and growth' }
]

const approach = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'We assess individual skills and career goals to create personalized learning paths that align with industry demands.',
    icon: 'search'
  },
  {
    step: '02',
    title: 'Intensive Training',
    description: 'Hands-on, practical training with real-world projects using industry-standard tools and technologies.',
    icon: 'code'
  },
  {
    step: '03',
    title: 'Mentorship & Support',
    description: 'Ongoing mentorship from industry professionals and career guidance to ensure sustainable growth.',
    icon: 'users'
  },
  {
    step: '04',
    title: 'Career Placement',
    description: 'Job placement assistance, entrepreneurship support, and continued alumni network engagement.',
    icon: 'briefcase'
  }
]

const leadership = [
  {
    name: 'Mr. Peter Duodu',
    role: 'Program Lead',
    credentials: 'MPhil Accounting, BSc Administration, Chartered Accountant',
    image: '/images/peter.jpg',
    description: 'Leading strategic program development and organizational growth with extensive financial and administrative expertise.',
    expertise: ['Strategic Planning', 'Financial Management', 'Organizational Development']
  },
  {
    name: 'Mr Frank Avevor',
    role: 'Project Development Coordinator',
    credentials: 'Master\'s Accounting & Finance, Co-founder of Lernexe AI platform',
    image: '/images/avevor.jpg',
    description: 'Driving innovation in educational technology and overseeing project implementation and development.',
    expertise: ['AI Development', 'Project Management', 'EdTech Innovation']
  },
  {
    name: 'Mrs Esther Afua Adjei',
    role: 'Media and Corporate Coordinator',
    credentials: 'Regional Health Promotion Manager',
    image: '/images/adjej.webp',
    description: 'Managing communications, partnerships, and corporate relations to expand our community impact.',
    expertise: ['Strategic Communication', 'Partnership Development', 'Community Outreach']
  },
  {
    name: 'Mr. Emmanuel Awartey',
    role: 'Finance and Administrative Coordinator',
    credentials: '8+ years banking experience',
    image: '/images/awartey.jpeg',
    description: 'Ensuring financial sustainability and operational excellence with extensive banking sector experience.',
    expertise: ['Financial Planning', 'Operations Management', 'Risk Assessment']
  }
]

const mentors = [
  {
    name: 'Catherine Castillo',
    role: 'Emotional Intelligence Expert',
    location: 'Philippines',
    expertise: 'Leadership development and emotional intelligence training for tech professionals.',
    focus: 'Soft Skills Development'
  },
  {
    name: 'Aditi Kashyap',
    role: 'Branding & Social Media Expert',
    experience: '8+ years with Google, Audi, Accenture, Mercedes',
    expertise: 'Digital marketing, brand strategy, and social media optimization for tech startups.',
    focus: 'Digital Marketing'
  },
  {
    name: 'Paul Sloane',
    role: 'Organizational Behavior Expert',
    credentials: '20+ books, CEO experience',
    expertise: 'Organizational development, leadership strategies, and business management.',
    focus: 'Leadership Strategy'
  }
]

const moderators = [
  {
    name: 'Solomon Mlan',
    role: 'IT For Youth Ghana Administrator',
    image: '/images/Mlan.jpeg',
    specialization: 'Program Administration'
  },
  {
    name: 'Joel A. Junior',
    role: 'IT For Youth Ghana Facilitator',
    image: '/images/junior.jpeg',
    specialization: 'Training Facilitation'
  },
  {
    name: 'Ernest Amoako',
    role: 'Web Design/UX&UI Moderator',
    image: '/images/amoako.png',
    specialization: 'Design Systems'
  },
  {
    name: 'Isaac Konadu',
    role: 'Cybersecurity Expert',
    image: '/images/konadu.jpeg',
    specialization: 'Security Protocols'
  },
  {
    name: 'Ransford Agboku',
    role: 'Data Science Moderator',
    image: '/images/agboku.jpeg',
    specialization: 'Data Analytics'
  },
  {
    name: 'Theophilus Mensah',
    role: 'Software Development Moderator',
    image: '/images/mensah.jpeg',
    specialization: 'Full Stack Development'
  },
  {
    name: 'Sampson Saah',
    role: 'Mobile App Development Expert',
    image: '/images/saah.jpeg',
    specialization: 'Mobile Technologies'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Building Ghana's Digital Future
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            For six years, we have been transforming lives through innovative technology education, 
            creating pathways to prosperity and fostering the next generation of African tech leaders.
          </p>
          <div class="grid md:grid-cols-3 gap-8 animate-scale-in">
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Excellence</h3>
              <p class="text-white/80">Industry-standard education</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Community</h3>
              <p class="text-white/80">Inclusive and supportive</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">Impact</h3>
              <p class="text-white/80">Measurable results</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-left">
            <h2 class="section-title text-left">Our Mission</h2>
            <p class="text-xl leading-relaxed mb-8" style="color: var(--text-secondary)">
              To empower underserved youth across Ghana with high-quality technology education, 
              fostering innovation, digital entrepreneurship, and creating equitable opportunities 
              that transform lives and communities.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary-100); color: var(--primary)">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Education Excellence</h3>
                  <p style="color: var(--text-secondary)">World-class curriculum and training methods</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--accent-100); color: var(--accent)">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Community Impact</h3>
                  <p style="color: var(--text-secondary)">Creating lasting change in local communities</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: var(--primary-100); color: var(--primary)">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Career Success</h3>
                  <p style="color: var(--text-secondary)">Direct pathways to meaningful employment</p>
                </div>
              </div>
            </div>
          </div>
          <div class="animate-slide-right">
            <div class="grid grid-cols-2 gap-6">
              <div 
                v-for="(stat, index) in stats" 
                :key="stat.label"
                class="glass-card text-center animate-count-up"
                :style="{ animationDelay: `${index * 0.2}s` }"
              >
                <div class="text-4xl font-bold mb-3" style="color: var(--primary)">
                  {{ stat.number }}
                </div>
                <h3 class="font-semibold mb-2">{{ stat.label }}</h3>
                <p class="text-sm" style="color: var(--text-secondary)">{{ stat.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="section-fullscreen bg-gradient-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Proven Approach</h2>
          <p class="section-subtitle">
            A comprehensive methodology that ensures every student receives personalized attention 
            and achieves measurable career outcomes.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in approach" 
            :key="step.step"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                 style="background: var(--gradient-primary)">
              <span class="text-2xl font-bold text-white">{{ step.step }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
            <p class="leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section-fullscreen">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Leadership Team</h2>
          <p class="section-subtitle">
            Experienced professionals dedicated to transforming technology education 
            and creating opportunities for Ghana's youth.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(leader, index) in leadership" 
            :key="leader.name"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="relative mb-6">
              <img 
                :src="leader.image" 
                :alt="leader.name"
                class="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
              >
              <div class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" 
                   style="background: var(--accent)">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ leader.name }}</h3>
            <p class="font-medium mb-3" style="color: var(--primary)">{{ leader.role }}</p>
            <p class="text-sm mb-4" style="color: var(--text-secondary)">{{ leader.credentials }}</p>
            <p class="text-sm leading-relaxed mb-4">{{ leader.description }}</p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
                v-for="skill in leader.expertise" 
                :key="skill"
                class="px-3 py-1 rounded-full text-xs font-medium"
                style="background: var(--primary-100); color: var(--primary)"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- International Mentors -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Global Mentor Network</h2>
          <p class="section-subtitle">
            World-class experts providing guidance and insights to ensure our students 
            receive international-standard education and career advice.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(mentor, index) in mentors" 
            :key="mentor.name"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                 style="background: var(--gradient-accent)">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ mentor.name }}</h3>
            <p class="font-medium mb-3" style="color: var(--accent)">{{ mentor.role }}</p>
            <p class="text-sm mb-4" style="color: var(--text-secondary)">
              {{ mentor.location || mentor.experience || mentor.credentials }}
            </p>
            <p class="text-sm leading-relaxed mb-4">{{ mentor.expertise }}</p>
            <div class="px-4 py-2 rounded-full text-sm font-medium"
                 style="background: var(--accent-100); color: var(--accent)">
              {{ mentor.focus }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Moderators -->
    <section class="section-fullscreen bg-gradient-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Technical Excellence Team</h2>
          <p class="section-subtitle">
            Skilled practitioners and industry experts who facilitate hands-on learning 
            and ensure technical excellence in all our programs.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="(moderator, index) in moderators" 
            :key="moderator.name"
            class="glass-card text-center animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <img 
              :src="moderator.image" 
              :alt="moderator.name"
              class="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-lg"
            >
            <h3 class="font-semibold mb-1">{{ moderator.name }}</h3>
            <p class="text-sm mb-2" style="color: var(--primary)">{{ moderator.role }}</p>
            <div class="px-3 py-1 rounded-full text-xs font-medium"
                 style="background: var(--primary-100); color: var(--primary)">
              {{ moderator.specialization }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 animate-slide-up">
            Join Our Mission
          </h2>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Whether you're a student ready to transform your future, a professional wanting to mentor, 
            or an organization seeking to partner with us - there's a place for you in our community.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <RouterLink to="/programs" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              Explore Programs
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Become a Mentor
            </RouterLink>
            <RouterLink to="/partner" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Partner With Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>