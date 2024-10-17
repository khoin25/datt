import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {

      
        sm: '320px',
        sxm:"370px",
        ssm:"400px",
        ssm2:"428px",
        xmd:"640px",
        md: '768px',
        mdl:"820px",
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'xll':"1600px"
      },
    },
  },
  plugins: [],
};
export default config;
