<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-10 17:26:58
-->
<template>
  <div class="school">
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "VStudent",
  // props: ['name', 'sex', 'age'],
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 99
    },
    sex: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      msg: '我是一个中国人',
      myAge: this.age
      // sex: '男',
      // age: 28
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>

<style>
.school {
  background-color: gray;
}

</style>