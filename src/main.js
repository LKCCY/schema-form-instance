import Vue from "vue"
import App from "./App.vue"
import router from './router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SchemaForm from '@vueblocks/element-schema-form'
import CustomNumber from '@/components/custom-badge.vue'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(SchemaForm)
Vue.component('CustomNumber', CustomNumber)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
