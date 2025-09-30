import React from 'react'
import SEO from '../../components/SEO'
import Hero from '../../components/shared/Hero'
import MissionSection from './components/MissionSection'
import TeamSection from './components/TeamSection'
import ValuesSection from './components/ValuesSection'
import StatsSection from './components/StatsSection'
import PartnersSection from './components/PartnersSection'
import { navigateToPage } from '../../utils/navigation'

const WhoWeAre: React.FC = () => {
  const handleGetInvolved = () => {
    navigateToPage('/contact')
  }

  

  return (
    <>
      <SEO
        title="Who We Are - IT for Youth Ghana"
        description="Learn about IT for Youth Ghana's mission, team, and values. We're Ghana's leading NGO for inclusive tech education with proven results."
        canonical="/who-we-are"
      />
      
      <div id="main-content" className="min-h-screen bg-white pt-24">
        <Hero
          title="Who We Are"
          subtitle="Empowering Ghana's Future Through Technology"
          description="At IT For Youth Ghana, we are a forward-thinking non-profit organization dedicated to equipping Ghanaian youth with the digital skills they need to thrive in today's technology-driven economy. Founded with the vision to bridge the digital divide and reducing unemployment, we are committed to ensuring that no talented young person is left behind due to financial or geographical barriers."
          primaryCta={{ text: "Get Involved", action: handleGetInvolved }}
         
        />
        
        <MissionSection />
        <StatsSection />
        <ValuesSection />
        <PartnersSection />
        <TeamSection />
      </div>
    </>
  )
}

export default WhoWeAre