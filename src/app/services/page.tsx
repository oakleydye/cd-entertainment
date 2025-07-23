'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Users, Building, Headphones, Volume2, Settings } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Create the perfect soundtrack for your special day with customized playlists and professional equipment.',
    image: '/images/weddings.jpg',
    href: '/services/weddings',
    icon: <Users className="w-8 h-8" />,
    features: ['Custom Playlists', 'Ceremony Music', 'Reception Entertainment', 'MC Services']
  },
  {
    id: 2,
    title: 'Dances',
    description: 'Keep the energy high at school dances, proms, and social gatherings with the latest hits and classics.',
    image: '/images/dance_party.jpg',
    href: '/services/dances',
    icon: <Music className="w-8 h-8" />,
    features: ['High Energy Music', 'Crowd Interaction', 'Dynamic Lighting', 'Latest Hits']
  },
  {
    id: 3,
    title: 'Private Parties',
    description: 'Celebrate birthdays, anniversaries, and special occasions with personalized entertainment.',
    image: '/images/parties.jpg',
    href: '/services/parties',
    icon: <Users className="w-8 h-8" />,
    features: ['Personalized Playlists', 'Interactive DJ', 'Special Requests', 'Party Games']
  },
  {
    id: 4,
    title: 'Corporate Events',
    description: 'Professional DJ services for holiday parties, product launches, and business events.',
    image: '/images/corporate.jpg',
    href: '/services/corporate-events',
    icon: <Building className="w-8 h-8" />,
    features: ['Professional Setup', 'Brand Alignment', 'MC Services', 'Custom Music']
  },
  {
    id: 5,
    title: 'Live Sound',
    description: 'Expert live sound engineering for concerts, performances, and speaking events.',
    image: '/images/live_sound.jpg',
    href: '/services/live-sound',
    icon: <Headphones className="w-8 h-8" />,
    features: ['Sound Engineering', 'Technical Support', 'Professional Equipment', 'Live Mixing']
  },
  {
    id: 6,
    title: 'Gear Rental',
    description: 'High-quality audio equipment rentals including speakers, mixers, and microphones.',
    image: '/images/gear_rental.jpg',
    href: '/services/gear-rental',
    icon: <Settings className="w-8 h-8" />,
    features: ['Sound Systems', 'Lighting Equipment', 'Microphones', 'Technical Support']
  }
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional DJ and entertainment services for every occasion. 
            From intimate gatherings to large celebrations, we bring the perfect sound to your event.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href={service.href}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose CD Entertainment?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Equipment</h3>
              <p className="text-muted-foreground">
                State-of-the-art sound systems and equipment to ensure crystal-clear audio quality for any venue size.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Extensive Music Library</h3>
              <p className="text-muted-foreground">
                From the latest hits to timeless classics, we have the perfect music for every taste and generation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-muted-foreground">
                We work closely with you to understand your vision and create a customized experience for your event.
              </p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Event?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your event needs and get a personalized quote for our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/request">
                  Request a Song
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
