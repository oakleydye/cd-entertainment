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
    hits: Array<{
      result: HitResult
    }>
  }
}

export interface HitResult {
  title: string
  artist_names: string
  url: string
  song_art_image_thumbnail_url: string
  id: number
  full_title: string
  primary_artist: {
    name: string
    id: number
  }
}

export interface ClientIntakeForm {
  id?: number
  clientName: string
  email: string
  phoneNumber: string
  eventDate: Date
  eventType: string
  venueLocation: string
  guestCount: number
  eventDuration: string
  eventStartTime: string
  eventEndTime: string
  
  // Music preferences
  musicGenres: string[]
  musicEra: string
  volumePreference: string
  
  // Must play list
  mustPlaySongs: string
  mustPlaySpotifyUrl?: string
  mustPlayAppleMusicUrl?: string
  mustPlayOtherUrl?: string
  
  // Do not play list
  doNotPlaySongs: string
  doNotPlaySpotifyUrl?: string
  doNotPlayAppleMusicUrl?: string
  doNotPlayOtherUrl?: string
  
  // Special requests
  specialAnnouncements?: string
  firstDanceSong?: string
  lastDanceSong?: string
  ceremonySongs?: string
  
  // Equipment and setup
  equipmentRequests?: string
  setupRequirements?: string
  
  // Additional info
  specialRequests?: string
  
  // Timestamps
  submittedAt?: Date
  updatedAt?: Date
}
