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
    path: '*',
    redirect: '/basic'
  }
]
const router = new Router({ routes })
export default router