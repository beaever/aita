import { ButtonHTMLAttributes, ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `${designTokens.colors.background.secondary} ${designTokens.colors.text.secondary} ${designTokens.animations.hover.bgPrimary}`,
  secondary: `${designTokens.colors.border.light} border ${designTokens.animations.hover.bg}`,
  outline: `border-2 ${designTokens.colors.border.medium} ${designTokens.animations.hover.bgPrimary}`,
  ghost: `${designTokens.animations.hover.bg}`,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: designTokens.spacing.padding.button.sm,
  md: designTokens.spacing.padding.button.md,
  lg: designTokens.spacing.padding.button.lg,
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${designTokens.typography.size.sm}
        ${designTokens.typography.weight.medium}
        ${designTokens.effects.rounded.full}
        ${designTokens.transitions.normal}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
}
