/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./src/assets/background.png')",
        'bg2': "url('./src/assets/background1.jpg')",
        'bg3': "url('./src/assets/background2.jpg')",
      },
      colors: {
        'rain1': '#748fad',
        'rain2': '#7cb7c5',
        'cloudy1': '#8271a8',
        'cloudy2': '#a393ad',
        'sunny1': '#fdac8f',
        'sunny2': '#fec28e',
        'thunderstorm1': '#41504d',
        'thunderstorm2': '#dee8cf',
        'snow1': '#b3e1ee',
        'snow2': '#e6eff8'
      },
      spacing: {
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px'
      }
    },
  },
  plugins: [],
}
