// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Antonio R - Code + Music",
  siteDescription: "I'm a front-end engineer based in London, building things for the web.",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "",
      },
    },
  ],
  icon: {
    favicon: "./src/assets/icons/favicon.png",
    touchicon: "./src/aseets/icons/apple-touch-icon.png",
  },
}
