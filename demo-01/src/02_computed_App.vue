<template>
  <div id="app">
    姓：<input type="text" v-model='firstName'><br /><br />
    名：<input type="text" v-model='lastName'><br /><br />
    姓名：<span>{{ fullName }}</span>
  </div>
</template>

<script>
/**
 * 计算属性：
 *  1. 定义：要用的属性不存在，要通过已有的属性计算得来。
 *  2. 原理：底层借助了Object.defineproperty方法提供的getter和setter。
 *  3. get函数什么时候执行？
 *    (1). 初次读取时会执行一次。
 *    (2). 当依赖的数据发生改变时会被再次调用。
 *  4. 优势：与methods实现相比，内部有缓存机制(复用)，效率更高，调试方便。
 *  5. 备注：
 *    1. 计算属性最终会出现在vm上，直接读取使用即可。
 *    2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
 */
export default {
  name: 'App',
  data() {
    return {
      firstName: 'zhang',
      lastName: 'san'
    }
  },
  computed: {
    // 完整写法
    // fullName: {
    //   // get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
    //   // get什么时候调用？1. 初次读取fullName时；2. 所依赖的数据发生变化时
    //   get() {
    //     console.log('111');
    //     return this.firstName + '-' + this.lastName
    //   },
    //   // set什么时候调用？当fullName被修改时
    //   set(value) {
    //     console.log(value);
    //     const arr = value.split('-')
    //     this.firstName = arr[0]
    //     this.lastName = arr[1]
    //   }
    // }
    // 简写
    fullName() {
      return this.firstName + '-' + this.lastName
    }
  }

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
