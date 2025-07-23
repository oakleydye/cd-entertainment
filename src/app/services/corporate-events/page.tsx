'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Users, Briefcase, Calendar, Mic, Music } from 'lucide-react';

export default function CorporateEventsPage() {
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
            Corporate Event DJ Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional DJ services for corporate events, holiday parties, product launches, 
            and business celebrations that reflect your company's brand and style.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Professional Corporate Entertainment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Make your corporate event stand out with CD Entertainment. Whether you're planning a holiday party, 
                a product launch, or a company picnic, our DJs will provide the perfect musical backdrop. We offer 
                professional sound systems and lighting to create an engaging atmosphere that reflects your company's 
                brand and style.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/corporate.jpg"
                alt="Corporate Event"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Corporate Event Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Users className="w-6 h-6" />, title: 'Consultation', description: 'We discuss your event goals and musical preferences.' },
              { icon: <Music className="w-6 h-6" />, title: 'Custom Playlists', description: 'Music selections that align with your event theme and company culture.' },
              { icon: <Building className="w-6 h-6" />, title: 'Professional Equipment', description: 'High-quality sound systems and lighting to enhance the atmosphere.' },
              { icon: <Mic className="w-6 h-6" />, title: 'MC Services', description: 'Professional announcements and event coordination.' },
              { icon: <Calendar className="w-6 h-6" />, title: 'Flexible Setup', description: 'We adapt to various event formats and venues.' },
              { icon: <Briefcase className="w-6 h-6" />, title: 'Brand Integration', description: 'Music and presentation that aligns with your corporate brand.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">{service.icon}</div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perfect for Any Corporate Event</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🎉', title: 'Holiday Parties', description: 'Seasonal celebrations and company holiday events' },
              { icon: '🚀', title: 'Product Launches', description: 'Professional entertainment for product unveilings' },
              { icon: '🏆', title: 'Award Ceremonies', description: 'Elegant music for recognition events' },
              { icon: '🍽️', title: 'Company Picnics', description: 'Fun, family-friendly entertainment for outdoor events' }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Corporate Event?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your corporate event needs and create a professional entertainment experience for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book Your Corporate Event DJ</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
