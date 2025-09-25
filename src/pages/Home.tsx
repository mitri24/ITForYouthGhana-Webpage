import React from 'react'
import SEO from '../components/SEO'
import HomeHero from './home/components/Hero'
import QuickOverview from './home/components/QuickOverview'
import WhatWeOffer from './home/components/WhatWeOffer'
import ImpactHighlights from './home/components/ImpactHighlights'

const Home: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT for Youth Ghana",
    "url": "https://itforyouthghana.org",
    "logo": "https://itforyouthghana.org/images/logo.png",
    "description": "Empowering Ghana's youth through technology education. Professional programming courses, mentorship, and career development for underserved communities with 70% female participation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "Ghana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@itforyouthghana.org",
      "telephone": "+233 596 244 834",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://linkedin.com/company/it-for-youth-ghana",
      "https://facebook.com/ityouthghana"
    ]
  }

  return (
    <>
      <SEO
        title="Empowering Ghana's Youth Through Technology Education"
        description="Join IT for Youth Ghana in bridging the digital divide. Professional programming courses, mentorship, and career development with 70% female participation. Transform lives through tech education."
        canonical="/"
        structuredData={homeSchema}
      />
      
      <div>
        {/* 1. Hero - Welcome and primary navigation */}
        <HomeHero />
        
        {/* 2. Quick Overview - Who we are and what we do */}
        <QuickOverview />
        
        {/* 3. What We Offer - Overview of our services */}
        <WhatWeOffer />
        
        {/* 4. Impact Highlights - Key achievements and stats */}
        <ImpactHighlights />
        
      </div>
    </>
  )
}

export default Home