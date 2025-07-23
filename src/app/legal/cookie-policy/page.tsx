'use client';

import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cookie Policy
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
              <p>You can control and/or delete cookies as you wish through your browser settings. However, disabling cookies may affect website functionality.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>For questions about our Cookie Policy, contact us at info@cdentertainment.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
