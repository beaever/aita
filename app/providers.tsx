'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
}
