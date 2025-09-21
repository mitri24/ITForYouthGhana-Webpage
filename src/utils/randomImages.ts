// Utility für zufällige Bildauswahl aus dem erweiterten Pool
export const randomImages = [
  // Neue Event/Workshop Bilder
  '/images/randomPictures/2024-12-17 12.34 (1).jpeg',
  '/images/randomPictures/2024-12-17 12.34 (2).jpeg',
  '/images/randomPictures/2024-12-17 13.05.jpeg',
  '/images/randomPictures/2024-12-17 20.27 (5).jpg',
  '/images/randomPictures/2024-12-17 20.27 (6).jpg',
  '/images/randomPictures/2024-12-17 20.57 (5).jpg',
  '/images/randomPictures/2024-12-17 20.57 (6).jpg',
  '/images/randomPictures/2024-12-17 21.02.jpg',
  '/images/randomPictures/2024-12-17 21.12 (3).jpg',
  '/images/randomPictures/2024-12-17 21.13 (9).jpg',
  
  // Graduation & Workshop Bilder
  '/images/randomPictures/GRADUATION HIGHLIGHTS-Cover.jpg',
  '/images/randomPictures/IMG-20241026-WA0064.jpg',
  '/images/randomPictures/IMG-20241026-WA0092.jpg',
  '/images/randomPictures/IMG-20241026-WA0093.jpg',
  '/images/randomPictures/IMG-20241026-WA0094.jpg',
  
  // Training Session Bilder
  '/images/randomPictures/IMG-20241118-WA0052.jpg',
  '/images/randomPictures/IMG-20241118-WA0053.jpg',
  '/images/randomPictures/IMG-20241118-WA0054.jpg',
  '/images/randomPictures/IMG-20241118-WA0056.jpg',
  '/images/randomPictures/IMG-20241118-WA0059.jpg',
  '/images/randomPictures/IMG-20241118-WA0060.jpg',
  '/images/randomPictures/IMG-20241118-WA0063.jpg',
  '/images/randomPictures/IMG-20241118-WA0078.jpg',
  '/images/randomPictures/IMG-20241118-WA0079.jpg',
  '/images/randomPictures/IMG-20241118-WA0090.jpg',
  '/images/randomPictures/IMG-20241118-WA0095.jpg',
  '/images/randomPictures/IMG-20241118-WA0098.jpg',
  '/images/randomPictures/IMG-20241118-WA0104.jpg',
  '/images/randomPictures/IMG-20241118-WA0106.jpg',
  '/images/randomPictures/IMG-20241119-WA0002.jpg',
  
  // Equipment & Tech Bilder
  '/images/randomPictures/IMG_2509.JPG',
  '/images/randomPictures/IMG_2510.JPG',
  '/images/randomPictures/IMG_2544.JPG',
  '/images/randomPictures/IMG_2547.JPG',
  '/images/randomPictures/IMG_2557_1.JPG',
  '/images/randomPictures/IMG_2561.JPG',
  '/images/randomPictures/IMG_2599_1.JPG',
  '/images/randomPictures/IMG_2665.PNG',
  '/images/randomPictures/IMG_2666.png',
  '/images/randomPictures/IMG_2707.PNG',
  '/images/randomPictures/IMG_2732.PNG',
  '/images/randomPictures/IMG_3096.JPG',
  '/images/randomPictures/IMG_3097.JPG',
  
  // Event & Community Bilder
  '/images/randomPictures/IMG_8304.JPG',
  '/images/randomPictures/IMG_8395.JPG',
  '/images/randomPictures/IMG_8530.JPG',
  '/images/randomPictures/IMG_8532.JPG',
  '/images/randomPictures/IMG_8586.JPG',
  '/images/randomPictures/IMG_8600.JPG',
  '/images/randomPictures/IMG_8602.JPG',
  '/images/randomPictures/IMG_8623.JPG',
  '/images/randomPictures/IMG_8649.JPG',
  '/images/randomPictures/IMG_8802.JPG',
  
  // Original UX & Frame Bilder
  '/images/randomPictures/UX1.jpeg',
  '/images/randomPictures/UX2.jpg',
  '/images/randomPictures/UX3.jpeg',
  '/images/randomPictures/UX4.jpg',
  '/images/randomPictures/frame 5.jpg',
  '/images/randomPictures/tafel.png'
]

// Utility-Funktionen für zufällige Bildauswahl
export const getRandomImage = (): string => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
}

export const getRandomImages = (count: number): string[] => {
  const shuffled = [...randomImages].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getRandomImageSet = (count: number): string[] => {
  // Sicherstellen, dass wir keine Duplikate haben
  const selected: string[] = []
  const available = [...randomImages]
  
  for (let i = 0; i < count && available.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * available.length)
    selected.push(available.splice(randomIndex, 1)[0])
  }
  
  return selected
}

// Kategorisierte Bildsets für spezielle Anwendungen
export const imageCategories = {
  workshops: [
    '/images/randomPictures/IMG-20241118-WA0052.jpg',
    '/images/randomPictures/IMG-20241118-WA0053.jpg',
    '/images/randomPictures/IMG-20241118-WA0078.jpg',
    '/images/randomPictures/IMG-20241118-WA0095.jpg',
    '/images/randomPictures/2024-12-17 20.27 (5).jpg',
    '/images/randomPictures/2024-12-17 20.57 (5).jpg'
  ],
  graduation: [
    '/images/randomPictures/GRADUATION HIGHLIGHTS-Cover.jpg',
    '/images/randomPictures/IMG-20241026-WA0092.jpg',
    '/images/randomPictures/IMG-20241026-WA0093.jpg',
    '/images/randomPictures/IMG-20241026-WA0094.jpg'
  ],
  tech: [
    '/images/randomPictures/IMG_2707.PNG',
    '/images/randomPictures/IMG_2732.PNG',
    '/images/randomPictures/IMG_8304.JPG',
    '/images/randomPictures/tafel.png'
  ],
  community: [
    '/images/randomPictures/IMG_8586.JPG',
    '/images/randomPictures/IMG_8600.JPG',
    '/images/randomPictures/IMG_8802.JPG',
    '/images/randomPictures/2024-12-17 21.02.jpg'
  ]
}

export const getCategoryImages = (category: keyof typeof imageCategories): string[] => {
  return imageCategories[category] || []
}