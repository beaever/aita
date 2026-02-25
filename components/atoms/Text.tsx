import { ReactNode, ElementType } from 'react';
import { designTokens } from '@/lib/design-tokens';

type TextVariant = 'hero' | 'h1' | 'h2' | 'h3' | 'body' | 'caption';
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<TextVariant, string> = {
  hero: `${designTokens.typography.size.hero} ${designTokens.typography.leading.hero} ${designTokens.typography.tracking.tight}`,
  h1: `${designTokens.typography.size['5xl']} ${designTokens.typography.leading.tight}`,
  h2: `${designTokens.typography.size['3xl']} ${designTokens.typography.leading.tight}`,
  h3: `${designTokens.typography.size.cardTitle} ${designTokens.typography.leading.tight}`,
  body: `${designTokens.typography.size.base} ${designTokens.typography.leading.normal}`,
  caption: `${designTokens.typography.size.sm} ${designTokens.typography.leading.snug}`,
};

export default function Text({
  variant = 'body',
  weight = 'normal',
  as: Component = 'p',
  children,
  className = '',
}: TextProps) {
  return (
    <Component
      className={`
        ${variantStyles[variant]}
        ${designTokens.typography.weight[weight]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Component>
  );
}
