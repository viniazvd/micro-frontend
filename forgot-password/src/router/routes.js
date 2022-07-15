const routes = [
  {
    path: '/forgot-password/home',
    name: 'ForgotPasswordHome',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/forgot-password/about',
    name: 'ForgotPasswordAbout',
    component: () => import('../views/About.vue')
  }
]

export default routes

