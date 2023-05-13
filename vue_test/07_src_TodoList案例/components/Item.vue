<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 09:24:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-12 00:07:29
-->
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done"  @change="handleCheck(todo.id)" />
      <!-- 如下代码也能实现功能 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "VItem",
  props: ['todo', 'checkTodo', 'deleteTodo'],
  data() {
    return {};
  },
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id) {
      if(confirm('确定删除吗？')) {
        this.deleteTodo(id)
      }
    }
  },
};
</script>
<style lang='less' scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  border-radius: 5px;
}

li:before {
  content: initial
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>