<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 11:22:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 20:15:21
-->
<template>
  <div id="app">
    <VCount />
    <hr />
    <VPerson />
  </div>
</template>

<script>
import VCount from "./components/Count";
import VPerson from "./components/Person"
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  // 注册组件
  components: {
    VCount,
    VPerson
},
};
</script>

<style>

</style>

