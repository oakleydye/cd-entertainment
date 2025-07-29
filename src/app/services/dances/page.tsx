'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Users, Zap, Lightbulb, Volume2, Mic } from 'lucide-react';

const danceServices = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Pre-Event Consultation',
    description: 'We discuss your event details and musical preferences.'
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Custom Playlists',
    description: 'We tailor our music selection to fit the theme and vibe of your dance.'
  },
  {
    icon: <Volume2 className="w-6 h-6" />,
    title: 'Professional Equipment',
    description: 'Top-notch sound systems and dynamic lighting effects.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Interactive DJ Performance',
    description: 'Our DJs engage with the crowd and keep the energy high.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Dynamic Lighting',
    description: 'Colorful lighting effects that sync with the music and enhance the atmosphere.'
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Seamless Transitions',
    description: 'Smooth transitions between songs to keep the dance floor alive.'
  }
];

export default function DancesPage() {
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
            Dance DJ Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From school dances to proms and community events, CD Entertainment brings the energy 
            that keeps everyone moving all night long.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Energizing Dance Events</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a high school prom, a college party, or a community dance, CD Entertainment brings 
                the energy to the dance floor. Our DJs are skilled at reading the crowd and playing the right 
                music to keep everyone dancing all night long. We provide high-quality sound systems and lighting 
                to create an unforgettable experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that different age groups and communities have different musical preferences. 
                Our extensive music library spans all genres and decades, ensuring we can cater to any crowd. 
                From the latest chart-toppers to beloved classics, we know how to keep the energy high and 
                the dance floor packed.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/dance_party.jpg"
                alt="Dance Party"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Dance Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {danceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="text-primary">
                        {service.icon}
                      </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perfect for Any Dance Event</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">School Dances</h3>
              <p className="text-muted-foreground">
                Homecoming, winter formal, and end-of-year celebrations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prom Events</h3>
              <p className="text-muted-foreground">
                Creating magical prom nights with the perfect soundtrack
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">College Events</h3>
              <p className="text-muted-foreground">
                Campus parties, mixers, and student organization events
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Dances</h3>
              <p className="text-muted-foreground">
                Local gatherings, fundraisers, and social events
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Styles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Music That Moves Everyone</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our DJs are experts at reading the crowd and adapting the music to keep the energy high. 
              We seamlessly blend different genres and eras to create a dance experience that appeals to everyone.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Current Hits</h4>
                <p className="text-sm text-muted-foreground">Latest chart-toppers and trending songs</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Classic Favorites</h4>
                <p className="text-sm text-muted-foreground">Timeless hits that never go out of style</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Dance Remixes</h4>
                <p className="text-sm text-muted-foreground">High-energy versions of popular songs</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Throwbacks</h4>
                <p className="text-sm text-muted-foreground">Nostalgic hits from the 80s, 90s, and 2000s</p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Dance DJ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your dance event and let us bring the energy that will keep your guests dancing all night!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Your Dance DJ
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
