<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 17:07:30
-->
<template>
  <div id="app">
    <VStudent name="李四" sex="女" :age="18" />
  </div>
</template>

<script>
import VStudent from './components/Student'
export default {
  name: "App",
  data() {
    return {
      msg: '欢迎学习Vuejs'
    };
  },
  // 注册组件
  components: {
    VStudent
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

