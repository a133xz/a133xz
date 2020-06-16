export default [
  {
    path: "/no/",
    component: () => import(/* webpackChunkName: "page--src--pages--no-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/No.vue")
  },
  {
    path: "/music/",
    component: () => import(/* webpackChunkName: "page--src--pages--music-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/Music.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/antonio/Documents/Local/GitHub/a133xz/src/pages/404.vue")
  }
]

