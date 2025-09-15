<script setup lang="ts">
const programDetails = {
  title: 'Tech Empowerment Initiative',
  subtitle: 'Bridging the Digital Divide Through Comprehensive Technology Education',
  description: 'Our flagship program designed to provide underserved youth with fundamental technology skills and career development opportunities.',
  status: 'Active Program',
  duration: 'Ongoing Initiative',
  participants: '800+ students reached through various components'
}

const components = [
  {
    title: 'School Workshop Program',
    description: 'Introduction to technology careers and basic digital skills for high school students.',
    duration: '1-day workshops',
    reach: '20+ schools visited',
    features: ['Career guidance', 'Hands-on coding', 'Digital literacy', 'Program information']
  },
  {
    title: 'Community Tech Centers',
    description: 'Establishing technology learning centers in underserved communities.',
    duration: 'Permanent installations',
    reach: '5 communities served',
    features: ['Free internet access', 'Basic computer training', 'Digital skills workshops', 'Job search support']
  },
  {
    title: 'Youth Leadership Program',
    description: 'Training young people to become technology advocates and peer educators.',
    duration: '3-month intensive',
    reach: '50+ youth leaders trained',
    features: ['Leadership skills', 'Public speaking', 'Community organizing', 'Tech advocacy']
  }
]

const impact = [
  { metric: '800+', label: 'Students Reached' },
  { metric: '20+', label: 'Schools Visited' },
  { metric: '5', label: 'Communities Served' },
  { metric: '50+', label: 'Youth Leaders Trained' }
]

const testimonials = [
  {
    name: 'Akosua Mensah',
    role: 'High School Student',
    school: 'Accra Academy',
    quote: 'The workshop opened my eyes to careers I never knew existed. Now I want to study computer science!',
    image: '/images/UX1.jpeg'
  },
  {
    name: 'Kwame Asante',
    role: 'Community Leader',
    location: 'Kwabenya',
    quote: 'Having a tech center in our community has made a huge difference. Young people now have access to opportunities.',
    image: '/images/UX2.jpg'
  }
]

const upcomingActivities = [
  {
    title: 'Digital Literacy Campaign',
    date: 'January 2025',
    description: 'Community-wide campaign to improve basic digital skills across 10 communities.',
    status: 'Planning Phase'
  },
  {
    title: 'Youth Tech Conference',
    date: 'March 2025',
    description: 'Annual conference bringing together young tech enthusiasts from across Ghana.',
    status: 'Registration Open'
  },
  {
    title: 'Mobile Tech Lab',
    date: 'June 2025',
    description: 'Launch of mobile technology lab to reach rural communities.',
    status: 'Fundraising'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-32 bg-gradient-secondary relative overflow-hidden">
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm mb-6">
            {{ programDetails.status }} • {{ programDetails.duration }}
          </div>
          <h1 class="hero-title text-white mb-6">
            {{ programDetails.title }}
          </h1>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            {{ programDetails.subtitle }}
          </p>
          <p class="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            {{ programDetails.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/contact" class="btn-primary text-lg px-8 py-4">
              Get Involved
            </RouterLink>
            <RouterLink to="/volunteer" class="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              Volunteer With Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics -->
    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in impact" :key="stat.label" class="glass-card text-center">
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              {{ stat.metric }}
            </div>
            <div class="text-white/80 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Components -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Program Components</h2>
          <p class="section-subtitle">
            Multiple pathways to tech empowerment, each designed to meet communities where they are.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <div v-for="component in components" :key="component.title" class="glass p-8 rounded-2xl">
            <h3 class="text-xl font-semibold text-white mb-3">{{ component.title }}</h3>
            <p class="text-white/80 leading-relaxed mb-4">{{ component.description }}</p>
            
            <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <p class="font-medium text-primary">Duration</p>
                <p class="text-white/80">{{ component.duration }}</p>
              </div>
              <div>
                <p class="font-medium text-accent">Reach</p>
                <p class="text-white/80">{{ component.reach }}</p>
              </div>
            </div>
            
            <div>
              <p class="font-medium text-white mb-2">Key Features:</p>
              <ul class="space-y-1">
                <li v-for="feature in component.features" :key="feature" class="text-sm text-white/80 flex items-center">
                  <span class="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {{ feature }}
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
          <h2 class="section-title">Success Stories</h2>
          <p class="section-subtitle">
            Hear from students and community members whose lives have been transformed by our program.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="glass p-8 rounded-2xl">
            <div class="flex items-start space-x-4">
              <img 
                :src="testimonial.image" 
                :alt="testimonial.name"
                class="w-16 h-16 rounded-full object-cover shadow-lg flex-shrink-0"
              >
              <div class="flex-1">
                <blockquote class="text-lg text-white/90 mb-4 italic">
                  "{{ testimonial.quote }}"
                </blockquote>
                <div>
                  <div class="font-semibold text-white">{{ testimonial.name }}</div>
                  <div class="text-primary">{{ testimonial.role }}</div>
                  <div class="text-accent text-sm">{{ testimonial.school || testimonial.location }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Activities -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Upcoming Activities</h2>
          <p class="section-subtitle">
            Exciting initiatives planned to expand our impact and reach more communities.
          </p>
        </div>
        
        <div class="space-y-6 max-w-4xl mx-auto">
          <div v-for="activity in upcomingActivities" :key="activity.title" class="glass p-6 rounded-lg">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-lg font-semibold text-white">{{ activity.title }}</h3>
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                    {{ activity.status }}
                  </span>
                </div>
                <p class="text-white/80 mb-2">{{ activity.description }}</p>
                <p class="text-accent text-sm">{{ activity.date }}</p>
              </div>
              <div class="flex-shrink-0">
                <button class="btn-primary text-sm px-6 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Get Involved -->
    <section class="py-20">
      <div class="container">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="glass-card text-center">
            <h3 class="text-xl font-semibold text-white mb-3">Schools & Institutions</h3>
            <p class="text-white/80 mb-4">
              Partner with us to bring technology education to your students through workshops and programs.
            </p>
            <RouterLink to="/contact" class="btn-primary text-sm">
              Request Workshop
            </RouterLink>
          </div>
          
          <div class="glass-card text-center">
            <h3 class="text-xl font-semibold text-white mb-3">Community Leaders</h3>
            <p class="text-white/80 mb-4">
              Help us establish tech centers and programs in your community to empower local youth.
            </p>
            <RouterLink to="/partner" class="btn-primary text-sm">
              Become Partner
            </RouterLink>
          </div>
          
          <div class="glass-card text-center">
            <h3 class="text-xl font-semibold text-white mb-3">Individual Supporters</h3>
            <p class="text-white/80 mb-4">
              Volunteer your time, donate resources, or spread awareness about our mission.
            </p>
            <RouterLink to="/volunteer" class="btn-primary text-sm">
              Get Involved
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="glass p-12 rounded-2xl text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Tech Empowerment Movement
          </h2>
          <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of bridging the digital divide in Ghana. Together, we can ensure that every young person 
            has access to technology education and the opportunities it creates.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/contact" class="btn-primary text-lg px-8 py-4">
              Start a Program in Your Community
            </RouterLink>
            <RouterLink to="/programs" class="btn-outline text-lg px-8 py-4">
              Explore All Programs
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>