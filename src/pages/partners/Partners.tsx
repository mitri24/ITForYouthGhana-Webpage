import React from 'react'
import SEO from '../../components/SEO'
import PartnersHero from './components/PartnersHero'
import PartnerGrid from './components/PartnerGrid'
import PartnersCallToAction from './components/PartnersCallToAction'

const Partners: React.FC = () => {
  return (
    <>
      <SEO 
        title="Partnership Opportunities - Tech Education Ghana"
        description="Partner with IT for Youth Ghana to expand digital inclusion. Educational, corporate, government, NGO partnerships available for maximum impact."
        canonical="/partners"
        ogType="organization"
      />
      <div className="min-h-screen bg-white pt-24">
        <PartnersHero />
        <PartnerGrid />
        <PartnersCallToAction />
      </div>
    </>
  )
}

export default Partners