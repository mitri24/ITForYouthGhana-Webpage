const express = require('express');
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 3001;

// Cache for 30 minutes
const cache = new NodeCache({ stdTTL: 1800 });

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET'],
  credentials: false
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'LinkedIn Scraper API'
  });
});

// Sample LinkedIn posts data
const getSamplePosts = () => [
  {
    id: 'post_1',
    text: 'Excited to share that our latest cohort of students has completed their web development training program! Proud to see their dedication and growth over the past 6 months.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 89,
    comments: 15,
    shares: 8
  },
  {
    id: 'post_2', 
    text: 'Meet Joseph, one of our success stories! From learning his first programming concepts to now working as a junior developer. This is the impact we strive for every day.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 124,
    comments: 22,
    shares: 11
  },
  {
    id: 'post_3',
    text: 'Our monthly hackathon brought together students to solve real-world problems. Amazing to see the innovative solutions they developed for local businesses and communities.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 156,
    comments: 28,
    shares: 14
  },
  {
    id: 'post_4',
    text: 'Thank you to our volunteer mentors who continue to share their expertise with our students. Your guidance makes a real difference in shaping the next generation of tech professionals.',
    publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 73,
    comments: 16,
    shares: 6
  },
  {
    id: 'post_5',
    text: 'Partnership spotlight: Working with local companies to create more internship opportunities for our graduates. Building bridges between education and employment.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    publishedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    linkedinUrl: 'https://www.linkedin.com/company/it-for-youth-ghana-foundation/',
    likes: 198,
    comments: 31,
    shares: 19
  }
];

// Get LinkedIn company posts
app.get('/api/linkedin-posts', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    
    // Check cache first
    const cacheKey = 'linkedin_posts_sample';
    let cachedPosts = cache.get(cacheKey);
    
    if (cachedPosts) {
      console.log('✅ Serving cached LinkedIn posts');
      return res.json({
        posts: cachedPosts.slice(0, limit),
        cached: true,
        fetchedAt: new Date().toISOString()
      });
    }

    // Generate fresh sample posts
    const posts = getSamplePosts();
    
    // Cache the results for 30 minutes
    cache.set(cacheKey, posts);
    
    console.log(`✅ Generated ${posts.length} sample LinkedIn posts`);
    
    res.json({
      posts: posts.slice(0, limit),
      cached: false,
      fetchedAt: new Date().toISOString(),
      count: posts.length
    });

  } catch (error) {
    console.error('❌ Error generating LinkedIn posts:', error);
    
    res.status(500).json({
      error: 'Failed to fetch LinkedIn posts',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 LinkedIn API running on port ${PORT}`);
  console.log(`📊 Cache TTL: 30 minutes`);
  console.log(`🌐 CORS enabled for: http://localhost:5173`);
});