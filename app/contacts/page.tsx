'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '@/components/atoms/Button';

export default function ContactsPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <main className='pt-32 pb-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'>
              Contact Us
            </h1>

            <p className='text-xl text-white/80 mb-16 max-w-3xl'>
              {`Let's create something extraordinary together. Get in touch with`}
              us to discuss your next project.
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <Mail className='mt-1 flex-shrink-0' size={24} />
                  <div>
                    <h3 className='font-bold mb-2'>Email</h3>
                    <a
                      href='mailto:info@silasveta.com'
                      className='text-white/70 hover:text-white transition-colors'
                    >
                      info@silasveta.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='mt-1 flex-shrink-0' size={24} />
                  <div>
                    <h3 className='font-bold mb-2'>Phone</h3>
                    <a
                      href='tel:+1234567890'
                      className='text-white/70 hover:text-white transition-colors'
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <MapPin className='mt-1 flex-shrink-0' size={24} />
                  <div>
                    <h3 className='font-bold mb-2'>Office</h3>
                    <p className='text-white/70'>
                      123 Creative Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <form className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors'
                      placeholder='Your name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      rows={6}
                      className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none'
                      placeholder='Tell us about your project...'
                    />
                  </div>

                  <Button
                    type='submit'
                    variant='primary'
                    size='lg'
                    fullWidth
                    className='font-medium'
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
