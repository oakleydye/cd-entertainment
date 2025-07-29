import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { isArchived } = body

    await prisma.songRequest.update({
      where: {
        id: parseInt(id)
      },
      data: {
        isArchived: isArchived
      }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating song request:', error)
    return NextResponse.json(
      { error: 'Failed to update song request' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    await prisma.songRequest.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting song request:', error)
    return NextResponse.json(
      { error: 'Failed to delete song request' },
      { status: 500 }
    )
  }
}
