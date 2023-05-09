<template>
  <div id="app">
    <h2>当前的n值是：<span v-text="n"></span></h2>
    <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
    <button @click="n++">点击+1</button>
    <hr />
    <input type="text" v-fbind:value="n">
  </div>
</template>

<script>
// import Vue from 'vue';
/**
 * Vue模板语法有2大类：
 *  1. 插值语法：
 *    功能：用于解析标签体内容。
 *    写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。
 *  2. 指令语法：
 *    功能：用于解析标签 (包括：标签属性、标签体内容、绑定事件......)。
 *    举例：v-bind:href="xxx" 或 简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性。
 *    备注：Vue中有很多的指令，且形式都是：v-？？？，此处我们只是拿v-bind举个例子。
 * 
 * 自定义指令总结：
 *  一、定义语法：
 *    1. 局部指令：
 *      (1).new Vue({
 *            directives: {指令名: 配置对象}
 *          })
 *      (2). new Vue({
 *            directives: {指令名: 回调函数}
 *          })
 * 
 *    2. 全局指令：
 *      Vue.directive(指令名, 配置对象) 或 Vue.directive(指令名, 回调函数)
 *  
 *  二、配置对象中常用的3个回调：
 *    1. bind：指令与元素成功绑定时调用。
 *    2. inserted：指令所在元素被插入页面时调用。
 *    3. update：指令所在模板被重新解析时调用。
 *    
 *  三、备注：
 *    1. 指令定义时不加v-，但使用时要加v-；
 *    2. 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。
 */
export default {
  name: "App",
  data() {
    return {
      // name: 'Goigio_Liu',
      n: 1,
    };
  },
  directives: {
    big(element, binding) {
      // big函数何时会被调用？1. 指令与元素成功绑定时(一上来)。2. 指令所在的模板被重新解析时
      // console.log(this);
      element.innerText = binding.value * 10
    },
    // fbind(element, binding) {
    //   element.value = binding.value
    //   element.focus()
    // }
    fbind: {
      // 指令与元素成功绑定时(一上来)
      bind(element, binding) {
        // console.log('bind');
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element, binding) {
        console.log('inserted', binding);
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update(element, binding) {
        // console.log('update');
        element.value = binding.value
      }
    }
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
