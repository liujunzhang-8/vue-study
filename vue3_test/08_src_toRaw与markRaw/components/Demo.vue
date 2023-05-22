<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 20:05:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 10:32:40
-->
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <h2 v-show="person.car">座驾信息：{{ person.car }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button v-show="person.car" @click="person.car.name='宝马'">换车</button>
    <button v-show="person.car" @click="person.car.price++">换价格</button>
    <hr />

  </div>
</template>

<script>
import { markRaw, reactive, ref, toRaw, toRefs } from 'vue'
export default {
  name: 'VDemo',
  setup() {
    // 数据
    let sum = ref(0)

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    function showRawPerson () {
      const p = toRaw(person)
      console.log(p);
    }

    function addCar() {
      let car  = {name: '奔驰', price: '40W'}
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      addCar,
      showRawPerson,
      ...toRefs(person)
    }

    // 返回一个函数(渲染函数)
  },

}
</script>