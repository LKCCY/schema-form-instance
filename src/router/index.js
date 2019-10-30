import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/basic',
    component: () => import('@/views/basic/basic-validate.vue')
  },
  {
    path: '*',
    redirect: '/basic'
  }
]
const router = new Router({ mode: 'history', routes })
export default router