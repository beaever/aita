'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { regions, environments } from '@/lib/data';
import { Region, Environment } from '@/types';
import Button from './atoms/Button';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: {
    regions: Region[];
    environments: Environment[];
    years: number[];
    searchQuery: string;
  }) => void;
}

export default function FilterModal({
  isOpen,
  onClose,
  onApplyFilters,
}: FilterModalProps) {
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedEnvironments, setSelectedEnvironments] = useState<
    Environment[]
  >([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const years = [2025, 2024, 2023, 2022, 2021];

  const toggleRegion = (region: Region) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region],
    );
  };

  const toggleEnvironment = (environment: Environment) => {
    setSelectedEnvironments((prev) =>
      prev.includes(environment)
        ? prev.filter((e) => e !== environment)
        : [...prev, environment],
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );
  };

  const handleReset = () => {
    setSelectedRegions([]);
    setSelectedEnvironments([]);
    setSelectedYears([]);
    setSearchQuery('');
  };

  const handleApply = () => {
    onApplyFilters({
      regions: selectedRegions,
      environments: selectedEnvironments,
      years: selectedYears,
      searchQuery,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50'
          />

          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto'
          >
            <div className='p-8'>
              <div className='flex items-center justify-between mb-10'>
                <h2 className='text-3xl font-bold'>Filters</h2>
                <button
                  onClick={onClose}
                  className='p-3 rounded-full hover:bg-white/10 transition-all'
                  aria-label='Close filters'
                >
                  <X size={24} />
                </button>
              </div>

              <div className='space-y-8'>
                <div>
                  <label className='block text-sm font-semibold mb-4'>
                    Search
                  </label>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search projects...'
                    className='w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-all'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold mb-4'>
                    Year
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {years.map((year) => (
                      <Button
                        key={year}
                        onClick={() => toggleYear(year)}
                        variant={
                          selectedYears.includes(year) ? 'primary' : 'secondary'
                        }
                        size='md'
                      >
                        {year}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold mb-4'>
                    Region
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {regions.map((region) => (
                      <Button
                        key={region.id}
                        onClick={() => toggleRegion(region.id as Region)}
                        variant={
                          selectedRegions.includes(region.id as Region)
                            ? 'primary'
                            : 'secondary'
                        }
                        size='md'
                      >
                        {region.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold mb-4'>
                    Environment
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {environments.map((environment) => (
                      <Button
                        key={environment.id}
                        onClick={() =>
                          toggleEnvironment(environment.id as Environment)
                        }
                        variant={
                          selectedEnvironments.includes(
                            environment.id as Environment,
                          )
                            ? 'primary'
                            : 'secondary'
                        }
                        size='md'
                      >
                        {environment.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex gap-4 mt-8 pt-6 border-t border-white/10'>
                <Button
                  onClick={handleReset}
                  variant='secondary'
                  size='lg'
                  fullWidth
                  className='font-semibold'
                >
                  Reset All
                </Button>
                <Button
                  onClick={handleApply}
                  variant='primary'
                  size='lg'
                  fullWidth
                  className='font-semibold'
                >
                  Apply
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
