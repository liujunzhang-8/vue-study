<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 09:24:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-12 21:31:50
-->
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'VHeader',
  props: ['addTodo'],
  data () {
    return {
    }
  },

  created () {

  },

  computed: {},

  mounted () {
  },

  methods: {
    add(e) {
      // 校验数据
      if(!e.target.value) return alert('输入不能为空！！！')
      // 将用户的输入包装成一个todo对象
      const todoObj = {id: nanoid(), title: e.target.value, done: false}
      this.addTodo(todoObj)
      // 清空输入
      e.target.value = ''
    }
  },
}

</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0px 8px rgba(82, 168, 236, 0.6);
}
</style>