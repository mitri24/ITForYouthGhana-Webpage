import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo(0, 0)
    
    // Also ensure document body scrolls to top (for some edge cases)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  // Additional effect to handle page load
  useEffect(() => {
    // Ensure page starts at top on initial load
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollToTop