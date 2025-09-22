import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/layout/footer'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/about'))
const Programs = React.lazy(() => import('./pages/programs/Programs'))
const Impact = React.lazy(() => import('./pages/impact/Impact'))
const Partners = React.lazy(() => import('./pages/partners/Partners'))
const Volunteer = React.lazy(() => import('./pages/volunteer/Volunteer'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Donate = React.lazy(() => import('./pages/Donate'))
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
          <a 
            href="#main-content" 
            className="skip-link"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" role="main" tabIndex={-1}>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
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