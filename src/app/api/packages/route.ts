import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const packages = await prisma.pricePackage.findMany({
      include: {
        features: true
      },
      orderBy: { price: 'asc' }
    })
    return NextResponse.json(packages)
  } catch (error) {
    console.error('Error fetching price packages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch price packages' },
      { status: 500 }
    )
  }
}
