<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-16 18:37:20
-->
<template>
  <div id="app">
    <div class="container">
      <VCategory title="游戏">
        <template scope="data">
          <ul>
            <li v-for="(g, index) in data.games" :key="index">{{ g }}</li>
          </ul>
        </template>
      </VCategory>
      <VCategory title="游戏">
        <template scope="{games}">
          <ol>
            <li v-for="(g, index) in games" :key="index">{{ g }}</li>
          </ol>
        </template>
      </VCategory>
      <VCategory title="游戏">
        <template slot-scope="{games}">
          <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
        </template>
      </VCategory>
    </div>
  </div>
</template>

<script>
import VCategory from "./components/Category";
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  // 注册组件
  components: {
    VCategory,
},
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>

