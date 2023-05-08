<template>
  <div id="app">
   <ul>
    <li v-for="p in persons" :key="p.id">{{p.name}}-{{p.age}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      persons: [
        {id: '001', name: '张三', age: 18},
        {id: '002', name: '李四', age: 20},
        {id: '003', name: '王五', age: 21},
      ]
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
