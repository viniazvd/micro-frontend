const routes = [
  {
    path: '/service2/home',
    name: 'Service2Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/service2/about',
    name: 'Service2About',
    component: () => import('../views/About.vue')
  }
]

export default routes