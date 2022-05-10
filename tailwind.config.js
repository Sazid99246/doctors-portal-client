module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          "primary": "rgba(15, 207, 236, 1)",
          "secondary": "rgba(25, 211, 174, 1)",
          "accent": "rgba(58, 66, 86, 1)"
        },
      },
    ],

  }
}
