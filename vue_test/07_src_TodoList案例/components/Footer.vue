<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-11 09:24:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-12 00:48:05
-->
<template>
  <div class='todo-footer' v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'VFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  data () {
    return {

    }
  },

  created () {

  },

  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      set(value) {
        this.checkAllTodo(value)
      }
    }
  },

  mounted () {},

  methods: {
    checkAll(e) {
      console.log(e.target.checked);
    },
    clearAll() {
      this.clearAllTodo()
    }
  },
}

</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  /* margin-right: 20px; */
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
  border-radius: 5px;
}
</style>