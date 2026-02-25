'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './atoms';

const navLinks = [
  { href: '/', label: 'Works' },
  { href: '/showreel', label: 'Showreel' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/career', label: 'Join Us' },
  { href: '/contacts', label: 'Contact Us' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5'>
      <nav className='container mx-auto px-8 md:px-16 lg:px-20 xl:px-24'>
        <div className='flex items-center justify-between h-24'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-white'></div>
              <div className='w-7 h-7 rounded-full bg-white/70'></div>
            </div>
            <Link
              href='/'
              className='text-base font-bold tracking-wide hover:opacity-70 transition-opacity'
            >
              AITA
            </Link>
          </div>

          <div className='hidden lg:flex items-center gap-3'>
            <Button variant='ghost' size='sm' className='p-2.5'>
              <Search size={18} />
            </Button>

            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={index === 0 ? 'primary' : 'secondary'}
                  size='md'
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            <Button
              onClick={toggleTheme}
              variant='ghost'
              size='sm'
              className='p-2.5 ml-2'
              aria-label='Toggle dark mode'
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>

          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant='ghost'
            size='sm'
            className='lg:hidden p-2'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-black/95 backdrop-blur-md overflow-hidden border-b border-white/5'
          >
            <div className='px-6 py-6 flex flex-col gap-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-base font-medium hover:opacity-70 transition-opacity py-3 px-4 rounded-2xl hover:bg-white/5'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
