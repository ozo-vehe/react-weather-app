/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('https://th.bing.com/th/id/R.21336ecd5f307ce30a3b98e8a0f42246?rik=JPqqpUkAcKxMOg&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fMorning-HD-Background-.jpg&ehk=pzbmUz1JuwoI04NaB4U5adR7xRvQqkiMU5Q%2fVv%2f1jCk%3d&risl=&pid=ImgRaw&r=0')",
        'bg2': "url('./src/assets/background1.jpg')",
        'bg3': "url('https://64.media.tumblr.com/bf9955276ed67855d0b63f7b3acf8ad2/tumblr_noazklQ43Z1t0mstoo1_1280.jpg')",
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
