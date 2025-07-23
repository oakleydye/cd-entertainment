'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    event: 'Wedding Reception',
    date: 'September 2024',
    rating: 5,
    image: '/images/testimonial-1.jpg',
    testimonial: 'CD Entertainment made our wedding absolutely perfect! Oakley was professional, accommodating, and played exactly what we wanted. The music was seamless throughout the ceremony and reception. Our guests are still talking about how great the DJ was. We couldn\'t have asked for a better experience!',
    highlight: 'Absolutely perfect wedding entertainment!'
  },
  {
    id: 2,
    name: 'Jennifer Martinez',
    event: 'Corporate Holiday Party',
    date: 'December 2023',
    rating: 5,
    image: '/images/testimonial-2.jpg',
    testimonial: 'We hired CD Entertainment for our company holiday party and they exceeded all expectations. The music selection was perfect for our diverse group of employees, and Oakley acted as an excellent MC throughout the evening. Professional, reliable, and reasonably priced. Highly recommended!',
    highlight: 'Exceeded all expectations!'
  },
  {
    id: 3,
    name: 'David Thompson',
    event: '50th Birthday Party',
    date: 'August 2024',
    rating: 5,
    image: '/images/testimonial-3.jpg',
    testimonial: 'What an amazing night! CD Entertainment brought the perfect energy to my 50th birthday celebration. They played music from every decade and kept everyone dancing all night long. The equipment was top-notch and the service was exceptional. Thank you for making my milestone birthday unforgettable!',
    highlight: 'Perfect energy and exceptional service!'
  },
  {
    id: 4,
    name: 'Central High School',
    event: 'Senior Prom',
    date: 'May 2024',
    rating: 5,
    image: '/images/testimonial-4.jpg',
    testimonial: 'CD Entertainment made our prom night magical! The students loved the music selection, and Oakley did a fantastic job reading the crowd and keeping the energy high. The lighting effects were stunning and really added to the atmosphere. We will definitely be booking again for next year!',
    highlight: 'Made our prom night magical!'
  },
  {
    id: 5,
    name: 'Amanda & Chris Wilson',
    event: 'Anniversary Celebration',
    date: 'June 2024',
    rating: 5,
    image: '/images/testimonial-5.jpg',
    testimonial: 'For our 25th wedding anniversary, we wanted something special. CD Entertainment delivered beyond our expectations. They played our wedding songs and all our favorites from the past 25 years. It was like a musical journey through our marriage. Absolutely wonderful experience!',
    highlight: 'A musical journey through our marriage!'
  },
  {
    id: 6,
    name: 'Lisa Rodriguez',
    event: 'Graduation Party',
    date: 'June 2024',
    rating: 5,
    image: '/images/testimonial-6.jpg',
    testimonial: 'We booked CD Entertainment for my daughter\'s graduation party and it was the best decision we made. The DJ was able to satisfy both the teenagers and adults with a perfect mix of music. Professional setup, great sound quality, and excellent customer service. Five stars!',
    highlight: 'Perfect mix for all ages!'
  }
];

export default function TestimonialsPage() {
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
            Client Testimonials
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients have to say about their experience 
            with CD Entertainment and the memories we've helped create.
          </motion.p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5.0/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Repeat & Referral Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Highlight */}
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      "{testimonial.highlight}"
                    </h3>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {testimonial.testimonial}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.event} • {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Video Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="relative h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl">▶️</div>
                  </div>
                  <h3 className="font-semibold mb-2">Sarah & Michael's Wedding</h3>
                  <p className="text-muted-foreground text-sm">
                    "The best DJ we could have asked for our special day!"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="relative h-48 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl">▶️</div>
                  </div>
                  <h3 className="font-semibold mb-2">Central High Prom 2024</h3>
                  <p className="text-muted-foreground text-sm">
                    "Amazing energy and perfect music selection for our students!"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Best DJ Service 2024</h3>
              <p className="text-muted-foreground">Local Entertainment Awards</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">5-Star Rating</h3>
              <p className="text-muted-foreground">Google Reviews & Yelp</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-semibold mb-2">Preferred Vendor</h3>
              <p className="text-muted-foreground">Multiple Wedding Venues</p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our long list of satisfied clients and let us make your event unforgettable. 
              Contact us today to get started!
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
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
