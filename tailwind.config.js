/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      // Deep space backgrounds
      'space-black': '#000000',
      'space-dark': '#0a0a0f',
      'space-deep': '#111118',
      'space-medium': '#1a1a2e',
      
      // Neon accents
      'neon-cyan': '#00ffff',
      'neon-purple': '#8b5cf6',
      'neon-pink': '#ff00ff',
      'neon-green': '#00ff88',
      'neon-blue': '#0099ff',
      
      // Holographic effects
      'holo-1': '#ff006e',
      'holo-2': '#8338ec',
      'holo-3': '#3a86ff',
      'holo-4': '#06ffa5',
      
      // Glass morphism
      'glass-light': 'rgba(255, 255, 255, 0.1)',
      'glass-medium': 'rgba(255, 255, 255, 0.05)',
      'glass-dark': 'rgba(0, 0, 0, 0.3)',
      
      // Legacy colors (keeping for compatibility)
      background: '#000000',
      primary: '#00ffff',
      secondary: '#8b5cf6',
      accent: '#00ff88',
      muted: '#6b7280',
    },
    animation: {
      'scroll': 'scroll 15s linear infinite',
      'float': 'float 6s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite alternate',
      'rotate-slow': 'rotate 20s linear infinite',
      'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'holographic': 'holographic 3s ease-in-out infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      glow: {
        '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
        '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
      },
      'pulse-glow': {
        '0%, 100%': { 
          opacity: '1',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
        },
        '50%': { 
          opacity: '0.5',
          boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)'
        },
      },
      holographic: {
        '0%': { 
          backgroundPosition: '0% 50%',
          filter: 'hue-rotate(0deg)'
        },
        '50%': { 
          backgroundPosition: '100% 50%',
          filter: 'hue-rotate(180deg)'
        },
        '100%': { 
          backgroundPosition: '0% 50%',
          filter: 'hue-rotate(360deg)'
        },
      },
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
      futuristic: ['"Orbitron"', 'monospace'],
    },
    backdropBlur: {
      xs: '2px',
    },
    boxShadow: {
      'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
      'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      'neon-pink': '0 0 20px rgba(255, 0, 255, 0.5)',
      'neon-green': '0 0 20px rgba(0, 255, 136, 0.5)',
      'holographic': '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(0, 255, 255, 0.2)',
    },
  },
};
export const plugins = [];