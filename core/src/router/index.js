import Vue from 'vue'
import VueRouter from 'vue-router'

import serviceRoutes from 'service/routes'

import Home from '../views/Home.vue'
import Service from '../views/Service.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeCore',
    component: Home
  },
  {
    path: '/service',
    name: 'ServiceCore',
    component: Service
  },
  ...serviceRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
