import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cd-entertainment.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/request-dashboard/',
        '/api/',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
