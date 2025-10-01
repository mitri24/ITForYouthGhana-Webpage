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
  // Navigate to the new page
  window.location.href = path
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