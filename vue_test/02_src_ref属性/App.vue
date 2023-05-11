<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 16:31:14
-->
<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点击输出上方的DOM元素</button>
    <VSchool />
  </div>
</template>

<script>
import VSchool from './components/School'
export default {
  name: "App",
  data() {
    return {
      msg: '欢迎学习Vuejs'
    };
  },
  // 注册组件
  components: {
    VSchool
  },
  methods: {
    showDOM() {
      console.log(this.$refs);
    }
  }
};
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

