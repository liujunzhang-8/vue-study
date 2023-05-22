<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 12:19:06
-->
<template>
  <div>
    <h3>App根组件</h3>
    <Suspense>
      <template v-slot:default>
        <VChild />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import VChild from './components/Child.vue' // 静态引入
import { defineAsyncComponent } from 'vue';
const VChild = defineAsyncComponent(() => import('./components/Child')) // 异步引入
export default {
  name: 'App',
  components: {VChild},
  setup() {

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
