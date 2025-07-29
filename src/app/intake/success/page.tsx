'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IntakeSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="text-center">
            <CardHeader className="pb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-4"
              >
                <CheckCircle className="h-16 w-16 text-green-500" />
              </motion.div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Thank You!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <p className="text-lg text-gray-700">
                  Your intake form has been successfully submitted.
                </p>
                <p className="text-gray-600">
                  We have received all your preferences and special requests for your event. 
                  Our team will review your information and may reach out with any clarifying questions.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-800 space-y-1 text-left">
                  <li>• We'll review your preferences and create a customized playlist</li>
                  <li>• You'll receive a confirmation email within 24 hours</li>
                  <li>• We may contact you to clarify any special requests</li>
                  <li>• Final playlist approval will be sent 1 week before your event</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Have questions or need to make changes? Contact us:
                </p>
                
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('mailto:contact@cdentertainment.com')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('tel:+1234567890')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => router.push('/')}
                  className="px-6"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Return Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
