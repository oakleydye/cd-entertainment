import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ClientIntakeForm } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate required fields
    const requiredFields = [
      'clientName', 'email', 'phoneNumber', 'eventDate', 'eventType',
      'venueLocation', 'guestCount', 'eventDuration', 'eventStartTime',
      'eventEndTime', 'musicGenres', 'musicEra', 'volumePreference'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Prepare data for database insertion
    const intakeData = {
      clientName: body.clientName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      eventDate: new Date(body.eventDate),
      eventType: body.eventType,
      venueLocation: body.venueLocation,
      guestCount: parseInt(body.guestCount),
      eventDuration: body.eventDuration,
      eventStartTime: body.eventStartTime,
      eventEndTime: body.eventEndTime,
      
      // Music preferences
      musicGenres: body.musicGenres || [],
      musicEra: body.musicEra,
      volumePreference: body.volumePreference,
      
      // Must play list
      mustPlaySongs: body.mustPlaySongs || '',
      mustPlaySpotifyUrl: body.mustPlaySpotifyUrl || null,
      mustPlayAppleMusicUrl: body.mustPlayAppleMusicUrl || null,
      mustPlayOtherUrl: body.mustPlayOtherUrl || null,
      
      // Do not play list
      doNotPlaySongs: body.doNotPlaySongs || '',
      doNotPlaySpotifyUrl: body.doNotPlaySpotifyUrl || null,
      doNotPlayAppleMusicUrl: body.doNotPlayAppleMusicUrl || null,
      doNotPlayOtherUrl: body.doNotPlayOtherUrl || null,
      
      // Special requests
      specialAnnouncements: body.specialAnnouncements || null,
      firstDanceSong: body.firstDanceSong || null,
      lastDanceSong: body.lastDanceSong || null,
      ceremonySongs: body.ceremonySongs || null,
      
      // Equipment and setup
      equipmentRequests: body.equipmentRequests || null,
      setupRequirements: body.setupRequirements || null,
      
      // Additional info
      specialRequests: body.specialRequests || null,
    };

    // Save to database
    const intakeForm = await prisma.clientIntakeForm.create({
      data: intakeData,
    });

    return NextResponse.json(
      { 
        message: 'Intake form submitted successfully',
        id: intakeForm.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating intake form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const intakeForms = await prisma.clientIntakeForm.findMany({
      orderBy: { submittedAt: 'desc' },
      take: limit,
      skip: offset,
    });

    return NextResponse.json(intakeForms);

  } catch (error) {
    console.error('Error fetching intake forms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
