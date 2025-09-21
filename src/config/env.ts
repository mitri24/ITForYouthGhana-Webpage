// Environment configuration for IT for Youth Ghana
// This file manages all environment variables and provides type safety

interface AppConfig {
  app: {
    name: string
    url: string
    env: 'development' | 'staging' | 'production'
  }
  api: {
    baseUrl: string
    version: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
  social: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
    youtube: string
  }
  analytics: {
    googleAnalyticsId?: string
    facebookPixelId?: string
    hotjarId?: string
  }
  features: {
    newsletter: boolean
    donations: boolean
    blog: boolean
    events: boolean
  }
  services: {
    mailchimpUrl?: string
    paystackPublicKey?: string
    recaptchaSiteKey?: string
  }
  development: {
    debugMode: boolean
    showDevTools: boolean
  }
}

// Helper function to get environment variable with fallback
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return import.meta.env[key] || defaultValue
}

// Helper function to get boolean environment variable
const getBoolEnvVar = (key: string, defaultValue: boolean = false): boolean => {
  const value = import.meta.env[key]
  if (value === undefined) return defaultValue
  return value === 'true' || value === '1'
}

// Export configuration object
export const config: AppConfig = {
  app: {
    name: getEnvVar('VITE_APP_NAME', 'IT for Youth Ghana'),
    url: getEnvVar('VITE_APP_URL', 'https://itforyouthghana.org'),
    env: getEnvVar('VITE_APP_ENV', 'production') as AppConfig['app']['env']
  },
  
  api: {
    baseUrl: getEnvVar('VITE_API_BASE_URL', 'https://api.itforyouthghana.org'),
    version: getEnvVar('VITE_API_VERSION', 'v1')
  },
  
  contact: {
    email: getEnvVar('VITE_CONTACT_EMAIL', 'info@itforyouthghana.org'),
    phone: getEnvVar('VITE_CONTACT_PHONE', '+233 596 244 834'),
    address: getEnvVar('VITE_CONTACT_ADDRESS', 'Digital Innovation Hub, Accra, Ghana')
  },
  
  social: {
    facebook: getEnvVar('VITE_SOCIAL_FACEBOOK', 'https://facebook.com/ityouthghana'),
    twitter: getEnvVar('VITE_SOCIAL_TWITTER', 'https://twitter.com/ityouthghana'),
    linkedin: getEnvVar('VITE_SOCIAL_LINKEDIN', 'https://linkedin.com/company/it-for-youth-ghana'),
    instagram: getEnvVar('VITE_SOCIAL_INSTAGRAM', 'https://instagram.com/ityouthghana'),
    youtube: getEnvVar('VITE_SOCIAL_YOUTUBE', 'https://youtube.com/@ityouthghana')
  },
  
  analytics: {
    googleAnalyticsId: getEnvVar('VITE_GOOGLE_ANALYTICS_ID') || undefined,
    facebookPixelId: getEnvVar('VITE_FACEBOOK_PIXEL_ID') || undefined,
    hotjarId: getEnvVar('VITE_HOTJAR_ID') || undefined
  },
  
  features: {
    newsletter: getBoolEnvVar('VITE_ENABLE_NEWSLETTER', true),
    donations: getBoolEnvVar('VITE_ENABLE_DONATIONS', true),
    blog: getBoolEnvVar('VITE_ENABLE_BLOG', false),
    events: getBoolEnvVar('VITE_ENABLE_EVENTS', true)
  },
  
  services: {
    mailchimpUrl: getEnvVar('VITE_MAILCHIMP_URL') || undefined,
    paystackPublicKey: getEnvVar('VITE_PAYSTACK_PUBLIC_KEY') || undefined,
    recaptchaSiteKey: getEnvVar('VITE_RECAPTCHA_SITE_KEY') || undefined
  },
  
  development: {
    debugMode: getBoolEnvVar('VITE_DEBUG_MODE', false),
    showDevTools: getBoolEnvVar('VITE_SHOW_DEV_TOOLS', false)
  }
}

// Development helpers
export const isDevelopment = config.app.env === 'development'
export const isProduction = config.app.env === 'production'
export const isStaging = config.app.env === 'staging'

// Log configuration in development
if (isDevelopment && config.development.debugMode) {
  console.log('App Configuration:', config)
}

export default config