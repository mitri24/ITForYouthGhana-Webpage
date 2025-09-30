import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import MainNavigation from './components/navigation/MainNavigation'
import Footer from './components/layout/footer'
import { SkipLinks } from './components/accessibility'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'))
const WhoWeAre = React.lazy(() => import('./pages/who-we-are/WhoWeAre'))
const StudentsGraduates = React.lazy(() => import('./pages/Opportunities/students-graduates/StudentsGraduates'))
const Businesses = React.lazy(() => import('./pages/Opportunities/businesses/Businesses'))
const Volunteers = React.lazy(() => import('./pages/Opportunities/volunteers/Volunteers'))
const WhoCanApply = React.lazy(() => import('./pages/who-can-apply/WhoCanApply'))
const StudentsProcess = React.lazy(() => import('./pages/how-it-works/students-graduates/StudentsProcess'))
const BusinessesProcess = React.lazy(() => import('./pages/how-it-works/businesses/BusinessesProcess'))
const VolunteersProcess = React.lazy(() => import('./pages/how-it-works/volunteers/VolunteersProcess'))
const Testimonials = React.lazy(() => import('./pages/testimonials/Testimonials'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Donate = React.lazy(() => import('./pages/Donate'))
const Partners = React.lazy(() => import('./pages/Partners'))
const Careers = React.lazy(() => import('./pages/Careers'))
const TechEmpowerment = React.lazy(() => import('./pages/TechEmpowerment'))
const Error404 = React.lazy(() => import('./pages/Error404'))
const Error500 = React.lazy(() => import('./pages/Error500'))

// Loading component
const PageLoading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-neutral-800">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipLinks />
          <MainNavigation />
          <main id="main-content" role="main" tabIndex={-1}>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                {/* New routes */}
                <Route path="/opportunities/students-graduates" element={<StudentsGraduates />} />
                <Route path="/opportunities/businesses" element={<Businesses />} />
                <Route path="/opportunities/volunteers" element={<Volunteers />} />
                
                {/* Legacy redirects for old URLs */}
                <Route path="/what-we-offer/students-graduates" element={<StudentsGraduates />} />
                <Route path="/what-we-offer/businesses" element={<Businesses />} />
                <Route path="/what-we-offer/volunteers" element={<Volunteers />} />
                <Route path="/who-can-apply" element={<WhoCanApply />} />
                <Route path="/how-it-works/students-graduates" element={<StudentsProcess />} />
                <Route path="/how-it-works/businesses" element={<BusinessesProcess />} />
                <Route path="/how-it-works/volunteers" element={<VolunteersProcess />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/tech-empowerment" element={<TechEmpowerment />} />
                <Route path="/404" element={<Error404 />} />
                <Route path="/500" element={<Error500 />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App