<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-13 22:15:34
-->
<template>
  <div class="student">
    <h2 class="title">{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑事件</button>
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
      this.$emit('china', this.name)
    },
    unbind() {
      this.$off('china')
      // this.$off(['china', 'demo']) // 解绑多个自定义事件
      // this.$off() // 解绑所有的自定义事件
      console.log('解绑成功！'); // 解绑一个定义事件
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