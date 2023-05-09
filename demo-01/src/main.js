/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-03 22:19:51
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-09 15:55:18
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 阻止vue在启动时生成成产提示
new Vue({
  render: h => h(App),
}).$mount('#app')
