<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-16 17:14:48
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-16 18:30:32
-->
<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot :games="games">默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'VCategory',
  props: ['title'],
  data () {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    }
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