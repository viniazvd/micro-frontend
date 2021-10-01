const routes = [
  {
    path: '/service/home',
    name: 'ServiceHome',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/service/about',
    name: 'ServiceAbout',
    component: () => import('../views/About.vue')
  }
]

export default routes