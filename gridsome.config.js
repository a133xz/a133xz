// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Antonio R - Code + Music",
  siteDescription: "Front-end engineer based in London, building things for the web.",
  icon: {
    favicon: "./src/assets/icons/favicon.png",
    touchicon: "./src/assets/icons/apple-touch-icon.png"
  },
  siteUrl: process.env.NOW_URL || "https://antonio-r.now.sh",
  meta: {
    image: "./src/assets/icons/meta.png"
  }
}
