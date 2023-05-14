<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 09:24:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-14 09:45:56
-->
<template>
  <div class="todo-header">
    <input v-model="title" type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'VHeader',
  props: ['addTodo'],
  data () {
    return {
      // 收集用户输入的title
      title: ''
    }
  },

  created () {

  },

  computed: {},

  mounted () {
  },

  methods: {
    add() {
      // 校验数据
      if(!this.title.trim()) return alert('输入不能为空！！！')
      // 将用户的输入包装成一个todo对象
      const todoObj = {id: nanoid(), title: this.title, done: false}
      // 通知App组件去添加一个todo对象
      // this.addTodo(todoObj)
      this.$emit('addTodo', todoObj)
      // 清空输入
      this.title = ''
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