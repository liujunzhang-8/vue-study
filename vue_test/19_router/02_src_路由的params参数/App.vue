<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 22:09:29
-->
<template>
  <div id="app">
    <div class="row">
      <VBanner />
    </div>
    <div class="row">
      <div class="col-2">
        <div class="list-group">
          <!-- 原始html中使用a标签实现页面的跳转 -->
          <!-- <a href="" class="list-group-item active">About</a>
          <a href="" class="list-group-item">Home</a> -->

            <!-- router-link实现路由的切换 -->
          <router-link to="/about" active-class="active" class="list-group-item">About</router-link>
          <router-link to="/home" active-class="active" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
            <!-- <VHome />
            <VAbout /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VBanner from "./components/banner"
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  // 注册组件
  components: {
    VBanner
},
};
</script>

<style>

</style>

