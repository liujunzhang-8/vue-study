<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 11:41:38
-->
<template>
  <div id="app">
    <singleSchool />
    <hr />
    <singleStudent />
  </div>
</template>

<script>
import singleSchool from './components/School'
import singleStudent from './components/Student'

export default {
  name: "App",
  data() {
    return {
    };
  },
  // 注册组件
  components: {
    singleSchool,
    singleStudent
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

