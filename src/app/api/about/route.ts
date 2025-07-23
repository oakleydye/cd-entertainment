import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const about = await prisma.about.findFirst()
    return NextResponse.json(about)
  } catch (error) {
    console.error('Error fetching about:', error)
    return NextResponse.json(
      { error: 'Failed to fetch about information' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, description, imageUrl } = body

    const updatedAbout = await prisma.about.update({
      where: { id },
      data: {
        description,
        imageUrl,
      },
    })

    return NextResponse.json(updatedAbout)
  } catch (error) {
    console.error('Error updating about:', error)
    return NextResponse.json(
      { error: 'Failed to update about information' },
      { status: 500 }
    )
  }
}
