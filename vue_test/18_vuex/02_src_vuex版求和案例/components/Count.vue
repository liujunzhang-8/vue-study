<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-16 17:14:48
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 19:19:22
-->
<template>
  <div class="count">
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({he:'sum', xuexiao: 'school', xueke: 'subject'}),

    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    // 靠程序员自己亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },


    // bigSum() {
    //   return this.$store.getters.bigSum
    // },

    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(['bigSum'])
  }, 
  methods: {
    // 程序员亲自写方法
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mapMutations (对象写法)
    ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),

    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mapMutations (数组写法)
    // ...mapMutations(['JIA', 'JIAN']),
    
    // 程序员亲自写方法
    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait', this.n)
    // },

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions (对象形式)
    ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})

    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions (数组形式)
    // ...mapActions(['jiaOdd', 'jiaWait'])
  },
  mounted() {
    // const x = mapState({he:'sum', xuexiao: 'school', xueke: 'subject'})
    // console.log(x);
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
