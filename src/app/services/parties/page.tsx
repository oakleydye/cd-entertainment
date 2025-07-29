'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Music, Users, Heart, Cake, Gift } from 'lucide-react';

export default function PartiesPage() {
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
            Private Party DJ Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrate birthdays, anniversaries, and special occasions with personalized entertainment 
            that keeps your guests dancing and having fun.
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
              <h2 className="text-3xl md:text-4xl font-bold">Making Every Celebration Special</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From birthdays to anniversaries, CD Entertainment offers tailored DJ services for all types of 
                private parties. We'll work with you to create a personalized playlist that reflects your taste 
                and keeps your guests entertained. Our professional setup ensures that your party runs smoothly, 
                so you can focus on having fun.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/party.jpg"
                alt="Private Party"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Private Party Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Users className="w-6 h-6" />, title: 'Consultation', description: 'We meet with you to discuss your event and music preferences.' },
              { icon: <Music className="w-6 h-6" />, title: 'Custom Playlists', description: 'Personalized music selections tailored to your event.' },
              { icon: <PartyPopper className="w-6 h-6" />, title: 'Professional Equipment', description: 'High-quality sound systems and lighting to enhance your party.' },
              { icon: <Users className="w-6 h-6" />, title: 'DJ Performance', description: 'Engaging and interactive DJ performance to keep your guests entertained.' },
              { icon: <Heart className="w-6 h-6" />, title: 'Special Requests', description: 'We accommodate special song requests to make your event unique.' },
              { icon: <Gift className="w-6 h-6" />, title: 'Party Games', description: 'Fun interactive games and activities to engage all your guests.' }
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

      {/* Party Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perfect for Any Celebration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Cake className="w-8 h-8" />, title: 'Birthdays', description: 'Milestone birthdays and birthday parties for all ages' },
              { icon: <Heart className="w-8 h-8" />, title: 'Anniversaries', description: 'Celebrate years of love with the perfect soundtrack' },
              { icon: <PartyPopper className="w-8 h-8" />, title: 'Celebrations', description: 'Graduations, promotions, and personal achievements' },
              { icon: <Gift className="w-8 h-8" />, title: 'Holidays', description: 'Holiday parties and seasonal celebrations' }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{type.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Party?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your private party needs and let us help make your celebration unforgettable!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book Your Private Party DJ</Link>
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
