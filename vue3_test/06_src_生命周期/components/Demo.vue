<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 22:22:00
-->
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'VDemo',
  setup() {
    // 数据
    let sum = ref(0)

    onBeforeMount(() => {
      console.log('----onBeforeMount----');
    })

    onMounted(() => {
      console.log('----onMounted----');
    })

    onBeforeUpdate(() => {
      console.log('----onBeforeUpdate----');
    })

    onUpdated(() => {
      console.log('----onUpdated----');
    })
    onBeforeUnmount(() => {
      console.log('----onBeforeUnmount----');
    })

    onUnmounted(() => {
      console.log('----onUnmounted----');
    })


    return {
      sum,
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