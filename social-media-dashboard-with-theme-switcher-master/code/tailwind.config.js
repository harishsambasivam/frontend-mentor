/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        "switch-gradient-start": "hsl(210, 78%, 56%)",
        "switch-gradient-end": "hsl(146, 68%, 55%)",
        "switch-light": "hsl(230, 22%, 74%)",
        white: "hsl(0, 0%, 100%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        dark: {
          bgtop: "hsl(232, 19%, 15%)",
          bg: "hsl(230, 17%, 14%)",
          desaturatedBlue: {
            500: "hsl(228, 28%, 20%)",
            200: "hsl(228, 34%, 66%)",
          },
          GrayishBlue: "hsl(228, 12%, 44%)",
        },
      },
    },
  },
  plugins: [],
};
