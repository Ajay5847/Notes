module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}

// See the Tailwind default theme values here:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config */
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // ...
  ],

  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],

  // All the default values will be compiled unless they are overridden below
  theme: {
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0px 2px 4px rgba(3, 24, 52, 0.03), 0px 1px 2px rgba(0, 0, 0, 0.03)",
      DEFAULT:
        "0px 2px 10px rgba(3, 24, 52, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.04)",
      md: "0px 3px 12px rgba(3, 24, 52, 0.07), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      lg: "0px 4px 15px rgba(3, 24, 52, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.05)",
      xl: "0px 8px 30px rgba(3, 24, 52, 0.09), 0px 2px 4px rgba(0, 0, 0, 0.05)",
      "2xl":
        "0px 10px 40px rgba(3, 24, 52, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.06)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
      line: "0px 3px 0px rgba(0, 0, 0, 0.03), 0px 1px 0px rgba(228, 228, 231, 0.7)",
      "line-":
        "0px -3px 0px rgba(0, 0, 0, 0.03), 0px -1px 0px rgba(228, 228, 231, 0.7);",
    },
    fontFamily: {
      sans: [
        "DM Sans",             // Primary custom font
        "system-ui",           // System UI font
        "-apple-system",       // Apple system font
        "BlinkMacSystemFont",  // Mac system font
        "Segoe UI",            // Segoe UI for Windows
        "Roboto",              // Roboto for Android
        "Helvetica Neue",      // Helvetica for macOS
        "Arial",               // Arial as a common fallback
        "sans-serif",          // Default sans-serif fallback
      ],
    },
    // Extend (add to) the default theme in the `extend` key
    extend: {
      // Create your own at: https://javisperez.github.io/tailwindcolorshades
      colors: {
        primary: colors.blue,
        secondary: colors.emerald,
        tertiary: colors.gray,
        danger: colors.red,
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        dark: colors.gray,
        gray: {
          100: "#F8F9FA",
          200: "#F4F5F6",
          300: "#EBEEF1",
          400: "#E1E4E8",
          500: "#CDD2D8",
          600: "#9098A5",
          700: "#4A5568",
          800: "#252F3F",
          900: "#0E1D2B",
        },
        brand: {
          100: "#F3F9F3",
          200: "#E2F2DF",
          300: "#D1EEC9",
          400: "#B1E384",
          500: "#9BD06C",
          600: "#87BD4D",
          700: "#448348",
          800: "#316E35",
          900: "#0F552F",
        },
        red: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        yellow: {
          50: "#FDF9EE",
          100: "#FDFAF0",
          200: "#FFF3D3",
          300: "#FFE5B2",
          400: "#FDD482",
          500: "#FFCB62",
          600: "#EFB239",
          700: "#CC911A",
          800: "#975A16",
          900: "#6F3B01",
        },
        green: {
          50: "#ECFDF5",
          200: "#D4F2DD",
          600: "#38A169",
          700: "#1F874F",
          800: "#276749",
        },
        blue: {
          50: "#EFF6FF",
          100: "#E8F5FD",
          200: "#CCE6F5",
          300: "#B2DDF5",
          400: "#86D0FA",
          500: "#4B9FEE",
          600: "#3182CE",
          700: "#1E6CB6",
          800: "#2C5282",
          900: "#1A385F",
        },
        purple: {
          50: "#EEF2FF",
          200: "#E8DBF9",
          600: "#865DE1",
          700: "#6941C5",
          800: "#553C9A",
        },
        lime: {
          50: "#F3F9E6",
          100: "#EEFCD3",
          200: "#D7F2A4",
          300: "#C3EF93",
          400: "#A6E165",
          500: "#8FC753",
          600: "#6EA136",
          700: "#51791B",
          800: "#3D5D14",
          900: "#344F16",
        },
        forest: {
          50: "#F0FBF4",
          100: "#E5F6EA",
          200: "#D0EDD8",
          300: "#B2E3BA",
          400: "#84CB8F",
          500: "#65B76D",
          600: "#469858",
          700: "#357D45",
          800: "#2E7142",
          900: "#155231",
        },
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      height: {
        "2px": "2px",
        160: "40rem",
      },
      maxHeight: {
        "4/5": "80%",
        "11/12": "91.666667%",
      },
      maxWidth: {
        es: "11rem",
        36: "9rem",
        64: "16rem",
      },
      opacity: {
        10: "0.1",
      },
      zIndex: {
        1: "1",
      },
    },
  },

  // Opt-in to TailwindCSS future changes
  future: {},
};