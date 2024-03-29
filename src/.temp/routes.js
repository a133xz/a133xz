const c1 = () => import(/* webpackChunkName: "page--src--pages--portfolio-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/pages/Portfolio.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--frontend-and-technology-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/pages/FrontendAndTechnology.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--md-page-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/templates/MdPage.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/antonio/Documents/Local/GIT/a133xz/src/pages/Index.vue")

export default [
  {
    path: "/portfolio/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/frontend-and-technology/",
    component: c2,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/about/",
    component: c3,
    meta: {
      locale: "en"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c4,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/:fileInfo__name/",
    component: c5,
    meta: {
      locale: "en"
    }
  },
  {
    name: "home",
    path: "/",
    component: c6,
    meta: {
      locale: "en"
    }
  },
  {
    name: "*",
    path: "*",
    component: c4,
    meta: {
      locale: "en"
    }
  }
]
