'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import FilterModal from '@/components/FilterModal';
import { projects } from '@/lib/data';
import type { Category, Region, Environment } from '@/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    'all',
  );
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<{
    regions: Region[];
    environments: Environment[];
    years: number[];
    searchQuery: string;
  }>({
    regions: [],
    environments: [],
    years: [],
    searchQuery: '',
  });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }

      if (
        advancedFilters.regions.length > 0 &&
        !advancedFilters.regions.includes(project.region)
      ) {
        return false;
      }

      if (advancedFilters.environments.length > 0) {
        const hasMatchingEnvironment = project.environment.some((env) =>
          advancedFilters.environments.includes(env),
        );
        if (!hasMatchingEnvironment) return false;
      }

      if (
        advancedFilters.years.length > 0 &&
        !advancedFilters.years.includes(project.year)
      ) {
        return false;
      }

      if (advancedFilters.searchQuery) {
        const query = advancedFilters.searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, advancedFilters]);

  return (
    <div className='min-h-screen bg-black text-white'>
      <Hero />
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onOpenAdvancedFilters={() => setIsFilterModalOpen(true)}
      />

      <main className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24 py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 lg:gap-x-10 lg:gap-y-28'>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-xl text-white/60 font-light'>
              No projects found
            </p>
            <p className='text-sm text-white/40 mt-2 font-light'>
              Try adjusting your filters
            </p>
          </div>
        )}
      </main>

      <Footer />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={setAdvancedFilters}
      />
    </div>
  );
}
