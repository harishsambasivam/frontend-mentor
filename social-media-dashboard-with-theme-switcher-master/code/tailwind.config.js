/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: "Hanken Grotesk",
      },
      fontWeight: {
        400: 400,
      },
      letterSpacing: {
        w: "0.25rem",
        xw: "0.5rem",
      },
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          youtube: "hsl(348, 97%, 39%)",
          "instagram-gradient-start": "hsl(37, 97%, 70%)",
          "instagram-gradient-end": "hsl(329, 70%, 58%)",
        },
        neutral: {
          veryDarkBlue: {
            bg: "hsl(230, 17%, 14%)",
            topBgPattern: "hsl(232, 19%, 15%)",
          },
          darkDesaturatedBlue: "hsl(228, 28%, 20%)",
          desaturatedBlue: "hsl(228, 34%, 66%)",
          white: "hsl(0, 0%, 100%)",
          veryPaleBlue: "hsl(225, 100%, 98%)",
          lightGrayishBlue: "hsl(227, 47%, 96%)",
          darkGrayishBlue: "hsl(228, 12%, 44%)",
        },
      },
      backgroundImage: {
        "dark-theme-toggle":
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        "light-theme-toggle": "hsl(230, 22%, 74%)",
      },
    },
  },
  plugins: [],
};
