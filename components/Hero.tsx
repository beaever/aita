'use client';

import { motion } from 'framer-motion';
import VideoGallery from './VideoGallery';
import Container from './atoms/Container';
import Text from './atoms/Text';
import { designTokens } from '@/lib/design-tokens';

export default function Hero() {
  return (
    <section className='pt-24 mt-24'>
      <Container className='pt-20 pb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Text
            variant='hero'
            weight='bold'
            as='h1'
            className={designTokens.spacing.margin['3xl']}
          >
            We unite <span className='font-bold'>art</span> and{' '}
            <span className='font-bold'>technologies</span> to inspire people
          </Text>
        </motion.div>
      </Container>

      <VideoGallery />
    </section>
  );
}
