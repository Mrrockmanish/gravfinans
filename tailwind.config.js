module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    screens: {
      'lg': '1200px',
      'xl': '1408px'
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
      '8A': '#8A8A8A',
      'BD': '#BDBDBD'

    },

    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '20px': '1.25rem',
      '3xl': '1.5rem',
      full: '9999px',
    },

    extend: {
      dropShadow: {
        'btn': '0 13px 12px rgba(18, 67, 54, 0.5)',
      }
    },
  },
  plugins: [],
}
