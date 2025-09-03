# LinkedIn Scraper API

Backend service for scraping LinkedIn company posts and serving them to the frontend.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment:
```bash
cp .env.example .env
# Edit .env with your settings
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### GET /api/linkedin-posts
Fetches LinkedIn company posts.

**Query Parameters:**
- `company` (optional): LinkedIn company URL 
- `limit` (optional): Number of posts to return (default: 5, max: 20)

**Example:**
```
GET /api/linkedin-posts?company=https://www.linkedin.com/company/it-for-youth-ghana-foundation/&limit=5
```

**Response:**
```json
{
  "posts": [
    {
      "id": "post_123",
      "text": "Post content...",
      "image": "https://media.licdn.com/...",
      "publishedAt": "2025-01-15T10:00:00.000Z",
      "linkedinUrl": "https://www.linkedin.com/company/...",
      "likes": 156,
      "comments": 23,
      "shares": 12
    }
  ],
  "cached": false,
  "fetchedAt": "2025-01-15T15:30:00.000Z",
  "count": 5
}
```

### GET /health
Health check endpoint.

## Features

- **Caching**: 30-minute cache to avoid excessive scraping
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Error Handling**: Graceful fallbacks and error responses  
- **CORS**: Configured for frontend integration
- **Security**: Helmet.js security headers
- **Scalability**: Can handle multiple company URLs

## Important Notes

⚠️ **Legal Considerations:**
- Respect LinkedIn's robots.txt and Terms of Service
- Use reasonable request intervals (30+ minutes between scrapes)
- Consider implementing user-agent rotation for production
- Monitor for IP blocking and implement proxy rotation if needed

🔧 **Technical Notes:**
- Uses Puppeteer for JavaScript-heavy content
- Fallback to sample data if scraping fails
- Automatic browser management and cleanup
- Implements multiple CSS selectors for LinkedIn's changing structure

🚀 **Production Deployment:**
- Consider using Docker for consistent environments
- Implement proper logging (Winston, etc.)
- Use process managers (PM2)
- Set up monitoring and alerting
- Consider using proxy services for IP rotation