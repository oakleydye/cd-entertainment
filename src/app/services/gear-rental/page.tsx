'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Lightbulb, Mic, Settings, Wrench, Headphones } from 'lucide-react';

export default function GearRentalPage() {
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
            Equipment Rental Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            High-quality audio and lighting equipment rentals for events of all sizes. 
            Professional gear with technical support to ensure your event sounds and looks amazing.
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
              <h2 className="text-3xl md:text-4xl font-bold">Professional Equipment Rentals</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Need equipment for your event? CD Entertainment offers a range of gear rental options, including 
                sound systems, lighting, and more. Our high-quality, well-maintained equipment will help you create 
                a professional and polished event, whether you need a full setup or just a few pieces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All our rental equipment comes with technical support and setup assistance. We ensure that you have 
                everything you need to make your event successful, backed by our years of experience in audio and 
                lighting systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/gear_rental.jpg"
                alt="Audio Equipment"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Gear Rental Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Volume2 className="w-6 h-6" />, title: 'Sound Systems', description: 'High-quality audio equipment for clear and powerful sound.' },
              { icon: <Lightbulb className="w-6 h-6" />, title: 'Lighting', description: 'Dynamic lighting options to enhance your event\'s atmosphere.' },
              { icon: <Mic className="w-6 h-6" />, title: 'Microphones', description: 'Wired and wireless microphones for speeches and performances.' },
              { icon: <Settings className="w-6 h-6" />, title: 'Technical Support', description: 'Assistance with setup and troubleshooting.' },
              { icon: <Wrench className="w-6 h-6" />, title: 'Custom Packages', description: 'Tailored rental packages to suit your specific needs.' },
              { icon: <Headphones className="w-6 h-6" />, title: 'Monitoring', description: 'Stage monitors and in-ear monitoring systems.' }
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

      {/* Equipment Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available Equipment</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Volume2 className="w-6 h-6 mr-3 text-primary" />
                    Audio Equipment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Powered speakers and subwoofers</li>
                    <li>• Mixing consoles (analog and digital)</li>
                    <li>• Wireless microphone systems</li>
                    <li>• Direct injection boxes</li>
                    <li>• Audio cables and adapters</li>
                    <li>• Monitor speakers</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Lightbulb className="w-6 h-6 mr-3 text-primary" />
                    Lighting Equipment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• LED uplighting systems</li>
                    <li>• Moving head spotlights</li>
                    <li>• Wash lights and color changers</li>
                    <li>• Strobe and effect lights</li>
                    <li>• Lighting controllers and DMX</li>
                    <li>• Fog and haze machines</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple Rental Process</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Consultation', description: 'Discuss your event needs and equipment requirements' },
              { step: '2', title: 'Quote', description: 'Receive a detailed quote for your rental package' },
              { step: '3', title: 'Setup', description: 'Professional delivery and setup at your venue' },
              { step: '4', title: 'Support', description: 'On-site technical support throughout your event' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rent Equipment?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your equipment rental needs and get a customized quote for your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Rent Equipment</Link>
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
