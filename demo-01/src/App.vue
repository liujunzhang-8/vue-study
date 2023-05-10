<template>
  <div id="app">
    <school />
    <hr />
    <student />
  </div>
</template>

<script>
import Vue from 'vue';
/**
 * Vue 中使用组件的三大步骤：
 *  一、定义组件(创建组件)
 *  二、注册组件
 *  三、使用组件(写组件标签)
 * 
 * 一、如何定义一个组件？
 *  使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别：
 *  区别如下：
 *    1、el不要写，为什么？ ———— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
 *    2、data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
 *  备注：使用template可以配置组件结构。
 * 
 * 二、如何注册组件？
 *  1、局部注册：靠new Vue的时候传入components选项
 *  2、全局注册：靠Vue.component('组件名', 组件)
 * 
 * 三、编写组件标签：
 *  <school />
 */
// 第一步创建school组件
const school = Vue.extend({
  template: `
    <div>
      <h2>学校名称：{{ schoolName }}</h2>
      <h2>学校地址：{{ address }}</h2>
    </div>
  `,
  data() {
    return {
      schoolName: '你大爷',
      address: '上海宝山',
    }
  }
})

// 第二步创建student组件
const student = Vue.extend({
  template: `
    <div>
      <h2>学生名称：{{ studentName }}</h2>
      <h2>学生年龄：{{ age }}</h2>
    </div>
  `,
  data() {
    return {
      studentName: 'Grogio_Liu',
      age: 18
    };
  },
})
export default {
  name: "App",
  data() {
    return {
      // schoolName: '你大爷',
      // address: '上海宝山',
      // studentName: 'Grogio_Liu',
      // age: 18
    };
  },
  components: {
    school,
    student
  }
};
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
