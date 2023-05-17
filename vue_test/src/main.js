import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入store
import store from './store'

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  }
}).$mount('#app')
