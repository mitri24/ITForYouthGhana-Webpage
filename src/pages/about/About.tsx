import React from 'react'
import SEO from '../../components/SEO'
import AboutHero from './components/AboutHero'
import AboutMission from './components/AboutMission'
import AboutApproach from './components/AboutApproach'
import AboutTimeline from './components/AboutTimeline'
import AboutTeam from './components/AboutTeam'
import AboutValues from './components/AboutValues'

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Story - About IT for Youth Ghana"
        description="Learn about IT for Youth Ghana's journey since 2023, our mission to achieve 70% female participation in tech education, and meet our leadership team driving digital inclusion across Ghana."
        canonical="/about"
        ogType="organization"
      />
      
      <div className="min-h-screen bg-white" style={{ paddingTop: 'var(--space-3xl)' }}>
        <AboutHero />
        <AboutMission />
        <AboutApproach />
        <AboutTimeline />
        <AboutTeam />
        <AboutValues />
      </div>
    </>
  )
}

export default About