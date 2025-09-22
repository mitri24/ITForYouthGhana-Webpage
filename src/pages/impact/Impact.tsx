import React from 'react'
import SEO from '../../components/SEO'
import ImpactHero from './components/ImpactHero'
import ImpactStats from './components/ImpactStats'
import BeforeAfter from './components/BeforeAfter'
import SuccessStories from './components/SuccessStories'
import CommunityImpact from './components/CommunityImpact'

const Impact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Impact - Transforming Lives Through Tech"
        description="See how IT for Youth Ghana transforms lives through technology education. 2000+ students trained, 85% success rate, bridging Ghana's digital divide."
        canonical="/impact"
        ogType="website"
      />
      <div className="min-h-screen bg-white pt-24">
        <ImpactHero />
        <ImpactStats />
        <BeforeAfter />
        <SuccessStories />
        <CommunityImpact />
      </div>
    </>
  )
}

export default Impact