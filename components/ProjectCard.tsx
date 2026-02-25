'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import Button from './atoms/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className='group relative w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.slug}`} className='block'>
        <div className='relative w-full aspect-[3/2] overflow-hidden bg-black mb-6 rounded-3xl'>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-700 ease-out'
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />

          <div
            className='absolute inset-0 bg-black transition-opacity duration-500'
            style={{ opacity: isHovered ? 0.3 : 0 }}
          />

          <div
            className='absolute inset-0 flex flex-col justify-end p-10 transition-opacity duration-500'
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <h3 className='text-3xl md:text-4xl font-bold mb-3 leading-tight'>
              {project.title}
            </h3>
            <Button variant='outline' size='lg' className='self-start'>
              More
            </Button>
          </div>
        </div>

        <div>
          <h3 className='text-xl md:text-2xl font-semibold leading-snug'>
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
