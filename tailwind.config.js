/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'p-blue' : 'hsl(225, 100%, 94%)',
        'b-blue' : 'hsl(245, 75%, 52%)',
        'v-p-blue' : 'hsl(225, 100%, 98%)',
        'ds-blue' : 'hsl(224, 23%, 55%)',
        'd-blue' : 'hsl(223, 47%, 23%)',
      },
      fontFamily:{
        'red-hat' : 'Red Hat Display, sans-serif',
      }
    },
  },
  plugins: [],
}
