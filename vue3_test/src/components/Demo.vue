<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 21:06:46
-->
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前信息为：{{ msg }}</h2>
    <button @click="msg = '你好啊!'">修改信息</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'VDemo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')

    // 监视
    // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newVal, oldVal) => {
      console.log('sum变了', newVal, oldVal);
    }, {immediate: true})
    
    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum, msg], (newVal, oldVal) => {
    //   console.log('sum或者msg变了', newVal, oldVal);
    // },  {immediate: true})


    return {
      sum,
      msg
    }

    // 返回一个函数(渲染函数)
  }
}
</script>