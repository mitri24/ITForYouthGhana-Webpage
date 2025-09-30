// Structured Data for SEO
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "NonProfit",
  "name": "IT for Youth Ghana",
  "url": "https://itforyouthghana.org",
  "logo": "https://itforyouthghana.org/images/logo/logo.png",
  "description": "Empowering Ghanaian youth through comprehensive technology education, coding bootcamps, and career development programs.",
  "foundingDate": "2019",
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana",
      "addressRegion": "Greater Accra"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233-XXX-XXX-XXX",
    "contactType": "General Inquiries",
    "email": "info@itforyouthghana.org"
  },
  "sameAs": [
    "https://www.linkedin.com/company/it-for-youth-ghana",
    "https://www.facebook.com/itforyouthghana",
    "https://www.globalgiving.org/projects/coding-and-digital-skills-for-1000-girls-in-ghana/"
  ],
  "mission": "To bridge the digital divide and empower Ghanaian youth with technology skills for economic empowerment",
  "areaServed": {
    "@type": "Country",
    "name": "Ghana"
  },
  "knowsAbout": [
    "Technology Education",
    "Software Development Training",
    "Web Development",
    "Digital Skills",
    "Youth Empowerment",
    "Coding Bootcamps"
  ]
}

export const educationalOrganizationData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "IT for Youth Ghana",
  "url": "https://itforyouthghana.org",
  "logo": "https://itforyouthghana.org/images/logo/logo.png",
  "description": "Technology education organization providing coding bootcamps and career development programs",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Ghana",
    "addressRegion": "Greater Accra"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional Certificate",
    "competencyRequired": [
      "Web Development",
      "Software Programming",
      "Digital Literacy",
      "Project Management"
    ]
  },
  "offers": [
    {
      "@type": "Course",
      "name": "Web Development Bootcamp",
      "description": "6-month intensive web development program",
      "provider": {
        "@type": "Organization",
        "name": "IT for Youth Ghana"
      }
    },
    {
      "@type": "Course",
      "name": "Digital Skills Training",
      "description": "Comprehensive digital literacy and computer skills program",
      "provider": {
        "@type": "Organization",
        "name": "IT for Youth Ghana"
      }
    }
  ]
}

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://itforyouthghana.org/#organization",
  "name": "IT for Youth Ghana",
  "url": "https://itforyouthghana.org",
  "logo": "https://itforyouthghana.org/images/logo/logo.png",
  "image": "https://itforyouthghana.org/images/og/og-image.jpg",
  "description": "Leading technology education organization in Ghana providing coding bootcamps, web development training, and career development programs for youth empowerment.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GH",
    "addressRegion": "Greater Accra"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.6037,
    "longitude": -0.1870
  },
  "telephone": "+233-XXX-XXX-XXX",
  "email": "info@itforyouthghana.org",
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "Free - $$$",
  "paymentAccepted": ["Cash", "Mobile Money", "Bank Transfer"],
  "currenciesAccepted": "GHS",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Training Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Training",
          "description": "Comprehensive 6-month web development bootcamp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Skills Training",
          "description": "Basic computer and digital literacy program"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "150"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Belinda"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "After my Senior High Education, I was lost in hope to continue my education. However, IT For Youth came through with their two-month intensive programming course. Today, I am a front-end developer hoping to grow more in IT."
    }
  ]
}

export const courseStructuredData = (courseName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": courseName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "IT for Youth Ghana",
    "url": "https://itforyouthghana.org"
  },
  "teaches": [
    "Web Development",
    "JavaScript Programming",
    "HTML/CSS",
    "React.js",
    "Node.js",
    "Database Management"
  ],
  "courseMode": "In-person",
  "educationalLevel": "Beginner to Intermediate",
  "timeRequired": "P6M", // 6 months
  "inLanguage": "en",
  "availableLanguage": ["en"],
  "isAccessibleForFree": false,
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "GHS",
    "availability": "https://schema.org/InStock"
  }
})