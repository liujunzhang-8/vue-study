<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 19:25:38
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-17 22:14:20
-->
<template>
  <div>
    <h2>这是About组件的内容</h2>
  </div>
</template>

<script>
export default {
  name: 'VAbout',
  data () {
    return {
    }
  },

  created () {

  },

  computed: {
  },

  mounted () {
    console.log('About组件挂载完毕了', this);
  },

  methods: {
  },
  beforeDestroy() {
    console.log('About组件即将被销毁了');
  }
}

</script>
<style lang='less' scoped>
</style>