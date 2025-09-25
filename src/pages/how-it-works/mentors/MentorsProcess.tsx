import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'

const MentorsProcess: React.FC = () => {
  const handleBecomeMentor = () => {
    window.location.href = '/contact'
  }

  return (
    <>
      <SEO
        title="How It Works - For Mentors"
        description="Learn how to become a mentor with IT for Youth Ghana. Guide the next generation of tech professionals."
        canonical="/how-it-works/mentors"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Mentorship Journey"
          subtitle="How It Works - For Mentors"
          description="Learn how you can share your expertise and make a lasting impact on the next generation of tech professionals."
          primaryCta={{ text: "Become a Mentor", action: handleBecomeMentor }}
        />
        
        <section className="section bg-white">
          <div className="container">
            <div className="text-center">
              <h2 className="heading-xl mb-6 text-primary">Mentorship Process</h2>
              <p className="text-lead mb-12 max-w-3xl mx-auto">
                Detailed mentorship process information coming soon
              </p>
              <button 
                className="btn btn-primary"
                onClick={handleBecomeMentor}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MentorsProcess