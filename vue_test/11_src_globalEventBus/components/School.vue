<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-10 16:05:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-14 10:39:51
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "VSchool",
  props: ['getSchoolName'],
  data() {
    return {
      name: '中国移动',
      address: '上海'
    }
  },
  mounted() {
    console.log('school', this.$bus);
    this.$bus.$on('hello', data => {
      console.log('我是school组件，收到了数据', data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
}

</style>