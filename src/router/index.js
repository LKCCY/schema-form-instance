import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/basic',
    component: () => import('@/views/basic/basic-validate.vue')
  },
  {
    path: '/number-validate',
    component: () => import('@/views/basic/basic-number-validate.vue')
  },
  {
    path: '/basic-add',
    component: () => import('@/views/basic/basic-add-item.vue')
  },
  {
    path: '/layout-gutter',
    component: () => import('@/views/layout/layout-gutter.vue')
  },
  {
    path: '/layout-offset',
    component: () => import('@/views/layout/layout-offset.vue')
  },
  {
    path: '/layout-flexible',
    component: () => import('@/views/layout/layout-flexible.vue')
  },
  {
    path: '/custom-user',
    component: () => import('@/views/custom/user-set.vue')
  },
  {
    path: '*',
    redirect: '/basic'
  }
]
const router = new Router({ routes })
export default router