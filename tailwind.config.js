/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette from your existing CSS
        'deepblack': '#000807',
        'black': '#2c3e50',
        'grey': '#6a8bad',
        'lightgrey': '#eaecef',
        'white': '#ffffff',
        'lightcyan': '#87d1d8',
        'darkcyan': '#0d8b96',
        'lightorange': '#ffa647',
        'darkorange': '#f57e00',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '22px',
        '3xl': '28px',
        '4xl': '38px',
        '5xl': '42px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'banner': "url('/assets/images/photocollage2025v2.jpg')",
      },
      height: {
        'screen': '100vh',
      },
    },
  },
  plugins: [],
}
