<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-19 17:51:35
-->
<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>工作种类：{{ job.type }}</h2>
    <h2>工作薪水：{{ job.salary }}</h2>

    <button @click="sayHello">说话</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    // 方法
    function sayHello() {
      name.value = '李四'
      age.value = 48
      job.value.type = 'UI设计师'
      job.value.salary = '60k'
      alert(`我叫${name.value}, 现在${age.value}岁了，你好啊！`)
    }

    return {
      name,
      age,
      job,
      sayHello
    }

    // 返回一个函数(渲染函数)
  }
}
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
