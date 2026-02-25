import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function Container({
  children,
  className = '',
  noPadding = false,
}: ContainerProps) {
  return (
    <div
      className={`
        container mx-auto
        ${!noPadding ? designTokens.spacing.container.x : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}
