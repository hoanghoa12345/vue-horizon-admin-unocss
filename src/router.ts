import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('~/layouts/default.vue'),
      children: [
        {
          path: '/',
          component: () => import('~/pages/index.vue'),
          name: 'home',
        },
      ],
    },
    {
      path: '/login',
      component: () => import('~/layouts/auth.vue'),
      children: [
        {
          path: '',
          component: () => import('~/pages/login.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('~/pages/404.vue'),
    },
  ],
  history: createWebHistory(),
})

export default router
