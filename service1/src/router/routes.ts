const routes = [
  {
    path: '/service1/home',
    name: 'Service1Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/service1/about',
    name: 'Service1About',
    component: () => import('../views/About.vue')
  }
]

export default routes