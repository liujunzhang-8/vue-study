<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-16 17:14:48
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 22:50:08
-->
<template>
  <div>
    <h2>这是Home组件的内容</h2>
    <div>
      <div class="nav nav-justified">
        <router-link to="/home/news" active-class="active" class="nav-item">News</router-link>
        <router-link to="/home/message" active-class="active" class="nav-item">Message</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHome",
  data() {
    return {
      
    }
  },
  computed: {
  },
  mounted() {
    console.log('Home组件挂载完毕了', this);
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁了');
  }
};
</script>

<style>
</style>
