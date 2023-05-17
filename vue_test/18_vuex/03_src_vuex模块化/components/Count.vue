<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-16 17:14:48
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 20:14:56
-->
<template>
  <div class="count">
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前求和放大10倍为：{{ bigSum }}</h2>
    <h2 style="color: red">Person组件的总人数是：{{ personList.length }}</h2>
    <h2>我在{{ school }}，学习{{ subject }}</h2>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+运算</button>
    <button @click="decrement(n)">-运算</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "VCount",
  data() {
    return {
      n: 1, // 用户选择的数据
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),

    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters('countAbout', ['bigSum'])
  }, 
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mapMutations (对象写法)
    ...mapMutations('countAbout', {increment: 'JIA', decrement: 'JIAN'}),

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions (对象形式)
    ...mapActions('countAbout', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
  },
  mounted() {
    console.log(this.$store);
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
