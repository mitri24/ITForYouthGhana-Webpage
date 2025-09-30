import React from 'react'

export const SkipLinks: React.FC = () => {
  return (
    <div className="sr-only focus:not-sr-only">
      <nav 
        aria-label="Skip navigation links"
        className="fixed top-0 left-0 z-[9999] bg-primary text-white p-4 focus-within:relative focus-within:block"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a 
              href="#main-content"
              className="inline-block p-2 bg-primary-700 rounded focus:ring-2 focus:ring-white focus:outline-none hover:bg-primary-800 transition-colors"
            >
              Skip to main content
            </a>
          </li>
          <li>
            <a 
              href="#main-navigation"
              className="inline-block p-2 bg-primary-700 rounded focus:ring-2 focus:ring-white focus:outline-none hover:bg-primary-800 transition-colors"
            >
              Skip to navigation
            </a>
          </li>
          <li>
            <a 
              href="#footer"
              className="inline-block p-2 bg-primary-700 rounded focus:ring-2 focus:ring-white focus:outline-none hover:bg-primary-800 transition-colors"
            >
              Skip to footer
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SkipLinks