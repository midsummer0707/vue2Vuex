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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "Test" */ '../views/Test')
  },
  {
    path: '/test-other',
    name: 'TestOther',
    component: () => import(/* webpackChunkName: "TestOther" */ '../views/Test/mapVuex.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/*webpackChunkName: 'Game'*/ '../views/Test/games.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
