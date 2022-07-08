import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 		 // 引入样式"

import vueWaves from '@/components/waves'; // 组件所在路径
Vue.use(vueWaves); //全局使用

import global from '@/assets/js/common.js'
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

