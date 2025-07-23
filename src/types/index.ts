export interface About {
  id: number
  description: string
  imageUrl: string
}

export interface EventType {
  id: number
  name: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface PricePackageFeature {
  id: number
  name: string
  description: string
  pricePackageId: number
}

export interface PricePackage {
  id: number
  name: string
  description: string
  price: number
  features: PricePackageFeature[]
}

export interface ServiceSummary {
  id: number
  name: string
  description: string
  imageUrl: string
  pageId: number
  urlSlug: string
}

export interface Counter {
  id: number
  name: string
  value: number
  showPlus: boolean
}

export interface SongRequest {
  id: number
  title: string
  artistNames: string
  url: string
  imageUrl: string
  requestDate: Date
  isArchived: boolean
}

export interface ContactFormSubmission {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  eventTypeId: number
  dateOfEvent: Date
  venueLocation: string
  eventDescription: string
}

export interface GeniusSearchResponse {
  response: {
    hits: {
      result: {
        title: string
        artist_names: string
        url: string
        song_art_image_thumbnail_url: string
      }
    }[]
  }
}

export interface HitResult {
  title: string
  artist_names: string
  url: string
  song_art_image_thumbnail_url: string
}
