'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function ShowreelPage() {
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
              Showreel
            </h1>

            <div className='relative w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-8'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-white/60'>Video player placeholder</p>
              </div>
            </div>

            <div className='max-w-3xl'>
              <p className='text-xl text-white/80 mb-6'>
                Discover our latest works showcasing the intersection of art and
                technology.
              </p>
              <p className='text-white/60'>
                Our showreel features a curated selection of our most innovative
                projects, from immersive installations to large-scale multimedia
                productions.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
