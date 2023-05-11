/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 15:04:48
 */
/**
 * 该文件是整个项目的入口文件
 */

// 引入Vue
/**
 * 关于不同版本的Vue：
 *  1. vue.js 与 vue.runtime.xxx.js 的区别：
 *    (1). vue.js 是完整版的Vue，包含：核心功能 + 模板解析器。
 *    (2). vue.runtime.xxx.js 是运行版的Vue，只包含：核心功能；没有模板解析器。
 *  2. 因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的
 *     createElement函数去指定具体内容。
 */
import Vue from 'vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 -- vm
new Vue({
  render: h => h(App),
}).$mount('#app')
