<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-14 10:36:54
-->
<template>
  <div class="student">
    <h2 class="title">{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
export default {
  name: "VStudent",
  data() {
    return {
      msg: '我是一个中国人',
      // myAge: this.age
      name: 'Gorgio_Liu',
      sex: '男',
      // age: 28
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>

<style scoped lang="less">
  .student {
    background-color: orange;
    .title {
      color: blue;
    }
  }
</style>