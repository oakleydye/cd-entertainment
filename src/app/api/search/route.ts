import { NextRequest, NextResponse } from 'next/server'
import { GeniusSearchResponse } from '@/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    if (!process.env.GENIUS_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Genius API token not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.genius.com/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Genius API')
    }

    const data: GeniusSearchResponse = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error searching songs:', error)
    return NextResponse.json(
      { error: 'Failed to search songs' },
      { status: 500 }
    )
  }
}
