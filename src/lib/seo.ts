import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  structuredData?: object
  noIndex?: boolean
}

export function generateSEOMetadata({
  title = "CD Entertainment - Professional DJ Services",
  description = "Professional DJ services for weddings, parties, corporate events, and more. Quality entertainment with state-of-the-art equipment and experienced DJs.",
  keywords = [
    "DJ services",
    "wedding DJ",
    "party DJ",
    "corporate events",
    "live sound",
    "equipment rental",
    "professional entertainment",
    "music services",
    "event planning",
    "sound system rental"
  ],
  canonicalUrl,
  ogImage = "/images/og-default.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cdentertainment.co'
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'CD Entertainment' }],
    creator: 'CD Entertainment',
    publisher: 'CD Entertainment',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      siteName: 'CD Entertainment',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [fullOgImage],
      creator: '@cd_entertainment',
      site: '@cd_entertainment',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
      yahoo: process.env.YAHOO_VERIFICATION_ID,
    },
  }
}

// Structured Data helpers
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CD Entertainment',
  url: 'https://www.cdentertainment.co',
  logo: 'https://www.cdentertainment.co/disk_logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-435-557-1427',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '572 S 690 E',
    addressLocality: 'Hyrum',
    addressRegion: 'Utah',
    postalCode: '84319',
    addressCountry: 'US'
  },
  sameAs: [
    'https://instagram.com/cdentertainment.co',
  ]
}

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.cdentertainment.co',
  name: 'CD Entertainment',
  image: 'https://www.cdentertainment.co/logo.png',
  url: 'https://www.cdentertainment.co',
  telephone: '+1-435-557-1427',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '572 S 690 E',
    addressLocality: 'Hyrum',
    addressRegion: 'Utah',
    postalCode: '84319',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.6221468,
    longitude: -111.837316
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '12:00',
      closes: '18:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150'
  }
}

export const serviceStructuredData = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  url: serviceUrl,
  provider: {
    '@type': 'Organization',
    name: 'CD Entertainment',
    url: 'https://www.cdentertainment.co'
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 41.6221468,
      longitude: -111.837316
    },
    geoRadius: '50'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '500',
    priceValidUntil: '2025-12-31'
  }
})

// Utility function to generate structured data script tag
export function generateStructuredDataScript(data: object): string {
  return JSON.stringify(data)
}
