const c1 = () => import(/* webpackChunkName: "page--src--pages--no-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/No.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--music-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/Music.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/Index.vue")

export default [
  {
    path: "/no/",
    component: c1
  },
  {
    path: "/music/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
