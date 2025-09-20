<script setup lang="ts">
import { ref } from 'vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'All News' },
  { id: 'programs', name: 'Program Updates' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'partnerships', name: 'Partnerships' },
  { id: 'events', name: 'Events' }
]

const newsArticles = [
  {
    id: 1,
    title: 'Advanced UI/UX Design Program Launches with German Partnership',
    excerpt: 'We are excited to announce our new 2-month intensive UI/UX Design Program in partnership with priME Academy AG from Germany.',
    content: `We are thrilled to announce the launch of our Advanced UI/UX Design Program, a comprehensive 2-month intensive course that represents a significant milestone in our commitment to providing world-class technology education.

This program is delivered in partnership with priME Academy AG, a renowned German educational institution, and features expert instruction from Miss Miréio Trinley, bringing international standards directly to Ghana.

Key program highlights include:
• 21 comprehensive assignments covering real-world design challenges
• Peer review sessions to build collaborative skills
• Portfolio development with international standards
• Training in industry-standard tools: Figma, Adobe XD, User Research, and Prototyping

The program is available to students from leading universities including Accra Technical University, GCTU, UCC, UEW, and UPSA, ensuring that our nation's brightest minds have access to cutting-edge design education.

"This partnership represents our commitment to bringing global educational standards to Ghana while addressing the growing demand for skilled UI/UX professionals in our tech ecosystem," said our Program Lead.

Applications are now open for the next cohort. Students will graduate with portfolios that meet international industry standards and the skills needed to compete in the global digital marketplace.`,
    image: '/images/UX1.jpeg',
    date: '2024-11-15',
    category: 'programs',
    author: 'IT For Youth Ghana Team',
    readTime: '3 min read',
    tags: ['UI/UX', 'Partnership', 'Germany', 'Design']
  },
  {
    id: 2,
    title: '250+ Graduates Successfully Complete Our Training Programs',
    excerpt: 'Celebrating a major milestone as we successfully train over 250 graduates across various technology disciplines.',
    content: `We are proud to announce that over 250 young Ghanaians have successfully completed our comprehensive technology training programs, marking a significant milestone in our mission to empower youth through digital education.

Our graduates have completed programs across multiple disciplines:
• Programming & Coding (Python, JavaScript, React, Node.js, Django)
• Data Analytics (Excel, Python, SQL, Power BI, Tableau)
• Web Design & UI/UX (HTML5, CSS3, Figma, Adobe XD)
• Graphic Design & Video Editing
• Digital Marketing & Social Media
• Network Administration
• Computer Hardware & Software

Success Stories:
Many of our graduates have secured employment in tech companies, started their own digital businesses, or continued their education with stronger technical foundations. Our 40% female participation rate demonstrates our commitment to gender equality in tech education.

"The transformation I've witnessed in these young people is remarkable. They arrive with dreams and leave with the skills to make those dreams reality," shared one of our program coordinators.

Looking Forward:
With this achievement, we're expanding our programs and preparing to launch our AI and Robotics for Women in Development and Engineering program in Q1 2026, targeting our first cohort of 15 women in partnership with international universities and European AI companies.

The success of our graduates reinforces our belief that with the right education and support, Ghanaian youth can compete globally in the digital economy.`,
    image: '/images/UX2.jpg',
    date: '2024-10-28',
    category: 'achievements',
    author: 'Program Evaluation Team',
    readTime: '4 min read',
    tags: ['Graduates', 'Success', 'Milestone', 'Impact']
  },
  {
    id: 3,
    title: 'AI and Robotics Program for Women in Development - 60% Complete',
    excerpt: 'Our upcoming AI and Robotics program specifically for women is 60% complete and on track for Q1 2026 launch.',
    content: `We are excited to share that our groundbreaking AI and Robotics for Women in Development and Engineering program is now 60% complete and on track for its Q1 2026 launch.

This innovative program represents a significant step forward in addressing gender gaps in advanced technology fields, specifically targeting women in development and engineering roles.

Program Features:
• First cohort limited to 15 women for personalized attention
• Comprehensive curriculum covering Python, Machine Learning, Arduino, Raspberry Pi, and AI Ethics
• Focus on real-world applications in smart agriculture, water management, and health monitoring
• Partnerships with two international universities and multiple European AI companies

Development Progress:
✅ Curriculum design and international partnerships established
✅ Trainer recruitment and certification completed
✅ Equipment procurement and lab setup planned
🔄 Final program materials and assessment frameworks (in progress)
🔄 Marketing and recruitment strategy development (in progress)

Focus Areas:
The program uniquely combines AI and robotics with development challenges relevant to Ghana and West Africa:
1. Smart Agriculture: Using AI for crop monitoring and yield optimization
2. Water Management: IoT sensors and machine learning for water quality and distribution
3. Health Monitoring: Wearable devices and data analytics for community health

International Collaboration:
Our partnerships with European institutions ensure that participants receive world-class education while working on locally relevant projects that can drive real change in their communities.

Applications will open in Q4 2025, with the program launching in Q1 2026. This represents our most ambitious technical program to date and our strongest commitment to women in technology.`,
    image: '/images/UX3.jpeg',
    date: '2024-10-15',
    category: 'programs',
    author: 'Program Development Team',
    readTime: '5 min read',
    tags: ['AI', 'Robotics', 'Women in Tech', 'Development', '2026']
  },
  {
    id: 4,
    title: 'International Mentorship Network Expands with Global Experts',
    excerpt: 'Our mentorship program now includes international experts from Philippines, India, and the UK, providing global perspectives to our students.',
    content: `We are delighted to announce the expansion of our international mentorship network, bringing world-class expertise directly to our students through virtual mentorship programs.

New Mentors Include:

Catherine Castillo (Philippines) - Emotional Intelligence Expert
Catherine brings extensive experience in leadership development and emotional intelligence training, specifically focusing on helping tech professionals develop crucial soft skills for career advancement.

Aditi Kashyap - Branding & Social Media Expert
With over 8 years of experience at major companies including Google, Audi, Accenture, and Mercedes, Aditi provides invaluable insights into digital marketing, brand strategy, and social media optimization for tech startups and professionals.

Paul Sloane - Organizational Behavior Expert
Author of 20+ books and with extensive CEO experience, Paul brings deep knowledge in organizational development, leadership strategies, and business management to our entrepreneurship-focused mentorship sessions.

Impact on Our Students:
This international mentorship network provides our students with:
• Global perspectives on technology careers
• Industry insights from major multinational companies
• Leadership and soft skills development
• Entrepreneurship guidance and business strategy advice
• Cross-cultural communication skills

Virtual Mentorship Format:
Our mentors conduct regular virtual sessions, one-on-one mentorship calls, and group workshops, ensuring that geographical barriers don't limit our students' access to world-class guidance.

"Having access to mentors who have worked at companies like Google and Mercedes-Benz gives our students incredible insights into global best practices and career opportunities," said our Program Lead.

This expansion reinforces our commitment to providing not just technical education, but comprehensive career development that prepares our graduates for success in the global digital economy.`,
    image: '/images/UX4.jpg',
    date: '2024-09-20',
    category: 'partnerships',
    author: 'Mentorship Coordination Team',
    readTime: '4 min read',
    tags: ['Mentorship', 'International', 'Career Development', 'Global']
  },
  {
    id: 5,
    title: 'Tech Outreach Initiative Reaches 800+ Students Across Ghana',
    excerpt: 'Our school workshop program successfully reaches over 800 students, introducing them to technology education opportunities.',
    content: `We are proud to announce that our Tech Outreach Initiative has successfully reached over 800 students across Ghana through our comprehensive school workshop program.

Workshop Program Overview:
Over the past year, we have conducted 20+ school workshops, bringing technology education directly to students in their learning environments. These workshops serve as introduction points for students to discover technology careers and our training programs.

Geographic Reach:
Our workshops have reached students in:
• Greater Accra Region
• Ashanti Region
• Central Region
• Western Region
• Eastern Region

Workshop Content:
Each workshop includes:
• Introduction to careers in technology
• Hands-on coding demonstrations
• UI/UX design basics
• Digital literacy fundamentals
• Information about our training programs
• Q&A sessions with our graduates

Student Engagement:
The response has been overwhelmingly positive, with students showing great enthusiasm for technology careers. Many have expressed interest in pursuing further education in programming, design, and digital marketing.

Gender Representation:
We are particularly proud that our workshops have maintained strong female participation, with 40% of engaged students being young women. This aligns with our commitment to promoting gender equality in technology education.

Success Stories:
Several students who attended our workshops have gone on to enroll in our comprehensive training programs, with some already graduating and starting their technology careers.

"Seeing the excitement in students' eyes when they write their first line of code or create their first design is what drives our outreach efforts," shared one of our workshop facilitators.

Next Steps:
Based on the success of this initiative, we are planning to expand our outreach program to reach 1,000+ students in 2025, with additional focus on rural communities and underserved areas.

This outreach initiative is crucial to our mission of ensuring that all young Ghanaians, regardless of their background, have access to technology education opportunities.`,
    image: '/news1.jpg',
    date: '2024-08-30',
    category: 'events',
    author: 'Outreach Team',
    readTime: '3 min read',
    tags: ['Outreach', 'Students', 'Workshops', 'Education']
  }
]

