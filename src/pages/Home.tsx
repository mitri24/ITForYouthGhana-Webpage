import React from 'react'
import Hero from './home/components/Hero'
import WhatWeOffer from './home/components/WhatWeOffer'
import Programs from './home/components/Programs'
import Impact from './home/components/Impact'
import ImpactHighlights from './home/components/ImpactHighlights'
import Challenge from './home/components/Challenge'
import Vision from './home/components/Vision'
import QuickOverview from './home/components/QuickOverview'
import DonationSection from './home/components/DonationSection'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickOverview />
      <WhatWeOffer />
      <Programs />
      <Impact />
      <ImpactHighlights />
      <Vision />
      <Challenge />
      <DonationSection />
    </div>
  )
}

export default Home