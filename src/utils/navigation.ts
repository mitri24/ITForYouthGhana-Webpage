// Navigation utility functions
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const navigateToPage = (path: string, delay: number = 0) => {
  // Immediately scroll to top
  window.scrollTo(0, 0)
  
  // In development, log the navigation attempt
  if (import.meta.env.DEV) {
    console.log('Navigation attempt to:', path)
    console.log('Use React Router Links instead of navigateToPage for SPA navigation')
  }
  
  // NOTE: This function should NOT be used in a React SPA
  // Use Link components or useNavigate hook instead
  // Only use for external links or fallback scenarios
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}