<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-11 07:59:17
-->
<template>
  <div class="school">
    <h2>{{ msg }}</h2>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
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
  mixins: [hunhe],
  methods: {
    // showName() {
    //   console.log(this.name);
    // }
  }
}
</script>

<style></style>