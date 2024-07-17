import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import animations from '@midudev/tailwind-animations';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'slide-in-right': 'slide-in-right 1s ease-out',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animationDelay: {
        '0': '0ms',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [
    typographyPlugin, 
    animations,
    function({ addUtilities }) {
      const newUtilities = {
        '.delay-0': {
          'animation-delay': '0ms',
        },
        '.delay-200': {
          'animation-delay': '200ms',
        },
        '.delay-400': {
          'animation-delay': '400ms',
        },
        '.delay-600': {
          'animation-delay': '600ms',
        },
        '.delay-800': {
          'animation-delay': '800ms',
        },
        '.delay-1000': {
          'animation-delay': '1000ms',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
  darkMode: 'class',
};
