<template>
  <div id="app">
    <h2>显示格式化后的时间</h2>
    <h3>现在是： {{ fmtTime }}</h3>
  </div>
</template>

<script>
// import Vue from 'vue';
/**
 * 过滤器：
 *  定义：对要显示的数据进行特定格式化后再显示 (适用于一些简单逻辑处理)
 *  语法：
 *    1. 注册过滤器：Vue.filter(name, callback) 或 new Vue(filters: {})
 *    2. 使用过滤器： {{ xxx | 过滤器名 }} 或 v-bind:属性 = “xxx | 过滤器名”
 *  备注：
 *    1. 过滤器也可以接收额外参数、多个过滤器也可以串联
 *    2. 并没有改变原本的数据，是产生新的对应的数据
 */
export default {
  name: "App",
  data() {
    return {
      fmtTime: new Date()
    };
  },
  computed: {},
  watch: {},
  methods: {
    // addSex() {
    //   // Vue.set(this.student, 'sex', '男'),
    //   this.$set(this.student, 'sex', '男')
    // }
    demo() {
      console.log(this.userInfo);
    },
  },
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
