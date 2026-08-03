import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#D90429',
          foreground: '#FFFFFF',
        },
        scarlet: {
          DEFAULT: '#D90429',
          dark: '#A4031F',
          light: '#FF2E4D',
        },
        graphite: {
          DEFAULT: '#111113',
          card: '#1A1A1D',
          border: '#2B2B30',
        },
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin, aspectRatioPlugin],
} satisfies Config
