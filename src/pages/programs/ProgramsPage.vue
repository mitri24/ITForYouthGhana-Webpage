<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Programs', icon: 'grid', color: 'primary' },
  { id: 'current', name: 'Active Programs', icon: 'play', color: 'accent' },
  { id: 'past', name: 'Past Programs', icon: 'check', color: 'neutral' },
  { id: 'future', name: 'Coming Soon', icon: 'clock', color: 'primary' }
]

const programs = [
  // Current Programs
  {
    id: 'ui-ux-2024',
    title: 'Advanced UI/UX Design Program',
    duration: '2-Month Intensive',
    category: 'current',
    status: 'Active',
    level: 'Intermediate to Advanced',
    participants: '50+ Students',
    description: 'Comprehensive UI/UX design training with international standards, featuring Figma, Adobe XD, user research, and prototyping.',
    features: ['21 Assignments', 'Peer Reviews', 'Portfolio Development', 'International Standards', 'Industry Mentorship'],
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    partnership: 'priME Academy AG (Germany)',
    trainer: 'Miss Miréio Trinley from Germany',
    universities: ['Accra Technical University', 'GCTU', 'UCC', 'UEW', 'UPSA'],
    image: '/images/UX1.jpeg',
    route: '/programs/ui-ux-design',
    outcomes: ['Portfolio Creation', 'Industry Certification', 'Job Placement Assistance']
  },
  
  // Core Training Programs
  {
    id: 'shs-tech-camp',
    title: 'SHS Tech Camp',
    duration: '2-Week Intensive',
    category: 'current',
    status: 'Active',
    level: 'Beginner',
    participants: '100+ Students',
    description: 'Introduction to technology for Senior High School students, covering basic programming, digital literacy, and tech career pathways.',
    technologies: ['HTML/CSS', 'JavaScript Basics', 'Digital Tools', 'Career Guidance'],
    image: '/images/UX2.jpg',
    route: '/programs/shs-tech-camp',
    outcomes: ['Tech Fundamentals', 'Career Awareness', 'Digital Skills']
  },
  
  {
    id: 'two-month-training',
    title: 'Two Month Training Program',
    duration: '2-Month Certificate',
    category: 'current',
    status: 'Active',
    level: 'Beginner to Intermediate',
    participants: '60+ Students',
    description: 'Focused skill development in specific technology areas with hands-on projects and mentorship.',
    technologies: ['Python', 'Web Development', 'Data Analysis', 'Digital Marketing'],
    image: '/images/UX3.jpeg',
    route: '/programs/two-month-training',
    outcomes: ['Practical Skills', 'Project Portfolio', 'Industry Readiness']
  },
  
  {
    id: 'six-month-online',
    title: 'Six Months Online Program',
    duration: '6-Month Online',
    category: 'current',
    status: 'Active',
    level: 'Intermediate',
    participants: '80+ Students',
    description: 'Comprehensive online training program covering multiple technology domains with flexible scheduling for working professionals.',
    technologies: ['Web Development', 'Data Analytics', 'Cybersecurity', 'Digital Marketing'],
    image: '/images/UX4.jpg',
    route: '/programs/six-month-online',
    outcomes: ['Professional Certification', 'Career Advancement', 'Remote Skills']
  },
  
  {
    id: 'six-month-in-person',
    title: 'Six Months In-Person Program',
    duration: '6-Month Certificate',
    category: 'current',
    status: 'Active',
    level: 'Beginner to Advanced',
    participants: '50+ Students',
    description: 'Intensive in-person training with hands-on labs, direct mentorship, and project-based learning in our state-of-the-art facilities.',
    technologies: ['Full-Stack Development', 'Network Administration', 'Graphic Design', 'Data Science'],
    image: '/images/adjej.webp',
    route: '/programs/six-month-in-person',
    outcomes: ['Industry Certification', 'Job Placement', 'Professional Network']
  },
  
  // Past 6-Month Programs
  {
    id: 'programming',
    title: 'Programming & Coding Bootcamp',
    duration: '6-Month Certificate',
    category: 'past',
    status: 'Completed',
    level: 'Beginner to Advanced',
    participants: '120+ Graduates',
    description: 'Comprehensive programming education covering modern web development technologies and frameworks with real-world project experience.',
    technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'Django', 'Git'],
    image: '/images/UX2.jpg',
    route: '/programs/programming',
    outcomes: ['Full-Stack Development Skills', 'Project Portfolio', 'Industry Readiness']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Science',
    duration: '6-Month Certificate',
    category: 'past',
    status: 'Completed',
    level: 'Intermediate',
    participants: '80+ Graduates',
    description: 'Data analysis and visualization training with industry-standard tools and methodologies for data-driven decision making.',
    technologies: ['Excel', 'Python', 'SQL', 'Power BI', 'Tableau', 'R'],
    image: '/images/UX3.jpeg',
    route: '/programs/data-analytics',
    outcomes: ['Data Visualization Expertise', 'Statistical Analysis Skills', 'Business Intelligence']
  },
  {
    id: 'web-design',
    title: 'Web Design & Frontend Development',
    duration: '6-Month Certificate',
    category: 'past',
    status: 'Completed',
    level: 'Beginner to Intermediate',
    participants: '100+ Graduates',
    description: 'Complete web design and user experience training from basics to advanced techniques with responsive design principles.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Adobe XD', 'Bootstrap'],
    image: '/images/UX4.jpg',
    route: '/programs/web-design',
    outcomes: ['Responsive Website Creation', 'UI/UX Design Skills', 'Frontend Development']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Multimedia',
    duration: '6-Month Certificate',
    category: 'past',
    status: 'Completed',
    level: 'Beginner to Advanced',
    participants: '90+ Graduates',
    description: 'Creative design and multimedia production training for digital content creation and brand development.',
    technologies: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Blender', 'InDesign'],
    image: '/images/UX1.jpeg',
    route: '/programs/graphic-design',
    outcomes: ['Brand Design Portfolio', 'Video Production Skills', 'Creative Digital Content']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Social Media',
    duration: '6-Month Certificate',
    category: 'past',
    status: 'Completed',
    level: 'Beginner to Intermediate',
    participants: '70+ Graduates',
    description: 'Comprehensive digital marketing strategies including social media management, content creation, and analytics.',
    technologies: ['Google Analytics', 'Facebook Ads', 'Content Creation', 'SEO', 'Email Marketing'],
    image: '/images/UX2.jpg',
    route: '/programs/digital-marketing',
    outcomes: ['Digital Campaign Management', 'Social Media Strategy', 'Marketing Analytics']
  },
  
  // Future Programs
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    duration: '4-Month Intensive',
    category: 'future',
    status: 'Coming Soon',
    level: 'Advanced',
    participants: 'Limited to 30',
    description: 'Advanced training in artificial intelligence and machine learning with practical applications in various industries.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI APIs'],
    image: '/images/UX3.jpeg',
    route: '/programs/ai-ml',
    outcomes: ['AI Model Development', 'Machine Learning Implementation', 'Industry Applications']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    duration: '3-Month Certificate',
    category: 'future',
    status: 'Coming Soon',
    level: 'Intermediate',
    participants: 'Limited to 25',
    description: 'Essential cybersecurity training covering network security, ethical hacking, and digital forensics.',
    technologies: ['Kali Linux', 'Wireshark', 'Metasploit', 'OWASP', 'Security Frameworks'],
    image: '/images/UX4.jpg',
    route: '/programs/cybersecurity',
    outcomes: ['Security Assessment Skills', 'Ethical Hacking Certification', 'Network Defense']
  }
]

