'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <main className='pt-32 pb-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-4xl mx-auto'
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'>
              About Us
            </h1>

            <div className='space-y-8 text-lg text-white/80'>
              <p>
                Sila Sveta is an international multimedia production studio that
                unites art and technologies to inspire people around the world.
              </p>

              <p>
                {`Since our founding, we have been at the forefront of creating
                immersive experiences that push the boundaries of what's
                possible in multimedia production. Our team of artists,
                designers, and technologists work together to bring
                extraordinary visions to life.`}
              </p>

              <p>
                {`From large-scale concerts and festivals to museum installations
                and corporate events, we deliver innovative solutions that
                captivate audiences and create lasting impressions.`}
              </p>

              <div className='pt-8 border-t border-white/10'>
                <h2 className='text-3xl font-bold mb-6'>Our Expertise</h2>
                <ul className='space-y-4'>
                  <li>{`• Multimedia production and show design`}</li>
                  <li>{`• Interactive installations and exhibitions`}</li>
                  <li>{`• Projection mapping and media facades`}</li>
                  <li>{`• Stage design and visual content creation`}</li>
                  <li>{`• Immersive experiences and spatial design`}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
