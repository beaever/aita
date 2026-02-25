import { ReactNode } from 'react';

type OverlayVariant = 'gradient' | 'solid' | 'glass';

interface OverlayProps {
  variant?: OverlayVariant;
  children?: ReactNode;
  className?: string;
}

const variantStyles: Record<OverlayVariant, string> = {
  gradient: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent',
  solid: 'bg-black',
  glass: 'bg-white/10 backdrop-blur-sm',
};

export default function Overlay({
  variant = 'gradient',
  children,
  className = '',
}: OverlayProps) {
  return (
    <div className={`absolute inset-0 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
