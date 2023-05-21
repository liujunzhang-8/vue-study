<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-21 21:24:45
-->
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前信息为：{{ msg }}</h2>
    <button @click="msg += '! '">修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'VDemo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18
    })

    // 监视
    // 情况一：监视ref所定义的一个响应式数据
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum变了', newVal, oldVal);
    // }, {immediate: true})
    
    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum, msg], (newVal, oldVal) => {
    //   console.log('sum或者msg变了', newVal, oldVal);
    // },  {immediate: true})

    // 情况三：监视reactive所定义的响应式数据
    // 注意：1、此处无法正确的获取oldVal；2、强制开启了深度监视（deep配置无效）
    // watch(person,(newVal, oldVal) => {
    //   console.log('person变化了',newVal, oldVal);
    // })

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(() => person.age, (newVal, oldVal) => {
    //   console.log('person的age变化了', newVal, oldVal);
    // })

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => person.age, () => person.name], (newVal, oldVal) => {
      console.log('person的age变化了', newVal, oldVal);
    })

    return {
      sum,
      msg,
      person
    }

    // 返回一个函数(渲染函数)
  }
}
</script>