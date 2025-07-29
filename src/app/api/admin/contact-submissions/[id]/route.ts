import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const submissionId = parseInt(id)
    
    if (isNaN(submissionId)) {
      return NextResponse.json(
        { error: 'Invalid submission ID' },
        { status: 400 }
      )
    }

    await prisma.contactFormSubmission.delete({
      where: {
        id: submissionId
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete contact submission' },
      { status: 500 }
    )
  }
}
