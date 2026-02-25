'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoCardOverlay from './molecules/VideoCardOverlay';
import VideoCardContent from './molecules/VideoCardContent';
import { designTokens } from '@/lib/design-tokens';

interface VideoCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  index: number;
  isHovered: boolean;
  flexBasis: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function VideoCard({
  id,
  title,
  category,
  imageUrl,
  index,
  isHovered,
  flexBasis,
  onMouseEnter,
  onMouseLeave,
}: VideoCardProps) {
  const isFeatured = index === 0;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        flexBasis: flexBasis,
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.6, delay: index * 0.1 },
        flexBasis: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden cursor-pointer group shrink-0 ${designTokens.effects.rounded.xl}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover ${designTokens.transitions.transform} group-hover:scale-105`}
        sizes='(max-width: 768px) 100vw, 50vw'
      />

      <VideoCardOverlay category={category} />
      <VideoCardContent
        title={title}
        isHovered={isHovered}
        isFeatured={isFeatured}
      />
    </motion.div>
  );
}
