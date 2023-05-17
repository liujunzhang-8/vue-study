/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 16:55:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 20:35:15
 */
// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

// 使用插件
Vue.use(Vuex)


// 创建store并导出store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
})
