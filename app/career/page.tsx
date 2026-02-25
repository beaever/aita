'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Button from '@/components/atoms/Button';

const positions = [
  {
    title: 'Creative Director',
    department: 'Creative',
    location: 'Remote / On-site',
  },
  {
    title: '3D Artist',
    department: 'Production',
    location: 'Remote',
  },
  {
    title: 'Technical Director',
    department: 'Technology',
    location: 'On-site',
  },
  {
    title: 'Motion Designer',
    department: 'Creative',
    location: 'Remote / On-site',
  },
];

export default function CareerPage() {
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
              Join Us
            </h1>

            <p className='text-xl text-white/80 mb-16 max-w-3xl'>
              {`Be part of a creative team that's pushing the boundaries of
              multimedia production. We're always looking for talented
              individuals who share our passion for innovation.`}
            </p>

            <div className='mb-16'>
              <h2 className='text-3xl font-bold mb-8'>Open Positions</h2>
              <div className='space-y-4'>
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer'
                  >
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div>
                        <h3 className='text-xl font-bold mb-2'>
                          {position.title}
                        </h3>
                        <div className='flex gap-4 text-sm text-white/60'>
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                        </div>
                      </div>
                      <Button
                        variant='primary'
                        size='md'
                        className='self-start md:self-auto'
                      >
                        Apply
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='max-w-3xl'>
              <h2 className='text-3xl font-bold mb-6'>Why Join Sila Sveta?</h2>
              <ul className='space-y-4 text-lg text-white/80'>
                <li>
                  • Work on world-class projects with leading brands and artists
                </li>
                <li>• Collaborate with a talented international team</li>
                <li>• Access to cutting-edge technology and tools</li>
                <li>• Opportunities for professional growth and development</li>
                <li>• Flexible work arrangements</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
