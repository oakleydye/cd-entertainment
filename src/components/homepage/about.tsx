'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="About CD Entertainment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About CD Entertainment
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                With over 15 years of experience in the entertainment industry, 
                CD Entertainment has been the go-to choice for memorable events 
                throughout the region. Our passion for music and commitment to 
                excellence ensures your special day is nothing short of perfect.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we bring 
                professional-grade equipment, extensive music libraries, and 
                personalized service that adapts to your unique vision. Every 
                event is a collaboration where your ideas meet our expertise.
              </p>
              <p>
                Our team understands that great entertainment goes beyond just 
                playing music – it's about reading the crowd, creating atmosphere, 
                and making moments that last a lifetime. Let us help you create 
                an unforgettable experience for you and your guests.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Events Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
