import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const songRequests = await prisma.songRequest.findMany({
      where: {
        isArchived: false
      },
      orderBy: {
        requestDate: 'desc'
      }
    })
    return NextResponse.json(songRequests)
  } catch (error) {
    console.error('Error fetching song requests:', error)
    return NextResponse.json(
      { error: 'Failed to fetch song requests' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, artist_names, url, song_art_image_thumbnail_url } = body

    const songRequest = await prisma.songRequest.create({
      data: {
        title,
        artistNames: artist_names,
        url,
        imageUrl: song_art_image_thumbnail_url,
      },
    })

    return NextResponse.json({ id: songRequest.id })
  } catch (error) {
    console.error('Error creating song request:', error)
    return NextResponse.json(
      { error: 'Failed to create song request' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  try {
    await prisma.songRequest.updateMany({
      where: {
        isArchived: false
      },
      data: {
        isArchived: true
      }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error archiving song requests:', error)
    return NextResponse.json(
      { error: 'Failed to archive song requests' },
      { status: 500 }
    )
  }
}
