// Lighthouse CI configuration for IT for Youth Ghana
// Performance and quality auditing

module.exports = {
  ci: {
    collect: {
      // Number of lighthouse runs per URL
      numberOfRuns: 3,
      
      // URLs to audit
      url: [
        'http://localhost:3000',
        'http://localhost:3000/about',
        'http://localhost:3000/programs',
        'http://localhost:3000/impact',
        'http://localhost:3000/volunteer',
        'http://localhost:3000/partners',
        'http://localhost:3000/contact'
      ],
      
      // Settings for the audit
      settings: {
        // Performance optimizations
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        
        // Preset for CI environments
        preset: 'desktop',
        
        // Additional settings
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        }
      }
    },
    
    assert: {
      // Performance thresholds
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': ['warn', { minScore: 0.8 }],
        
        // Performance metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 3000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        
        // SEO
        'meta-description': 'error',
        'document-title': 'error',
        'crawlable-anchors': 'error',
        'robots-txt': 'warn',
        
        // Best Practices
        'uses-https': 'error',
        'uses-http2': 'warn',
        'no-vulnerable-libraries': 'error',
        'is-on-https': 'error'
      }
    },
    
    upload: {
      target: 'temporary-public-storage'
    },
    
    server: {
      port: 9001,
      storage: './lighthouse-reports'
    }
  }
}