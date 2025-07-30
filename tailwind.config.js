/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      background: '#0A0A0F',
      surface: '#1A1A2E',
      primary: '#00D4FF',
      secondary: '#FF0080',
      accent: '#7B2CBF',
      neon: {
        blue: '#00D4FF',
        pink: '#FF0080',
        purple: '#7B2CBF',
        green: '#00FF88',
        cyan: '#00FFFF',
        yellow: '#FFFF00'
      },
      glass: {
        light: 'rgba(255, 255, 255, 0.1)',
        dark: 'rgba(0, 0, 0, 0.3)',
        border: 'rgba(255, 255, 255, 0.2)'
      }
    },
    animation: {
      'glow': 'glow 2s ease-in-out infinite alternate',
      'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      'float': 'float 6s ease-in-out infinite',
      'rotate-slow': 'rotate-slow 20s linear infinite',
      'slide-up': 'slide-up 0.5s ease-out',
      'fade-in': 'fade-in 0.6s ease-out',
      'neon-flicker': 'neon-flicker 1.5s infinite alternate',
    },
    keyframes: {
      glow: {
        '0%': { boxShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' },
        '100%': { boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF' }
      },
      'pulse-glow': {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.7' }
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' }
      },
      'rotate-slow': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      },
      'slide-up': {
        '0%': { transform: 'translateY(100px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' }
      },
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      'neon-flicker': {
        '0%': { textShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' },
        '100%': { textShadow: '0 0 2px #00D4FF, 0 0 5px #00D4FF, 0 0 8px #00D4FF' }
      }
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
      futura: ['"Orbitron"', 'monospace']
    },
    backdropBlur: {
      xs: '2px',
    },
    boxShadow: {
      'neon-blue': '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF, 0 0 20px #00D4FF',
      'neon-pink': '0 0 5px #FF0080, 0 0 10px #FF0080, 0 0 15px #FF0080, 0 0 20px #FF0080',
      'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    }
  },
};
export const plugins = [];