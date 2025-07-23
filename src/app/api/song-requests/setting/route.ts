import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    let settings = await prisma.appSettings.findFirst()
    
    if (!settings) {
      // Create default settings if none exist
      settings = await prisma.appSettings.create({
        data: {
          acceptingSongRequests: false
        }
      })
    }
    
    return NextResponse.json({ acceptingRequests: settings.acceptingSongRequests })
  } catch (error) {
    console.error('Error fetching song request setting:', error)
    return NextResponse.json(
      { error: 'Failed to fetch song request setting' },
      { status: 500 }
    )
  }
}

export async function PUT() {
  try {
    let settings = await prisma.appSettings.findFirst()
    
    if (!settings) {
      settings = await prisma.appSettings.create({
        data: {
          acceptingSongRequests: true
        }
      })
    } else {
      settings = await prisma.appSettings.update({
        where: { id: settings.id },
        data: {
          acceptingSongRequests: !settings.acceptingSongRequests
        }
      })
    }
    
    return NextResponse.json({ acceptingRequests: settings.acceptingSongRequests })
  } catch (error) {
    console.error('Error toggling song request setting:', error)
    return NextResponse.json(
      { error: 'Failed to toggle song request setting' },
      { status: 500 }
    )
  }
}
