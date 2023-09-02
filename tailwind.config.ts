import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#040306',
        'spotify-grey': '#181818',
        'spotify-white': '#FFFFFF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