const filteredPrograms = computed(() => {
  let filtered = programs
  
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(program => program.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(program => 
      program.title.toLowerCase().includes(query) ||
      program.description.toLowerCase().includes(query) ||
      program.technologies.some(tech => tech.toLowerCase().includes(query))
    )
  }
  
  return filtered
})

const stats = [
  { number: '5+', label: 'Training Programs', description: 'From 2-month to 6-month courses' },
  { number: '200+', label: 'Youth Trained', description: 'Digital skills transformation' },
  { number: '40%', label: 'Female Participation', description: 'Promoting gender equality' },
  { number: '20+', label: 'Schools Reached', description: 'Workshop impact across Ghana' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-fullscreen bg-gradient-primary">
      <div class="container">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Transform Your Future with Technology
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Choose from our comprehensive range of technology programs designed to equip you 
            with in-demand skills and accelerate your career in the digital economy.
          </p>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="text-center"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="text-3xl lg:text-4xl font-bold text-white mb-2">{{ stat.number }}</div>
              <div class="text-white/80 font-medium mb-1">{{ stat.label }}</div>
              <div class="text-white/60 text-sm">{{ stat.description }}</div>
            </div>
          </div>
          
          <!-- Search and Filter -->
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 animate-fade-in" style="animation-delay: 0.4s">
            <div class="flex flex-col lg:flex-row gap-4 items-center">
              <div class="flex-1 w-full">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search programs, technologies, or topics..."
                  class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
              </div>
              <div class="flex gap-2 flex-wrap justify-center">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  @click="selectedCategory = category.id"
                  class="px-4 py-2 rounded-lg font-medium transition-all"
                  :class="selectedCategory === category.id 
                    ? 'bg-white text-blue-900 shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30'"
                >
                  {{ category.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="section-fullscreen bg-accent-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Our Program Portfolio</h2>
          <p class="section-subtitle">
            Discover programs that match your career goals and skill level. 
            Each program is designed with industry input and real-world applications.
          </p>
        </div>

        <!-- Programs Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(program, index) in filteredPrograms" 
            :key="program.id"
            class="glass-card animate-scale-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Program Image & Status -->
            <div class="relative mb-6 overflow-hidden rounded-xl">
              <img 
                :src="program.image" 
                :alt="program.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              >
              <div class="absolute top-4 left-4">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="{
                    'bg-green-100 text-green-800': program.status === 'Active',
                    'bg-blue-100 text-blue-800': program.status === 'Completed',
                    'bg-yellow-100 text-yellow-800': program.status === 'Coming Soon'
                  }"
                >
                  {{ program.status }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
                  {{ program.duration }}
                </span>
              </div>
            </div>

            <!-- Program Content -->
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-bold mb-2">{{ program.title }}</h3>
                <p class="text-sm mb-3" style="color: var(--text-secondary)">{{ program.description }}</p>
              </div>

              <!-- Program Meta -->
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium" style="color: var(--text-primary)">Level:</span>
                  <span style="color: var(--text-secondary)"> {{ program.level }}</span>
                </div>
                <div>
                  <span class="font-medium" style="color: var(--text-primary)">Students:</span>
                  <span style="color: var(--text-secondary)"> {{ program.participants }}</span>
                </div>
              </div>

              <!-- Technologies -->
              <div>
                <h4 class="font-semibold mb-2 text-sm" style="color: var(--text-primary)">Technologies:</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in program.technologies.slice(0, 4)" 
                    :key="tech"
                    class="px-2 py-1 rounded-lg text-xs font-medium"
                    style="background: var(--primary-100); color: var(--primary)"
                  >
                    {{ tech }}
                  </span>
                  <span 
                    v-if="program.technologies.length > 4"
                    class="px-2 py-1 rounded-lg text-xs font-medium"
                    style="background: var(--neutral-200); color: var(--text-secondary)"
                  >
                    +{{ program.technologies.length - 4 }} more
                  </span>
                </div>
              </div>

              <!-- Features -->
              <div v-if="program.features">
                <h4 class="font-semibold mb-2 text-sm" style="color: var(--text-primary)">Key Features:</h4>
                <ul class="space-y-1">
                  <li 
                    v-for="feature in program.features.slice(0, 3)" 
                    :key="feature"
                    class="flex items-center gap-2 text-sm"
                    style="color: var(--text-secondary)"
                  >
                    <svg class="w-4 h-4 flex-shrink-0" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Partnership Info -->
              <div v-if="program.partnership" class="p-3 rounded-lg" style="background: var(--accent-50)">
                <div class="flex items-center gap-2 mb-1">
                  <svg class="w-4 h-4" style="color: var(--accent)" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm font-semibold" style="color: var(--accent)">International Partnership</span>
                </div>
                <p class="text-xs" style="color: var(--text-secondary)">{{ program.partnership }}</p>
                <p v-if="program.trainer" class="text-xs mt-1" style="color: var(--text-secondary)">
                  Trainer: {{ program.trainer }}
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3 pt-4">
                <RouterLink 
                  :to="program.route" 
                  class="flex-1 btn-primary text-center py-3"
                >
                  Learn More
                </RouterLink>
                <button 
                  v-if="program.status === 'Active'"
                  class="btn-outline px-6 py-3"
                >
                  Apply Now
                </button>
                <button 
                  v-else-if="program.status === 'Coming Soon'"
                  class="btn-outline px-6 py-3"
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredPrograms.length === 0" class="text-center py-16">
          <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style="background: var(--neutral-100)">
            <svg class="w-12 h-12" style="color: var(--neutral-400)" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">No programs found</h3>
          <p style="color: var(--text-secondary)" class="mb-6">Try adjusting your search criteria or browse all programs.</p>
          <button 
            @click="searchQuery = ''; selectedCategory = 'all'"
            class="btn-primary"
          >
            Show All Programs
          </button>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="section-fullscreen bg-gradient-light">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Program Success Stories</h2>
          <p class="section-subtitle">
            See how our programs have transformed careers and created opportunities 
            for our graduates across various industries.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="glass-card text-center animate-scale-in">
            <img 
              src="/images/Belinda.jpg" 
              alt="Belinda"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            >
            <h3 class="text-xl font-semibold mb-2">Belinda</h3>
            <p class="font-medium mb-3" style="color: var(--primary)">Frontend Developer</p>
            <p class="text-sm leading-relaxed mb-4" style="color: var(--text-secondary)">
              "After completing the Programming Bootcamp, I secured a role as a frontend developer. 
              The practical projects and mentorship were invaluable."
            </p>
            <div class="px-4 py-2 rounded-full text-sm font-medium" style="background: var(--primary-100); color: var(--primary)">
              Programming Graduate
            </div>
          </div>

          <div class="glass-card text-center animate-scale-in" style="animation-delay: 0.1s">
            <img 
              src="/images/emmanuel.jpg" 
              alt="Emmanuel"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            >
            <h3 class="text-xl font-semibold mb-2">Emmanuel</h3>
            <p class="font-medium mb-3" style="color: var(--primary)">Data Analyst</p>
            <p class="text-sm leading-relaxed mb-4" style="color: var(--text-secondary)">
              "The Data Analytics program equipped me with the skills to make data-driven decisions. 
              I now lead analytics initiatives at my company."
            </p>
            <div class="px-4 py-2 rounded-full text-sm font-medium" style="background: var(--primary-100); color: var(--primary)">
              Data Analytics Graduate
            </div>
          </div>

          <div class="glass-card text-center animate-scale-in" style="animation-delay: 0.2s">
            <img 
              src="/images/benedicta.png" 
              alt="Benedicta"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
            >
            <h3 class="text-xl font-semibold mb-2">Benedicta</h3>
            <p class="font-medium mb-3" style="color: var(--primary)">Graphic Designer</p>
            <p class="text-sm leading-relaxed mb-4" style="color: var(--text-secondary)">
              "The Graphic Design program transformed my creative vision into professional skills. 
              I now run my own design studio."
            </p>
            <div class="px-4 py-2 rounded-full text-sm font-medium" style="background: var(--primary-100); color: var(--primary)">
              Graphic Design Graduate
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
            Ready to Start Your Journey?
          </h2>
          <p class="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            Join thousands of graduates who have transformed their careers through our programs. 
            Take the first step towards your technology career today.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <RouterLink to="/contact" class="btn-primary text-lg px-10 py-4 bg-white hover:bg-white/90" style="color: var(--primary) !important">
              Apply Now
            </RouterLink>
            <RouterLink to="/about" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Learn About Us
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white" style="color: white !important">
              Become a Mentor
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>