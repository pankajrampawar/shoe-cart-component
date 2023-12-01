/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        O: "hsl(26, 100%, 55%)",
        Op: "hsl(25, 100%, 94%)",
        VDB: 'hsl(220, 13%, 13%)',
        DGB: ' hsl(219, 9%, 45%)',
        GB: 'hsl(220, 14%, 75%)',
        LGB: 'hsl(223, 64%, 98%)',
        B: 'hsl(0, 0%, 0%)',
      }
    },
  },
  plugins: [],
}

