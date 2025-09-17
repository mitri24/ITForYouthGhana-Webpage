import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'

const Impact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentStory, setCurrentStory] = useState(0)

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{content.impact.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Numbers That Speak</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
                className="text-center bg-white rounded-2xl p-8 shadow-float border border-secondary/20 group"
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={isInView ? { 
                    textShadow: [
                      "0 0 0px rgba(27, 101, 178, 0)",
                      "0 0 20px rgba(27, 101, 178, 0.3)",
                      "0 0 0px rgba(27, 101, 178, 0)"
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
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Success Stories</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet our graduates who are now leading Ghana's tech industry
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={successStories[currentStory].image} 
                      alt={successStories[currentStory].name}
                      className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-float border-4 border-white"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-xl text-sm font-semibold">
                      {successStories[currentStory].program}
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-primary mb-2">{successStories[currentStory].name}</h3>
                    <p className="text-xl font-semibold text-accent mb-1">{successStories[currentStory].role}</p>
                    <p className="text-lg text-neutral-600">{successStories[currentStory].company}</p>
                    <span className="inline-block bg-secondary/20 text-primary px-3 py-1 rounded-full text-sm mt-2">
                      Graduate {successStories[currentStory].year}
                    </span>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl mb-6 leading-relaxed italic text-neutral-700 border-l-4 border-primary pl-6">
                    "{successStories[currentStory].quote || successStories[currentStory].story}"
                  </blockquote>
                </div>
              </motion.div>
              
              <div className="flex items-center justify-center gap-6 mt-12">
                <motion.button 
                  onClick={() => setCurrentStory(prev => prev === 0 ? successStories.length - 1 : prev - 1)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue flex items-center justify-center text-white shadow-blue-glow hover:shadow-accent-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                
                <div className="flex space-x-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentStory === index 
                          ? 'bg-primary scale-125' 
                          : 'bg-neutral-300 hover:bg-neutral-400'
                      }`}
                    />
                  ))}
                </div>
                
                <motion.button 
                  onClick={() => setCurrentStory(prev => (prev + 1) % successStories.length)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue to-accent flex items-center justify-center text-white shadow-blue-glow hover:shadow-accent-glow transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Community Impact</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl p-8 shadow-float border border-secondary/20 text-center group"
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
                
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {impact.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
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

      {/* Before & After Comparison */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Before & After</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The transformation of our participants from application to graduation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-neutral-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-neutral-600 mb-6">Before the Program</h3>
              <ul className="space-y-4">
                {[
                  'Limited or no tech skills',
                  'Little confidence in own abilities',
                  'Uncertainty about career paths',
                  'Limited access to resources',
                  'Missing networks in the tech industry'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-neutral-400 rounded-full mr-4"></span>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">After the Program</h3>
              <ul className="space-y-4">
                {[
                  'Solid tech skills in chosen field',
                  'Self-confidence and problem-solving abilities',
                  'Clear career goals and development plans',
                  'Access to mentors and resources',
                  'Strong professional networks'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4"></span>
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Impact