// CHANGED: UX-optimierte Home-Seite mit logischer Content-Reihenfolge
import React from 'react'
import Hero from './home/components/Hero'
import Vision from './home/components/Vision'
import Programs from './home/components/Programs'
import Impact from './home/components/Impact'
import CallToAction from './home/components/CallToAction'

const Home: React.FC = () => {
  return (
    <div>
      {/* 1. Hero - Primärer Einstiegspunkt mit Volunteer-CTA */}
      <Hero />
      
      {/* 2. Mission/Vision - Kurzer Überblick unserer Kernbotschaft */}
      <Vision />
      
      {/* 3. Initiative/Programs - Was wir konkret machen (mit Popups) */}
      <Programs />
      
      {/* 4. Impact Snapshot - Before/After Teaser → Link zur Impact-Seite */}
      <Impact />
      
      {/* 5. Final CTA - Volunteer + Partner Call-to-Action */}
      <CallToAction />
    </div>
  )
}

export default Home