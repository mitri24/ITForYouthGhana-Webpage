// NEU: Impact-Seite komplett überarbeitet mit zentralem Before/After und Grid für Rezensionen
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const Impact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const impactNumbers = content.hero.stats.concat([
    { number: '85%', label: 'Success Rate', description: 'Graduates find jobs or start businesses' },
    { number: '25+', label: 'Partner Schools', description: 'Active educational partnerships' }
  ])

  const successStories = content.impact.stories.concat([
    {
      name: 'Elisabeth Awartey',
      age: 25,
      role: 'Database Management Specialist',
      company: 'Bank of Ghana',
      quote: 'IT For Youth Ghana completely changed my perspective on technology. The skills I acquired opened doors I never thought possible.',
      image: '/images/elisabeth.jpg',
      program: 'Rural Tech Connect',
      year: '2022'
    },
    {
      name: 'Benedicta Konadu',
      age: 23,
      role: 'Graphic Designer',
      company: 'Creative Agency Kumasi',
      quote: 'The support I received fueled my growth and gave me the courage to pursue my dreams in the design world.',
      image: '/images/benedicta.png',
      program: 'Girls in Tech Program',
      year: '2021'
    },
    {
      name: 'Danielle Mensah',
      age: 22,
      role: 'Web Developer',
      company: 'Freelancer',
      quote: 'I came with no skills, but now I have built a website! This program changed my life.',
      image: '/images/danielle.jpg',
      program: 'Code Impact Challenge',
      year: '2023'
    }
  ])

  const communityImpact = [
    {
      title: 'Economic Development',
      description: 'Our graduates contribute to the local economy by starting new businesses and developing local tech solutions.',
      icon: 'Business',
      stats: content.impact.outcomes[1]
    },
    {
      title: 'Educational Partnership',
      description: 'Collaboration with schools to integrate technology education into regular curriculum.',
      icon: 'Education',
      stats: '25+ School partnerships established'
    },
    {
      title: 'Digital Inclusion',
      description: 'Bridging the digital divide in rural and underserved areas of Ghana.',
      icon: 'Digital',
      stats: '15+ Rural communities reached'
    },
    {
      title: 'Gender Equality',
      description: 'Promoting the participation of women and girls in STEM fields.',
      icon: 'Equality',
      stats: '40% female program participation'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="hero-title">{content.impact.title}</h1>
            <p className="hero-subtitle">
              Measurable changes in lives, communities, and Ghana's tech future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section ref={ref} className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Numbers That Speak</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              Six years of dedicated work transforming lives through technology education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactNumbers.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card text-center group"
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={isInView ? { 
                    textShadow: [
                      "0 0 0px theme('colors.primary.500/0')",
                      "0 0 20px theme('colors.primary.500/30')",
                      "0 0 0px theme('colors.primary.500/0')"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-muted">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Comparison - ZENTRAL PLATZIERT */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Before & After</h2>
            <p className="text-lead text-center max-w-4xl mx-auto">
              The transformation of our participants from application to graduation
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="card card-body bg-neutral-100"
              >
                <h3 className="heading-md text-neutral-600 mb-6">Before the Program</h3>
                <ul className="space-y-4">
                  {[
                    'Limited or no tech skills',
                    'Little confidence in own abilities',
                    'Uncertainty about career paths',
                    'Limited access to resources',
                    'Missing networks in the tech industry'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-3 h-3 bg-neutral-400 rounded-full mr-4 flex-shrink-0"></span>
                      <span className="text-body">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card card-body bg-gradient-to-br from-primary/10 to-accent/10"
              >
                <h3 className="heading-md mb-6">After the Program</h3>
                <ul className="space-y-4">
                  {[
                    'Solid tech skills in chosen field',
                    'Self-confidence and problem-solving abilities',
                    'Clear career goals and development plans',
                    'Access to mentors and resources',
                    'Strong professional networks'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0"></span>
                      <span className="text-primary font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - GRID LAYOUT */}
      <section className="section bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Success Stories</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              Meet our graduates who are now leading Ghana's tech industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card card-body text-center group"
              >
                <div className="mb-6">
                  <motion.div 
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {story.year}
                    </div>
                  </motion.div>
                </div>
                
                <div className="mb-4">
                  <h3 className="heading-sm mb-2">{story.name}</h3>
                  <p className="text-accent font-semibold mb-1">{story.role}</p>
                  <p className="text-muted text-sm">{story.company}</p>
                  <span className="badge badge-primary mt-2">
                    {story.program}
                  </span>
                </div>
                
                <blockquote className="text-body italic leading-relaxed">
                  "{story.quote || story.story}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-6">Community Impact</h2>
            <p className="text-lead text-center max-w-3xl mx-auto">
              How our programs transform entire communities and Ghana's digital future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityImpact.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card card-body text-center group"
              >
                <motion.div 
                  className="w-16 h-16 mb-6 mx-auto rounded-lg overflow-hidden"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{impact.icon.slice(0,3)}</span>
                  </div>
                </motion.div>
                
                <h3 className="heading-sm mb-4 group-hover:text-accent transition-colors duration-300">
                  {impact.title}
                </h3>
                
                <p className="text-body mb-4">
                  {impact.description}
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary">{impact.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Impact