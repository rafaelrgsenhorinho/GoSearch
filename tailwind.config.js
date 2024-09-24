/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'darkbackground': '#1f1f1f',
        'darkbottom':'#313335'
      },
    },
  },
  plugins: [],
  safelist: [
    {pattern: /(bg)-darkbackground/},
    {pattern: /(bg)-darkbottom/}
]
}