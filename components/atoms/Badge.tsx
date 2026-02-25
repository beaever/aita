import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        ${designTokens.typography.size.xs}
        ${designTokens.typography.weight.semibold}
        ${designTokens.typography.tracking.wider}
        uppercase
        ${designTokens.effects.opacity.medium}
        ${designTokens.colors.background.glass}
        ${designTokens.effects.blur.sm}
        ${designTokens.spacing.padding.badge}
        ${designTokens.effects.rounded.full}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
}
