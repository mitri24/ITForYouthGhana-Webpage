import React from 'react'
import Hero from './home/components/Hero'

import Programs from './home/components/Programs'
import Impact from './home/components/Impact'
import ImpactHighlights from './home/components/ImpactHighlights'
import Challenge from './home/components/Challenge'
import Vision from './home/components/Vision'
import QuickOverview from './home/components/QuickOverview'
import DonationSection from './home/components/DonationSection'
import { navigateToPage } from '../utils/navigation'

const Home: React.FC = () => {
  return (
    <div id="main-content" className="min-h-screen">
      <Hero />
      <QuickOverview />
      <Challenge />
      <Vision />

      <Programs />
      <Impact />
      <ImpactHighlights />
     
     
      <DonationSection />
    </div>
  )
}

export default Home