import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/main/HomePage.vue'),
      children: [
        { path: '', component: () => import('@/views/main/ButtonPage.vue') },
        { path: '/about', component: () => import('@/views/main/AboutPage.vue') },
        { path: '/sign-up', component: () => import('@/views/form/SignUpPage.vue')},
        { path: '/login', component: () => import('@/views/form/LoginPage.vue')}
      ]
    },
  ]
})

export default router
