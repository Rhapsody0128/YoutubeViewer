import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/player',
    name: 'Player',
    // route level code-splitting
    // this generates a separate chunk (player.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Player.vue'),
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
