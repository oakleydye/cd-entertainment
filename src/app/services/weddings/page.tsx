'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Music, Users, Mic, Star, Clock } from 'lucide-react';
import PageLayout from '@/components/layout/page-layout';
import { StructuredData } from '@/components/seo/structured-data';
import { serviceStructuredData } from '@/lib/seo';
import { useEffect } from 'react';

const weddingServices = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Pre-Wedding Consultation',
    description: 'We meet with you to understand your musical preferences and event timeline.'
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Custom Playlists',
    description: 'We curate playlists that reflect your taste, including your favorite songs and genres.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Ceremony Music',
    description: 'From the processional to the recessional, we provide the perfect musical accompaniment.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Reception Entertainment',
    description: 'We keep the dance floor packed with music that gets everyone moving.'
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'MC Services',
    description: 'We handle announcements and keep your event running smoothly.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Professional Equipment',
    description: 'High-quality sound systems and lighting to create an unforgettable atmosphere.'
  }
];

export default function WeddingsPage() {
  useEffect(() => {
    document.title = "Wedding DJ Services - CD Entertainment | Professional Wedding DJs";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional wedding DJ services to make your special day unforgettable. Custom playlists, ceremony music, reception entertainment, and more.');
    }
  }, []);

  const weddingStructuredData = serviceStructuredData(
    'Wedding DJ Services',
    'Professional wedding DJ services including ceremony music, cocktail hour entertainment, reception DJing, and custom playlists for your special day.',
    'https://cd-entertainment.com/services/weddings'
  );

  return (
    <PageLayout includeGlobalStructuredData={false}>
      <StructuredData data={weddingStructuredData} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wedding DJ Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your wedding day is one of the most important days of your life. Let CD Entertainment create 
            the perfect soundtrack for your love story.
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
              <h2 className="text-3xl md:text-4xl font-bold">Creating Magical Wedding Moments</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At CD Entertainment, we understand that your wedding day is one of the most important days of your life. 
                Our experienced DJs work closely with you to create the perfect soundtrack for your special day. From the 
                ceremony to the reception, we provide customized playlists, professional sound equipment, and seamless 
                transitions to ensure that every moment is memorable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in reading the crowd and adapting our music selection to keep your guests engaged and 
                the dance floor alive. Whether you prefer classic love songs, modern hits, or a mix of both, we'll 
                work with you to create the perfect atmosphere for your celebration.
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
                src="/images/weddings.jpg"
                alt="Wedding DJ Setup"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Wedding Services Include:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weddingServices.map((service, index) => (
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

      {/* Wedding Package Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Makes Our Wedding Service Special</h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personalized Music Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with you to create custom playlists that reflect your unique style and love story. 
                    From your first dance to the last song of the night, every musical moment is carefully curated 
                    to create lasting memories.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/wedding-planning.jpg"
                    alt="Wedding Planning"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg md:order-first">
                  <Image
                    src="/images/wedding-reception.jpg"
                    alt="Wedding Reception"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Seamless Event Flow</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our experienced DJs act as MCs to keep your wedding timeline on track. We coordinate with your 
                    venue and other vendors to ensure smooth transitions between ceremony, cocktail hour, dinner, 
                    and dancing.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 italic">
              "CD Entertainment made our wedding absolutely perfect! The music was exactly what we wanted, 
              and they kept everyone dancing all night long. Highly recommended!"
            </blockquote>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-semibold">- Sarah & Michael Johnson</p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Wedding DJ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your wedding music needs and ensure your special day has the perfect soundtrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Your Wedding DJ
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
    </PageLayout>
  );
}
