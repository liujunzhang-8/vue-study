<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-18 15:57:18
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 16:32:18
-->
<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VDetail",
  data () {
    return {

    }
  },

  created () {

  },

  computed: {},

  mounted () {
    console.log(this.$route);
  },

  methods: {

  },
}

</script>
<style lang='less' scoped>
</style>