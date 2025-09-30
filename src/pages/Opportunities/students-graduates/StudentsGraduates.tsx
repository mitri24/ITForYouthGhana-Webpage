import React from 'react'
import SEO from '../../../components/SEO'
import Hero from '../../../components/shared/Hero'
import ProgramsOverview from './components/ProgramsOverview'
import SkillsPathways from './components/SkillsPathways'
import CareerSupport from './components/CareerSupport'
import SuccessStories from './components/SuccessStories'

const StudentsGraduates: React.FC = () => {
  const handleApplyNow = () => {
    window.location.href = '/contact'
  }



  return (
    <>
      <SEO
        title="For Students & Graduates - IT for Youth Ghana"
        description="Transform your career with our comprehensive tech training programs. From coding bootcamps to data analytics - build job-ready skills with 85% employment rate."
        canonical="/what-we-offer/students-graduates"
      />
      
      <div className="min-h-screen bg-white pt-24">
        <Hero
          title="Transform Your Future"
          subtitle="For Students & Graduates"
          description="Build job-ready tech skills with comprehensive training programs designed to launch your career in Ghana's growing digital economy."
          primaryCta={{ text: "Apply Now", action: handleApplyNow }}
        
        />
        
        <ProgramsOverview />
        <SkillsPathways />
        <CareerSupport />
        <SuccessStories />
      </div>
    </>
  )
}

export default StudentsGraduates