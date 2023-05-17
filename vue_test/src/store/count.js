/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 20:32:12
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 20:33:53
 */
// 求和功能相关的配置
export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0, // 当前的和
    school: 'home',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}
