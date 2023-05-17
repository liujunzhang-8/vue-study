<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-16 18:11:49
-->
<template>
  <div id="app">
    <div class="container">
      <VCategory title="美食">
        <img
          slot="center"
          src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
          alt=""
        />
        <a slot="footer" href="https://www.baidu.com">更多美食</a>
      </VCategory>
      <VCategory title="游戏">
        <ul slot="center">
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="https://www.baidu.com">单机游戏</a>
          <a href="https://www.baidu.com">网络游戏</a>
        </div>
      </VCategory>
      <VCategory title="电影">
        <video
          slot="center"
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        ></video>
        <template v-slot:footer>
          <div class="foot">
            <a href="https://www.baidu.com">经典</a>
            <a href="https://www.baidu.com">热门</a>
            <a href="https://www.baidu.com">推荐</a>
          </div>
          <h4>欢迎前来观影</h4>
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
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: [
        "《教父》",
        "《拆弹专家》",
        "《你好，李焕英》",
        "《当幸福来敲门》",
      ],
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

