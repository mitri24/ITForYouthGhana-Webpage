// CHANGED: UX-optimierte Home-Seite mit logischer Content-Reihenfolge
import React from 'react'
import SEO from '../components/SEO'
import Hero from './home/components/Hero'
import Vision from './home/components/Vision'
import Programs from './home/components/Programs'
import Impact from './home/components/Impact'
import CallToAction from './home/components/CallToAction'

const Home: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT for Youth Ghana",
    "url": "https://itforyouthghana.org",
    "logo": "https://itforyouthghana.org/images/logo.png",
    "description": "Empowering Ghana's youth through technology education. Free programming courses, mentorship, and career development for underserved communities with 70% female participation.",
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
        description="Join IT for Youth Ghana in bridging the digital divide. Free programming courses, mentorship, and career development with 70% female participation. Transform lives through tech education."
        canonical="/"
        structuredData={homeSchema}
      />
      
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
    </>
  )
}

export default Home