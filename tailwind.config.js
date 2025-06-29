/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      background: '#0F172A',
      primary: '#38bdf8', // آبی روشن برای دکمه‌ها و تاکیدها
      secondary: '#e2e8f0', // خاکستری-روشن برای عنوان‌ها
      accent: '#7ef4cc', // سبز نئونی / آبی-سبز برای های‌لایت‌ها
      muted: '#a0aec0', // برای متن‌های کم‌رنگ‌تر
      animation: {
    scroll: 'scroll 15s linear infinite',
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
    },
  },
}};
export const plugins = [];