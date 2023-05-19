<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-19 17:11:04
-->
<template>
  <div>
    <h1>个人信息</h1>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="sayHello">说话</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name}, 现在${age}岁了，你好啊！`)
    }

    return {
      name,
      age,
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
