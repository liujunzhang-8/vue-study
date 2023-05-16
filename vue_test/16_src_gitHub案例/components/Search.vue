<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-15 10:57:43
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-15 12:02:09
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="keyWord">&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'VSearch',
  data () {
    return {
      keyWord: ''
    }
  },

  methods: {
    searchUsers() {
      // 请求前更新list数据
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          // 请求成功后
          console.log('请求成功', response.data.items);
          this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
        },
        error => {
          // 请求失败后
          console.log('请求失败', error.message);
          this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})
        }
      )
    }
  },
}

</script>
