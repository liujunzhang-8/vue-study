<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-19 18:27:31
-->
<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>工作种类：{{ person.job.type }}</h2>
    <h2>工作薪水：{{ person.job.salary }}</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <button @click="sayHello">说话</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k'
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function sayHello() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '60k'
      person.hobby[0] = '学习'
      alert(`我叫${person.name}, 现在${person.age}岁了，你好啊！`)
    }

    return {
      person,
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
