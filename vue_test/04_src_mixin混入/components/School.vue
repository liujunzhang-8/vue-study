<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-11 08:00:38
-->
<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {hunhe} from '../mixin'
export default {
  name: "VSchool",
  data() {
    return {
      name: '中国移动',
      address: '上海'
    }
  },
  mixins: [hunhe]
}
</script>

<style>
.school {
  background-color: gray;
}

</style>