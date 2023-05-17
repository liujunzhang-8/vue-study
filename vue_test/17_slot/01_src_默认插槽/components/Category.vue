<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-16 17:14:48
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-16 17:44:04
-->
<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>默认值</slot>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{item}}</li>
    </ul> -->
    <!-- <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
  </div>
</template>

<script>
export default {
  name: 'VCategory',
  props: ['title'],
  data () {
    return {

    }
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {

  },
}

</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>