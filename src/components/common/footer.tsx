'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/cd-entertainment', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/cd-entertainment', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/cd-entertainment', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/cd-entertainment', label: 'YouTube' },
  ]

  const serviceLinks = [
    { name: 'Wedding DJ Services', href: '/services/weddings' },
    { name: 'Corporate Events', href: '/services/corporate-events' },
    { name: 'Private Parties', href: '/services/parties' },
    { name: 'School Dances', href: '/services/dances' },
    { name: 'Live Sound', href: '/services/live-sound' },
    { name: 'Equipment Rental', href: '/services/gear-rental' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Song Request', href: '/request' },
    { name: 'FAQ', href: '/faq' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
    { name: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
    { name: 'Cookie Policy', href: '/legal/cookie-policy' },
    { name: 'Disclaimer', href: '/legal/disclaimer' },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with CD Entertainment</h3>
            <p className="text-slate-300 mb-6">
              Get exclusive event tips, music trends, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border-slate-600 text-white placeholder-slate-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CD Entertainment
              </h3>
              <p className="text-slate-300 mt-2">
                Professional DJ services creating unforgettable moments for over a decade.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@cd-entertainment.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>City, State 12345</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span>Available 7 Days a Week</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-slate-300 mb-6">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>12PM - 6PM</span>
              </div>
              <div className="text-sm text-slate-400 mt-2">
                *Event times may vary
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} CD Entertainment. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="text-slate-400">
              Licensed & Insured Professional DJ Services
            </span>
            <span className="text-slate-400">
              Serving the Greater Metro Area
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