const filteredNews = ref(newsArticles)

const filterNews = (categoryId: string) => {
  selectedCategory.value = categoryId
  if (categoryId === 'all') {
    filteredNews.value = newsArticles
  } else {
    filteredNews.value = newsArticles.filter(article => article.category === categoryId)
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getCategoryColor = (category: string) => {
  const colors = {
    programs: 'bg-blue-500',
    achievements: 'bg-green-500',
    partnerships: 'bg-purple-500',
    events: 'bg-orange-500'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-500'
}

// Initialize with all news
filterNews('all')
</script>

<template>
  <div>
    <!-- News Header -->
    <section class="pt-32 pb-16 relative">
      <div class="container">
        <div class="glass p-12 rounded-2xl text-center">
          <h1 class="section-title mb-6">Latest News & Updates</h1>
          <p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Stay updated with our latest programs, achievements, partnerships, and impact stories 
            from the IT For Youth Ghana community.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-12 bg-dark-200/20">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="filterNews(category.id)"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="selectedCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-white/10 text-white/80 hover:bg-white/20'"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section v-if="filteredNews.length > 0" class="py-20">
      <div class="container">
        <div class="glass rounded-2xl overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <div class="relative">
              <img 
                :src="filteredNews[0].image" 
                :alt="filteredNews[0].title"
                class="w-full h-64 lg:h-full object-cover"
              >
              <div class="absolute top-4 left-4">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium text-white capitalize"
                  :class="getCategoryColor(filteredNews[0].category)"
                >
                  {{ filteredNews[0].category }}
                </span>
              </div>
            </div>
            
            <div class="p-8 lg:p-12">
              <div class="flex items-center space-x-4 text-sm text-white/60 mb-4">
                <span>{{ formatDate(filteredNews[0].date) }}</span>
                <span>•</span>
                <span>{{ filteredNews[0].readTime }}</span>
                <span>•</span>
                <span>{{ filteredNews[0].author }}</span>
              </div>
              
              <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                {{ filteredNews[0].title }}
              </h2>
              
              <p class="text-white/80 leading-relaxed mb-6">
                {{ filteredNews[0].excerpt }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in filteredNews[0].tags"
                  :key="tag"
                  class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
              
              <button class="btn-primary">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in filteredNews.slice(1)"
            :key="article.id"
            class="glass rounded-2xl overflow-hidden card-hover"
          >
            <div class="relative">
              <img 
                :src="article.image" 
                :alt="article.title"
                class="w-full h-48 object-cover"
              >
              <div class="absolute top-4 left-4">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium text-white capitalize"
                  :class="getCategoryColor(article.category)"
                >
                  {{ article.category }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center space-x-2 text-xs text-white/60 mb-3">
                <span>{{ formatDate(article.date) }}</span>
                <span>•</span>
                <span>{{ article.readTime }}</span>
              </div>
              
              <h3 class="text-lg font-semibold text-white mb-3 line-clamp-2">
                {{ article.title }}
              </h3>
              
              <p class="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in article.tags.slice(0, 2)"
                  :key="tag"
                  class="px-2 py-1 bg-accent/20 text-accent text-xs rounded-md"
                >
                  {{ tag }}
                </span>
                <span
                  v-if="article.tags.length > 2"
                  class="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md"
                >
                  +{{ article.tags.length - 2 }}
                </span>
              </div>
              
              <button class="text-primary hover:text-accent font-medium text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Social Media Integration -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="section-title">Follow Our Journey</h2>
          <p class="section-subtitle">
            Stay connected with us on social media for daily updates and behind-the-scenes content.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <a 
            href="https://www.linkedin.com/company/it-for-youth-ghana-foundation"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card text-center group"
          >
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
              LinkedIn
            </h3>
            <p class="text-white/80 text-sm mb-2">2.3k followers</p>
            <p class="text-white/80 text-sm">
              Professional updates and career opportunities
            </p>
          </a>
          
          <a 
            href="https://www.instagram.com/itforyouthghana/"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card text-center group"
          >
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
              Instagram
            </h3>
            <p class="text-white/80 text-sm mb-2">1.2k followers</p>
            <p class="text-white/80 text-sm">
              Behind-the-scenes and student stories
            </p>
          </a>
          
          <a 
            href="https://web.facebook.com/itforyouthghanacollege"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card text-center group"
          >
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
              Facebook
            </h3>
            <p class="text-white/80 text-sm mb-2">5.4k followers</p>
            <p class="text-white/80 text-sm">
              Community updates and event announcements
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-20 bg-dark-200/20">
      <div class="container">
        <div class="glass p-12 rounded-2xl text-center max-w-2xl mx-auto">
          <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p class="text-white/80 mb-8">
            Subscribe to our newsletter and be the first to know about new programs, 
            success stories, and opportunities.
          </p>
          <form class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
            <button type="submit" class="btn-primary px-8 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>