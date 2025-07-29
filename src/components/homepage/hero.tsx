'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'

const HeroSection: React.FC = () => {
  const { isMobile } = useAppStore()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_image.jpg"
          alt="DJ Equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-bungee">
            ELEVATE YOUR EVENT WITH CD ENTERTAINMENT
          </h1>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            From weddings to corporate events, we provide exceptional entertainment
            that keeps your guests dancing all night long.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size={isMobile ? "default" : "lg"}
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Get A Quote
            </Button>
            <Button
              size={isMobile ? "default" : "lg"}
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-white text-primary hover:bg-white hover:text-black px-8 py-3"
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
