import type { Config } from "tailwindcss";
const path = require("path");

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('${path.resolve(__dirname, "public/images/banner.jpg")}')`,
        hight: "h-full",
      },
      colors: {
        teal: {
          600: "#4dc0b5",
        },
        "yellow-500": "#f5b623",
        "gray-900": "#1a202c",
        "gray-100": "#f7fafc",
        primary: "#3ab984",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        round: "50%",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },

      fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
      },
      boxShadow: {
        insetcustom: "inset 0 0 0 2000px rgba(0, 0,0, 0.56)",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease forwards",
        slideUp: "slideUp 0.3s ease forwards",
      },
    },
  },
  safelist: [
    "bg-teal-600",
    "border-0",
    "border-2",
    "hover:bg-transparent",
    "hover:bg-blue-600",
    "border-blue-600",
    "dark:bg-black",
    "dark:text-white",
    "capitalize",
    "py-8",
    "bg-blue-500",
    "w-70%",
    "pt-10",
    "w-[50%]",
    "sm:flex-col",
    "max-w-4xl",
    "bg-gray-300",
    "max-h-[500px]",
    "overflow-y-auto",
    "text-indigo-600",
    "text-indigo-600",
    "text-red-500",
    "font-bold",
    "md:flex-row",
    "w-[100%]",
    "lg:w-[30%]",
    "mx-auto",
    "bg-gray-700",
    "hover:bg-gray-600",
    "w-[200px]",
    "h-[100px]",
    "max-w-3xl",
    "inset-y-0",
    "",
  ],
  plugins: [],
};
export default config;
