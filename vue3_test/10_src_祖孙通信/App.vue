<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 11:19:20
-->
<template>
  <div>
    <h3>App根组件，{{ name }} --- {{ price }}</h3>
    <VChild />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue'
import VChild from './components/Child.vue'
export default {
  name: 'App',
  components: {VChild},
  setup() {
    let car = reactive({name: '奔驰', price: '40W'})
    provide('car', car) // 给自己的后代组件传递数据
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(208, 34, 43);
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
}
</style>
