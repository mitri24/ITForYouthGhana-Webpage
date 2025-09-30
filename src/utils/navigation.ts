// Navigation utility functions
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const navigateToPage = (path: string, delay: number = 100) => {
  window.location.href = path
  setTimeout(() => {
    scrollToTop()
  }, delay)
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