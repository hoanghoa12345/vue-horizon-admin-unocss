import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { install } from '@/module/nprogress'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/pages/index.vue'),
        name: 'home',
        meta: {
          name: 'Home',
          title: 'Dashboard',
        },
      },
      {
        path: '/users',
        component: () => import('@/pages/User/UserList.vue'),
        name: 'users.list',
        meta: {
          name: 'Users',
          title: 'Users Lists',
        },
      },

      {
        path: '/:path(.*)*',
        component: () => import('@/pages/404.vue'),
        name: 'not.found',
        meta: {
          name: '404',
          title: 'Not Found',
        },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/Login/Login.vue'),
        name: 'auth.login',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

install(router)

export default router
