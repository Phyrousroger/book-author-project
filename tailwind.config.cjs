/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

  theme: {
   
     letterSpacing:{
         "widest":"5px",
     }   ,
    fontFamily:{
        "philosopher":['Philosopher',"sans-serif"],
        "poppins":["Poppins",]
    },
    extend: {},
  },
  plugins: [],
}
