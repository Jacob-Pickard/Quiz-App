module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        expand: {
          '0%': { maxHeight: '0', opacity: 0 },
          '100%': { maxHeight: '100%', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        expand: 'expand 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
