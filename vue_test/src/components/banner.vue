<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 22:05:13
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 17:36:20
-->
<template>
  <div class='page-frame'>
    <div class="col-offset-2 col-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
          <button @click="back">后退</button>
          <button @click="forward">前进</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'VBanner',
  data () {
    return {

    }
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  },
}

</script>
<style lang='less' scoped>
</style>
