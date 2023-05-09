<template>
  <div id="app">
    <h2>显示格式化后的时间</h2>
    <h3>现在是： {{ fmtTime }}</h3>
  </div>
</template>

<script>
// import Vue from 'vue';
/**
 * v-text指令：
 *  1. 作用：向其所在的节点中渲染文本内容
 *  2. 与插值语法的区别：v-text 会替换掉节点中的内容，{{xx}} 则不会。
 * 
 * v-html指令：
 *  1. 作用：向指定节点中渲染包含html结构的内容。
 *  2. 与插值语法的区别：
 *    (1). v-html 会替换掉节点中所有的内容，{{xxx}}不会。
 *    (2). v-html 可以识别html结构。
 *  3. ⚠️严重注意：v-html 有安全性问题！！！
 *    (1). 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
 *    (2). 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！！！
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
