import React from 'react'
import { Helmet } from 'react-helmet-async'
import { getImagePath } from '../../utils/randomImages'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  canonicalUrl?: string
  structuredData?: object
}

const defaultSEO = {
  title: 'IT for Youth Ghana - Empowering Youth Through Technology',
  description: 'Transforming lives across Ghana through comprehensive technology education, coding bootcamps, and career development programs. Join 200+ graduates building successful tech careers.',
  keywords: [
    'IT training Ghana',
    'coding bootcamp Ghana',
    'technology education',
    'youth empowerment',
    'programming courses',
    'web development training',
    'digital skills Ghana',
    'tech careers Ghana',
    'software development',
    'computer training',
    'STEM education',
    'Accra tech training'
  ],
  image: getImagePath('/images/og/og-image.jpg'),
  siteName: 'IT for Youth Ghana',
  locale: 'en_US',
  type: 'website' as const,
  author: 'IT for Youth Ghana'
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  siteName,
  locale,
  author,
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonicalUrl,
  structuredData
}) => {
  const seo = {
    title: title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: [...defaultSEO.keywords, ...keywords],
    image: image || defaultSEO.image,
    siteName: siteName || defaultSEO.siteName,
    locale: locale || defaultSEO.locale,
    author: author || defaultSEO.author,
    type,
    url: url || (typeof window !== 'undefined' ? window.location.href : '')
  }

  const fullImageUrl = seo.image.startsWith('http') 
    ? seo.image 
    : `${typeof window !== 'undefined' ? window.location.origin : 'https://itforyouthghana.org'}${seo.image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content={seo.author} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content={seo.locale} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={seo.author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={seo.title} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#0152be" />
      <meta name="msapplication-TileColor" content="#0152be" />
      <meta name="application-name" content={seo.siteName} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead