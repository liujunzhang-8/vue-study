<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 22:07:42
-->
<template>
  <div>
    <VDemo v-if="isShowDemo" />
    <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import VDemo from './components/Demo'
export default {
  name: 'App',
  components: {VDemo},
  setup() {
    let isShowDemo = ref(true)

    return {
      isShowDemo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
