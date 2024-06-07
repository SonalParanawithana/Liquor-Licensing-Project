const withMT = require("@material-tailwind/react/utils/withMT");


// /** @type {import('tailwindcss').Config} */
// module.exports = {
  //   content: [],
  //   theme: {
    //     extend: {},
    //   },
    //   plugins: [],
    // }
    
//     /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});