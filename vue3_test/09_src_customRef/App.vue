<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-19 16:23:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 11:04:49
-->
<template>
  <div>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
  </div>
</template>

<script>
import { customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    // 自定义ref —— myRef 实现防抖效果
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('从myRef中读取数据', value);
            track() // 通知Vue追踪value的变化(提前和get商量一下，让它认为是有用的)
            return value
          },
          set(val) {
            console.log('从myRef中读取数据', val);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = val
              trigger() // 通知Vue去重新解析模板
            }, delay)
          }
        }
      })
    }

    // let keyWord = ref('hello') // 使用vue内置的ref
    let keyWord = myRef('hello', 500) // shying自定义的myRef

    return {
      keyWord
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
