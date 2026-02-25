export const designTokens = {
  colors: {
    background: {
      primary: 'bg-black',
      secondary: 'bg-white',
      overlay: 'bg-black/80',
      glass: 'bg-white/10',
      glassDark: 'bg-black/95',
      glassLight: 'bg-white/5',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-black',
      muted: 'text-white/50',
      mutedHover: 'hover:text-white',
    },
    border: {
      subtle: 'border-white/10',
      light: 'border-white/20',
      medium: 'border-white/40',
      strong: 'border-white',
    },
  },

  spacing: {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
    container: {
      x: 'px-8 md:px-16 lg:px-20 xl:px-24',
      y: 'py-8',
    },
    padding: {
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-10',
      lg: 'p-12',
      xl: 'p-14',
      button: {
        sm: 'px-5 py-2',
        md: 'px-8 py-2.5',
        lg: 'px-10 py-3',
      },
      badge: 'px-4 py-2',
      input: 'px-5 py-3.5',
    },
    margin: {
      xs: 'mb-2',
      sm: 'mb-3',
      md: 'mb-4',
      lg: 'mb-6',
      xl: 'mb-8',
      '2xl': 'mb-12',
      '3xl': 'mb-20',
    },
  },

  typography: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      hero: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
      cardTitle: 'text-2xl md:text-3xl',
      projectTitle: 'text-xl md:text-2xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    leading: {
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      hero: 'leading-[1.1]',
    },
    tracking: {
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
    },
  },

  effects: {
    rounded: {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      full: 'rounded-full',
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
    blur: {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
    },
    opacity: {
      low: 'opacity-70',
      medium: 'opacity-80',
      high: 'opacity-90',
    },
  },

  transitions: {
    fast: 'transition-all duration-200',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    slower: 'transition-all duration-700',
    colors: 'transition-colors duration-300',
    opacity: 'transition-opacity duration-300',
    transform: 'transition-transform duration-700',
  },

  animations: {
    hover: {
      opacity: 'hover:opacity-70',
      scale: 'hover:scale-105',
      bg: 'hover:bg-white/10',
      bgPrimary: 'hover:bg-white hover:text-black',
    },
  },
} as const;

export type DesignTokens = typeof designTokens;
