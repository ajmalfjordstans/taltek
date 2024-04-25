const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": 'url(/images/landing_2.jpg)',
        "contact": 'url(/images/contact.jpg)',
        "services": 'url(/images/services.jpg)',
        "about": 'url(/images/about.jpg)',
      },
      colors: {
        'primary': '#953f10',
        'gray': '#545454'
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        cabin: ['var(--font-cabin)']
      }
    },
  },
  plugins: [],
});
