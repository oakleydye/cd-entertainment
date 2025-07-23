'use client'

import { useEffect } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import PageLayout from '@/components/layout/page-layout'
import HeroSection from '@/components/homepage/hero'
import About from '@/components/homepage/about'
import ServicesSection from '@/components/homepage/services'
import ContactSection from '@/components/homepage/contact-section'

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
    const contactSection = document.getElementById('contact')

    const heroSectionHeight = heroSection?.offsetHeight || 0
    const aboutSectionHeight = aboutSection?.offsetHeight || 0
    const serviceSectionHeight = serviceSection?.offsetHeight || 0

    if (latest < heroSectionHeight) {
      setCurrentSection('hero')
    } else if (latest < heroSectionHeight + aboutSectionHeight) {
      setCurrentSection('about')
    } else if (latest < heroSectionHeight + aboutSectionHeight + serviceSectionHeight) {
      setCurrentSection('services')
    } else {
      setCurrentSection('contact')
    }
  })

  return (
    <PageLayout includeGlobalStructuredData={true}>
      <HeroSection />
      <About />
      <ServicesSection />
      <ContactSection />
    </PageLayout>
  )
}
