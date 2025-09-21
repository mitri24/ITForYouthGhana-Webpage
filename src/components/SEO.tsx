// NEU: Comprehensive SEO Component für alle Seiten
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'organization'
  structuredData?: object
  noindex?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  structuredData,
  noindex = false
}) => {
  const siteTitle = 'IT for Youth Ghana'
  const defaultDescription = 'Empowering Ghana\'s youth through technology education. Free programming courses, mentorship, and career development for underserved communities with 70% female participation.'
  const siteUrl = 'https://itforyouthghana.org'
  
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${window.location.pathname}`
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  // Default Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NonProfitOrganization",
    "name": "IT for Youth Ghana",
    "alternateName": "IT4Youth Ghana",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "description": defaultDescription,
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Emmanuel Adjei",
        "jobTitle": "Founder & Program Director"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "Ghana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@itforyouthghana.org",
      "telephone": "+233 596 244 834",
      "contactType": "General Information"
    },
    "sameAs": [
      "https://linkedin.com/company/it-for-youth-ghana",
      "https://facebook.com/ityouthghana"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Ghana"
    },
    "mission": "To bridge Ghana's digital divide through inclusive technology education, achieving 70% female participation in tech programs and creating pathways to employment and entrepreneurship.",
    "keywords": "technology education, programming courses, digital skills, youth empowerment, gender inclusion, Ghana, nonprofit, STEM education, coding bootcamp, career development"
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="technology education, programming courses, Ghana, youth empowerment, coding, digital skills, STEM, nonprofit, gender inclusion, career development" />
      <meta name="author" content="IT for Youth Ghana" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="theme-color" content="#0152be" />
      <meta name="msapplication-TileColor" content="#0152be" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || organizationSchema)}
      </script>
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  )
}

export default SEO