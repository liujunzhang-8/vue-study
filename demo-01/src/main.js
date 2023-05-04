/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-03 22:19:51
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-04 12:16:19
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 阻止vue在启动时生成成产提示
console.log(new Vue({}));
new Vue({
  render: h => h(App),
}).$mount('#app')
