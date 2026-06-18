import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0F0F0F',
          dark: '#1F1F1F',
          mid: '#4A4A4A',
          silver: '#C0C0C0',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'metal-gradient':
          'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%, #1a1a1a 100%)',
        'silver-shimmer':
          'linear-gradient(90deg, #C0C0C0 0%, #FFFFFF 30%, #C0C0C0 50%, #FFFFFF 70%, #C0C0C0 100%)',
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-silver': 'pulse-silver 2s ease-in-out infinite',
        'scroll-left': 'scroll-left 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-silver': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        silver: '0 0 20px rgba(192, 192, 192, 0.15)',
        'silver-lg': '0 0 40px rgba(192, 192, 192, 0.2)',
        card: '0 20px 40px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
