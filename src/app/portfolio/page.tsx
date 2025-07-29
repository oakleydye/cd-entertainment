'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const portfolioEvents = [
  {
    id: 1,
    title: 'Sarah & Michael\'s Wedding',
    date: 'September 2024',
    location: 'Grand Ballroom, Downtown Hotel',
    guests: 200,
    description: 'A beautiful evening celebration with a perfect mix of classic love songs and modern hits that kept everyone dancing.',
    image: '/images/wedding-portfolio-1.jpg',
    type: 'Wedding'
  },
  {
    id: 2,
    title: 'Central High School Prom',
    date: 'May 2024',
    location: 'City Convention Center',
    guests: 400,
    description: 'An unforgettable prom night featuring the latest hits and classic dance favorites that created magical memories.',
    image: '/images/prom-portfolio.jpg',
    type: 'Dance'
  },
  {
    id: 3,
    title: 'TechCorp Annual Holiday Party',
    date: 'December 2023',
    location: 'Riverside Conference Center',
    guests: 150,
    description: 'Professional entertainment for a corporate celebration with music that brought the team together.',
    image: '/images/corporate-portfolio.jpg',
    type: 'Corporate'
  },
  {
    id: 4,
    title: 'Emma\'s Sweet 16 Celebration',
    date: 'August 2024',
    location: 'Family Estate',
    guests: 80,
    description: 'A vibrant birthday celebration with personalized playlists and interactive entertainment.',
    image: '/images/party-portfolio.jpg',
    type: 'Private Party'
  },
  {
    id: 5,
    title: 'Summer Music Festival',
    date: 'July 2024',
    location: 'City Park Amphitheater',
    guests: 1000,
    description: 'Live sound engineering for multiple performers across different genres and stages.',
    image: '/images/festival-portfolio.jpg',
    type: 'Live Sound'
  },
  {
    id: 6,
    title: 'Golden Anniversary Celebration',
    date: 'June 2024',
    location: 'Country Club',
    guests: 120,
    description: 'A heartwarming celebration of 50 years of marriage with music spanning five decades.',
    image: '/images/anniversary-portfolio.jpg',
    type: 'Private Party'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center mt-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take a look at some of the amazing events we've had the pleasure of providing entertainment for. 
            Each event is unique, and we're proud of the memories we've helped create.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Happy Guests</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Recent Events</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.guests} guests
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Event Specialties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Weddings', count: '150+', description: 'Creating magical wedding moments with perfect soundtracks' },
              { title: 'Corporate Events', count: '100+', description: 'Professional entertainment for business celebrations' },
              { title: 'School Dances', count: '80+', description: 'High-energy entertainment for proms and school events' },
              { title: 'Private Parties', count: '120+', description: 'Personalized entertainment for special celebrations' },
              { title: 'Live Sound', count: '50+', description: 'Professional audio engineering for live performances' },
              { title: 'Community Events', count: '60+', description: 'Bringing music to festivals and community gatherings' }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{specialty.count}</div>
                    <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                    <p className="text-muted-foreground">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Event?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our portfolio of successful events. Contact us today to discuss how we can make your event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Event
              </motion.a>
              <motion.a
                href="/services"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
