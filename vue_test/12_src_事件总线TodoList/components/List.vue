<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 09:24:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-14 10:55:29
-->
<template>
  <ul class='todo-main'>
    <Item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import Item from './Item'
export default {
  name: 'VList',
  props: ['todos'],
  data () {
    return {
      
    }
  },
  components: {
    Item,
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {

  },
}

</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>