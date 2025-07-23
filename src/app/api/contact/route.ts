import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      eventTypeId,
      dateOfEvent,
      venueLocation,
      eventDescription
    } = body

    // Save to database
    const submission = await prisma.contactFormSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        eventTypeId: parseInt(eventTypeId),
        dateOfEvent: new Date(dateOfEvent),
        venueLocation,
        eventDescription,
      },
    })

    // Send email notification if configured
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      const eventType = await prisma.eventType.findUnique({
        where: { id: parseInt(eventTypeId) }
      })

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Event Type:</strong> ${eventType?.name || 'Unknown'}</p>
          <p><strong>Event Date:</strong> ${new Date(dateOfEvent).toLocaleDateString()}</p>
          <p><strong>Venue:</strong> ${venueLocation}</p>
          <p><strong>Description:</strong></p>
          <p>${eventDescription}</p>
        `,
      })
    }

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
