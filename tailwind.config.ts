import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a192f',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
