<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 16:10:02
-->
<template>
  <div id="app">
    <VCount />
  </div>
</template>

<script>
import VCount from "./components/Count";
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  // 注册组件
  components: {
    VCount,
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

