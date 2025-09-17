import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import Partners from './pages/Partners'
import Volunteer from './pages/Volunteer'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App