<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-11 08:00:04
-->
<template>
  <div id="app">
    <VStudent name="李四" sex="女" :age="18" />
    <VSchool />
  </div>
</template>

<script>
import VStudent from './components/Student'
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
    VStudent,
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

