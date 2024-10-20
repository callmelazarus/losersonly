/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fontAnimation: {
          '0%': { fontSize: '1.5rem', color: '#f1c40f', fontWeight: 'normal', fontStyle: 'normal' },
          '25%': { fontSize: '2rem', color: '#16a085', fontWeight: 'lighter', fontStyle: 'italic' },
          '50%': { fontSize: '2.5rem', color: '#ffffff', fontWeight: 'bold', fontStyle: 'normal' },
          '75%': { fontSize: '2rem', color: '#f39c12', fontWeight: 'lighter', fontStyle: 'italic' },
          '100%': { fontSize: '1.5rem', color: '#8e44ad', fontWeight: 'normal', fontStyle: 'normal' },
        },
      },
      animation: {
        'font-change': 'fontAnimation 8s infinite',
      },
    },
  },
  plugins: [],
};
