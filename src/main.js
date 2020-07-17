// Import main css
import "@/assets/scss/main.scss"

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "@/layouts/Default.vue"
import metadata from "./metadata"

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  head.bodyAttrs = { class: "custom-body-class" }
  head.titleTemplate = head.titleTemplate.replace("-", "|")
  head.meta.push(...metadata)
}

console.log("%c 💅💅", "font-size: 4.5em; font-weight: bolder;")
console.log(
  "%c grab the code here: https://github.com/a133xz/a133xz",
  "color: blue; font-size: .8rem; font-weight: bolder;"
)
