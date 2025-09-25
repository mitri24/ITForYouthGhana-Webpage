import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const BusinessesProcess: React.FC = () => {
  const handlePartnerWithUs = () => {
    window.location.href = '/contact'
  }

  return (
    <>
      <SEO
        title="How It Works - For Businesses"
        description="Learn how to partner with IT for Youth Ghana. Access top tech talent while supporting community development."
        canonical="/how-it-works/businesses"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Partnership Process"
          subtitle="How It Works - For Businesses"
          description="Discover how to partner with us to access job-ready tech talent while making a positive impact on Ghana's youth."
          primaryCta={{ text: "Partner With Us", action: handlePartnerWithUs }}
        />
        
        <section className="section bg-white">
          <div className="container">
            <div className="text-center">
              <h2 className="heading-xl mb-6 text-primary">Partnership Opportunities</h2>
              <p className="text-lead mb-12 max-w-3xl mx-auto">
                Detailed partnership process information coming soon
              </p>
              <button 
                className="btn btn-primary"
                onClick={handlePartnerWithUs}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BusinessesProcess