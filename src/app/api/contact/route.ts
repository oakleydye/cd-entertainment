import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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
    if (process.env.RESEND_API_KEY && process.env.EMAIL_TO) {
      const eventType = await prisma.eventType.findUnique({
        where: { id: parseInt(eventTypeId) }
      })

      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'contact@cd-entertainment.com',
          to: process.env.EMAIL_TO,
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phoneNumber}" style="color: #007bff;">${phoneNumber}</a></p>
              </div>

              <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #856404; margin-top: 0;">Event Details</h3>
                <p><strong>Event Type:</strong> ${eventType?.name || 'Unknown'}</p>
                <p><strong>Event Date:</strong> ${new Date(dateOfEvent).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
                <p><strong>Venue:</strong> ${venueLocation}</p>
              </div>

              <div style="background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #004085; margin-top: 0;">Event Description</h3>
                <p style="white-space: pre-wrap;">${eventDescription}</p>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                <p style="color: #6c757d; font-size: 14px;">
                  This message was sent from the CD Entertainment contact form.
                </p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError)
        // Don't fail the request if email fails, just log it
      }
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
