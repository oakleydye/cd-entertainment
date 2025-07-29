'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactSection from '@/components/homepage/contact-section';
import PageLayout from '@/components/layout/page-layout';
import { StructuredData } from '@/components/seo/structured-data';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    // Update page title and meta description for client-side SEO
    document.title = "About Us - CD Entertainment | Professional DJ Services & Entertainment";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about CD Entertainment\'s experienced DJ team, our story, and why we\'re the top choice for professional entertainment services in the metro area.');
    }
  }, []);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About CD Entertainment",
    "description": "Learn about CD Entertainment's experienced DJ team and professional entertainment services",
    "url": "https://cd-entertainment.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "CD Entertainment",
      "description": "Professional DJ and entertainment services for weddings, parties, corporate events, and more"
    }
  };

  return (
    <PageLayout includeGlobalStructuredData={false}>
      <StructuredData data={aboutStructuredData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center mt-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to CD Entertainment
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Premier DJ & Entertainment Partner
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For over a decade, CD Entertainment has been bringing exceptional music and entertainment 
                to events across northern Utah. What started as a passion for music has evolved into 
                one of the region's most trusted entertainment companies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To create unforgettable experiences through exceptional music and entertainment. 
                  We believe every event deserves a soundtrack that perfectly captures its spirit 
                  and energy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From intimate gatherings to grand celebrations, we bring the same level of 
                  professionalism, creativity, and passion to every event we serve.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <Image
                  src="/images/about.jpg"
                  alt="CD Entertainment team in action"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose CD Entertainment?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart from other entertainment companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 10 years of experience with hundreds of successful events. 
                    We know how to read a room and keep the energy flowing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">State-of-the-Art Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional-grade sound systems, lighting, and DJ equipment 
                    to ensure crystal-clear audio and stunning visual effects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Personalized Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every event is unique. We work closely with you to understand 
                    your vision and create a customized entertainment experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the DJ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented professionals who bring your events to life
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/oakley.jpg"
                  alt="Oakley - DJ"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Oakley - DJ & Founder</h3>
              <p className="text-muted-foreground mb-4">Professional DJ & Event Specialist</p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                With over a decade of experience in the entertainment industry, Oakley has perfected 
                the art of reading crowds and creating unforgettable musical experiences. From 
                intimate wedding ceremonies to high-energy corporate events, Oakley's expertise ensures 
                your celebration will be everything you dreamed of and more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for perfection in every aspect of our service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                You can count on us to deliver exactly what we promise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-muted-foreground">
                Innovative solutions and fresh ideas for every event
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Music is our love, and it shows in everything we do
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Equipment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in the best equipment to ensure your event sounds and looks amazing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">State-of-the-Art Technology</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Professional-grade sound systems with crystal-clear audio</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Dynamic LED lighting and effects for amazing atmosphere</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Wireless microphones for speeches and announcements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Backup equipment to ensure uninterrupted service</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Digital music library with thousands of songs</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="/images/gear_rental.jpg"
                alt="Professional DJ equipment"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg leading-relaxed">
              Have questions or ready to book? Get in touch with us today!
            </p>
          </div>
          <ContactSection />
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-lg leading-relaxed">
              Thank you for considering CD Entertainment for your DJ needs. We look forward to making your next event truly special.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
