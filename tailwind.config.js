/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#000000",
          800: "#1D1D1F",
          700: "#2D2D2D",
        },
        secondary: {
          100: "#F5F5F7",
          200: "#E8E8ED",
          300: "#86868B",
        },
        accent: {
          blue: "#2997FF",
          purple: "#8F6ED5",
        },
      },
      fontSize: {
        // Corrected format for font sizes
        display: [
          "2.75rem",
          {
            // 44px
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        title: [
          "2.5rem",
          {
            // 40px
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        headline: [
          "1.75rem",
          {
            // 28px
            lineHeight: "1.2",
          },
        ],
        subheadline: [
          "1.3125rem",
          {
            // 21px
            lineHeight: "1.3",
          },
        ],
        body: [
          "1.0625rem",
          {
            // 17px
            lineHeight: "1.5",
          },
        ],
        caption: [
          "0.875rem",
          {
            // 14px
            lineHeight: "1.4",
          },
        ],
      },
    },
  },
  plugins: [],
};
