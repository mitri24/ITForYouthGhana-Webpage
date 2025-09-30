import React from 'react'
import SEO from '../../components/SEO'
import Hero from '../../components/shared/Hero'
import MissionSection from './components/MissionSection'
import TeamSection from './components/TeamSection'
import ValuesSection from './components/ValuesSection'
import StatsSection from './components/StatsSection'

const WhoWeAre: React.FC = () => {
  const handleGetInvolved = () => {
    window.location.href = '/contact'
  }

  

  return (
    <>
      <SEO
        title="Who We Are - IT for Youth Ghana"
        description="Learn about IT for Youth Ghana's mission, team, and values. We're Ghana's leading NGO for inclusive tech education with proven results."
        canonical="/who-we-are"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Who We Are"
          subtitle="Empowering Ghana's Future Through Technology"
          description="We are Ghana's leading NGO dedicated to bridging the digital divide through inclusive technology education and empowerment programs."
          primaryCta={{ text: "Get Involved", action: handleGetInvolved }}
         
        />
        
        <MissionSection />
        <StatsSection />
        <ValuesSection />
        <TeamSection />
      </div>
    </>
  )
}

export default WhoWeAre