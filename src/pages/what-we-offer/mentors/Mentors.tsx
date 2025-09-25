import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const Mentors: React.FC = () => {
  const handleJoinAsMentor = () => {
    window.location.href = '/contact'
  }

  const handleLearnMore = () => {
    document.getElementById('mentor-benefits')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SEO
        title="For Mentors - IT for Youth Ghana"
        description="Share your expertise and make an impact. Join our mentor network to guide the next generation of tech professionals in Ghana."
        canonical="/what-we-offer/mentors"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Share Your Expertise"
          subtitle="For Mentors"
          description="Guide the next generation of tech professionals while giving back to your community. Join our network of industry mentors making a real difference."
          primaryCta={{ text: "Join as Mentor", action: handleJoinAsMentor }}
          secondaryCta={{ text: "Learn More", action: handleLearnMore }}
        />
        
        <section id="mentor-benefits" className="section bg-white">
          <div className="container">
            <div className="text-center">
              <h2 className="heading-xl mb-6 text-primary">Mentorship Opportunities</h2>
              <p className="text-lead mb-12 max-w-3xl mx-auto">
                Coming soon - detailed information about our mentor program
              </p>
              <button 
                className="btn btn-primary"
                onClick={handleJoinAsMentor}
              >
                Get Involved Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Mentors