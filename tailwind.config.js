/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '540px',
    },
    colors: {
      golden: '#FFD700',
      parchment_bg: '#E8DFA9',
      brown_bg: '#4E4B39',
      text_on_brown: '#E8DFA9',
      text_on_parchment: '#4E4B39',
      text_gold: '#FFD700',
      brown_grad_from: '#373428',
      brown_grad_to: '#9c9572',
    },
    extend: {
      backgroundImage: {
        hero_bg_image: "url('../../public/images/tsbo_title_bg.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
