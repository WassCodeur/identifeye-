import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        fira: ["fira"],
      },
      colors: {
        tranparent: "transparent",
        current: "currentColor",
        black: "rgba(0, 0, 0, 1)",

        white: "rgba(255, 255, 255, 1)",
        green: {
          1: "rgba(38, 232, 128, 1)",
        },

        blue: {
          1: "rgba(9, 5, 28, 1)",
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000503",
          secondary: "#00FF00",
          accent: "#B0ADAD",
          neutral: "#ffffff",
          "base-100": "#000503",
          info: "#62CCF9",
          success: "#2CC98F",
          warning: "#FBC337",
          error: "#F76464",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
