'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Show Production',
    description:
      'Full-scale production services for concerts, festivals, and live events with cutting-edge technology.',
  },
  {
    title: 'Stage Design',
    description:
      'Custom stage designs that create unforgettable visual experiences for audiences worldwide.',
  },
  {
    title: 'Media Facades',
    description:
      'Large-scale projection mapping and architectural lighting installations.',
  },
  {
    title: 'Special Projects',
    description:
      'Unique multimedia installations tailored to specific client needs and visions.',
  },
  {
    title: 'Public Events',
    description:
      'Spectacular productions for ceremonies, celebrations, and public gatherings.',
  },
  {
    title: 'Installations',
    description:
      'Immersive art installations combining technology, light, and interactive elements.',
  },
];

export default function ServicesPage() {
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
              Services
            </h1>

            <p className='text-xl text-white/80 mb-16 max-w-3xl'>
              We offer comprehensive multimedia production services that unite
              art and technology to create inspiring experiences.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'
                >
                  <h3 className='text-2xl font-bold mb-4'>{service.title}</h3>
                  <p className='text-white/70'>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
