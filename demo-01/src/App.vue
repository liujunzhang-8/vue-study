<template>
  <div id="app">
    <!-- 绑定class样式 -- 字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="basic" :class="mood">{{ name }}</div>

    <!-- 绑定class样式 -- 数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
    <div class="basic" :class="classArr">{{ name }}</div>

    <!-- 绑定class样式 -- 对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
    <div class="basic" :class="classArr">{{ name }}</div>
  </div>
</template>

<script>
/**
 * 绑定样式：
 *  1. class样式
 *    写法：class=“xxx”，xxx可以是字符串，对象，数组。
 *    对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
 *    数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
 *  2. style样式
 *    :style="{fontSize: xxx}" 其中xxx是动态值
 *    :style="[a, b]" 其中a、b是样式对象
 */
export default {
  name: 'App',
  data() {
    return {
      name: 'zhang-san',
      mood: 'normal',
      classArr: ['class1', 'class2', 'class3'],
      classObj: {
        class1: false,
        class2: false
      }
    }
  },
  computed: {
  },
  watch: {
    firstName(val) {
      setTimeout(() => {
        this.fullName = val + '-' + this.lastName
      }, 1000);
    },
    lastName(val) {
      this.fullName = this.firstName + '-' + val
    }
  },
  methods: {
    changeWeather() {
      this.isHot = !this.isHot
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
