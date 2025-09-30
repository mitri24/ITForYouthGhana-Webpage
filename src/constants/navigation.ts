// Navigation structure constants
export interface NavigationItem {
  id: string
  label: string
  path?: string
  subItems?: NavigationItem[]
  external?: boolean
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'who-we-are',
    label: 'Who we are',
    path: '/who-we-are'
  },
  {
    id: 'what-we-offer',
    label: 'What we offer',
    subItems: [
      {
        id: 'students-graduates',
        label: 'Students & Graduates',
        path: '/what-we-offer/students-graduates'
      },
      {
        id: 'businesses',
        label: 'Businesses',
        path: '/what-we-offer/businesses'
      },
      {
        id: 'volunteers',
        label: 'Volunteers',
        path: '/what-we-offer/volunteers'
      }
    ]
  },
  {
    id: 'who-can-apply',
    label: 'Who can apply',
    path: '/who-can-apply'
  },
  {
    id: 'how-it-works',
    label: 'How it works',
    subItems: [
      {
        id: 'students-graduates-process',
        label: 'For Students & Graduates',
        path: '/how-it-works/students-graduates'
      },
      {
        id: 'businesses-process',
        label: 'For Businesses',
        path: '/how-it-works/businesses'
      },
    ]
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    path: '/testimonials'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact'
  },
  {
    id: 'donate',
    label: 'Donate',
    path: '/donate'
  }
]

export const MENU_LABELS = {
  HOME: 'Home',
  WHO_WE_ARE: 'Who we are',
  WHAT_WE_OFFER: 'What we offer',
  WHO_CAN_APPLY: 'Who can apply',
  HOW_IT_WORKS: 'How it works',
  TESTIMONIALS: 'Testimonials',
  CONTACT: 'Contact'
} as const