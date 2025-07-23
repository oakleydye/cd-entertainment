import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const counters = await prisma.counter.findMany({
      orderBy: { id: 'asc' }
    })
    return NextResponse.json(counters)
  } catch (error) {
    console.error('Error fetching counters:', error)
    return NextResponse.json(
      { error: 'Failed to fetch counters' },
      { status: 500 }
    )
  }
}
