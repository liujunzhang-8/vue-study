<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 22:40:44
-->
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前点击时鼠标的坐标为：x: {{ point.x }}, y: {{ point.y }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'VDemo',
  setup() {
    // 数据
    let sum = ref(0)

    let point = usePoint()

    return {
      sum,
      point
    }

    // 返回一个函数(渲染函数)
  },

  // beforeCreate() {
  //   console.log('---beforeCreate---');
  // },
  // created() {
  //   console.log('---created---');
  // },
  // beforeMount() {
  //   console.log('---beforeMount---');
  // },
  // mounted() {
  //   console.log('---mounted---');
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdate---');
  // },
  // updated() {
  //   console.log('---updated---');
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---');
  // },
  // unmounted(){
  //   console.log('---unmounted---');
  // }

}
</script>