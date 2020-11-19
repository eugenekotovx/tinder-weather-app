import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/liked',
    name: 'Liked',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "liked" */ '../views/Liked.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
