<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-15 09:30:47
-->
<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo" />
        <List :todos="todos" />
        <Footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Header from './components/Header.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  // 注册组件
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    // 勾选 or 取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo
    deleteTodo(_,id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done
      }) 
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => {
        return !todo.done
      })
    },
    // 更新todo
    updateTodo(id, title) {
      this.todos.forEach(todo => {
        if(todo.id === id) todo.title = title
      })
    },
  },
  watch: {
    todos(value) {
      localStorage.setItem('todos', JSON.stringify(value))
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pubId)
  }
};
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
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

