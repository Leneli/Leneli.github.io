import type { ThemeResponsiveConfig, ThemeSchema } from './types'

export const LIGHT_SCHEMA: ThemeSchema = {
  color: {
    canvas: '#F5F7F8',
    surface: {
      default: '#FFFFFF',
      muted: '#EDF1F3',
      raised: '#FFFFFF',
      hover: '#E5ECEF',
    },
    text: {
      primary: '#172126',
      secondary: '#55636A',
      inverse: '#F8FAFB',
    },
    border: {
      default: '#D8E0E4',
      strong: '#AAB8BF',
    },
    brand: {
      default: '#17647A',
      hover: '#104F62',
      contrast: '#FFFFFF',
    },
    status: {
      info: '#236E9F',
      success: '#287A55',
      warning: '#956100',
      danger: '#B33A3A',
    },
    focus: '#287E97',
    overlay: 'rgba(15, 28, 34, 0.48)',
  },
  typography: {
    family: {
      body: 'Inter, "Avenir Next", "Segoe UI", sans-serif',
      heading: 'Inter, "Avenir Next", "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", "SFMono-Regular", Consolas, monospace',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.375rem',
      '2xl': '1.875rem',
      display: 'clamp(2.5rem, 7vw, 5rem)',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.15,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  spacing: {
    '2xs': '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
    '2xl': '4rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.875rem',
    full: '9999px',
  },
  border: {
    thin: '1px',
    strong: '2px',
  },
  shadow: {
    sm: '0 1px 3px rgba(22, 41, 50, 0.08)',
    md: '0 8px 24px rgba(22, 41, 50, 0.10)',
    lg: '0 20px 48px rgba(22, 41, 50, 0.14)',
  },
  motion: {
    duration: {
      fast: '140ms',
      normal: '240ms',
      slow: '380ms',
    },
    easing: {
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      emphasized: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    },
  },
  layout: {
    contentMaxWidth: '72rem',
    pagePaddingInline: 'clamp(1rem, 4vw, 2.5rem)',
    pagePaddingBlock: 'clamp(1.5rem, 4vw, 3rem)',
    sectionGap: 'clamp(4rem, 10vw, 8rem)',
  },
}

export const DARK_SCHEMA: ThemeSchema = {
  color: {
    canvas: '#101619',
    surface: {
      default: '#171F23',
      muted: '#1D282D',
      raised: '#222E34',
      hover: '#29383F',
    },
    text: {
      primary: '#F1F5F6',
      secondary: '#AEBCC2',
      inverse: '#172126',
    },
    border: {
      default: '#334249',
      strong: '#53666F',
    },
    brand: {
      default: '#69BCD0',
      hover: '#8CCDDD',
      contrast: '#102228',
    },
    status: {
      info: '#72B6E3',
      success: '#70C99A',
      warning: '#E4B85E',
      danger: '#ED8585',
    },
    focus: '#79CADC',
    overlay: 'rgba(4, 10, 12, 0.72)',
  },
  typography: {
    family: {
      body: 'Inter, "Avenir Next", "Segoe UI", sans-serif',
      heading: 'Inter, "Avenir Next", "Segoe UI", sans-serif',
      mono: '"JetBrains Mono", "SFMono-Regular", Consolas, monospace',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.375rem',
      '2xl': '1.875rem',
      display: 'clamp(2.5rem, 7vw, 5rem)',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.15,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  spacing: {
    '2xs': '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
    '2xl': '4rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.875rem',
    full: '9999px',
  },
  border: {
    thin: '1px',
    strong: '2px',
  },
  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.24)',
    md: '0 8px 24px rgba(0, 0, 0, 0.28)',
    lg: '0 20px 48px rgba(0, 0, 0, 0.36)',
  },
  motion: {
    duration: {
      fast: '140ms',
      normal: '240ms',
      slow: '380ms',
    },
    easing: {
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      emphasized: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    },
  },
  layout: {
    contentMaxWidth: '72rem',
    pagePaddingInline: 'clamp(1rem, 4vw, 2.5rem)',
    pagePaddingBlock: 'clamp(1.5rem, 4vw, 3rem)',
    sectionGap: 'clamp(4rem, 10vw, 8rem)',
  },
}

export const RESPONSIVE_SCHEME: ThemeResponsiveConfig = {
  sm: {
    typography: {
      size: {
        xl: '1.5rem',
        '2xl': '2rem',
        display: '3rem',
      },
    },
    spacing: {
      xl: '2.75rem',
      '2xl': '4.5rem',
    },
    layout: {
      pagePaddingInline: '1.5rem',
      pagePaddingBlock: '2rem',
      sectionGap: '5rem',
    },
  },
  md: {
    typography: {
      size: {
        lg: '1.1875rem',
        xl: '1.625rem',
        '2xl': '2.25rem',
        display: '3.75rem',
      },
    },
    spacing: {
      lg: '1.75rem',
      xl: '3rem',
      '2xl': '5rem',
    },
    layout: {
      pagePaddingInline: '2rem',
      pagePaddingBlock: '2.5rem',
      sectionGap: '6rem',
    },
  },
  lg: {
    typography: {
      size: {
        lg: '1.25rem',
        xl: '1.75rem',
        '2xl': '2.5rem',
        display: '4.5rem',
      },
    },
    spacing: {
      lg: '2rem',
      xl: '3.5rem',
      '2xl': '6rem',
    },
    layout: {
      pagePaddingInline: '2.5rem',
      pagePaddingBlock: '3rem',
      sectionGap: '7rem',
    },
  },
  xl: {
    typography: {
      size: {
        '2xl': '2.75rem',
        display: '5rem',
      },
    },
    spacing: {
      xl: '4rem',
      '2xl': '7rem',
    },
    layout: {
      contentMaxWidth: '76rem',
      pagePaddingInline: '3rem',
      sectionGap: '8rem',
    },
  },
}
