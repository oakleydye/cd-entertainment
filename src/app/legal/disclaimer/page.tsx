'use client';

import { motion } from 'framer-motion';

export default function DisclaimerPage() {
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
            Disclaimer
          </motion.h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Website Information</h2>
              <p>The information on this website is provided on an "as is" basis. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Professional Services</h2>
              <p>While we strive to provide exceptional DJ and entertainment services, we cannot guarantee specific outcomes or experiences. Event success depends on many factors beyond our control.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p>CD Entertainment shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">External Links</h2>
              <p>Our website may contain links to external sites. We have no control over and assume no responsibility for the content or practices of these sites.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>For questions about this Disclaimer, contact us at info@cdentertainment.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
