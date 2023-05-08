<template>
  <div id="app">
    <h2>名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
    <hr />
    <h1>学生信息</h1>
    <button @click="addSex">添加一个性别属性，默认值为男</button>
    <h2>姓名：{{ student.name }}</h2>
    <h2 v-if="student.sex">性别：{{ student.sex }}</h2>
    <h2>年龄：真实{{ student.age.rAge }}，对外{{ student.age.sAge }}</h2>
    <ul>
      <li v-for="(f, index) in friends" :key="index">{{ f.name }} -- {{ f.age }}</li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue';
/**
 * Vue监视数据的原理：
 *  1. vue会监视data中所有层次的数据。
 * 
 *  2. 如何监测对象中的数据？
 *    通过setter实现监视，且要在new Vue时就传入要监测的数据。
 *      (1). 对象中后追加的属性，Vue默认不做响应式处理
 *      (2). 如需给后添加的属性做响应式，请使用如下API：
 *        Vue.set(target, propertyName/index, value) 或
 *        vm.$set(target, propertyName/index, value)
 * 
 *  3. 如何监测数组中的数据？
 *    通过包裹数组更新元素的方法实现，本质就是做了两件事：
 *      (1). 调用原生对应的方法对数组进行更新。
 *      (2). 重新理解模板，进而更新页面。
 * 
 *  4. 在Vue修改数组中的某个元素一定要用如下方法：
 *    (1). 使用这些API：push()、pop()、shift()、unshift()、splice()、sort()、reverse()
 *    (2). Vue.set() 或 vm.$set()
 * 
 *  ⚠️特别注意：Vue.set() 和 vm.$set() 不能给 vm 或 vm 的根数据对象添加属性！！！
 */
export default {
  name: 'App',
  data() {
    return {
      name: 'Gorgio',
      address: '上海',
      student: {
        name: 'tom',
        age: {
          rAge: 40,
          sAge: 29
        },
      },
      friends: [
          {name: 'jerry', age: 35},
          {name: 'tony', age: 36}
        ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    addSex() {
      // Vue.set(this.student, 'sex', '男'),
      this.$set(this.student, 'sex', '男')
    }
  },

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
