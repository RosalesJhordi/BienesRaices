module.exports = {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')('./public/css/z.css'),
    require('autoprefixer'),
  ],
}

