const routes = [
  {
    path: '/onboarding/home',
    name: 'OnBoardingHome',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/onboarding/about',
    name: 'OnBoardingAbout',
    component: () => import('../views/About.vue')
  }
]

export default routes