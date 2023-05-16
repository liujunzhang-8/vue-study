<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-16 17:43:59
-->
<template>
  <div id="app">
    <div class="container">
      <VCategory title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      </VCategory>
      <VCategory title="游戏">
        <ul>
          <li v-for="(g, index) in games" :key="index">{{g}}</li>
        </ul>
      </VCategory>
      <VCategory title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </VCategory>
    </div>
  </div>
</template>

<script>
import VCategory from './components/Category'
export default {
  name: "App",
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》','《拆弹专家》','《你好，李焕英》','《当幸福来敲门》',]
    };
  },
  // 注册组件
  components: {
    VCategory
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
</style>

