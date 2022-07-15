import Vue from 'vue'
import VueRouter from 'vue-router'

import onboardingRoutes from 'onboarding/routes'
import forgotPasswordRoutes from 'forgotPassword/routes'

import AppforgotPassword from 'forgotPassword/App'
import AppOnboarding from 'onboarding/App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/onboarding',
    name: 'onboarding',
    component: AppOnboarding,
    children: onboardingRoutes
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: AppforgotPassword,
    children: forgotPasswordRoutes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
