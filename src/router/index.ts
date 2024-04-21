import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/movies/:release_date',
      name: 'test',
      component: () => import('../components/NextMovieRelease.vue')
    }
  ]
})

export default router
