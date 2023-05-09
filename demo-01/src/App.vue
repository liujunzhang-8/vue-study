<template>
  <div id="app">
    <h2 v-if="a">你好啊</h2>
    <h2 :style="{opacity}">欢迎学习Vuejs</h2>
  </div>
</template>

<script>
/**
 * 生命周期：
 *  1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。
 *  2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
 *  3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
 *  4. 生命周期函数中的this指向是vm或组件实例对象。
 * 
 * 常用的生命周期钩子：
 *  1. mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
 *  2. beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
 * 
 * 关于销毁Vue实例：
 *  1. 销毁后借助Vue开发者工具看不到任何信息。
 *  2. 销毁后自定义事件会失效，但原生DOM事件依然有效。
 *  3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。
 */
export default {
  name: "App",
  data() {
    return {
      a: false,
      opacity: 1,
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  // Vue完成模板的解析并把初始的真实DOM元素放入页面后(挂载完毕)调用mounted
  mounted() {
    console.log('mounted', this.$el);
    setInterval(() => {
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    }, 50) 
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
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
