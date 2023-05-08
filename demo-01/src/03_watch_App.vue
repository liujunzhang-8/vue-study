<template>
  <div id="app">
    <h1>今天天气很{{ info}}</h1>
    <button @click="changeWeather">切换天气</button>
    <hr />
    <h3>a的值时：{{ numbers.a }}</h3>
    <button @click="numbers.a++">点击让a+1</button>
    <h3>b的值时：{{ numbers.b }}</h3>
    <button @click="numbers.b++">点击让a+1</button>
  </div>
</template>

<script>
/**
 * 监视属性watch：
 *  1. 当被监视的属性变化时，回调函数自动调用，进行相关操作
 *  2. 监视的属性必须存在，才能进行监视！！
 *  3. 监视的两种写法：
 *    (1). new Vue时传入watch配置
 *    (2). 通过vm.$watch监视
 * 
 * 深度监视：
 *  1. Vue中的watch默认不监测对象内部值的改变（一层）
 *  2. 配置 deep: true 可以监测对象内部值改变（多层）
 *  备注：
 *    (1). Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
 *    (2). 使用watch时根据数据的具体结构，决定是否采用深度监视。
 */
export default {
  name: 'App',
  data() {
    return {
      isHot: true,
      numbers: {
        a: 1,
        b: 2
      }
    }
  },
  computed: {
    info() {
      return this.isHot ? '炎热' : '凉爽'
    }
  },
  watch: {
    // 完整写法
    // isHot: {
    //   // immediate: true,  // 初始化时让handler调用一下
    //   // deep: true, 深度监视
    //   // handler什么时候调用？当isHot发生改变时
    //   handler(newvalue, oldValue) {
    //     console.log(newvalue, oldValue, 'isHot被修改了');
    //   }
    // },
    // 简写： 
    isHot(newvalue, oldValue) {
      console.log(newvalue, oldValue, 'isHot被修改了');
    }
    // 监视多级结构中某个属性的变化
    // 'numbers.a': {
    //   handler() {
    //     console.log('a被改变了');
    //   }
    // }
    // 监视多级结构中所有属性的变化
    // numbers: {
    //   deep: true,
    //   handler() {
    //     console.log('number改变了');
    //   }
    // }
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
