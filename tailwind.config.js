/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      animation: {
        'spin-slow': 'spin 20s linear infinite', // Slow rotation for the Bitcoin image
      },
     
    },
    keyframes: {
     
     
    
      bounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      pulse: {
        "0%, 100%": { opacity: 0.5 },
        "50%": { opacity: 1 },
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      ping: {
        "0%": { transform: "scale(1)", opacity: 1 },
        "75%": { transform: "scale(1.5)", opacity: 0.3 },
        "100%": { transform: "scale(1)", opacity: 0 },
      },
    },
  },

  plugins: [],
}