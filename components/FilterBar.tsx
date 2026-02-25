'use client';

import { categories } from '@/lib/data';
import { Category } from '@/types';
import { SlidersHorizontal } from 'lucide-react';
import Button from './atoms/Button';

interface FilterBarProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  onOpenAdvancedFilters: () => void;
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  onOpenAdvancedFilters,
}: FilterBarProps) {
  return (
    <div className='sticky top-24 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
        <div className='flex items-center justify-between gap-6'>
          <div className='flex items-center gap-3 overflow-x-auto'>
            <Button
              onClick={() => onCategoryChange('all')}
              variant={selectedCategory === 'all' ? 'primary' : 'secondary'}
              size='md'
              className='whitespace-nowrap'
            >
              All projects
            </Button>

            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => onCategoryChange(category.id as Category)}
                variant={
                  selectedCategory === category.id ? 'primary' : 'secondary'
                }
                size='md'
                className='whitespace-nowrap'
              >
                {category.label}
              </Button>
            ))}
          </div>

          <Button
            onClick={onOpenAdvancedFilters}
            variant='secondary'
            size='md'
            className='flex items-center gap-2 whitespace-nowrap'
          >
            <SlidersHorizontal size={16} />
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
