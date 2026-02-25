'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import { projects } from '@/lib/data';
import Badge from '@/components/atoms/Badge';
import { use } from 'react';

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-black text-white'>
      <main className='pt-32 pb-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity mb-8'
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='relative w-full aspect-video rounded-lg overflow-hidden mb-12'>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className='object-cover'
                priority
                sizes='100vw'
              />
            </div>

            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
                  {project.title}
                </h1>
                <p className='text-xl text-white/80 mb-6'>
                  {project.description}
                </p>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-white/10'>
                <div>
                  <div className='text-sm text-white/60 mb-2'>Year</div>
                  <div className='font-medium'>{project.year}</div>
                </div>
                <div>
                  <div className='text-sm text-white/60 mb-2'>Date</div>
                  <div className='font-medium'>{project.date}</div>
                </div>
                <div>
                  <div className='text-sm text-white/60 mb-2'>Category</div>
                  <div className='font-medium capitalize'>
                    {project.category.replace('-', ' ')}
                  </div>
                </div>
                <div>
                  <div className='text-sm text-white/60 mb-2'>Region</div>
                  <div className='font-medium capitalize'>
                    {project.region.replace('-', ' ')}
                  </div>
                </div>
              </div>

              <div className='py-8'>
                <div className='text-sm text-white/60 mb-3'>Environment</div>
                <div className='flex flex-wrap gap-2'>
                  {project.environment.map((env) => (
                    <Badge key={env} className='capitalize'>
                      {env.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {relatedProjects.length > 0 && (
            <div className='mt-24'>
              <h2 className='text-3xl font-bold mb-8'>Related Projects</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.slug}`}
                    className='group'
                  >
                    <div className='relative aspect-video rounded-lg overflow-hidden mb-4'>
                      <Image
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                        sizes='(max-width: 768px) 100vw, 33vw'
                      />
                    </div>
                    <h3 className='font-bold mb-2 group-hover:opacity-70 transition-opacity'>
                      {relatedProject.title}
                    </h3>
                    <p className='text-sm text-white/60'>
                      {relatedProject.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
