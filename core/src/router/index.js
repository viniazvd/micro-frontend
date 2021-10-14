import Vue from 'vue'
import VueRouter from 'vue-router'

import service1Routes from 'service1/routes'
import service2Routes from 'service2/routes'

import AppService2 from 'service2/App'
import AppService1 from 'service1/App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/service1',
    name: 'ServiceCore',
    component: AppService1,
    children: service1Routes
  },
  {
    path: '/service2',
    name: 'ServiceCore',
    component: AppService2,
    children: service2Routes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
