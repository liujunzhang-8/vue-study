<template>
  <div id="app">
   <h2>当前n的值是： {{ n }}</h2>
   <button @click="n++">点击+1</button>
   <!-- 使用v-show做条件渲染 -->
   <!-- <h2 v-show="false">欢迎来到{{ name }}</h2>
   <h2 v-show="1 === 1">欢迎来到{{ name }}</h2> -->

   <!-- 使用v-if做条件渲染 -->
   <!-- <h2 v-if="false">欢迎来到{{ name }}</h2>
   <h2 v-if="1 === 1">欢迎来到{{ name }}</h2> -->

   <!-- v-else和v-else-if -->
   <h2 v-if="n === 1">Angular</h2>
   <h2 v-else-if="n === 2">React</h2>
   <h2 v-else-if="n === 3">Vue</h2>
   <h2 v-else>啥也不是</h2>
  </div>
</template>

<script>
/**
 * 条件渲染：
 *  1. v-if
 *    写法：
 *      (1). v-if="表达式"
 *      (2). v-else-if="表达式"
 *      (3). v-else="表达式"
 *    适用于：切换频率较低的场景
 *    特点：不展示的DOM元素直接被移除。
 *    ⚠️注意：v-if可以和v-else-if、v-else一起使用，但要求结构不能被 "打断"。
 *  2. v-show
 *    写法：v-show="表达式"
 *    适用于：切换频率较高的场景。
 *    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
 *  3.备注：
 *    使用v-if时，元素可能无法获取到，而使用v-show一定可以获取到
 */
export default {
  name: 'App',
  data() {
    return {
      n: 0,
      name: 'VueJs'
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
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
