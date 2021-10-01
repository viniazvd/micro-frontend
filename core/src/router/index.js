import Vue from 'vue'
import VueRouter from 'vue-router'

import serviceRoutes from 'service/routes'
console.log(serviceRoutes)

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'

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
    path: '/service',
    name: 'ServiceCore',
    component: Service,
    children: serviceRoutes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
