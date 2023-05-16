<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-15 11:25:17
-->
<template>
  <div id="app">
    <div class="container">
      <VSearch />
      <VList />
    </div>
  </div>
</template>

<script>
import VSearch from './components/Search'
import VList from './components/List'
export default {
  name: "App",
  data() {
    return {
      users: [], // https://api.github.com/search/users?q=xxx
    };
  },
  // 注册组件
  components: {
    VSearch,
    VList
  },
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

.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

