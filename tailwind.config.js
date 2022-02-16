module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    screens: {
      'xl': '1200px',
      'xxl': '1408px'
    },

    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'main': '#444444',
      'gray': '#8A8A8A',
      '5C': '#5CD3FF',
      'blue': '#0D4DA1',
      'dark-blue': '#0F2447',
      '8A': '#8A8A8A'

    },

    extend: {
      dropShadow: {
        'btn': '0 13px 12px rgba(18, 67, 54, 0.5)',
      }
    },
  },
  plugins: [],
}
