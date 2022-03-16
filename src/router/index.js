// 引入Vue Router
import { createRouter, createWebHistory } from "vue-router"

// 引入vuex
import store from "../store"

// 引入路由组件
import Home from "../views/home"
import Blog from "../views/blog"

const routes = [
  { // 重定向
    path: "/",
    redirect: "/home"
  },
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "blog",
    path: "/blog",
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局路由守卫
router.beforeEach((to) => {
  store.commit("changeRouter", to.name)
  return true
})

export default router
