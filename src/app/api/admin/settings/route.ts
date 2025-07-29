import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    let settings = await prisma.appSettings.findFirst()
    
    // If no settings exist, create default settings
    if (!settings) {
      settings = await prisma.appSettings.create({
        data: {
          acceptingSongRequests: false,
        },
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching app settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch app settings' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { acceptingSongRequests } = body

    // Get existing settings or create new ones
    let settings = await prisma.appSettings.findFirst()
    
    if (settings) {
      // Update existing settings
      settings = await prisma.appSettings.update({
        where: { id: settings.id },
        data: {
          acceptingSongRequests: acceptingSongRequests ?? settings.acceptingSongRequests,
        },
      })
    } else {
      // Create new settings
      settings = await prisma.appSettings.create({
        data: {
          acceptingSongRequests: acceptingSongRequests ?? false,
        },
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error updating app settings:', error)
    return NextResponse.json(
      { error: 'Failed to update app settings' },
      { status: 500 }
    )
  }
}
