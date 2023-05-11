<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-11 08:41:05
-->
<template>
  <div class="student">
    <h2 class="title">{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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