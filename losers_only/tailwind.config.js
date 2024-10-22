/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ['./pages/**/*.js', 
    './components/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',  // Covers all files in the app directory

  ], // Adjust based on your file structure
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fontAnimation: {
          '0%': { fontSize: '1.5rem', color: '#FAF9F6', fontWeight: 'normal', fontStyle: 'normal' },
          '25%': { fontSize: '2rem', color: '#FAF9F6', fontWeight: 'lighter', fontStyle: 'italic' },
          '50%': { fontSize: '2.5rem', color: '#ffffff', fontWeight: 'bold', fontStyle: 'normal' },
          '75%': { fontSize: '2rem', color: '#FAF9F6', fontWeight: 'lighter', fontStyle: 'italic' },
          '100%': { fontSize: '1.5rem', color: '#FAF9F6', fontWeight: 'normal', fontStyle: 'normal' },
        },
      },
      animation: {
        'font-change': 'fontAnimation 8s infinite',
      },
    },
  },
  plugins: [],
};
