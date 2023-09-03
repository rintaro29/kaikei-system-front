import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// const defaultTheme = require("tailwindcss/defaultConfig");

// module.exports = {
//   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   important: true,
//   theme: {
//     ...defaultTheme,
//     colors: {
//       ...defaultTheme.colors,
//       primary: "#3B81F6",
//       white: "#ffffff",
//       text: {
//         DEFAULT: "#1F2937",
//         light: "#6C7281",
//       },
//       light: {
//         DEFAULT: "#FAFBFC",
//         lighter: "#F3F4F6",
//       },
//     },
//     extend: {},
//   },
//   plugins: [],
// };
