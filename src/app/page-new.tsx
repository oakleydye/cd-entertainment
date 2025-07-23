'use client'

import { useEffect } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import MenuBar from '@/components/common/menu-bar'
import HeroSection from '@/components/homepage/hero'

export default function Homepage() {
  const { scrollY } = useScroll()
  const { setCurrentSection, setIsMobile } = useAppStore()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [setIsMobile])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const heroSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const serviceSection = document.getElementById('services')
    const pricingSection = document.getElementById('pricing')
    const counterSection = document.getElementById('counters')
    const contactSection = document.getElementById('contact')

    const heroSectionHeight = heroSection?.offsetHeight || 0
    const aboutSectionHeight = aboutSection?.offsetHeight || 0
    const serviceSectionHeight = serviceSection?.offsetHeight || 0
    const pricingSectionHeight = pricingSection?.offsetHeight || 0
    const counterSectionHeight = counterSection?.offsetHeight || 0

    if (latest < heroSectionHeight) {
      setCurrentSection('hero')
    } else if (latest < heroSectionHeight + aboutSectionHeight) {
      setCurrentSection('about')
    } else if (latest < heroSectionHeight + aboutSectionHeight + serviceSectionHeight) {
      setCurrentSection('services')
    } else if (latest < heroSectionHeight + aboutSectionHeight + serviceSectionHeight + pricingSectionHeight) {
      setCurrentSection('pricing')
    } else if (latest < heroSectionHeight + aboutSectionHeight + serviceSectionHeight + pricingSectionHeight + counterSectionHeight) {
      setCurrentSection('counters')
    } else {
      setCurrentSection('contact')
    }
  })

  return (
    <div className="w-full overflow-x-hidden">
      <MenuBar />
      <HeroSection />
      
      {/* Placeholder sections for now */}
      <section id="about" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="pricing" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="counters" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Stats</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </section>
    </div>
  )
}
