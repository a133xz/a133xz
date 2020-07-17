// Global info
import config from "../gridsome.config"
const metaImage = require("./assets/icons/" + config.meta.image)

const metadata = [
  {
    property: "og:type",
    content: "website"
  },
  {
    property: "og:url",
    content: config.siteUrl
  },
  {
    property: "og:title",
    content: config.metaTitle || config.siteName
  },
  {
    property: "og:description",
    content: config.siteDescription
  },
  {
    property: "og:image",
    content: metaImage
  },
  {
    property: "twitter:card",
    content: "summary_large_image"
  },
  {
    property: "twitter:url",
    content: config.siteUrl
  },
  {
    property: "twitter:title",
    content: config.meta.title || config.siteName
  },
  {
    property: "twitter:description",
    content: config.siteDescription
  },
  {
    property: "twitter:image",
    content: metaImage
  }
]

export default metadata
