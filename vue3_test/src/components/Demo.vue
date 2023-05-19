<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-19 20:11:50
-->
<template>
  <div>
    <h1>个人信息</h1>
    <h2 v-show="person.name">姓名: {{ person.name }}</h2>
    <h2 v-show="person.sex">性别: {{ person.sex }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>工作种类：{{ person.job.type }}</h2>
    <h2>工作薪水：{{ person.job.salary }}</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <button @click="sayHello">说话</button>
    <button @click="addSex">添加性别属性</button>
    <button @click="deleteName">删除姓名属性</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'VDemo',
  props: ['msg'],
  setup(props, context) {
    console.log(props, context);
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

    function addSex() {
      person.sex = '男'
    }

    function deleteName() {
      delete person.name
    }

    return {
      person,
      sayHello,
      addSex,
      deleteName
    }

    // 返回一个函数(渲染函数)
  }
}
</script>