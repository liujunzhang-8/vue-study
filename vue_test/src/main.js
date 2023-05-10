/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 11:35:52
 */
/**
 * 该文件是整个项目的入口文件
 */

// 引入Vue
import Vue from 'vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 -- vm
new Vue({
  render: h => h(App),
}).$mount('#app')
