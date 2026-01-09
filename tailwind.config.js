const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        background: "#121730",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.white"),
              textDecoration: "none",
              fontWeight: "medium",
              transitionProperty: theme("transitionProperty.all"),
              transitionTimingFunction: theme(
                "transitionTimingFunction.in-out"
              ),
              transitionDuration: theme("transitionDuration.150"),
              boxShadow: `inset 0 -0.4em ${theme("colors.gray.700")}`,
              "&:hover": {
                color: theme("colors.blue.300"),
                boxShadow: `inset 0 -0.6em ${theme("colors.blue.900")}`,
              },
            },
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.white") },
            h4: { color: theme("colors.white") },
            strong: { color: theme("colors.white") },
            code: { color: theme("colors.white") },
            blockquote: { color: theme("colors.gray.300") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};