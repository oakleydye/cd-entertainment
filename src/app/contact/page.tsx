'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactSection from '@/components/homepage/contact-section';
import PageLayout from '@/components/layout/page-layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us - CD Entertainment | Get in Touch for DJ Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact CD Entertainment for professional DJ services. Get quotes, ask questions, and book your event. Available 7 days a week.');
    }
  }, []);

  return (
    <PageLayout includeGlobalStructuredData={false}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to make your event unforgettable? Get in touch with CD Entertainment today!
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent>
                  <ContactSection />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-muted-foreground">
                Over a decade of professional DJ and live sound experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
              <p className="text-muted-foreground">
                Punctual, reliable, and dedicated to making your event perfect
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">24</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours Response</h3>
              <p className="text-muted-foreground">
                Quick response time to all inquiries and booking requests
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
              Don't wait! Contact us today to secure your date and start planning the perfect soundtrack for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:4355571427"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Call Now: (435) 557-1427
              </a>
              <a 
                href="mailto:oakley@cdentertainment.co"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
