/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 16:55:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 18:21:00
 */
// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作
const actions = {
  // jia(context, value) {
  //   context.commit('JIA', value)
  // },
  // jian(context, value) {
  //   context.commit('JIAN', value)
  // },
  jiaOdd(context, value) {
    if(context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations —— 用于操作数据 (state)
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  }
}

// 准备state —— 用于存储数据
const state = {
  sum: 0, // 当前的和
  school: 'home',
  subject: '前端'
}

// 准备getters —— 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建store并导出store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
