<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-17 22:29:44
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-18 18:04:36
-->
<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VNews",
  data () {
    return {
      opacity: 1
    }
  },

  created () {

  },

  computed: {},

  // mounted () {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01
  //     if(this.opacity <= 0) this.opacity = 1
  //   }, 16)
  // },

  methods: {

  },
  // beforeDestroy() {
  //   console.log('News组件被销毁了');
  //   clearInterval(this.timer)
  // }

  // 组件被激活
  activated() {
    console.log('news组件被激活');
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    }, 16)
  },

  // 组件失活
  deactivated() {
    clearInterval(this.timer)
    console.log('news组件死了');
  }
}

</script>
<style lang='less' scoped>
</style>