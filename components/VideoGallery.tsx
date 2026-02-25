'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';

interface VideoItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: 'Point of Singularity',
    category: 'FEATURED',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 2,
    title: 'Installations',
    category: 'installations',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
  },
  {
    id: 3,
    title: 'Live Events',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
  },
  {
    id: 4,
    title: 'Digital Art',
    category: 'digital',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80',
  },
];

export default function VideoGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const calculateFlexBasis = (index: number, itemId: number): string => {
    const isHovered = hoveredId === itemId;
    const isAnyHovered = hoveredId !== null;

    if (index === 0) {
      return isHovered ? '60%' : isAnyHovered && !isHovered ? '30%' : '50%';
    } else {
      return isHovered ? '30%' : isAnyHovered && !isHovered ? '13.33%' : '16.66%';
    }
  };

  return (
    <div className='videos container mx-auto px-8 md:px-16 lg:px-20 xl:px-24 pb-24'>
      <div className='flex gap-3 h-[500px]'>
        {videoItems.map((item, index) => (
          <VideoCard
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl}
            index={index}
            isHovered={hoveredId === item.id}
            flexBasis={calculateFlexBasis(index, item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
}
