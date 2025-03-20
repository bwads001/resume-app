import { MetadataRoute } from 'next'

/**
 * Generate robots.txt rules for search engine crawlers
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bryanwadsworth.com/sitemap.xml', // Replace with your actual domain
  }
} 