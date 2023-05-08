<template>
  <div id="app">
    姓：<input type="text" v-model='firstName'><br /><br />
    名：<input type="text" v-model='lastName'><br /><br />
    姓名：<span>{{ fullName }}</span>
  </div>
</template>

<script>
/**
 * computed 和 watch 之间的区别：
 *  1. computed 能完成的功能，watch 都可以完成。
 *  2. watch 能完成的功能，computed 不一定能完成，例如：watch可以进行异步操作。
 * 两个重要的小原则：
 *  1. 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
 *  2. 所有不被Vue管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），
 *     最好写成箭头函数，这样this的指向才是vm 或 组件实例对象
 */
export default {
  name: 'App',
  data() {
    return {
      firstName: 'zhang',
      lastName: 'san',
      fullName: 'zhang-san'
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
