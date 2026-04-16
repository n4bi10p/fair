import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fair-background': '#FAFAFA',
        'fair-text': '#2E2E2E',
        'fair-brand': '#5C5F58',
        'fair-surface': '#E8E6E1',
        'fair-ghost': '#C6C7C0',
        'fair-dark': '#2E2E2E',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        'full': '0px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.04em',
        wider: '.05em',
      },
    },
  },
  plugins: [],
}
export default config
