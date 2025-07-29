'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, Volume2, Mic, Settings, Users, Zap } from 'lucide-react';

export default function LiveSoundPage() {
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
            Live Sound Engineering
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional live sound engineering services for concerts, performances, conferences, 
            and events that demand crystal-clear audio quality.
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
              <h2 className="text-3xl md:text-4xl font-bold">Expert Live Sound Engineering</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In addition to our DJ services, CD Entertainment specializes in live sound engineering. Our expertise 
                ensures that any live performance or speech is heard clearly and professionally. We provide top-of-the-line 
                sound equipment and technical support for concerts, conferences, and other events.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With nearly a decade of experience in audio engineering, we understand the technical requirements for 
                different venues and event types. From intimate acoustic performances to large-scale concerts, we have 
                the knowledge and equipment to deliver exceptional sound quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/live_sound.jpg"
                alt="Live Sound Engineering"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Live Sound Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Volume2 className="w-6 h-6" />, title: 'Sound System Setup', description: 'Professional audio equipment configuration for any venue size.' },
              { icon: <Headphones className="w-6 h-6" />, title: 'Live Mixing', description: 'Real-time audio mixing and level adjustments during your event.' },
              { icon: <Mic className="w-6 h-6" />, title: 'Microphone Management', description: 'Wireless and wired microphone systems for speakers and performers.' },
              { icon: <Settings className="w-6 h-6" />, title: 'Technical Support', description: 'On-site technical assistance and troubleshooting throughout your event.' },
              { icon: <Users className="w-6 h-6" />, title: 'Artist Coordination', description: 'Working directly with performers to meet their audio requirements.' },
              { icon: <Zap className="w-6 h-6" />, title: 'Equipment Monitoring', description: 'Continuous monitoring of all audio equipment for optimal performance.' }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perfect for Any Live Event</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🎤', title: 'Concerts', description: 'Live music performances and band shows' },
              { icon: '🎭', title: 'Theater', description: 'Stage productions and theatrical performances' },
              { icon: '💼', title: 'Conferences', description: 'Business presentations and speaking events' },
              { icon: '🎪', title: 'Festivals', description: 'Outdoor events and festival stages' }
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

      {/* Equipment */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional-Grade Equipment</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We use only the highest quality audio equipment from industry-leading manufacturers to ensure 
              your event sounds perfect from the first note to the last.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Mixing Consoles</h4>
                <p className="text-sm text-muted-foreground">Digital and analog mixing boards</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Speaker Systems</h4>
                <p className="text-sm text-muted-foreground">Line arrays and monitor systems</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Microphones</h4>
                <p className="text-sm text-muted-foreground">Wireless and wired microphone systems</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Signal Processing</h4>
                <p className="text-sm text-muted-foreground">EQs, compressors, and effects</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Live Sound?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your live sound engineering needs and ensure your event sounds perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get Live Sound Services</Link>
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
