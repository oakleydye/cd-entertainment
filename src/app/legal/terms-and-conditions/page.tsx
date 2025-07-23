'use client';

import { motion } from 'framer-motion';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Terms and Conditions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Please read these terms and conditions carefully before using our services.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="text-muted-foreground mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p>
                  Welcome to CD Entertainment. These terms and conditions ("Terms") govern your use of our website 
                  and services. By accessing our website or booking our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Agreement</h2>
                <p className="mb-4">
                  When you book our DJ or entertainment services, you enter into a service agreement with CD Entertainment. 
                  This agreement includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service date, time, and duration</li>
                  <li>Venue location and setup requirements</li>
                  <li>Specific services to be provided</li>
                  <li>Total cost and payment schedule</li>
                  <li>Cancellation and refund policies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Booking and Payment</h2>
                <h3 className="text-xl font-semibold mb-2">Booking Confirmation</h3>
                <p className="mb-4">
                  All bookings are confirmed upon receipt of a signed contract and required deposit. We reserve the right 
                  to decline any booking request.
                </p>
                
                <h3 className="text-xl font-semibold mb-2">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>A 50% deposit is required to secure your booking</li>
                  <li>Final payment is due 7 days before the event date</li>
                  <li>Late payment fees may apply to overdue balances</li>
                  <li>All payments are non-refundable except as specified in our cancellation policy</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
                <h3 className="text-xl font-semibold mb-2">Client Cancellation</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Cancellations more than 90 days before event: 50% deposit refund</li>
                  <li>Cancellations 30-90 days before event: 25% deposit refund</li>
                  <li>Cancellations less than 30 days before event: No refund</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-2">CD Entertainment Cancellation</h3>
                <p>
                  In the unlikely event that we must cancel due to illness, emergency, or circumstances beyond our control, 
                  we will provide a full refund or work to find a suitable replacement DJ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Event Requirements</h2>
                <h3 className="text-xl font-semibold mb-2">Venue Access</h3>
                <p className="mb-4">
                  Client must ensure CD Entertainment has adequate access to the venue for setup and breakdown, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Power outlets within 50 feet of performance area</li>
                  <li>Adequate space for equipment setup</li>
                  <li>Safe and secure environment for equipment</li>
                  <li>Parking arrangements for loading/unloading</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                <p>
                  Setup typically requires 1-2 hours before the event start time. Breakdown requires 30-60 minutes after 
                  the event conclusion. These times must be accommodated in the venue booking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Liability and Insurance</h2>
                <p className="mb-4">
                  CD Entertainment carries general liability insurance and will provide proof of insurance upon request. 
                  Our liability is limited to the amount paid for services.
                </p>
                <p>
                  We are not responsible for damages caused by venue conditions, power failures, or other circumstances 
                  beyond our reasonable control.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Music and Copyright</h2>
                <p className="mb-4">
                  CD Entertainment maintains appropriate licensing for the music we play. We respect copyright laws and 
                  intellectual property rights.
                </p>
                <p>
                  Client acknowledges that we cannot guarantee the availability of specific songs and that music selection 
                  may be subject to licensing restrictions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
                <p>
                  Neither party will be liable for any failure to perform due to circumstances beyond their reasonable control, 
                  including but not limited to natural disasters, government restrictions, or other emergencies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of [Your State/Province]. Any disputes will be resolved through 
                  binding arbitration or in the courts of [Your Jurisdiction].
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                  to our website. Continued use of our services constitutes acceptance of modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: info@cdentertainment.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: [Your Business Address]</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
