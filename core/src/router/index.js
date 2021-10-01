import Vue from 'vue'
import VueRouter from 'vue-router'

import service1Routes from 'service1/routes'
import service2Routes from 'service2/routes'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service1 from '../views/Service1.vue'
import Service2 from '../views/Service2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeCore',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutCore',
    component: About
  },
  {
    path: '/service1',
    name: 'ServiceCore',
    component: Service1,
    children: service1Routes
  },
  {
    path: '/service2',
    name: 'ServiceCore',
    component: Service2,
    children: service2Routes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
