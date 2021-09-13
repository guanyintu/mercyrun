import {createRouter,  createWebHistory} from 'vue-router'

import {nextTick} from "vue";
import Home from "../views/Home";
import notFound from "../views/notFound";


export const loadingBarApiRef = {}
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/404",
    name: "notFound",
    component: notFound
  }, {
    path: "/:pathMatch(.*)*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]



export default function createDemoRouter (app, routes) {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  router.beforeEach(function (to, from, next) {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.start()
      }
    }
    next()
  })

  router.afterEach(function (to, from) {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.finish()
      }
      if (to.hash && to.hash !== from.hash) {
        nextTick(() => {
          const el = document.querySelector(to.hash)
          if (el) el.scrollIntoView()
        })
      }
    }
  })

  return router

}

