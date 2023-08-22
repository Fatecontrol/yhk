import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
      },
      {
        path: 'cate',
        name: 'cate',
        component: () => import(/* webpackChunkName: "about" */ '../views/cate.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
