import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.songRequest.update({
      where: {
        id: parseInt(id)
      },
      data: {
        isArchived: true
      }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error archiving song request:', error)
    return NextResponse.json(
      { error: 'Failed to archive song request' },
      { status: 500 }
    )
  }
}
