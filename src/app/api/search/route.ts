import { NextRequest, NextResponse } from 'next/server'

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
      console.error('GENIUS_ACCESS_TOKEN not found in environment variables')
      return NextResponse.json(
        { error: 'Genius API token not configured' },
        { status: 500 }
      )
    }

    const geniusUrl = `https://api.genius.com/search?q=${encodeURIComponent(query)}`
    
    const response = await fetch(geniusUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
        'User-Agent': 'CD-Entertainment-Song-Requests'
      },
    })

    if (!response.ok) {
      console.error(`Genius API error: ${response.status} ${response.statusText}`)
      throw new Error(`Genius API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    // Validate the response structure
    if (!data.response || !Array.isArray(data.response.hits)) {
      console.error('Invalid response structure from Genius API:', data)
      return NextResponse.json(
        { error: 'Invalid response from music search service' },
        { status: 502 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error searching songs:', error)
    return NextResponse.json(
      { error: 'Failed to search songs' },
      { status: 500 }
    )
  }
}
