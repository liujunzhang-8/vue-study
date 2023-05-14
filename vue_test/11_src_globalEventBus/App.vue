<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-14 10:07:44
-->
<template>
  <div id="app">
    <VStudent ref="student" @click.native="show"/>
    <VSchool :getSchoolName="getSchoolName" />
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
    getSchoolName(name) {
      console.log('App收到了学校名', name);
    },
    getStudentName(name) {
      console.log('demo被调用了！', name);
    },
    show() {
      console.log('这里触发了');
    }
  },
  mounted() {
    this.$refs.student.$on('china', this.getStudentName)
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

