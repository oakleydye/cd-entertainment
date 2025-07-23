'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: 'Weddings',
      description: 'Make your special day unforgettable with our comprehensive wedding DJ services.',
      image: '/images/dance_party.jpg',
      href: '/services/weddings',
    },
    {
      title: 'Corporate Events',
      description: 'Professional entertainment for conferences, meetings, and corporate celebrations.',
      image: '/images/corporate.jpg',
      href: '/services/corporate-events',
    },
    {
      title: 'Parties & Celebrations',
      description: 'Birthday parties, anniversaries, and special celebrations that keep guests dancing.',
      image: '/images/dance_party.jpg',
      href: '/services/parties',
    },
    {
      title: 'School Dances',
      description: 'Age-appropriate entertainment for proms, homecoming, and school events.',
      image: '/images/dance_party.jpg',
      href: '/services/dances',
    },
    {
      title: 'Live Sound',
      description: 'Professional sound reinforcement for live performances and speaking events.',
      image: '/images/corporate.jpg',
      href: '/services/live-sound',
    },
    {
      title: 'Gear Rental',
      description: 'Rent professional audio equipment for your DIY events.',
      image: '/images/gear_rental.jpg',
      href: '/services/gear-rental',
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide professional 
            DJ services tailored to your unique event needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
